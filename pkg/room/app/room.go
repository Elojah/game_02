package app

import "github.com/elojah/game_02/pkg/room"

var _ room.App = (*A)(nil)

// A implementation for room.
type A struct {
	room.Store
}
