package main

import (
	"github.com/elojah/game_02/cmd/auth/grpc"
	"github.com/elojah/game_02/pkg/account/dto"
)

func (h handler) ListLobbies(*dto.Auth, grpc.Auth_ListLobbiesServer) error {
	return nil
}
