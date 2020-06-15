package main

import (
	"context"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/pkg/account"
)

type handler struct {
	srv *http.Server

	account account.App
}

// Dial starts the auth server.
func (h *handler) Dial(c Config) error {
	mux := mux.NewRouter()

	mux.HandleFunc("/player/connect", h.connectPlayer)
	// mux.HandleFunc("/player/disconnect", h.disconnectPC)

	mux.PathPrefix("/").Handler(http.FileServer(http.Dir(c.StaticDir)))

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
