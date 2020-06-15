package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/pkg/lobby/dto"
)

func (h handler) lobbies(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		// continue
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	// #Check credentials
	ls, err := h.lobby.FetchAll(ctx)
	if err != nil {
		logger.Error().Err(err).Msg("failed to fetch lobbies")
		http.Error(w, fmt.Sprintf("failed to fetch lobbies: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	raw, err := json.Marshal(dto.LobbyResp{Lobbies: ls})
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
