package main

import (
	"context"
	"errors"

	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"

	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

func (h handler) Signin(ctx context.Context, request *dto.Signin) (*dto.Auth, error) {
	logger := log.With().Str("method", "signin").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &dto.Auth{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	ac, err := h.account.Signin(ctx, request.Email, request.Password)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &dto.Auth{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to signin")

		return &dto.Auth{}, status.New(codes.Internal, err.Error()).Err()
	}

	logger.Info().Msg("success")

	return &dto.Auth{
		ID:    ac.ID,
		Token: *ac.Token,
	}, nil
}
