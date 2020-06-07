package main

import (
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
	count int
	eimg  *ebiten.Image
}

func (g *game) Update(screen *ebiten.Image) error {
	g.count++
	return nil
}

func (g *game) Draw(screen *ebiten.Image) {

	n := 18
	i := (g.count / 10) % n
	w, h := g.eimg.Size()
	x := i * (w / n)

	opt := &ebiten.DrawImageOptions{}
	opt.GeoM.Translate(width/2, height/2)
	screen.DrawImage(g.eimg.SubImage(image.Rect(x, 0, x+w/n, h)).(*ebiten.Image), opt)
}

func (g *game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return width, height
}

func (g *game) Dial(c Config) error {
	ebiten.SetWindowSize(width, height)
	ebiten.SetWindowTitle("GAME_02")

	// #assets creation
	img, _, err := ebitenutil.NewImageFromFile("assets/Skeleton/Skeleton Attack.png", ebiten.FilterDefault)
	if err != nil {
		return err
	}

	g.eimg = img
	// #!assets creation

	return ebiten.RunGame(g)
}

func (g *game) Close() error {
	return nil
}
