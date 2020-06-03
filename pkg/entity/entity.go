package entity

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for entity domain.
type Filter struct {
	ID gulid.ID
}

// Store layer for entity domain.
type Store interface {
	Upsert(context.Context, E) error
	Fetch(context.Context, Filter) (E, error)
	Delete(context.Context, Filter) error
}
