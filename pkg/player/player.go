package player

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

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
