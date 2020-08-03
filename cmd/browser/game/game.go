package game

import (
	"fmt"
	"image"
	_ "image/png" // required for ebiten

	"github.com/elojah/game_02/pkg/space"
	"github.com/hajimehoshi/ebiten"
	"github.com/hajimehoshi/ebiten/ebitenutil"
)

const (
	width  = 800
	height = 600
)

// Game world main object.
type Game struct {
	count    int
	skeleton *ebiten.Image
	tiles    *ebiten.Image
	layers   [][]int
	Area     space.World
}

func (g *Game) Update(screen *ebiten.Image) error {
	g.count++
	return nil
}

func (g *Game) Draw(screen *ebiten.Image) {
	// show layers
	tileSize := 32
	tileXNum := 16
	xNum := width / tileSize

	for _, l := range g.layers {
		for i, t := range l {
			op := &ebiten.DrawImageOptions{}
			op.GeoM.Translate(float64((i%xNum)*tileSize), float64((i/xNum)*tileSize))

			sx := (t % tileXNum) * tileSize
			sy := (t / tileXNum) * tileSize
			_ = screen.DrawImage(g.tiles.SubImage(image.Rect(sx, sy, sx+tileSize, sy+tileSize)).(*ebiten.Image), op)
		}
	}

	// show skeleton
	n := 18
	i := (g.count / 10) % n
	w, h := g.skeleton.Size()
	x := i * (w / n)
	op := &ebiten.DrawImageOptions{}
	op.GeoM.Translate(width/2, height/2) // nolint: gomnd
	_ = screen.DrawImage(g.skeleton.SubImage(image.Rect(x, 0, x+w/n, h)).(*ebiten.Image), op)

	ebitenutil.DebugPrint(screen, fmt.Sprintf("TPS: %0.2f", ebiten.CurrentTPS()))
}

func (g *Game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return width, height
}

func (g *Game) Dial(c Config) error {
	ebiten.SetWindowSize(width, height)
	ebiten.SetWindowTitle("GAME_02")

	return nil
}

func (g *Game) Run() error {
	// #assets creation
	skeleton, _, err := ebitenutil.NewImageFromFile("assets/Skeleton/Skeleton Attack.png", ebiten.FilterDefault)
	if err != nil {
		return err
	}

	tiles, _, err := ebitenutil.NewImageFromFile("assets/Arena Tileset.png", ebiten.FilterDefault)
	if err != nil {
		return err
	}

	g.skeleton = skeleton
	g.tiles = tiles

	g.layers = make([][]int, 1)
	// for _, l := range g.Area.Tiles {
	// 	for _, c := range l {
	// 		if c == space.Floor {
	// 			g.layers[0] = append(g.layers[0], 130)
	// 		} else {
	// 			g.layers[0] = append(g.layers[0], 33)
	// 		}
	// 	}
	// }
	// g.layers = [][]int{
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

	return ebiten.RunGame(g)
}

func (g *Game) Close() error {
	return nil
}
