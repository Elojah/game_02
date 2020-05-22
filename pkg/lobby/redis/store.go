package redis

import (
	"github.com/elojah/game_02/pkg/lobby"
	"github.com/elojah/redis"
)

var _ lobby.Store = (*Store)(nil)

// Store for lobby in redis.
type Store struct {
	*redis.Service
}
