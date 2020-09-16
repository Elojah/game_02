package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis/v8"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

const (
	emailKey = "email:"
)

// UpsertEmail implementation for account in redis.
func (s *Store) UpsertEmail(ctx context.Context, a account.A) error {
	if err := s.Set(ctx, emailKey+a.Email, a.ID.String(), 0).Err(); err != nil {
		return fmt.Errorf("upsert email %s: %w", a.Email, err)
	}

	return nil
}

// FetchEmail implementation for account in redis.
func (s *Store) FetchEmail(ctx context.Context, filter account.FilterEmail) (gulid.ID, error) {
	val, err := s.Get(ctx, emailKey+filter.Email).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return gulid.Zero(), fmt.Errorf("fetch email %s: %w", filter.Email, err)
		}

		return gulid.Zero(), fmt.Errorf(
			"fetch email %s: %w",
			filter.Email,
			gerrors.ErrNotFound{Resource: emailKey, Index: filter.Email},
		)
	}

	var id gulid.ID

	if id, err = gulid.Parse(val); err != nil {
		return gulid.Zero(), fmt.Errorf("fetch email %s: %w", filter.Email, err)
	}

	return id, nil
}

// DeleteEmail implementation for account in redis.
func (s *Store) DeleteEmail(ctx context.Context, filter account.FilterEmail) error {
	if err := s.Del(ctx, emailKey+filter.Email).Err(); err != nil {
		return fmt.Errorf("remove email %s: %w", filter.Email, err)
	}

	return nil
}
