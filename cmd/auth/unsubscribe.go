package main

import (
	"context"

	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/gogo/protobuf/types"
)

func (h handler) Unsubscribe(context.Context, *dto.Unsubscribe) (*types.Empty, error) {
	return &types.Empty{}, nil
}
