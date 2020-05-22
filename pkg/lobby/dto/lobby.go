package dto

import "github.com/elojah/game_02/pkg/lobby"

// LobbyResp response format for lobby route.
type LobbyResp struct {
	Lobbies []lobby.L `json:"lobbies"`
}
