package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis/v8"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/lobby"
)

const (
	lobbyKey = "lobby:"
)

// Upsert implementation for lobby in redis.
func (s *Store) Upsert(ctx context.Context, l lobby.L) error {
	raw, err := l.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(ctx, lobbyKey+l.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert lobby %s: %w", l.ID, err)
	}

	return nil
}

// Fetch implementation for lobby in redis.
func (s *Store) Fetch(ctx context.Context, filter lobby.Filter) (lobby.L, error) {
	val, err := s.Get(ctx, lobbyKey+filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return lobby.L{}, fmt.Errorf("fetch lobby %s: %w", filter.ID.String(), err)
		}

		return lobby.L{}, fmt.Errorf(
			"fetch lobby %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: lobbyKey, Index: filter.ID.String()},
		)
	}

	var l lobby.L
	if err := l.Unmarshal([]byte(val)); err != nil {
		return lobby.L{}, fmt.Errorf("fetch lobby %s: %w", filter.ID.String(), err)
	}

	return l, nil
}

// FetchAll implementation for lobby in redis.
func (s *Store) FetchAll(ctx context.Context, c chan<- lobby.L) error {
	keys, err := s.Keys(ctx, lobbyKey+"*").Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return fmt.Errorf("fetch all lobby: %w", err)
		}

		return fmt.Errorf(
			"fetch lobby *: %w",
			gerrors.ErrNotFound{Resource: lobbyKey, Index: "*"},
		)
	}

	for _, key := range keys {
		val, err := s.Get(ctx, key).Result()
		if err != nil {
			return fmt.Errorf("fetch lobby %s: %w", key, err)
		}

		var l lobby.L
		if err := l.Unmarshal([]byte(val)); err != nil {
			return fmt.Errorf("unmarshal lobby %s: %w", key, err)
		}
		c <- l
	}

	return nil
}

// Delete implementation for lobby in redis.
func (s *Store) Delete(ctx context.Context, filter lobby.Filter) error {
	if err := s.Del(ctx, lobbyKey+filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove lobby %s: %w", filter.ID, err)
	}

	return nil
}
