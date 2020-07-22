package space

import (
	fmt "fmt"
	"math/rand"
	"sort"
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

type Orientation uint64

const (
	Horizontal Orientation = iota
	Vertical
)

func NewOrientationRand() Orientation {
	if rand.Uint64()%2 == 0 {
		return Horizontal
	}

	return Vertical
}

func (o Orientation) Orthogonal() Orientation {
	if o == Horizontal {
		return Vertical
	}

	return Horizontal
}

type Path struct {
	Start    Platform
	End      Platform
	WidthMin uint64
	WidthMax uint64
}

func (p Path) Apply(params AreaParams, a *Area) {
	setFloor := func(x, y uint64) {
		if x >= 0 && x < params.X &&
			y >= 0 && y < params.Y {
			a.Tiles[x][y] = Floor
		}
	}

	abs := func(n uint64) uint64 {
		if n > 0 {
			return n
		}

		return -n
	}
	deltaX := p.End.X - p.Start.X
	deltaY := p.End.Y - p.Start.Y

	sumSequence := func(sum int, n uint64) []int {
		if n == 0 {
			return []int{}
		}

		neg := false
		if sum < 0 {
			sum = -sum
			neg = true
		}

		result := make([]int, n)
		sample := rand.Perm(int(sum))
		sample = append(sample[0:n-1], 0, int(sum))
		sort.Slice(sample, func(i, j int) bool { return sample[i] < sample[j] })

		for i := uint64(0); i < n; i++ {
			result[i] = sample[i+1] - sample[i]
			if neg {
				result[i] = -result[i]
			}
		}
		return result
	}

	nSubPaths := 2 + (rand.Uint64() % (abs(deltaX) + abs(deltaY)))
	varianceX := nSubPaths + (rand.Uint64() % deltaX)
	varianceY := nSubPaths + (rand.Uint64() % deltaY)

	seqX0 := sumSequence(int(deltaX+varianceX), nSubPaths)
	seqX1 := sumSequence(int(-varianceX), nSubPaths)
	seqY0 := sumSequence(int(deltaY+varianceY), nSubPaths)
	seqY1 := sumSequence(int(-varianceY), nSubPaths)

	o := NewOrientationRand()
	pickSubPath := func(o Orientation) int {
		var result int
		r := rand.Uint64() % 2
		if o == Horizontal {
			if r == 0 {
				result = seqX0[0]
				seqX0 = seqX0[1:]
			} else {
				result = seqX1[0]
				seqX1 = seqX1[1:]
			}
		} else {
			if r == 0 {
				result = seqY0[0]
				seqY0 = seqY0[1:]
			} else {
				result = seqY1[0]
				seqY1 = seqY1[1:]
			}
		}

		return result
	}

	currentX := p.Start.X
	currentY := p.Start.Y

	for i := uint64(0); i < nSubPaths*4; i++ {
		len := pickSubPath(o)
		if o == Horizontal {
			if len > 0 {
				for j := uint64(0); j < len; j++ {
					setFloor(currentX+j, currentY)
				}
			}
		}
		for j := uint64(0); j < len; j++ {
			setFloor(currentX)
		}
		o = o.Orthogonal()
	}
}

func generateArea(params AreaParams) Area {
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

		for j := uint64(0); j < nPaths; j++ {
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
