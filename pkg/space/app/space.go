package app

import "github.com/elojah/game_02/pkg/space"

type A struct {
	space.StoreCoordinate
	space.StoreSector
	space.StoreWorld
	space.StoreTileSet
}
