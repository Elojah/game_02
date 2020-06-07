package player

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterSpawn object for player spawn domain.
type FilterSpawn struct {
	ID gulid.ID
}

// StoreSpawn storage layer for player spawn.
type StoreSpawn interface {
	UpsertSpawn(context.Context, Spawn) error
	FetchSpawn(context.Context, FilterSpawn) (Spawn, error)
	DeleteSpawn(context.Context, FilterSpawn) error
}
