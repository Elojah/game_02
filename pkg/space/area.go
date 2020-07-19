package space

import (
	fmt "fmt"
	"math/rand"
)

// TileKind is used for map generation.
type TileKind uint

const (
	Sky TileKind = iota
	Floor
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
	Tiles [][]TileKind
}

// AreaParams parameters for sector creation.
type AreaParams struct {
	X uint64
	Y uint64
	Z uint64

	NFloorPlatform       uint64 // number of big floor area hub
	FloorPlatformMinSize uint64
	FloorPlatformMaxSize uint64
}

// NewArea creates a new isolated area without tilemap.
func NewArea(params AreaParams) (Area, error) {

	a := Area{}

	generateArea(AreaParams{})

	return a, nil
}

type Platform struct {
	X     uint64
	Y     uint64
	Shape FloorShape
}

func (p Platform) Apply(params AreaParams, a *Area) {

	setFloor := func(x, y uint64) {
		if x >= 0 && x < params.X &&
			y >= 0 && y < params.Y {
			a.Tiles[x][y] = Floor
		}
	}

	switch p.Shape {
	case Square:
		size := params.FloorPlatformMinSize + (rand.Uint64() % (params.FloorPlatformMaxSize - params.FloorPlatformMinSize))

		for i := uint64(0); i < size; i++ {
			for j := uint64(0); j < size; j++ {
				setFloor(p.X-(size/2)+i, p.Y-(size/2)+j)
			}
		}
	case Rectangle:
		sizeX := params.FloorPlatformMinSize + (rand.Uint64() % (params.FloorPlatformMaxSize - params.FloorPlatformMinSize))
		sizeY := params.FloorPlatformMinSize + (rand.Uint64() % (params.FloorPlatformMaxSize - params.FloorPlatformMinSize))

		for i := uint64(0); i < sizeX; i++ {
			for j := uint64(0); j < sizeY; j++ {
				setFloor(p.X-(sizeX/2)+i, p.Y-(sizeY/2)+j)
			}
		}
	case Circle:
		size := params.FloorPlatformMinSize + (rand.Uint64() % (params.FloorPlatformMaxSize - params.FloorPlatformMinSize))
		radius := (size / 2)

		for i := uint64(0); i < size; i++ {
			for j := uint64(0); j < size; j++ {
				currentX := -radius + i
				currentY := -radius + j

				if (currentX*currentX)+(currentY*currentY) <= (radius*radius)+radius {
					setFloor(p.X+currentX, p.Y+currentY)
				}
			}
		}
	default:
		fmt.Println("unrecognized shape")
	}
}

type Direction uint64

const (
	Up Direction = iota
	Down
	Left
	Right
)

type Path struct {
	Start    Platform
	End      Platform
	WidthMin uint64
	WidthMax uint64
}

func (p Path) Apply(params AreaParams, a *Area) {
	abs := func(n uint64) uint64 {
		if n > 0 {
			return n
		}
		return -n
	}
	orthoLength := abs(p.Start.X-p.End.X) + abs(p.Start.Y-p.End.Y)
	elbows := rand.Uint64() % (orthoLength / 2)
	for i := 0; i < elbows; i++ {
		r := rand.Uint64() % 100

	}
}

func generateArea(params AreaParams, start Platform, end Platform) Area {

	a := Area{}
	a.Tiles = make([][]TileKind, params.X)

	for i := uint64(0); i < params.X; i++ {
		a.Tiles[i] = make([]TileKind, params.Y)
	}

	platforms := make([]Platform, params.NFloorPlatform)
	// sequence used to pick random platforms index for path tracing
	sequence := make([]uint64, params.NFloorPlatform)

	for i := uint64(0); i < params.NFloorPlatform; i++ {
		platforms[i] = Platform{
			X:     rand.Uint64() % params.X,
			Y:     rand.Uint64() % params.Y,
			Shape: FloorShape(rand.Uint64() % uint64(LenFloorShape-1)),
		}
		platforms[i].Apply(params, &a)

		sequence[i] = i
	}

	for i := uint64(0); i < params.NFloorPlatform; i++ {
		nPaths := rand.Uint64() % (params.NFloorPlatform / 2)

		rand.Shuffle(len(sequence), func(i, j int) {
			sequence[i], sequence[j] = sequence[j], sequence[i]
		})

		for j := 0; j < nPaths; j++ {
			// same platform, try next one and increment nPaths to keep correct count
			end := sequence[j]
			if i == end {
				nPaths++
				continue
			}

			p := Path{
				Start: platforms[i],
				End:   platforms[end],
			}
			p.Apply(params, &a)
		}
	}
	return a
}
