package main

import (
	"github.com/hajimehoshi/ebiten"
)

const (
	width  = 800
	height = 600
)

type game struct{}

func (g *game) Update(screen *ebiten.Image) error {
	return nil
}

func (g *game) Draw(screen *ebiten.Image) {
}

func (g *game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return 400, 300
}

func (g *game) Dial(c Config) error {
	ebiten.SetWindowSize(800, 600)
	ebiten.SetWindowTitle("GAME_02")
	return ebiten.RunGame(g)
}

func (g *game) Close() error {
	return nil
}
