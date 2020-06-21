package space

import (
	"context"

	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterCoordinate object for entity domain.
type FilterCoordinate struct {
	EntityID  gulid.ID
	Rectangle geometry.Rectangle
}

// StoreCoordinate object for entity domain.
type StoreCoordinate interface {
	UpsertCoordinate(context.Context, Coordinate) error
	FetchManyCoordinate(context.Context, FilterCoordinate) (map[string]Coordinate, error)
	DeleteCoordinate(context.Context, FilterCoordinate) (Coordinate, error)
}
