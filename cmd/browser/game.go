package main

import (
	"fmt"
	"image"
	_ "image/png"

	"github.com/hajimehoshi/ebiten"
	"github.com/hajimehoshi/ebiten/ebitenutil"
)

const (
	width  = 800
	height = 600
)

// game world main object.
type game struct {
	count    int
	skeleton *ebiten.Image
	tiles    *ebiten.Image
	layers   [][]int
}

func (g *game) Update(screen *ebiten.Image) error {
	g.count++
	return nil
}

func (g *game) Draw(screen *ebiten.Image) {
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

func (g *game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return width, height
}

func (g *game) Dial(c Config) error {
	ebiten.SetWindowSize(width, height)
	ebiten.SetWindowTitle("GAME_02")

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
	g.layers = [][]int{
		{
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
			130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
		},
	}
	// #!assets creation

	return ebiten.RunGame(g)
}

func (g *game) Close() error {
	return nil
}
