package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) createTileSet(w http.ResponseWriter, r *http.Request) {
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
	var request dto.CreateTileSet
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

	if _, err := h.account.Authorize(ctx, request.Email, request.Token); err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to authenticate")
		http.Error(w, fmt.Sprintf("failed to authenticate: %v", err), http.StatusInternalServerError)

		return
	}

	ts := request.TileSet
	ts.ID = gulid.MustParse(request.ID)

	// #Upsert tileset
	if err := h.space.UpsertTileSet(ctx, ts); err != nil {
		logger.Error().Err(err).Msg("failed to upsert space tileset")
		http.Error(w, fmt.Sprintf("failed to upsert space tileset: %v", err), http.StatusInternalServerError)

		return
	}

	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
