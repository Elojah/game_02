package main

import (
	"context"
	"errors"
	"time"

	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"

	"github.com/elojah/game_02/pkg/entity"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/player/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) CreatePlayer(ctx context.Context, request *dto.CreatePlayer) (*player.P, error) {
	logger := log.With().Str("method", "create_player").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &player.P{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	ac, err := h.account.Authorize(ctx, request.Auth.ID, request.Auth.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &player.P{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to authenticate")

		return &player.P{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Check request
	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid payload")

		return &player.P{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Fetch template
	t, err := h.entity.FetchTemplate(ctx, entity.FilterTemplate{ID: request.TemplateID})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("invalid entity template")

			return &player.P{}, status.New(codes.InvalidArgument, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to fetch entity template")

		return &player.P{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Fetch spawn
	sp, err := h.player.FetchSpawn(ctx, player.FilterSpawn{ID: t.SpawnID})
	if err != nil {
		logger.Error().Err(err).Msg("failed to fetch player spawn")

		return &player.P{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Create new inventory
	inventoryID := gulid.NewID()

	if err := h.player.UpsertInventory(ctx, player.Inventory{
		ID: inventoryID,
	}); err != nil {
		logger.Error().Err(err).Msg("failed to create inventory")

		return &player.P{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Create player
	p := player.P{
		Entity: entity.E{
			ID:         gulid.NewID(),
			TemplateID: request.TemplateID,
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

		return &player.P{}, status.New(codes.Internal, err.Error()).Err()
	}

	logger.Info().Msg("success")

	return &p, nil
}
