package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	"github.com/elojah/game_02/pkg/entity"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

const (
	entityKey = "entity:"
)

// Upsert implementation for entity in redis.
func (s *Store) Upsert(ctx context.Context, e entity.E) error {
	raw, err := e.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(entityKey+e.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert entity %s: %w", e.ID.String(), err)
	}

	return nil
}

// Fetch implementation for entity in redis.
func (s *Store) Fetch(ctx context.Context, filter entity.Filter) (entity.E, error) {
	val, err := s.Get(entityKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return entity.E{}, fmt.Errorf("fetch entity %s: %w", filter.ID.String(), err)
		}

		return entity.E{}, fmt.Errorf(
			"fetch entity %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: entityKey, Index: filter.ID.String()},
		)
	}

	var e entity.E
	if err := e.Unmarshal([]byte(val)); err != nil {
		return entity.E{}, fmt.Errorf("fetch entity %s: %w", filter.ID.String(), err)
	}

	return e, nil
}

// Delete implementation for entity in redis.
func (s *Store) Delete(ctx context.Context, filter entity.Filter) error {
	if err := s.Del(entityKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove entity %s: %w", filter.ID.String(), err)
	}

	return nil
}
