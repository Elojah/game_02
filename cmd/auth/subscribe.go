package main

import (
	"context"
	"errors"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
	"github.com/gogo/protobuf/types"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
)

func (h handler) Subscribe(ctx context.Context, request *dto.Subscribe) (*types.Empty, error) {

	logger := log.With().Str("method", "subscribe").Logger()

	// #Request processing
	if request == nil {
		return &types.Empty{}, gerrors.ErrNullRequest{}
	}

	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid request")

		return &types.Empty{}, err
	}

	// #Check if account already exist with email
	if _, err := h.account.FetchEmail(ctx, account.FilterEmail{Email: request.Email}); err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			// no account found, no error, continue
		} else {
			// server error fetching account
			logger.Error().Err(err).Msg("failed to check email duplicate")

			return &types.Empty{}, err
		}
	} else {
		// duplicate email account found
		logger.Error().Err(err).Msg("email already registered")

		return &types.Empty{}, err
	}
	logger = logger.With().Str("email", request.Email).Logger()

	// #Encrypt password
	hash, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.MinCost)
	if err != nil {
		logger.Error().Err(err).Msg("failed to hash password")

		return &types.Empty{}, err
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

		return &types.Empty{}, err
	}

	if err := h.account.UpsertEmail(ctx, a); err != nil {
		logger.Error().Err(err).Msg("failed to associate email to account")

		return &types.Empty{}, err
	}

	// #Write response
	logger.Info().Msg("success")

	return &types.Empty{}, nil
}
