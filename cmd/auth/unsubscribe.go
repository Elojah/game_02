package main

import (
	"context"
	"errors"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/gogo/protobuf/types"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
)

func (h handler) Unsubscribe(ctx context.Context, request *dto.Auth) (*types.Empty, error) {
	logger := log.With().Str("method", "unsubscribe").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &types.Empty{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	if _, err := h.account.Authorize(ctx, request.ID, request.Token); err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &types.Empty{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}
		logger.Error().Err(err).Msg("failed to authenticate")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Delete player and all data account associated...

	// #Delete account
	if err := h.account.Delete(ctx, account.Filter{ID: request.ID}); err != nil {
		logger.Error().Err(err).Msg("failed to delete account")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Write response
	logger.Info().Msg("success")

	return &types.Empty{}, nil
}
