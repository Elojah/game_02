package main

import (
	"context"
	"errors"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/room/dto"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"
)

func (h handler) ConnectRoom(ctx context.Context, request *dto.ConnectRoom) (*room.R, error) {
	logger := log.With().Str("method", "connect_room").Logger()

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

	// #Fetch room
	ro, err := h.room.Fetch(ctx, room.Filter{ID: request.ID})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("room not found")

			return &room.R{}, status.New(codes.NotFound, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to fetch room")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Check room password if necessary
	if ro.Password != nil {
		if err := bcrypt.CompareHashAndPassword(ro.Password, []byte(request.Password)); err != nil {
			logger.Error().Err(err).Msg("invalid password")

			return &room.R{}, status.New(codes.Unauthenticated, err.Error()).Err()
		}
	}

	// #Associate account to this room
	ac.Room = &ro.ID
	if err := h.account.Upsert(ctx, ac); err != nil {
		logger.Error().Err(err).Msg("failed to update account")

		return &room.R{}, status.New(codes.Internal, err.Error()).Err()
	}

	return &ro, nil
}
