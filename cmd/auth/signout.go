package main

import (
	"context"

	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/gogo/protobuf/types"
)

func (h handler) Signout(context.Context, *dto.Auth) (*types.Empty, error) {
	return &types.Empty{}, nil
}
