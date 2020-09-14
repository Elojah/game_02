package main

import (
	"errors"

	"github.com/elojah/game_02/cmd/auth/grpc"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
)

func (h handler) ListLobbies(request *dto.Auth, stream grpc.Auth_ListLobbiesServer) error {
	ctx := stream.Context()
	logger := log.With().Str("method", "list_lobbies").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	if _, err := h.account.Authorize(ctx, request.ID, request.Token); err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return status.New(codes.Unauthenticated, err.Error()).Err()
		}
		logger.Error().Err(err).Msg("failed to authenticate")

		return status.New(codes.Internal, err.Error()).Err()
	}

	// #Fetch lobbies
	ls, err := h.lobby.FetchAll(ctx)
	if err != nil {
		logger.Error().Err(err).Msg("failed to fetch lobbies")

		return status.New(codes.Internal, err.Error()).Err()
	}

	// #Send lobbies through stream
	for _, l := range ls {
		if err := stream.Send(&l); err != nil {
			return status.New(codes.Internal, err.Error()).Err()
		}
	}

	return nil
}
