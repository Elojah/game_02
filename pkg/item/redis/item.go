package redis

import (
	"context"
	"fmt"

	"github.com/go-redis/redis"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/item"
)

const (
	itemKey = "item:"
)

// Upsert implementation for item in redis.
func (s *Store) Upsert(ctx context.Context, i item.I) error {
	raw, err := i.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(itemKey+i.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert item %s: %w", i.ID.String(), err)
	}

	return nil
}

// Fetch implementation for item in redis.
func (s *Store) Fetch(ctx context.Context, filter item.Filter) (item.I, error) {

	val, err := s.Get(itemKey + filter.ID.String()).Result()
	if err != nil {
		if err != redis.Nil {
			return item.I{}, fmt.Errorf("fetch item %s: %w", filter.ID.String(), err)
		}
		return item.I{}, fmt.Errorf(
			"fetch item %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: itemKey, Index: filter.ID.String() + ":" + filter.ID.String()},
		)
	}

	var i item.I
	if err := i.Unmarshal([]byte(val)); err != nil {
		return item.I{}, fmt.Errorf("fetch item %s: %w", filter.ID.String(), err)
	}
	return i, nil
}

// FetchMany implementation for item in redis.
func (s *Store) FetchMany(ctx context.Context, filter item.Filter) (map[string]item.I, error) {

	is := make(map[string]item.I, len(filter.IDs))
	for _, id := range filter.IDs {
		val, err := s.Get(itemKey + id.String()).Result()
		if err != nil {
			return nil, fmt.Errorf("fetch item %s: %w", id.String(), err)
		}
		var tmp item.I
		if err := tmp.Unmarshal([]byte(val)); err != nil {
			return nil, fmt.Errorf("fetch items %s: %w", filter.ID.String(), err)
		}
		is[tmp.ID.String()] = tmp
	}
	return is, nil
}

// Delete implementation for item in redis.
func (s *Store) Delete(ctx context.Context, filter item.Filter) error {
	if err := s.Del(itemKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove item %s: %w", filter.ID.String(), err)
	}
	return nil
}
