package app

import "github.com/elojah/game_02/pkg/lobby"

var _ lobby.App = (*A)(nil)

// A implementation for lobby.
type A struct {
	lobby.Store
}
