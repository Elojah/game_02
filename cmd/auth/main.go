package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/buntdb"
	"github.com/elojah/grpcweb"
	"github.com/elojah/redis"
	"github.com/elojah/services"

	authgrpc "github.com/elojah/game_02/cmd/auth/grpc"
	accountapp "github.com/elojah/game_02/pkg/account/app"
	accountredis "github.com/elojah/game_02/pkg/account/redis"
	entityapp "github.com/elojah/game_02/pkg/entity/app"
	entityredis "github.com/elojah/game_02/pkg/entity/redis"
	lobbyapp "github.com/elojah/game_02/pkg/lobby/app"
	lobbyredis "github.com/elojah/game_02/pkg/lobby/redis"
	playerapp "github.com/elojah/game_02/pkg/player/app"
	playerredis "github.com/elojah/game_02/pkg/player/redis"
	roomapp "github.com/elojah/game_02/pkg/room/app"
	roomredis "github.com/elojah/game_02/pkg/room/redis"
	spaceapp "github.com/elojah/game_02/pkg/space/app"
	spacebuntdb "github.com/elojah/game_02/pkg/space/buntdb"
	spaceredis "github.com/elojah/game_02/pkg/space/redis"
)

var (
	version string
)

// run services.
func run(prog string, filename string) {
	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()

	launchers := services.Launchers{}

	// redis
	rd := &redis.Service{}
	rdl := rd.NewLauncher(redis.Namespaces{
		Redis: "redis",
	}, "redis")
	launchers.Add(rdl)

	// redis-lru
	rdlru := &redis.Service{}
	rdlrul := rdlru.NewLauncher(redis.Namespaces{
		Redis: "redis-lru",
	}, "redis-lru")
	launchers.Add(rdlrul)

	// buntdb
	buntlru := &buntdb.Service{}
	buntlrul := buntlru.NewLauncher(buntdb.Namespaces{
		Buntdb: "buntdb",
	}, "buntdb")
	launchers.Add(buntlrul)

	// Stores and applicatives
	accountStore := accountredis.Store{Service: rd}
	accountApp := accountapp.A{Store: &accountStore, StoreEmail: &accountStore}
	entityStore := entityredis.Store{Service: rd}
	entityApp := entityapp.A{Store: &entityStore, StoreTemplate: &entityStore}
	lobbyStore := lobbyredis.Store{Service: rd}
	lobbyApp := lobbyapp.A{Store: &lobbyStore}
	playerStore := playerredis.Store{Service: rd}
	playerApp := playerapp.A{Store: &playerStore, StoreSpawn: &playerStore}
	roomStore := roomredis.Store{Service: rd}
	roomApp := roomapp.A{Store: &roomStore}
	coordinateStore := spacebuntdb.Store{Service: buntlru}
	spaceStore := spaceredis.Store{Service: rd}
	spaceApp := spaceapp.A{
		StoreCoordinate: &coordinateStore,
		StoreSector:     &spaceStore,
		StoreTileSet:    &spaceStore,
		StoreWorld:      &spaceStore,
	}

	gw := grpcweb.Service{}
	gwl := gw.NewLauncher(grpcweb.Namespaces{
		GRPCWeb: "grpcweb",
	}, "grpcweb")
	launchers.Add(gwl)

	// handler (https server)
	h := &handler{
		account: &accountApp,
		entity:  &entityApp,
		lobby:   &lobbyApp,
		player:  &playerApp,
		room:    &roomApp,
		space:   &spaceApp,
	}

	hl := h.NewLauncher(Namespaces{
		Auth: "auth",
	}, "auth")
	launchers.Add(hl)

	gw.Register = func() {
		authgrpc.RegisterAuthServer(gw.Server, h)
		h.Handler = gw.WrappedGrpcServer
	}

	if err := launchers.Up(filename); err != nil {
		log.Error().Err(err).Str("filename", filename).Msg("failed to start")
		return
	}

	log.Info().Msg("auth up")

	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGHUP, syscall.SIGINT, syscall.SIGKILL)

	for sig := range c {
		switch sig {
		case syscall.SIGHUP:
			if err := launchers.Down(); err != nil {
				log.Error().Err(err).Msg("failed to stop services")
				continue
			}

			if err := launchers.Up(filename); err != nil {
				log.Error().Err(err).Str("filename", filename).Msg("failed to start services")
			}
		case syscall.SIGINT:
			if err := launchers.Down(); err != nil {
				log.Error().Err(err).Msg("failed to stop services")
				continue
			}

			return
		case syscall.SIGKILL:
			if err := launchers.Down(); err != nil {
				log.Error().Err(err).Msg("failed to stop services")
				continue
			}

			return
		}
	}
}

func main() {
	args := os.Args
	if len(args) != 2 { // nolint: gomnd
		fmt.Printf("Usage: ./%s configfile\n", args[0])
		return
	}

	run(args[0], args[1])
}
