package space

import (
	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// NewWorld returns a World with associated sectors.
func NewWorld(dim geometry.Vec3, sectors []Sector) World {
	return World{
		ID:      gulid.NewID(),
		Dim:     dim,
		Sectors: Sectors(sectors).IDsMap(),
	}
}
