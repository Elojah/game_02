package space

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterTileSet store filters for tileset.
type FilterTileSet struct {
	ID  gulid.ID
	IDs []gulid.ID
}

// StoreTileSet layer for tileset domain.
type StoreTileSet interface {
	UpsertTileSet(context.Context, TileSet) error
	FetchTileSet(context.Context, FilterTileSet) (TileSet, error)
	FetchManyTileSet(context.Context, chan<- TileSet, FilterTileSet) error
	DeleteTileSet(context.Context, FilterTileSet) error
}
