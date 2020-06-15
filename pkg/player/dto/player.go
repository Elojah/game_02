package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// CreatePlayerReq request for /player/create route.
type CreatePlayerReq struct {
	dto.AuthReq

	TemplateID string
	Name       string
}

// Check returns if subscription request is valid.
func (r CreatePlayerReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.TemplateID); err != nil {
		return err
	}

	if len(r.Name) == 0 {
		return gerrors.ErrInvalidRequest{
			Key:   "name",
			Value: r.Name,
			Rules: []string{"must not be empty"},
		}
	}

	return nil
}

// ConnectPlayerReq request for /player/connect route.
type ConnectPlayerReq struct {
	dto.AuthReq

	PlayerID string
}

// Check returns if subscription request is valid.
func (r ConnectPlayerReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.PlayerID); err != nil {
		return err
	}

	return nil
}
