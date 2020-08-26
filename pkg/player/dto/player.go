package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// CreatePlayer request for /player/create route.
type CreatePlayer struct {
	dto.Auth

	TemplateID string
	Name       string
}

// Check returns if subscription request is valid.
func (r CreatePlayer) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.TemplateID); err != nil {
		return err
	}

	if len(r.Name) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "name",
			Value: r.Name,
			Rules: []string{"must not be empty"},
		}
	}

	return nil
}

// ConnectPlayer request for /player/connect route.
type ConnectPlayer struct {
	dto.Auth

	PlayerID string
}

// Check returns if subscription request is valid.
func (r ConnectPlayer) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.PlayerID); err != nil {
		return err
	}

	return nil
}
