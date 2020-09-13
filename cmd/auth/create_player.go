package main

import (
	"context"

	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/room/dto"
)

func (h handler) CreatePlayer(context.Context, *dto.Create) (*player.P, error) {
	return &player.P{}, nil
}
