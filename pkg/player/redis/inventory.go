package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/player"
)

const (
	inventoryKey = "inventory_player:"
)

// Upsert implementation for player in redis.
func (s *Store) UpsertInventory(ctx context.Context, inv player.Inventory) error {
	raw, err := inv.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(inventoryKey+inv.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert inventory %s: %w", inv.ID.String(), err)
	}

	return nil
}

// Fetch implementation for player in redis.
func (s *Store) FetchInventory(ctx context.Context, filter player.FilterInventory) (player.Inventory, error) {
	val, err := s.Get(inventoryKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return player.Inventory{}, fmt.Errorf("fetch inventory %s: %w", filter.ID.String(), err)
		}

		return player.Inventory{}, fmt.Errorf(
			"fetch inventory %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: inventoryKey, Index: filter.ID.String() + ":" + filter.ID.String()},
		)
	}

	var inv player.Inventory
	if err := inv.Unmarshal([]byte(val)); err != nil {
		return player.Inventory{}, fmt.Errorf("fetch inventory %s: %w", filter.ID.String(), err)
	}

	return inv, nil
}

// Delete implementation for player in redis.
func (s *Store) DeleteInventory(ctx context.Context, filter player.FilterInventory) error {
	if err := s.Del(inventoryKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove inventory %s: %w", filter.ID.String(), err)
	}

	return nil
}
