package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
	"github.com/elojah/game_02/pkg/space/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) getSector(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		// continue
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	// #Request processing
	var request dto.GetSector
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

	sectorID := gulid.MustParse(request.ID)

	// #Fetch template
	s, err := h.space.FetchSector(ctx, space.FilterSector{ID: sectorID})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("invalid space sector")
			http.Error(w, "invalid space sector", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to fetch space sector")
		http.Error(w, fmt.Sprintf("failed to fetch space sector: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	raw, err := json.Marshal(s)
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
