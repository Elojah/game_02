package main

import (
	"context"
	"net/http"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/entity"
	"github.com/elojah/game_02/pkg/player"
	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
)

type handler struct {
	srv *http.Server

	account account.App
	entity  entity.App
	player  player.App
}

// Dial starts the auth server.
func (h *handler) Dial(c Config) error {
	mux := mux.NewRouter()

	// mux.HandleFunc("/subscribe", h.subscribe)
	// mux.HandleFunc("/unsubscribe", h.unsubscribe)

	h.srv = &http.Server{
		Addr:    c.Address,
		Handler: mux,
	}

	go func() {
		if err := h.srv.ListenAndServeTLS(c.Cert, c.Key); err != nil {
			log.Error().Err(err).Msg("failed to start server")
		}
	}()

	return nil
}

// Close shutdowns the server listening.
func (h *handler) Close() error {
	return h.srv.Shutdown(context.Background())
}
