package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

const (
	minDimension = 1
	maxDimension = 2000
)

// GetSector request format for sector route.
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
