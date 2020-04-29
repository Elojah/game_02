package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"

	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

func (h handler) signin(w http.ResponseWriter, r *http.Request) {
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
	var request dto.SigninReq
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
	ac, err := h.account.Fetch(ctx, account.Filter{Email: request.Email})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("account not found")
			// [0] keep those http errors identical
			http.Error(w, "invalid credentials", http.StatusBadRequest)
			return
		}
		logger.Error().Err(err).Msg("failed to fetch account")
		http.Error(w, fmt.Sprintf("failed to fetch account: %v", err), http.StatusInternalServerError)
		return
	}

	// #Decrypt password
	if err := bcrypt.CompareHashAndPassword(ac.Password, []byte(request.Password)); err != nil {
		logger.Error().Err(err).Msg("invalid password")
		// [0] keep those http errors identical
		http.Error(w, "invalid credentials", http.StatusBadRequest)
		return
	}

	// #Write response
	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
