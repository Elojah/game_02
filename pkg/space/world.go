package space

import (
	"context"

	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

type FilterWorld struct {
	gulid.ID
}

type StoreWorld interface {
	UpsertWorld(context.Context, World) error
	FetchWorld(context.Context, FilterWorld) (World, error)
	DeleteWorld(context.Context, FilterWorld) error
}

// NewWorld returns a World with associated sectors.
func NewWorld(dim geometry.Vec3, sectors []Sector) World {
	return World{
		ID:      gulid.NewID(),
		Dim:     dim,
		Sectors: Sectors(sectors).IDsMap(),
	}
}
