package main

import (
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"
	"nhooyr.io/websocket"
)

func (h handler) connectPlayer(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	c, err := websocket.Accept(w, r, &websocket.AcceptOptions{
		// remove this line, for test only
		OriginPatterns: []string{"localhost:*"},
	})
	if err != nil {
		logger.Error().Err(err).Msg("failed to accept websocket")
		http.Error(w, fmt.Sprintf("failed to accept websocket: %v", err), http.StatusInternalServerError)

		return
	}
	defer c.Close(websocket.StatusInternalError, "failed to close websocket")

	for {
		var buf []byte
		_, buf, err = c.Read(ctx)

		if err != nil {
			logger.Error().Err(err).Msg("failed to accept websocket")
			http.Error(w, fmt.Sprintf("failed to accept websocket: %v", err), http.StatusInternalServerError)

			return
		}

		log.Info().Msg(fmt.Sprintf("received: %v", string(buf)))
	}
}
