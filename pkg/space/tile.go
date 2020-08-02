package space

import (
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// TileKind is used for map generation.
type TileKind uint

const (
	// Sky REQUIRED to be 0 value (for default initialization), don't move it.
	Sky TileKind = iota
	Floor
	Pillar

	Wall
)

type TileSet struct {
	ID gulid.ID

	PixelSize uint64
	Kinds     map[TileKind]int
}
