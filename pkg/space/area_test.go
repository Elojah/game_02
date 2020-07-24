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
		t.Run("generatefloor"+d.name, func(t *testing.T) {
			rand.Seed(time.Now().UTC().UnixNano())

			actual, _ := space.NewArea(d.p.Size)                                                         // nolint: scopelint
			ps := actual.GeneratePlatforms(d.p.NPlatforms, d.p.PlatformSize, d.p.PlatformVariance)       // nolint: scopelint
			actual.GeneratePaths(ps, d.p.NPaths, d.p.PathVariance, d.p.PathWidth, d.p.PathWidthVariance) // nolint: scopelint
			for _, line := range actual.Tiles {
				for _, col := range line {
					fmt.Print(col)
				}
				fmt.Println("")
			}
		})
	}
}
