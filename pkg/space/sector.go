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
	UpsertSectors(context.Context, []Sector) error
	FetchSector(context.Context, FilterSector) (Sector, error)
	DeleteSector(context.Context, FilterSector) error
}

type Sectors []Sector

// IDsMap return IDs in a convenient format to assign world.sectors.
func (ss Sectors) IDsMap() map[string]uint64 {
	result := make(map[string]uint64, len(ss))

	for i, s := range ss {
		result[s.ID.String()] = uint64(i)
	}

	return result
}
