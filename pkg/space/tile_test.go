package space_test

import (
	fmt "fmt"
	"math/rand"
	testing "testing"
	time "time"

	"github.com/elojah/game_02/pkg/geometry"
	"github.com/elojah/game_02/pkg/space"
)

func TestGenerateFloor(t *testing.T) {
	type params struct {
		Size              geometry.Vec3
		NPlatforms        uint64
		PlatformSize      uint64
		PlatformVariance  uint64
		NPaths            uint64
		PathVariance      uint64
		PathWidth         uint64
		PathWidthVariance uint64
	}

	for _, d := range []struct {
		name string
		p    params
		// expected struct{}
	}{
		{
			name: "basic",
			p: params{
				Size: geometry.Vec3{
					X: 100,
					Y: 100,
					Z: 1,
				},
				NPlatforms:        10,
				PlatformSize:      3,
				PlatformVariance:  7,
				NPaths:            1,
				PathVariance:      2,
				PathWidth:         2,
				PathWidthVariance: 3,
			},
		},
	} {
		t.Run("generate_floor_"+d.name, func(t *testing.T) {
			rand.Seed(time.Now().UTC().UnixNano())

			actual := space.NewTileMap(d.p.Size)                                                         // nolint: scopelint
			ps := actual.GeneratePlatforms(d.p.NPlatforms, d.p.PlatformSize, d.p.PlatformVariance)       // nolint: scopelint
			actual.GeneratePaths(ps, d.p.NPaths, d.p.PathVariance, d.p.PathWidth, d.p.PathWidthVariance) // nolint: scopelint
			// for i := uint64(0); i < actual.Dim.Y; i++ {
			// 	for j := uint64(0); j < actual.Dim.X; j++ {
			// 		fmt.Print(int32(actual.Map[(i*actual.Dim.X)+j]))
			// 	}
			// 	fmt.Println("")
			// }
		})
	}
}

func TestSplitSectors(t *testing.T) {
	type params struct {
		tm       space.TileMap
		dim      geometry.Vec3
		expected []space.Sector
	}

	for _, d := range []struct {
		name string
		p    params
	}{
		{
			name: "dimension only",
			p: params{
				tm: space.TileMap{
					Dim: geometry.Vec3{
						X: 10,
						Y: 10,
						Z: 1,
					},
					Map: []space.Terrain{
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
						space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky, space.Sky,
					},
				},
				dim: geometry.Vec3{
					X: 3,
					Y: 3,
					Z: 0,
				},
				expected: []space.Sector{
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 1,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 1,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky,
								space.Sky,
								space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 1,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 1,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky,
								space.Sky,
								space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 3,
							Y: 1,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 3,
								Y: 1,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky,
								space.Sky,
								space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 1,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 1,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 1,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 1,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 1,
							Y: 3,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 1,
								Y: 3,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky, space.Sky, space.Sky,
							},
						},
					},
					{
						Dim: geometry.Vec3{
							X: 1,
							Y: 1,
							Z: 0,
						},
						TileMap: space.TileMap{
							Dim: geometry.Vec3{
								X: 1,
								Y: 1,
								Z: 0,
							},
							Map: []space.Terrain{
								space.Sky,
							},
						},
					},
				},
			},
		},
	} {
		t.Run("split_sectors_"+d.name, func(t *testing.T) {
			actual := d.p.tm.SplitSectors(d.p.dim) // nolint: scopelint
			fmt.Println(actual)
			if len(actual) != len(d.p.expected) { // nolint: scopelint
				t.Errorf("different lengths. actual %d expected %d", len(actual), len(d.p.expected)) // nolint: scopelint
				return
			}
			for i := range actual {
				if !actual[i].Dim.Equal(d.p.expected[i].Dim) { // nolint: scopelint
					t.Errorf("different dimensions. actual %v expected %v", actual[i].Dim, d.p.expected[i].Dim) // nolint: scopelint
					return
				}
				// no need to test tilemap.Dim cause same than above test
				if len(actual[i].TileMap.Map) != len(d.p.expected[i].TileMap.Map) { // nolint: scopelint
					t.Errorf("different lengths. actual %d expected %d",
						len(actual[i].TileMap.Map),
						len(d.p.expected[i].TileMap.Map), // nolint: scopelint
					)
					return
				}

			}
		})
	}
}
