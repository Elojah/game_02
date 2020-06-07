package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/pkg/entity"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/player/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) createPlayer(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		// continue
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	// #Request processing
	var request dto.CreatePlayerReq
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
	_ = ac

	// #Create player
	p := player.P{
		E: entity.E{
			ID: gulid.NewID(),
		},
	}
	if err := h.player.Upsert(ctx, p); err != nil {
		logger.Error().Err(err).Msg("failed to create player")
		http.Error(w, fmt.Sprintf("failed to create player: %v", err), http.StatusInternalServerError)
		return
	}

	// #Write response
	raw, err := json.Marshal(nil)
	if err != nil {
		logger.Error().Err(err).Msg("failed to marshal response")
		http.Error(w, "failed to marshal response", http.StatusInternalServerError)
		return
	}
	if _, err := w.Write(raw); err != nil {
		logger.Error().Err(err).Msg("failed to write response")
		http.Error(w, "failed to write response", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
