package lobby

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for lobby domain.
type Filter struct {
	ID gulid.ID
}

// Store layer for lobby domain.
type Store interface {
	Upsert(context.Context, L) error
	Fetch(context.Context, Filter) (L, error)
	FetchAll(context.Context) ([]L, error)
	Delete(context.Context, Filter) error
}

// App layer for lobby domain.
type App interface {
	Store
}
