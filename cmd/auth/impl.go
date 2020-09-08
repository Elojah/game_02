package main

import (
	"context"

	"github.com/gogo/protobuf/types"

	"github.com/elojah/game_02/cmd/auth/grpc"
	accountdto "github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/game_02/pkg/room"
	roomdto "github.com/elojah/game_02/pkg/room/dto"
)

type impl struct{}

func (h impl) Subscribe(context.Context, *accountdto.Subscribe) (*types.Empty, error) {
	return &types.Empty{}, nil
}

func (h impl) Unsubscribe(context.Context, *accountdto.Unsubscribe) (*types.Empty, error) {
	return &types.Empty{}, nil
}

func (h impl) Signin(context.Context, *accountdto.Signin) (*accountdto.Token, error) {
	return &accountdto.Token{}, nil
}

func (h impl) Signout(context.Context, *accountdto.Auth) (*types.Empty, error) {
	return &types.Empty{}, nil
}

func (h impl) ListLobbies(*accountdto.Auth, grpc.Auth_ListLobbiesServer) error {
	return nil
}

func (h impl) CreateRoom(context.Context, *roomdto.Create) (*room.R, error) {
	return &room.R{}, nil
}

func (h impl) ConnectRoom(context.Context, *roomdto.Connect) (*room.R, error) {
	return &room.R{}, nil
}

func (h impl) CreatePlayer(context.Context, *roomdto.Create) (*player.P, error) {
	return &player.P{}, nil
}
