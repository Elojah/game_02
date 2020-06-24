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

func (h handler) unsubscribe(w http.ResponseWriter, r *http.Request) {
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
	var request dto.Unsubscribe
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

	// #Fetch account
	ac, err := h.account.Fetch(ctx, account.Filter{Email: request.Email})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("account not found")
			http.Error(w, "account not found", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to fetch account")
		http.Error(w, fmt.Sprintf("failed to fetch account: %v", err), http.StatusInternalServerError)

		return
	}

	// #Check password
	if err := bcrypt.CompareHashAndPassword(ac.Password, []byte(request.Password)); err != nil {
		logger.Error().Err(err).Msg("invalid credentials")
		http.Error(w, "invalid credentials", http.StatusBadRequest)

		return
	}

	// #Create account
	if err := h.account.Delete(ctx, account.Filter{Email: request.Email}); err != nil {
		logger.Error().Err(err).Msg("failed to delete account")
		http.Error(w, fmt.Sprintf("failed to delete account: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
