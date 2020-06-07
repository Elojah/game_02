package redis

import (
	"github.com/elojah/game_02/pkg/entity"
	"github.com/elojah/redis"
)

var _ entity.Store = (*Store)(nil)
var _ entity.StoreTemplate = (*Store)(nil)

// Store for entity in redis.
type Store struct {
	*redis.Service
}
