package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"

	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
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

	// #Check credentials
	ac, err := h.account.Login(ctx, request.Email, request.Password)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)
			return
		}
		logger.Error().Err(err).Msg("failed to login")
		http.Error(w, fmt.Sprintf("failed to login: %v", err), http.StatusBadRequest)
		return
	}

	// #Generate token
	ac.Token = gulid.NewID()

	// #Update account with token
	if err := h.account.Upsert(ctx, ac); err != nil {
		logger.Error().Err(err).Msg("failed to update account")
		http.Error(w, fmt.Sprintf("failed to update account: %v", err), http.StatusBadRequest)
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
