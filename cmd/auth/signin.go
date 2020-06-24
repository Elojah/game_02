package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

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
	var request dto.Signin
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

	// #Check credentials
	ac, err := h.account.Login(ctx, request.Email, request.Password)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to login")
		http.Error(w, fmt.Sprintf("failed to login: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	raw, err := json.Marshal(dto.SigninResp{Token: ac.Token.String()})
	if err != nil {
		logger.Error().Err(err).Msg("failed to marshal response")
		http.Error(w, "failed to marshal response", http.StatusInternalServerError)

		return
	}

	if _, err := w.Write(raw); err != nil {
		logger.Error().Err(err).Msg("failed to write response")
		http.Error(w, "failed to write response", http.StatusInternalServerError)

		return
	}

	w.WriteHeader(http.StatusOK)
	logger.Info().Msg("success")
}
