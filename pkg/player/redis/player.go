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
	playerKey = "player:"
)

// Upsert implementation for player in redis.
func (s *Store) Upsert(ctx context.Context, p player.P) error {
	raw, err := p.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(ctx, playerKey+p.Account.String()+":"+p.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert player %s: %w", p.ID.String(), err)
	}

	return nil
}

// Fetch implementation for player in redis.
func (s *Store) Fetch(ctx context.Context, filter player.Filter) (player.P, error) {
	val, err := s.Get(ctx, playerKey+filter.Account.String()+":"+filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return player.P{}, fmt.Errorf("fetch player %s: %w", filter.ID.String(), err)
		}

		return player.P{}, fmt.Errorf(
			"fetch player %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: playerKey, Index: filter.Account.String() + ":" + filter.ID.String()},
		)
	}

	var p player.P
	if err := p.Unmarshal([]byte(val)); err != nil {
		return player.P{}, fmt.Errorf("fetch player %s: %w", filter.ID.String(), err)
	}

	return p, nil
}

// FetchMany implementation for player in redis.
func (s *Store) FetchMany(ctx context.Context, filter player.Filter) (map[string]player.P, error) {
	keys, err := s.Keys(ctx, playerKey+filter.Account.String()+":*").Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return nil, fmt.Errorf("fetch players %s: %w", filter.ID.String(), err)
		}

		return nil, fmt.Errorf(
			"fetch players %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: playerKey, Index: filter.Account.String() + ":*"},
		)
	}

	ps := make(map[string]player.P, len(keys))

	for _, key := range keys {
		val, err := s.Get(ctx, key).Result()
		if err != nil {
			return nil, fmt.Errorf("fetch player %s: %w", key, err)
		}

		var tmp player.P
		if err := tmp.Unmarshal([]byte(val)); err != nil {
			return nil, fmt.Errorf("fetch player %s: %w", key, err)
		}

		ps[tmp.ID.String()] = tmp
	}

	return ps, nil
}

// Delete implementation for player in redis.
func (s *Store) Delete(ctx context.Context, filter player.Filter) error {
	if err := s.Del(ctx, playerKey+filter.Account.String()+filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove player %s: %w", filter.ID.String(), err)
	}

	return nil
}
