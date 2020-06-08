package redis

import (
	"github.com/elojah/game_02/pkg/item"
	"github.com/elojah/redis"
)

var _ item.Store = (*Store)(nil)

// Store for item in redis.
type Store struct {
	*redis.Service
}
