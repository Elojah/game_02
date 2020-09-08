package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/gogo/protobuf/types"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error) {
	return &types.Empty{}, nil
}

func (h handler) subscribe(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		// continue
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	ctx := r.Context()
	logger := log.With().Str("route", r.URL.EscapedPath()).Str("method", r.Method).Str("address", r.RemoteAddr).Logger()

	// #Request processing
	var request dto.Subscribe
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		logger.Error().Err(err).Msg("invalid payload")
		http.Error(w, fmt.Sprintf("invalid payload: %v", err), http.StatusBadRequest)

		return
	}

	if err := request.Check(); err != nil {
		logger.Error().Err(err).Msg("invalid payload")
		http.Error(w, fmt.Sprintf("invalid payload: %v", err), http.StatusBadRequest)

		return
	}

	// #Check if account already exist with email
	if _, err := h.account.Fetch(ctx, account.Filter{Email: request.Email}); err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			// no account found, no error, continue
		} else {
			// server error fetching account
			logger.Error().Err(err).Msg("failed to check email duplicate")
			http.Error(w, fmt.Sprintf("failed to check email duplicate: %v", err), http.StatusInternalServerError)
			return
		}
	} else {
		// duplicate email account found
		logger.Error().Err(err).Msg("email already registered")
		http.Error(w, "email already registered", http.StatusBadRequest)
		return
	}

	// #Encrypt password
	hash, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.MinCost)
	if err != nil {
		logger.Error().Err(err).Msg("failed to hash password")
		http.Error(w, fmt.Sprintf("failed to hash password: %v", err), http.StatusInternalServerError)

		return
	}

	// #Create account
	if err := h.account.Upsert(ctx, account.A{
		ID:       gulid.NewID(),
		Alias:    request.Alias,
		Email:    request.Email,
		Password: hash,
	}); err != nil {
		logger.Error().Err(err).Msg("failed to create account")
		http.Error(w, fmt.Sprintf("failed to create account: %v", err), http.StatusBadRequest)

		return
	}

	// #Write response
	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
