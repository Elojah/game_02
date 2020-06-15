package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/room"
)

const (
	roomKey = "room:"
)

// Upsert implementation for room in redis.
func (s *Store) Upsert(ctx context.Context, r room.R) error {
	raw, err := r.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(roomKey+r.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert room %s: %w", r.ID, err)
	}

	return nil
}

// Fetch implementation for room in redis.
func (s *Store) Fetch(ctx context.Context, filter room.Filter) (room.R, error) {
	val, err := s.Get(roomKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return room.R{}, fmt.Errorf("fetch room %s: %w", filter.ID.String(), err)
		}

		return room.R{}, fmt.Errorf(
			"fetch room %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: roomKey, Index: filter.ID.String()},
		)
	}

	var r room.R
	if err := r.Unmarshal([]byte(val)); err != nil {
		return room.R{}, fmt.Errorf("fetch room %s: %w", filter.ID.String(), err)
	}

	return r, nil
}

// Delete implementation for room in redis.
func (s *Store) Delete(ctx context.Context, filter room.Filter) error {
	if err := s.Del(roomKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove room %s: %w", filter.ID, err)
	}

	return nil
}
