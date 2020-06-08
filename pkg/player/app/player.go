package app

import "github.com/elojah/game_02/pkg/player"

// A applciative layer for player domain.
type A struct {
	player.Store
	player.StoreSpawn
	player.StoreInventory
}
