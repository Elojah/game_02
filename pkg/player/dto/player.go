package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// CreatePlayerReq request for /player/create route,
type CreatePlayerReq struct {
	dto.AuthReq

	TemplateID string
}

// Check returns if subscription request is valid.
func (r CreatePlayerReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.TemplateID); err != nil {
		return err
	}

	return nil
}
