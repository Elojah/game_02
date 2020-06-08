package player

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterInventory object for P domain.
type FilterInventory struct {
	ID gulid.ID
}

// StoreInventory storage layer for Inventory.
type StoreInventory interface {
	UpsertInventory(context.Context, Inventory) error
	FetchInventory(context.Context, FilterInventory) (Inventory, error)
	DeleteInventory(context.Context, FilterInventory) error
}
