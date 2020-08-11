package redis

import (
	"github.com/elojah/game_02/pkg/space"
	"github.com/elojah/redis"
)

var _ space.StoreSector = (*Store)(nil)
var _ space.StoreWorld = (*Store)(nil)

// Store for space in redis.
type Store struct {
	*redis.Service
}
