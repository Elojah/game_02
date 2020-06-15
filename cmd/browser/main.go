package main

import (
	"context"
	"os"
	"time"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"nhooyr.io/websocket"
)

var (
	version string
)

// run services.
func run(prog string) {

	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()

	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	c, _, err := websocket.Dial(ctx, "https://localhost:8080/player/connect", nil)
	if err != nil {
		log.Error().Err(err).Msg("failed to start websocket")
		return
	}
	defer c.Close(websocket.StatusInternalError, "failed to close websocket")
	log.Info().Msg("websocket connection established")

	err = c.Write(ctx, websocket.MessageText, []byte("hi"))
	if err != nil {
		log.Error().Err(err).Msg("failed to write message")
	}

	g := game{}
	if err := g.Dial(Config{}); err != nil {
		log.Error().Err(err).Msg("failed to start game")
		return
	}

	c.Close(websocket.StatusNormalClosure, "")
}

func main() {
	args := os.Args
	run(args[0])
}
