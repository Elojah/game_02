package space

import (
	"fmt"
	testing "testing"
)

func TestGenerateFloor(t *testing.T) {
	for _, d := range []struct {
		name   string
		params AreaParams
		// expected struct{}
	}{
		{
			name: "basic",
			params: AreaParams{
				X: 100,
				Y: 100,
				Z: 1,

				NFloorPlatform:       20,
				FloorPlatformMinSize: 5,
				FloorPlatformMaxSize: 30,
			},
		},
	} {
		t.Run("generatefloor"+d.name, func(t *testing.T) {
			actual := generateArea(d.params)

			for _, line := range actual.Tiles {
				for _, col := range line {
					fmt.Print(col)
				}
				fmt.Println("")
			}
		})
	}
}
