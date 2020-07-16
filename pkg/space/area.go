package space

import (
	"math/rand"

	"github.com/elojah/game_02/pkg/geometry"
)

// TileKind is used for map generation.
type TileKind uint

const (
	Floor TileKind = iota
	Sky
	Box
)

type FloorShape uint

const (
	Square FloorShape = iota
	Circle
	Cross

	// Keep this at the end plz, convenience hack
	LenFloorShape
)

// Area represents a game zone with multiple sectors.
type Area struct {
	Sectors []Sector
}

// AreaParams parameters for sector creation.
type AreaParams struct {
	X uint64
	Y uint64
	Z uint64

	NFloorHub       uint64 // number of big floor area hub
	FloorHubMinSize uint64
	FloorHubMaxSize uint64
}

// NewArea creates a new isolated area without tilemap.
func NewArea(params AreaParams) (Area, error) {
	s := Sector{
		Dim: geometry.Vec3{
			X: params.X,
			Y: params.Y,
			Z: params.Z,
		},
	}

	a := Area{}
	a.Sectors = append(a.Sectors, s)

	return a, nil
}

func generateFloor(params AreaParams) [][]uint64 {
	result := make([][]uint64, params.X)
	for i := uint64(0); i < params.X; i++ {
		result[i] = make([]uint64, params.Y)
	}

	for i := uint64(0); i < params.NFloorHub; i++ {
		centerX := rand.Uint64() % params.X
		centerY := rand.Uint64() % params.Y
		shape := rand.Uint64() % uint64(LenFloorShape)
		size := params.FloorHubMinSize + (rand.Uint64() % (params.FloorHubMaxSize - params.FloorHubMinSize))

	}

	return result
}
