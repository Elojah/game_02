package space

import "github.com/elojah/game_02/pkg/geometry"

// NewWorld returns a World from a generated tilemap.
// sectorDim is maximum sector size splitting.
func NewWorld(tm TileMap, sectorDim geometry.Vec3) (World, error) {
	if sectorDim.X >= tm.Dim.X && sectorDim.Y >= tm.Dim.Y {
		return World{}, nil
	}

	return World{}, nil
}
