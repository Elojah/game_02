package player

import (
	"context"

	"github.com/elojah/game_02/pkg/entity"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// P is a player character.
type P struct {
	entity.E
	Account gulid.ID
}

// Filter object for P domain.
type Filter struct {
	ID      gulid.ID
	Account gulid.ID
}

// Store storage layer for P.
type Store interface {
	Upsert(context.Context, P) error
	Fetch(context.Context, Filter) (P, error)
	FetchMany(context.Context, Filter) (map[string]P, error)
	Delete(context.Context, Filter) error
}

// App applicative layer for P.
type App interface {
	Store
	StoreSpawn
	StoreInventory
}
