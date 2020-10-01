package main

import (
	"context"
	"errors"

	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/lobby"
	gulid "github.com/elojah/game_02/pkg/ulid"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
)

func (h handler) CreateLobby(ctx context.Context, request *dto.Auth) (*lobby.L, error) {
	logger := log.With().Str("method", "create_lobby").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return &lobby.L{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	_, err := h.account.Authorize(ctx, request.ID, request.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return &lobby.L{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to authenticate")

		return &lobby.L{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Pre-assign room
	lo := lobby.L{
		ID:   gulid.NewID(),
		Name: "default",
	}

	// Create lobby
	if err := h.lobby.Upsert(ctx, lo); err != nil {
		logger.Error().Err(err).Msg("failed to create room")

		return &lobby.L{}, status.New(codes.Internal, err.Error()).Err()
	}

	logger.Info().Msg("success")

	return &lobby.L{}, nil
}
