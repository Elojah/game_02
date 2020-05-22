package redis

import (
	"github.com/elojah/game_02/pkg/account"
	"github.com/elojah/redis"
)

var _ account.Store = (*Store)(nil)

// Store for account in redis.
type Store struct {
	*redis.Service
}
