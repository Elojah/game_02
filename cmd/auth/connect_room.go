package main

import (
	"context"

	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/room/dto"
)

func (h handler) ConnectRoom(context.Context, *dto.Connect) (*room.R, error) {
	return &room.R{}, nil
}
