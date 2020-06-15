package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/rs/zerolog/log"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) connectPlayer(w http.ResponseWriter, r *http.Request) {

	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	// #Request processing
	var request dto.ConnectPlayerReq
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		logger.Error().Err(err).Msg("invalid payload")
		http.Error(w, fmt.Sprintf("invalid payload: %v", err), http.StatusBadRequest)
		return
	}
	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid payload")
		http.Error(w, fmt.Sprintf("invalid payload: %v", err), http.StatusBadRequest)
		return
	}
	playerID := gulid.MustParse(request.PlayerID)

	// #Check credentials
	ac, err := h.account.Authorize(ctx, request.Email, request.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)
			return
		}
		logger.Error().Err(err).Msg("failed to authenticate")
		http.Error(w, fmt.Sprintf("failed to authenticate: %v", err), http.StatusInternalServerError)
		return
	}

	_, _ = playerID, ac

	var upgrader = websocket.Upgrader{} // use default options
	var conn *websocket.Conn
	conn, err = upgrader.Upgrade(w, r, nil)
	if err != nil {
		logger.Error().Err(err).Msg("failed to upgrade to websocket")
		http.Error(w, "failed to upgrade to websocket", http.StatusBadRequest)
		return
	}
	defer conn.Close()
	w.WriteHeader(http.StatusSwitchingProtocols)
	logger.Info().Msg("success")

	go func() {
		for {
			mt, message, err := conn.ReadMessage()
			if err != nil {
				logger.Error().Err(err).Msg("failed to read message")
				break
			}
			fmt.Println(string(message))

			err = conn.WriteMessage(mt, message)
			if err != nil {
				logger.Error().Err(err).Msg("failed to write message")
				break
			}
		}
	}()
}
