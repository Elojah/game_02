package main

import (
	"github.com/hajimehoshi/ebiten"
)

type sprite struct {
	Width  int
	Height int
	X      int
	Y      int
	Z      int
	Angle  int
}

func (s *sprite) Update(screen *ebiten.Image) error {
	return nil
}
