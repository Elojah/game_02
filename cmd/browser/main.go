package main

import (
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/cmd/browser/game"
	"github.com/elojah/game_02/cmd/browser/ws"
)

var (
	version string
)

// run services.
func run(prog string) {
	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()

	// Init websocket
	socket := &ws.Socket{}
	if err := socket.Dial(ws.Config{
		URL: "https://localhost:8080/player/connect",
	}); err != nil {
		log.Error().Err(err).Msg("failed to start websocket")
		return
	}

	// Init game
	g := &game.Game{}
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

	if err := g.Run(); err != nil {
		log.Error().Err(err).Msg("failed to run game")

		return
	}
}

func main() {
	args := os.Args
	run(args[0])
}
