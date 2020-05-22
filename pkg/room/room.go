package room

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for room domain.
type Filter struct {
	ID gulid.ID
}

// Store layer for room domain.
type Store interface {
	Upsert(context.Context, R) error
	Fetch(context.Context, Filter) (R, error)
	Delete(context.Context, Filter) error
}

// App for room domain.
type App interface {
	Store
}
