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

	// 0 wall around
	Wall

	// 1 wall around
	WallLeft
	WallTop
	WallRight
	WallDown

	// 2 walls around
	WallLeftTop
	WallLeftRight
	WallLeftDown
	WallTopRight
	WallTopDown
	WallRightDown

	// 3 walls around
	WallLeftTopRight
	WallLeftTopDown
	WallLeftRightDown
	WallTopRightDown

	// 4 walls aounrd
	WallLeftTopRightDown
)

type TileSet struct {
	ID gulid.ID

	Kinds map[TileKind]int
}
