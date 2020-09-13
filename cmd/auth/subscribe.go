package main

import (
	"context"
	"errors"

	"github.com/gogo/protobuf/types"
	"github.com/gogo/status"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) Subscribe(ctx context.Context, request *dto.Subscribe) (*types.Empty, error) {

	logger := log.With().Str("method", "subscribe").Logger()

	// #Request processing
	if request == nil {
		return &types.Empty{}, status.New(codes.InvalidArgument, gerrors.ErrNullRequest{}.Error()).Err()
	}

	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid request")

		return &types.Empty{}, status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check if account already exist with email
	if _, err := h.account.FetchEmail(ctx, account.FilterEmail{Email: request.Email}); err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			// no account found, no error, continue
		} else {
			// server error fetching account
			logger.Error().Err(err).Msg("failed to check email duplicate")

			return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
		}
	} else {
		// duplicate email account found
		err := gerrors.ErrDuplicateEmail{Email: request.Email}
		logger.Error().Err(err).Msg("email already registered")

		return &types.Empty{}, status.New(codes.AlreadyExists, err.Error()).Err()
	}
	logger = logger.With().Str("email", request.Email).Logger()

	// #Encrypt password
	hash, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.MinCost)
	if err != nil {
		logger.Error().Err(err).Msg("failed to hash password")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Create account
	a := account.A{
		ID:       gulid.NewID(),
		Alias:    request.Alias,
		Email:    request.Email,
		Password: hash,
	}

	if err := h.account.Upsert(ctx, a); err != nil {
		logger.Error().Err(err).Msg("failed to create account")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	if err := h.account.UpsertEmail(ctx, a); err != nil {
		logger.Error().Err(err).Msg("failed to associate email to account")

		return &types.Empty{}, status.New(codes.Internal, err.Error()).Err()
	}

	// #Write response
	logger.Info().Msg("success")

	return &types.Empty{}, nil
}
