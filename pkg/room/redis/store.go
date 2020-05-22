package redis

import (
	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/redis"
)

var _ room.Store = (*Store)(nil)

// Store for room in redis.
type Store struct {
	*redis.Service
}
