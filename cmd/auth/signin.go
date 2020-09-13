package main

import (
	"context"

	"github.com/elojah/game_02/pkg/account/dto"
)

func (h handler) Signin(context.Context, *dto.Signin) (*dto.Token, error) {
	return &dto.Token{}, nil
}
