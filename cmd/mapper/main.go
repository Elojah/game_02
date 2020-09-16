package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/grpcweb"
	"github.com/elojah/redis"
	"github.com/elojah/services"

	mappergrpc "github.com/elojah/game_02/cmd/mapper/grpc"
	accountapp "github.com/elojah/game_02/pkg/account/app"
	accountredis "github.com/elojah/game_02/pkg/account/redis"
	entityapp "github.com/elojah/game_02/pkg/entity/app"
	entityredis "github.com/elojah/game_02/pkg/entity/redis"
	playerapp "github.com/elojah/game_02/pkg/player/app"
	playerredis "github.com/elojah/game_02/pkg/player/redis"
	spaceapp "github.com/elojah/game_02/pkg/space/app"
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

	// Stores and applicatives
	accountStore := accountredis.Store{Service: rd}
	accountApp := accountapp.A{Store: &accountStore}
	entityStore := entityredis.Store{Service: rd}
	entityApp := entityapp.A{Store: &entityStore, StoreTemplate: &entityStore}
	playerStore := playerredis.Store{Service: rd}
	playerApp := playerapp.A{Store: &playerStore, StoreSpawn: &playerStore}
	spaceStore := spaceredis.Store{Service: rd}
	spaceApp := spaceapp.A{
		StoreSector:  &spaceStore,
		StoreTileSet: &spaceStore,
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
		player:  &playerApp,
		space:   &spaceApp,
	}

	hl := h.NewLauncher(Namespaces{
		Mapper: "mapper",
	}, "mapper")
	launchers.Add(hl)

	gw.Register = func() {
		mappergrpc.RegisterMapperServer(gw.Server, h)
		h.Handler = gw.WrappedGrpcServer
	}

	if err := launchers.Up(filename); err != nil {
		log.Error().Err(err).Str("filename", filename).Msg("failed to start")
		return
	}

	log.Info().Msg("mapper up")

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
