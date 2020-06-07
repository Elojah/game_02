package redis

import (
	"context"
	"fmt"

	"github.com/go-redis/redis"

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

	if err := s.Set(lobbyKey+l.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert lobby %s: %w", l.ID, err)
	}

	return nil
}

// Fetch implementation for lobby in redis.
func (s *Store) Fetch(ctx context.Context, filter lobby.Filter) (lobby.L, error) {

	val, err := s.Get(lobbyKey + filter.ID.String()).Result()
	if err != nil {
		if err != redis.Nil {
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
func (s *Store) FetchAll(ctx context.Context) ([]lobby.L, error) {

	keys, err := s.Keys(lobbyKey + "*").Result()
	if err != nil {
		if err != redis.Nil {
			return nil, fmt.Errorf("fetch all lobby: %w", err)
		}
		return nil, fmt.Errorf(
			"fetch lobby *: %w",
			gerrors.ErrNotFound{Resource: lobbyKey, Index: "*"},
		)
	}

	ls := make([]lobby.L, len(keys))
	for i, key := range keys {
		val, err := s.Get(key).Result()
		if err != nil {
			return nil, fmt.Errorf("fetch lobby %s: %w", key, err)
		}
		if err := ls[i].Unmarshal([]byte(val)); err != nil {
			return nil, fmt.Errorf("unmarshal lobby %s: %w", key, err)
		}
	}
	return ls, nil
}

// Delete implementation for lobby in redis.
func (s *Store) Delete(ctx context.Context, filter lobby.Filter) error {
	if err := s.Del(lobbyKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove lobby %s: %w", filter.ID, err)
	}
	return nil
}
