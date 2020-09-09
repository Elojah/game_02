package menu

import (
	"fmt"
	_ "image/png" // required for ebiten

	"github.com/hajimehoshi/ebiten"
	"github.com/hajimehoshi/ebiten/ebitenutil"
)

const (
	width  = 800
	height = 600
)

// M world main object.
type M struct {
	count int
	// skeleton *ebiten.Image
	// tiles    *ebiten.Image
	// layers   [][]int
	// Area     space.World
}

func (m *M) Update(screen *ebiten.Image) error {
	m.count++
	return nil
}

func (m *M) Draw(screen *ebiten.Image) {
	// // show layers
	// tileSize := 32
	// tileXNum := 16
	// xNum := width / tileSize
	// for _, l := range m.layers {
	// 	for i, t := range l {
	// 		op := &ebiten.DrawImageOptions{}
	// 		op.GeoM.Translate(float64((i%xNum)*tileSize), float64((i/xNum)*tileSize))
	// 		sx := (t % tileXNum) * tileSize
	// 		sy := (t / tileXNum) * tileSize
	// 		_ = screen.DrawImage(m.tiles.SubImage(image.Rect(sx, sy, sx+tileSize, sy+tileSize)).(*ebiten.Image), op)
	// 	}
	// }
	// // show skeleton
	// n := 18
	// i := (m.count / 10) % n
	// w, h := m.skeleton.Size()
	// x := i * (w / n)
	// op := &ebiten.DrawImageOptions{}
	// op.GeoM.Translate(width/2, height/2) // nolint: gomnd
	// _ = screen.DrawImage(m.skeleton.SubImage(image.Rect(x, 0, x+w/n, h)).(*ebiten.Image), op)
	ebitenutil.DebugPrint(screen, fmt.Sprintf("TPS: %0.2f", ebiten.CurrentTPS()))
}

func (m *M) Layout(outsideWidth, outsideHeight int) (int, int) {
	return width, height
}

func (m *M) Dial(c Config) error {
	ebiten.SetWindowSize(width, height)
	ebiten.SetWindowTitle("GAME_02_MENU")

	return nil
}

func (m *M) Run() error {
	// #assets creation
	// skeleton, _, err := ebitenutil.NewImageFromFile("assets/Skeleton/Skeleton Attack.png", ebiten.FilterDefault)
	// if err != nil {
	// 	return err
	// }
	// tiles, _, err := ebitenutil.NewImageFromFile("assets/Arena Tileset.png", ebiten.FilterDefault)
	// if err != nil {
	// 	return err
	// }
	// m.skeleton = skeleton
	// m.tiles = tiles
	// m.layers = make([][]int, 1)
	// for _, l := range m.Area.Tiles {
	// 	for _, c := range l {
	// 		if c == space.Floor {
	// 			m.layers[0] = append(m.layers[0], 130)
	// 		} else {
	// 			m.layers[0] = append(m.layers[0], 33)
	// 		}
	// 	}
	// }
	// m.layers = [][]int{
	// 	{
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 		130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
	// 	},
	// }
	// #!assets creation
	return ebiten.RunGame(m)
}

func (m *M) Close() error {
	return nil
}
