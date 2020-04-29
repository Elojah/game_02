package redis

import (
	"github.com/go-redis/redis"
	"github.com/pkg/errors"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

const (
	accountKey = "account:"
)

// Upsert implementation for account in redis.
func (s *Store) Upsert(a account.A) error {
	raw, err := a.Marshal()
	if err != nil {
		return err
	}

	return errors.Wrapf(s.Set(accountKey+a.Alias, raw, 0).Err(), "upsert account %s", a.Alias)
}

// Fetch implementation for account in redis.
func (s *Store) Fetch(filter account.Filter) (account.A, error) {

	val, err := s.Get(accountKey + filter.Alias).Result()
	if err != nil {
		if err != redis.Nil {
			return account.A{}, errors.Wrapf(err, "fetch account %s", filter.Alias)
		}
		return account.A{}, errors.Wrapf(
			gerrors.ErrNotFound{Resource: accountKey, Index: filter.Alias},
			"fetch account %s",
			filter.Alias,
		)
	}

	var a account.A
	if err := a.Unmarshal([]byte(val)); err != nil {
		return account.A{}, errors.Wrapf(err, "fetch account %s", filter.Alias)
	}
	return a, nil
}

// Delete implementation for account in redis.
func (s *Store) Delete(filter account.Filter) error {
	return errors.Wrapf(s.Del(accountKey+filter.Alias).Err(), "remove account %s", filter.Alias)
}
