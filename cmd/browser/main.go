package main

import (
	"os"

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
}

func main() {
	args := os.Args
	run(args[0])
}
