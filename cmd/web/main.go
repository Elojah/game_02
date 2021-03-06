package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"

	"github.com/elojah/services"
)

var (
	version string
)

// run services.
func run(prog string, filename string) {
	zerolog.TimeFieldFormat = ""
	log.Logger = zerolog.New(os.Stdout).With().Timestamp().Str("version", version).Str("exe", prog).Logger()

	launchers := services.Launchers{}

	// handler (https server)
	h := &handler{}
	hl := h.NewLauncher(Namespaces{
		Web: "web",
	}, "web")
	launchers.Add(hl)

	if err := launchers.Up(filename); err != nil {
		log.Error().Err(err).Str("filename", filename).Msg("failed to start")
		return
	}

	log.Info().Msg("web up")

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
