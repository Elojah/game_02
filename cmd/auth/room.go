package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/room/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

func (h handler) connectRoom(w http.ResponseWriter, r *http.Request) {
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
	var request dto.ConnectRoomReq
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
	ac, err := h.account.Authorize(ctx, request.Email, request.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to authenticate")
		http.Error(w, fmt.Sprintf("failed to authenticate: %v", err), http.StatusInternalServerError)

		return
	}

	// #Fetch room
	ro, err := h.room.Fetch(ctx, room.Filter{ID: gulid.MustParse(request.ID)})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			logger.Error().Err(err).Msg("room not found")
			http.Error(w, "room not found", http.StatusNotFound)

			return
		}

		logger.Error().Err(err).Msg("failed to fetch room")
		http.Error(w, fmt.Sprintf("failed to fetch room: %v", err), http.StatusInternalServerError)

		return
	}

	// #Check room password if necessary
	if ro.Password != nil {
		if err := bcrypt.CompareHashAndPassword(ro.Password, []byte(request.Password)); err != nil {
			logger.Error().Err(err).Msg("invalid password")
			http.Error(w, "invalid password", http.StatusBadRequest)

			return
		}
	}

	// #Associate account to this room
	ac.Room = &ro.ID
	if err := h.account.Upsert(ctx, ac); err != nil {
		logger.Error().Err(err).Msg("failed to update account")
		http.Error(w, fmt.Sprintf("failed to update account: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	raw, err := json.Marshal(dto.RoomResp{Room: ro})
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

func (h handler) createRoom(w http.ResponseWriter, r *http.Request) {
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
	var request dto.CreateRoomReq
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
	ac, err := h.account.Authorize(ctx, request.Email, request.Token)
	if err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")
			http.Error(w, "invalid credentials", http.StatusBadRequest)

			return
		}

		logger.Error().Err(err).Msg("failed to authenticate")
		http.Error(w, fmt.Sprintf("failed to authenticate: %v", err), http.StatusInternalServerError)

		return
	}

	// #Encrypt password if necessary
	var password []byte

	if request.Password != "" {
		var err error
		password, err = bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.MinCost)

		if err != nil {
			logger.Error().Err(err).Msg("failed to hash password")
			http.Error(w, fmt.Sprintf("failed to hash password: %v", err), http.StatusInternalServerError)

			return
		}
	}

	// #Create room
	ro := room.R{
		ID:       gulid.NewID(),
		Name:     request.Name,
		Password: password,
		Owner:    ac.ID,
	}
	if err := h.room.Upsert(ctx, ro); err != nil {
		logger.Error().Err(err).Msg("failed to create room")
		http.Error(w, fmt.Sprintf("failed to create room: %v", err), http.StatusInternalServerError)

		return
	}

	// #Write response
	raw, err := json.Marshal(dto.RoomResp{Room: ro})
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
