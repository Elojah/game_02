package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/room"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// RoomResp response format for room route.
type RoomResp struct {
	Room room.R `json:"room"`
}

// ConnectRoomReq request format for room route.
type ConnectRoomReq struct {
	dto.AuthReq

	ID       string `json:"id"`
	Password string `json:"password"`
}

func (r ConnectRoomReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}

// CreateRoomReq request format for room route.
type CreateRoomReq struct {
	dto.AuthReq

	Name     string `json:"name"`
	Password string `json:"password"`
}

func (r CreateRoomReq) Check() error {
	if err := r.AuthReq.Check(); err != nil {
		return err
	}

	return nil
}
