package space

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterSector object for space domain.
type FilterSector struct {
	ID  gulid.ID
	IDs []gulid.ID
}

// Store layer for space domain.
type StoreSector interface {
	UpsertSector(context.Context, Sector) error
	FetchSector(context.Context, FilterSector) (Sector, error)
	DeleteSector(context.Context, FilterSector) error
}
