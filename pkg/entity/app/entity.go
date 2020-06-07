package app

import "github.com/elojah/game_02/pkg/entity"

// A applicative layer for entity domain.
type A struct {
	entity.Store
	entity.StoreTemplate
}
