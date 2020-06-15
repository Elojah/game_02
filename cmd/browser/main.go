package main

import (
	"fmt"
	"os"

	"github.com/gopherjs/websocket"
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

	g := game{}
	if err := g.Dial(Config{}); err != nil {
		log.Error().Err(err).Msg("failed to start game")
	}
	log.Info().Msg("game up")

	conn, err := websocket.Dial("ws://localhost/player/connect") // Blocks until connection is established.
	if err != nil {
		log.Error().Err(err).Msg("failed to establish ws connection")
		return
	}

	_, err = conn.Write([]byte("Hello!"))
	if err != nil {
		log.Error().Err(err).Msg("failed to say hello")
	}

	buf := make([]byte, 1024)
	var n int
	n, err = conn.Read(buf) // Blocks until a WebSocket frame is received.
	if err != nil {
		log.Error().Err(err).Msg("failed to read")
	}
	fmt.Println(string(buf[:n]))

	err = conn.Close()
	if err != nil {
		log.Error().Err(err).Msg("failed to close")
	}
}

func main() {
	args := os.Args
	run(args[0])
}
