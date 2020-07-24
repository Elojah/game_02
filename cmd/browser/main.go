package main

import (
	"context"
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/cmd/browser/game"
	"github.com/elojah/game_02/cmd/browser/http"
	"github.com/elojah/game_02/cmd/browser/ws"
	"github.com/elojah/game_02/pkg/geometry"
	"github.com/elojah/game_02/pkg/space/dto"
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
	socket := &ws.Socket{}
	if err := socket.Dial(ws.Config{
		URL: "https://localhost:8080/player/connect",
	}); err != nil {
		log.Error().Err(err).Msg("failed to start websocket")
		return
	}

	// Init http client
	client := http.Client{}
	if err := client.Dial(http.Config{
		MapperURL: "https://localhost:8082/sector/random",
	}); err != nil {
		log.Error().Err(err).Msg("failed to start http client")
		return
	}

	// TMP
	// At this point we should retrieve current entity sector
	// Instead we create a new one here to test creation
	a, err := client.PostSectorRandom(ctx, dto.PostSectorRandom{
		Dimensions: geometry.Vec3{
			X: 25,
			Y: 18,
		},
		NPlatforms:        3,
		PlatformSize:      4,
		PlatformVariance:  2,
		NPaths:            1,
		PathVariance:      2,
		PathWidth:         2,
		PathWidthVariance: 2,
	})
	if err != nil {
		log.Error().Err(err).Msg("failed to create new area")
		return
	}
	// !TMP

	// Init game
	g := &game.Game{
		Area: a,
	}
	if err := g.Dial(game.Config{}); err != nil {
		log.Error().Err(err).Msg("failed to start game")
		return
	}

	log.Info().Msg("browser up")

	defer func() {
		if err := socket.Close(); err != nil {
			log.Error().Err(err).Msg("failed to close socket")
		}

		if err := g.Close(); err != nil {
			log.Error().Err(err).Msg("failed to close game")
		}
	}()

	if err := socket.Login(ctx, "testPlayerID", "testToken"); err != nil {
		log.Error().Err(err).Msg("failed to run game")

		return
	}

	if err := g.Run(); err != nil {
		log.Error().Err(err).Msg("failed to run game")

		return
	}
}

func main() {
	args := os.Args
	run(args[0])
}
