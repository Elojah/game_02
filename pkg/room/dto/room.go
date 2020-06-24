package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/room"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// RoomResp response format for room route.
type RoomResp struct {
	Room room.R `json:"room"`
}

// ConnectRoom request format for room route.
type ConnectRoom struct {
	dto.Auth

	ID       string `json:"id"`
	Password string `json:"password"`
}

func (r ConnectRoom) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}

// CreateRoom request format for room route.
type CreateRoom struct {
	dto.Auth

	Name     string `json:"name"`
	Password string `json:"password"`
}

func (r CreateRoom) Check() error {
	if err := r.Auth.Check(); err != nil {
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
