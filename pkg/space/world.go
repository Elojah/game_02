package space

import (
	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// NewWorld returns a World from a generated tilemap.
// sectorDim is maximum sector size splitting.
func NewWorld(tm TileMap, sectorDim geometry.Vec3) (World, error) {
	if sectorDim.X >= tm.Dim.X && sectorDim.Y >= tm.Dim.Y {
		return World{
			ID:      gulid.NewID(),
			Dim:     tm.Dim,
			Sectors: map[string]uint64{},
		}, nil
	}

	return World{}, nil
}
