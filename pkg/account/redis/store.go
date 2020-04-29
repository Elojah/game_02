package redis

import "github.com/elojah/redis"

// Store for user in redis.
type Store struct {
	*redis.Service
}
