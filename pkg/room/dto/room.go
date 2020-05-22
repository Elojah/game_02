package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/room"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// RoomReq request format for room route.
type RoomReq struct {
	dto.AuthReq

	ID       string `json:"id"`
	Password string `json:"password"`
}

func (r RoomReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil

}

// RoomReq response format for room route.
type RoomResp struct {
	Room room.R `json:"room"`
}
