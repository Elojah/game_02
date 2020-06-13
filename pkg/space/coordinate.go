package space

import (
	"context"

	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for entity domain.
type Filter struct {
	EntityID  gulid.ID
	Rectangle geometry.Rectangle
}

// Store object for entity domain.
type Store interface {
	Upsert(context.Context, Coordinate) error
	FetchMany(context.Context, Filter) (map[string]Coordinate, error)
	Delete(context.Context, Filter) (Coordinate, error)
}

// App object for entity domain.
type App interface {
	Store
}
