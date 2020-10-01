package main

import (
	"context"
	"errors"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/lobby"
	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/room/dto"
	"github.com/elojah/game_02/pkg/space"
	gulid "github.com/elojah/game_02/pkg/ulid"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"
)

func (h handler) CreateRoom(ctx context.Context, request *dto.CreateRoom) (*room.R, error) {
	logger := log.With().Str("method", "create_room").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &room.R{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	ac, err := h.account.Authorize(ctx, request.Auth.ID, request.Auth.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &room.R{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to authenticate")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Check request
	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid payload")

		return &room.R{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Encrypt password if necessary
	var password []byte

	if request.Password != "" {
		var err error
		password, err = bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.MinCost)

		if err != nil {
			logger.Error().Err(err).Msg("failed to hash password")

			return &room.R{}, status.New(codes.Internal, err.Error()).Err()
		}
	}

	// #Pre-assign room
	ro := room.R{
		ID:       gulid.NewID(),
		Name:     request.Name,
		Password: password,
		Owner:    ac.ID,
	}

	// Create one big tilemap
	reqm := request.Map
	reqm.Dimensions = request.SectorDimensions
	tm := space.NewTileMap(reqm.Dimensions)
	platforms := tm.GeneratePlatforms(reqm.NPlatforms, reqm.PlatformSize, reqm.PlatformVariance)
	tm.GeneratePaths(platforms, reqm.NPaths, reqm.PathVariance, reqm.PathWidth, reqm.PathWidthVariance)

	// Create sectors from tilemap
	sectors := tm.SectorBreaks(request.SectorDimensions)
	if err := h.space.UpsertManySector(ctx, sectors); err != nil {
		logger.Error().Err(err).Msg("failed to create sectors")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	// Create world with sectors
	world := space.NewWorld(reqm.Dimensions, sectors)
	if err := h.space.UpsertWorld(ctx, world); err != nil {
		logger.Error().Err(err).Msg("failed to create world")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	// Associate world to room
	ro.WorldID = world.ID

	// Create room
	if err := h.room.Upsert(ctx, ro); err != nil {
		logger.Error().Err(err).Msg("failed to create room")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	// Add to lobby
	l, err := h.lobby.Fetch(ctx, lobby.Filter{ID: request.LobbyID})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("lobby not found")
			return &room.R{}, status.New(codes.NotFound, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to fetch lobby")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	l.Rooms[l.ID.String()] = ro

	if err := h.lobby.Upsert(ctx, l); err != nil {
		logger.Error().Err(err).Msg("failed to create room")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	logger.Info().Msg("success")

	return &ro, nil
}
