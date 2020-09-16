package main

import (
	"context"
	"errors"

	"github.com/gogo/protobuf/types"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space/dto"
)

func (h handler) CreateTileSet(ctx context.Context, request *dto.CreateSet) (*types.Empty, error) {
	logger := log.With().Str("method", "create_room").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &types.Empty{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	if _, err := h.account.Authorize(ctx, request.Auth.ID, request.Auth.Token); err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &types.Empty{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to authenticate")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Upsert tileset
	request.Set.ID = request.ID
	if err := h.space.UpsertTileSet(ctx, request.Set); err != nil {
		logger.Error().Err(err).Msg("failed to upsert space tileset")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	logger.Info().Msg("success")

	return &types.Empty{}, nil
}
