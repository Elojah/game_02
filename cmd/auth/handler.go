package main

import (
	"context"
	"net/http"

	"github.com/elojah/game_02/pkg/account"
	"github.com/rs/zerolog/log"
)

type handler struct {
	srv *http.Server

	account account.App
}

// Dial starts the auth server.
func (h *handler) Dial(c Config) error {
	mux := http.NewServeMux()

	mux.HandleFunc("/subscribe", h.subscribe)
	// mux.HandleFunc("/unsubscribe", h.unsubscribe)

	mux.HandleFunc("/signin", h.signin)
	mux.HandleFunc("/signout", h.signout)

	// mux.HandleFunc("/room", h.room)
	// mux.HandleFunc("/play", h.play)

	// mux.HandleFunc("/pc/create", h.createPC)
	// mux.HandleFunc("/pc/list", h.listPC)
	// mux.HandleFunc("/pc/del", h.delPC)
	// mux.HandleFunc("/pc/connect", h.connectPC)
	// mux.HandleFunc("/pc/disconnect", h.disconnectPC)

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
