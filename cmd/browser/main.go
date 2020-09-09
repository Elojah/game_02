package main

import (
	"context"
	"os"

	"github.com/elojah/game_02/cmd/browser/menu"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

var (
	version string
)

// run services.
func run(prog string) {
	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()
	ctx := context.Background()

	// Init websocket
	// socket := &ws.Socket{}
	// if err := socket.Dial(ws.Config{
	// 	URL: "https://localhost:8080/player/connect",
	// }); err != nil {
	// 	log.Error().Err(err).Msg("failed to start websocket")
	// 	return
	// }

	// Init http client
	// client := http.Client{}
	// if err := client.Dial(http.Config{
	// 	CreateRoomURL: "https://localhost:8081/room",
	// }); err != nil {
	// 	log.Error().Err(err).Msg("failed to start http client")
	// 	return
	// }

	// TMP
	// At this point we should retrieve current entity sector
	// Instead we create a new one here to test creation
	// _, err := client.CreateRoom(ctx, dto.CreateRoom{
	// 	CreateTileMap: spacedto.CreateTileMap{
	// 		Dimensions: geometry.Vec3{
	// 			X: 25, // nolint: gomnd
	// 			Y: 18, // nolint: gomnd
	// 		},
	// 		NPlatforms:        3, // nolint: gomnd
	// 		PlatformSize:      4, // nolint: gomnd
	// 		PlatformVariance:  2, // nolint: gomnd
	// 		NPaths:            2, // nolint: gomnd
	// 		PathVariance:      2, // nolint: gomnd
	// 		PathWidth:         2, // nolint: gomnd
	// 		PathWidthVariance: 2, // nolint: gomnd
	// 	},
	// })
	// if err != nil {
	// 	log.Error().Err(err).Msg("failed to create new room")
	// 	return
	// }
	// !TMP

	// Init game

	// g := &game.Game{}
	// if err := g.Dial(game.Config{}); err != nil {
	// 	log.Error().Err(err).Msg("failed to start game")
	// 	return
	// }

	// conn, err := grpc.DialContext(
	// 	ctx,
	// 	"localhost:8042",
	// 	grpc.WithTransportCredentials(credentials.NewClientTLSFromCert(insecure.CertPool, "")),
	// )
	// if err != nil {
	// 	log.Error().Err(err).Msg("failed to init grpc conn")
	// 	return
	// }
	// client := authgrpc.NewAuthClient(conn)
	// _, err = client.Subscribe(ctx, &dto.Subscribe{})
	// if err != nil {
	// 	log.Error().Err(err).Msg("failed to subscribe")
	// 	return
	// }

	m := &menu.M{}
	_ = ctx

	if err := m.Dial(menu.Config{}); err != nil {
		log.Error().Err(err).Msg("failed to start game")
		return
	}

	log.Info().Msg("browser up")

	defer func() {
		// if err := socket.Close(); err != nil {
		// 	log.Error().Err(err).Msg("failed to close socket")
		// }
		// if err := g.Close(); err != nil {
		// 	log.Error().Err(err).Msg("failed to close game")
		// }
		if err := m.Close(); err != nil {
			log.Error().Err(err).Msg("failed to close game")
		}
	}()

	// if err := socket.Login(ctx, "testPlayerID", "testToken"); err != nil {
	// 	log.Error().Err(err).Msg("failed to run game")

	// 	return
	// }

	if err := m.Run(); err != nil {
		log.Error().Err(err).Msg("failed to run menu")

		return
	}
}

func main() {
	args := os.Args
	run(args[0])
}
