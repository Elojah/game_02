package space

import (
	"math/rand"
	"sort"

	"github.com/elojah/game_02/pkg/geometry"
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

	Size geometry.Vec3
}

func (a *Area) setTile(x, y int64, tk TileKind, force bool) {
	// force set floor on closest border if true
	if force && x >= 0 && x < int64(a.Size.X) && y >= 0 && y < int64(a.Size.Y) {
		a.Tiles[x][y] = tk
	} else if !force {
		if x < 0 {
			x = 0
		} else if x >= int64(a.Size.X) {
			x = int64(a.Size.X) - 1
		}

		if y < 0 {
			y = 0
		} else if y >= int64(a.Size.Y) {
			y = int64(a.Size.Y) - 1
		}
		a.Tiles[x][y] = tk
	}
}

// NewArea creates a new isolated area without tilemap.
func NewArea(size geometry.Vec3) (Area, error) {
	a := Area{
		Tiles: make([][]TileKind, size.X),
		Size:  size,
	}

	for i := uint64(0); i < size.X; i++ {
		a.Tiles[i] = make([]TileKind, size.Y)
	}

	return a, nil
}

// Platform represents a floor area.
type Platform struct {
	Position geometry.Vec3
	Shape    FloorShape
}

// GeneratePlatforms generate n platforms with variant size nd write them into a.
// Returns platform array.
func (a *Area) GeneratePlatforms(n, size, variance uint64) []Platform {
	platforms := make([]Platform, n)

	for i := range platforms {
		platforms[i] = Platform{
			Position: geometry.Vec3{
				X: uint64(rand.Int63n(int64(a.Size.X))),
				Y: uint64(rand.Int63n(int64(a.Size.Y))),
			},
			Shape: FloorShape(rand.Int63n(int64(LenFloorShape - 1))),
		}
		a.setPlatform(size, variance, platforms[i])
	}

	return platforms
}

// setPlatform actually set floor tiles into area.
func (a *Area) setPlatform(size, variance uint64, p Platform) {
	variant := func() uint64 {
		if variance != 0 {
			return uint64(rand.Int63n(int64(variance)))
		}

		return uint64(0)
	}

	switch p.Shape {
	case Square:
		size = size + variant()

		for i := uint64(0); i < size; i++ {
			for j := uint64(0); j < size; j++ {
				a.setTile(
					int64(p.Position.X-(size/2)+i),
					int64(p.Position.Y-(size/2)+j),
					Floor, false)
			}
		}
	case Rectangle:
		sizeX := size + variant()
		sizeY := size + variant()

		for i := uint64(0); i < sizeX; i++ {
			for j := uint64(0); j < sizeY; j++ {
				a.setTile(
					int64(p.Position.X-(sizeX/2)+i),
					int64(p.Position.Y-(sizeY/2)+j),
					Floor, false)
			}
		}
	case Circle:
		size := size + variant()
		radius := (size / 2)

		for i := uint64(0); i < size; i++ {
			for j := uint64(0); j < size; j++ {
				currentX := -radius + i
				currentY := -radius + j

				if (currentX*currentX)+(currentY*currentY) <= (radius*radius)+radius {
					a.setTile(
						int64(p.Position.X+currentX),
						int64(p.Position.Y+currentY),
						Floor, false)
				}
			}
		}
	default:
	}
}

type Path struct {
	Start Platform
	End   Platform
	// WidthMin uint64
	// WidthMax uint64
}

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

// GeneratePaths generates random paths between platforms. MUST BE APPLIED on previous generated platforms on SAME AREA.
func (a *Area) GeneratePaths(ps []Platform) {
	// Need at least 2 platforms to generate a path
	if len(ps) < 2 { // nolint: gomnd
		return
	}

	// create a sequence index of platforms for later usage
	sequence := make([]int, len(ps))
	for i := range sequence {
		sequence[i] = i
	}

	for i := 0; i < len(ps); i++ {
		// each platform has 1 > path number > total number of platforms / 2
		// division by 2 is magic number/operation (aesthetic)
		nPaths := 1 + rand.Intn(len(ps)/2) // nolint: gomnd

		// shuffle sequence index and use N first elements to determine end paths.
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
				Start: ps[i],
				End:   ps[end],
			}
			a.setPath(p)
		}
	}
}

// setPath actually set a random path between two platforms.
func (a *Area) setPath(p Path) {
	// local utility
	abs := func(n int64) int64 {
		if n > 0 {
			return n
		}

		return -n
	}
	// local utility
	// sumSequence returns a sequence of n numbers with total sum equal to sum.
	sumSequence := func(sum int64, n uint64) []int {
		if n == 0 {
			return []int{}
		}

		neg := false

		// in case of negative we generate as positive then invert all numbers
		if sum < 0 {
			sum = -sum
			neg = true
		}

		result := make([]int, n)
		// create a sequence [0, 1, ...sum]
		sample := rand.Perm(int(sum))

		if int64(n) <= sum {
			sample = append(sample[0:n-1], 0, int(sum))
		} else {
			// if we dont have enough number to return, fill sample with 0 (will also result in 0 at difference step)
			sample = append(sample, 0, int(sum))
			fill := make([]int, int64(n)-sum)
			sample = append(sample, fill...)
		}

		sort.Slice(sample, func(i, j int) bool { return sample[i] < sample[j] })

		for i := uint64(0); i < n; i++ {
			// CORE ALGO, compute difference between both values.
			result[i] = sample[i+1] - sample[i]
			if neg {
				result[i] = -result[i]
			}
		}

		return result
	}

	// orthogonal distances between 2 platforms
	// in the end, path must cover those distances
	deltaX := int64(p.End.Position.X) - int64(p.Start.Position.X)
	deltaY := int64(p.End.Position.Y) - int64(p.Start.Position.Y)

	// nSubPaths represents number of straight line (no elbow) per axis, minimum 1 to ensure deltaX and deltaY coverage
	nSubPaths := 1 + rand.Int63n(1+abs(deltaX)+abs(deltaY))
	// variance depends on delta axis, minimum 1 to avoid straight lines
	varianceX := rand.Int63n(1 + abs(deltaX))
	varianceY := rand.Int63n(1 + abs(deltaY))

	// create 2 sequences for each axis, one for left/up (negative), one for right/down (positive)
	// when merging both sequences, we obtain a sequence with correct delta sum
	seqX0 := sumSequence(deltaX+varianceX, uint64(nSubPaths))
	seqX1 := sumSequence(-varianceX, uint64(nSubPaths))
	seqY0 := sumSequence(deltaY+varianceY, uint64(nSubPaths))
	seqY1 := sumSequence(-varianceY, uint64(nSubPaths))

	// merging and shuffling sequences for X axis
	seqX := append(seqX0, seqX1...)
	rand.Shuffle(len(seqX), func(i, j int) { seqX[i], seqX[j] = seqX[j], seqX[i] })

	// merging and shuffling sequences for Y axis
	seqY := append(seqY0, seqY1...)
	rand.Shuffle(len(seqY), func(i, j int) { seqY[i], seqY[j] = seqY[j], seqY[i] })

	o := NewOrientationRand()
	currentX := int64(p.Start.Position.X)
	currentY := int64(p.Start.Position.Y)

	// loop on nSubPaths*4 to consume all sequences
	// alternate between horizontal and vertical path for aesthetic
	for i := int64(0); i < nSubPaths*4; i++ {
		if o == Horizontal {
			// "unstack" sequence X
			len := seqX[0]
			seqX = seqX[1:]

			for len != 0 {
				// path to the left
				if len > 0 {
					currentX++
					len--
				} else {
					// path to the right
					currentX--
					len++
				}

				a.setTile(currentX, currentY, Floor, true)
			}
		} else {
			// "unstack" sequence X
			len := seqY[0]
			seqY = seqY[1:]

			for len != 0 {
				if len > 0 {
					// path to the bottom
					currentY++
					len--
				} else {
					// path to the top
					currentX--
					len++
				}

				a.setTile(currentX, currentY, Floor, true)
			}
		}

		// switch current orientation to keep alternate horizontal/vertical
		o = o.Orthogonal()
	}
}
