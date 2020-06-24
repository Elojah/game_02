package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// GetSector request format for room route.
type GetSector struct {
	dto.Auth

	ID string `json:"id"`
}

func (r GetSector) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}
