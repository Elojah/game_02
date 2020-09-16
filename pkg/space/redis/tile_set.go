package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis/v8"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
)

const (
	tilesetKey = "tileset:"
)

// UpsertTileSet implementation for tileset in redis.
func (s *Store) UpsertTileSet(ctx context.Context, ts space.TileSet) error {
	raw, err := ts.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(ctx, tilesetKey+ts.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert tileset %s: %w", ts.ID.String(), err)
	}

	return nil
}

// UpsertManyTileSet implementation for tileset in redis.
func (s *Store) UpsertManyTileSet(ctx context.Context, tss []space.TileSet) error {
	params := make(map[string][]byte, len(tss))

	for _, ts := range tss {
		raw, err := ts.Marshal()
		if err != nil {
			return err
		}

		params[ts.ID.String()] = raw
	}

	if err := s.MSet(ctx, params).Err(); err != nil {
		return fmt.Errorf("upsert %d tilesets: %w", len(tss), err)
	}

	return nil
}

// FetchTileSet implementation for tileset in redis.
func (s *Store) FetchTileSet(ctx context.Context, filter space.FilterTileSet) (space.TileSet, error) {
	val, err := s.Get(ctx, tilesetKey+filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return space.TileSet{}, fmt.Errorf("fetch tileset %s: %w", filter.ID.String(), err)
		}

		return space.TileSet{}, fmt.Errorf(
			"fetch tileset %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: tilesetKey, Index: filter.ID.String() + ":" + filter.ID.String()},
		)
	}

	var ts space.TileSet
	if err := ts.Unmarshal([]byte(val)); err != nil {
		return space.TileSet{}, fmt.Errorf("fetch tileset %s: %w", filter.ID.String(), err)
	}

	return ts, nil
}

// FetchManyTileSet implementation for tileset in redis.
func (s *Store) FetchManyTileSet(ctx context.Context, c chan<- space.TileSet, filter space.FilterTileSet) error {
	for _, id := range filter.IDs {
		val, err := s.Get(ctx, tilesetKey+id.String()).Result()
		if err != nil {
			return fmt.Errorf("fetch tileset %s: %w", id.String(), err)
		}

		var ts space.TileSet
		if err := ts.Unmarshal([]byte(val)); err != nil {
			return fmt.Errorf("fetch tileset %s: %w", id.String(), err)
		}
		c <- ts
	}

	return nil
}

// DeleteTileSet implementation for tileset in redis.
func (s *Store) DeleteTileSet(ctx context.Context, filter space.FilterTileSet) error {
	if err := s.Del(ctx, tilesetKey+filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove tileset %s: %w", filter.ID.String(), err)
	}

	return nil
}
