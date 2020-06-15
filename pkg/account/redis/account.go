package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

const (
	accountKey = "account:"
)

// Upsert implementation for account in redis.
func (s *Store) Upsert(ctx context.Context, a account.A) error {
	raw, err := a.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(accountKey+a.Email, raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert account %s: %w", a.Alias, err)
	}

	return nil
}

// Fetch implementation for account in redis.
func (s *Store) Fetch(ctx context.Context, filter account.Filter) (account.A, error) {
	val, err := s.Get(accountKey + filter.Email).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return account.A{}, fmt.Errorf("fetch account %s: %w", filter.Email, err)
		}

		return account.A{}, fmt.Errorf(
			"fetch account %s: %w",
			filter.Email,
			gerrors.ErrNotFound{Resource: accountKey, Index: filter.Email},
		)
	}

	var a account.A
	if err := a.Unmarshal([]byte(val)); err != nil {
		return account.A{}, fmt.Errorf("fetch account %s: %w", filter.Email, err)
	}

	return a, nil
}

// Delete implementation for account in redis.
func (s *Store) Delete(ctx context.Context, filter account.Filter) error {
	if err := s.Del(accountKey + filter.Email).Err(); err != nil {
		return fmt.Errorf("remove account %s: %w", filter.Email, err)
	}

	return nil
}
