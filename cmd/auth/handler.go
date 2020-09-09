package main

import (
	"context"
	"net/http"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/entity"
	"github.com/elojah/game_02/pkg/lobby"
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/space"
	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
)

type handler struct {
	srv *http.Server
	mux *mux.Router

	account account.App
	lobby   lobby.App
	room    room.App
	entity  entity.App
	player  player.App
	space   space.App
}

// Dial starts the auth server.
func (h *handler) Dial(c Config) error {

	h.mux.HandleFunc("/", h.subscribe)
	// h.mux.HandleFunc("/unsubscribe", h.unsubscribe)

	// h.mux.HandleFunc("/signin", h.signin)
	// h.mux.HandleFunc("/signout", h.signout)

	// h.mux.HandleFunc("/lobby/all", h.lobbies)
	// h.mux.HandleFunc("/room/connect", h.connectRoom)
	// h.mux.HandleFunc("/room/create", h.createRoom)

	// h.mux.HandleFunc("/player/create", h.createPlayer)
	// h.mux.HandleFunc("/player/list", h.listPlayer)
	// h.mux.HandleFunc("/player/del", h.delPlayer)

	h.srv = &http.Server{
		Addr:    c.Address,
		Handler: h.mux,
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
