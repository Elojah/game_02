package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis/v8"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player"
)

const (
	spawnKey = "spawn_player:"
)

// UpsertSpawn implementation for player spawn in redis.
func (s *Store) UpsertSpawn(ctx context.Context, sp player.Spawn) error {
	raw, err := sp.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(ctx, spawnKey+sp.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert spawn %s: %w", sp.ID.String(), err)
	}

	return nil
}

// FetchSpawn implementation for player spawn in redis.
func (s *Store) FetchSpawn(ctx context.Context, filter player.FilterSpawn) (player.Spawn, error) {
	val, err := s.Get(ctx, spawnKey+filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return player.Spawn{}, fmt.Errorf("fetch spawn %s: %w", filter.ID.String(), err)
		}

		return player.Spawn{}, fmt.Errorf(
			"fetch spawn %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: spawnKey, Index: filter.ID.String()},
		)
	}

	var sp player.Spawn
	if err := sp.Unmarshal([]byte(val)); err != nil {
		return player.Spawn{}, fmt.Errorf("fetch spawn %s: %w", filter.ID.String(), err)
	}

	return sp, nil
}

// DeleteSpawn implementation for player spawn in redis.
func (s *Store) DeleteSpawn(ctx context.Context, filter player.FilterSpawn) error {
	if err := s.Del(ctx, spawnKey+filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove spawn %s: %w", filter.ID.String(), err)
	}

	return nil
}
