package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// GetSectorReq request format for room route.
type GetSectorReq struct {
	dto.AuthReq

	ID string `json:"id"`
}

func (r GetSectorReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}
