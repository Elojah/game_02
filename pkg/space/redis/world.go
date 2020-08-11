package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
)

const (
	worldKey = "world:"
)

// UpsertWorld implementation for world in redis.
func (s *Store) UpsertWorld(ctx context.Context, world space.World) error {
	raw, err := world.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(worldKey+world.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert world %s: %w", world.ID.String(), err)
	}

	return nil
}

// FetchWorld implementation for world in redis.
func (s *Store) FetchWorld(ctx context.Context, filter space.FilterWorld) (space.World, error) {
	val, err := s.Get(worldKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return space.World{}, fmt.Errorf("fetch world %s: %w", filter.ID.String(), err)
		}

		return space.World{}, fmt.Errorf(
			"fetch world %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: worldKey, Index: filter.ID.String() + ":" + filter.ID.String()},
		)
	}

	var world space.World
	if err := world.Unmarshal([]byte(val)); err != nil {
		return space.World{}, fmt.Errorf("fetch world %s: %w", filter.ID.String(), err)
	}

	return world, nil
}

// DeleteWorld implementation for world in redis.
func (s *Store) DeleteWorld(ctx context.Context, filter space.FilterWorld) error {
	if err := s.Del(worldKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove world %s: %w", filter.ID.String(), err)
	}

	return nil
}
