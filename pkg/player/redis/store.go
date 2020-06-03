package redis

import (
	"github.com/elojah/game_02/pkg/player"
	"github.com/elojah/redis"
)

var _ player.Store = (*Store)(nil)

// Store for entity in redis.
type Store struct {
	*redis.Service
}
