package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/pkg/entity"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/player/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) getSector(w http.ResponseWriter, r *http.Request) {
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
	var request dto.GetSectorReq
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

	sectorID := gulid.MustParse(request.SectorID)

	// #Fetch template
	t, err := h.entity.FetchTemplate(ctx, entity.FilterTemplate{ID: templateID})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("invalid entity template")
			http.Error(w, "invalid entity template", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to fetch entity template")
		http.Error(w, fmt.Sprintf("failed to fetch entity template: %v", err), http.StatusInternalServerError)

		return
	}

	// #Fetch spawn
	sp, err := h.player.FetchSpawn(ctx, player.FilterSpawn{ID: t.SpawnID})
	if err != nil {
		logger.Error().Err(err).Msg("failed to fetch player spawn")
		http.Error(w, fmt.Sprintf("failed to fetch player spawn: %v", err), http.StatusInternalServerError)

		return
	}

	// #Create new inventory
	inventoryID := gulid.NewID()

	if err := h.player.UpsertInventory(ctx, player.Inventory{
		ID: inventoryID,
	}); err != nil {
		logger.Error().Err(err).Msg("failed to create inventory")
		http.Error(w, fmt.Sprintf("failed to create inventory: %v", err), http.StatusInternalServerError)

		return
	}

	// #Create player
	p := player.P{
		E: entity.E{
			ID:         gulid.NewID(),
			TemplateID: templateID,
			Name:       request.Name,
			OwnerID:    ac.ID,

			Dead:  false,
			HP:    t.MaxHP,
			MaxHP: t.MaxHP,
			MP:    t.MaxMP,
			MaxMP: t.MaxMP,

			Direction: sp.Direction,
			Position:  sp.Position,
			Cast:      nil,
			AssetID:   t.AssetID,

			InventoryID: inventoryID,
			SpawnID:     sp.ID,

			TS:    uint64(time.Now().Unix()),
			State: gulid.NewID(),
		},
		Account: ac.ID,
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
