package item

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for item domain.
type Filter struct {
	ID  gulid.ID
	IDs []gulid.ID
}

// Store layer for item domain.
type Store interface {
	Upsert(context.Context, I) error
	Fetch(context.Context, Filter) (I, error)
	FetchMany(context.Context, Filter) (map[string]I, error)
	Delete(context.Context, Filter) error
}

// Application layer for item domain.
type App interface {
	Store
}
