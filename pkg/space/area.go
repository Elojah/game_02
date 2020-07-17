package space

import (
	fmt "fmt"
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
	Rectangle
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

	generateFloor(AreaParams{})

	return a, nil
}

func generateFloor(params AreaParams) [][]TileKind {
	result := make([][]TileKind, params.X)
	for i := uint64(0); i < params.X; i++ {
		result[i] = make([]TileKind, params.Y)
	}

	for i := uint64(0); i < params.NFloorHub; i++ {
		centerX := rand.Uint64() % params.X
		centerY := rand.Uint64() % params.Y
		shape := FloorShape(rand.Uint64() % uint64(LenFloorShape))

		setFloor := func(x, y uint64) {
			if x >= 0 && x < params.X &&
				y >= 0 && y < params.Y {
				result[x][y] = Floor
			}
		}

		switch shape {
		case Square:
			size := params.FloorHubMinSize + (rand.Uint64() % (params.FloorHubMaxSize - params.FloorHubMinSize))

			for i := uint64(0); i < size; i++ {
				for j := uint64(0); j < size; j++ {
					setFloor(centerX-(size/2)+i, centerY-(size/2)+j)
				}
			}
		case Rectangle:
			sizeX := params.FloorHubMinSize + (rand.Uint64() % (params.FloorHubMaxSize - params.FloorHubMinSize))
			sizeY := params.FloorHubMinSize + (rand.Uint64() % (params.FloorHubMaxSize - params.FloorHubMinSize))

			for i := uint64(0); i < sizeX; i++ {
				for j := uint64(0); j < sizeY; j++ {
					setFloor(centerX-(sizeX/2)+i, centerY-(sizeY/2)+j)
				}
			}
		case Circle:
			size := params.FloorHubMinSize + (rand.Uint64() % (params.FloorHubMaxSize - params.FloorHubMinSize))
			radius := (size / 2)

			for i := uint64(0); i < size; i++ {
				for j := uint64(0); j < size; j++ {
					currentX := -radius + i
					currentY := -radius + j

					if (currentX*currentX)+(currentY*currentY) <= radius*radius {
						setFloor(centerX+currentX, centerY+currentY)
					}
				}
			}
		default:
			fmt.Println("unrecognized shape")
		}

	}

	return result
}
