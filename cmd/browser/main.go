package main

import (
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/cmd/browser/game"
	"github.com/elojah/game_02/cmd/browser/ws"
	"github.com/elojah/services"
)

var (
	version string
)

// run services.
func run(prog string) {
	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()

	filename := "browser_config.json"

	launchers := services.Launchers{}

	socket := &ws.Socket{}
	socketl := socket.NewLauncher(ws.Namespaces{
		Websocket: "websocket",
	}, "websocket")
	launchers.Add(socketl)

	g := &game.Game{}
	gl := g.NewLauncher(game.Namespaces{
		Game: "game",
	}, "game")
	launchers.Add(gl)

	if err := launchers.Up(filename); err != nil {
		log.Error().Err(err).Str("filename", filename).Msg("failed to start")
		return
	}

	log.Info().Msg("browser up")

	if err := g.Run(); err != nil {
		log.Error().Err(err).Msg("failed to run game")
	}
}

func main() {
	args := os.Args
	run(args[0])
}
