package main

import (
	"context"
	"net/http"

	"github.com/gogo/protobuf/types"
	"google.golang.org/grpc"

	"github.com/elojah/game_02/pkg/account/dto"
)

func (h handler) Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error) {
	return &types.Empty{}, nil
}

func (h handler) subscribe(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		// continue
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

}
