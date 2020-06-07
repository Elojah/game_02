package dto

import "github.com/elojah/game_02/pkg/account/dto"

// CreatePlayerReq request for /player/create route,
type CreatePlayerReq struct {
	dto.AuthReq

	TemplateID string
}
