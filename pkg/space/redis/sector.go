package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
)

const (
	sectorKey = "sector:"
)

// UpsertSector implementation for sector in redis.
func (s *Store) UpsertSector(ctx context.Context, sec space.Sector) error {
	raw, err := sec.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(sectorKey+sec.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert sector %s: %w", sec.ID.String(), err)
	}

	return nil
}

// UpsertSectors implementation for sector in redis.
func (s *Store) UpsertSectors(ctx context.Context, secs []space.Sector) error {
	params := make(map[string][]byte, len(secs))

	for _, sec := range secs {
		raw, err := sec.Marshal()
		if err != nil {
			return err
		}

		params[sec.ID.String()] = raw
	}

	if err := s.MSet(params).Err(); err != nil {
		return fmt.Errorf("upsert %d sectors: %w", len(secs), err)
	}

	return nil
}

// FetchSector implementation for sector in redis.
func (s *Store) FetchSector(ctx context.Context, filter space.FilterSector) (space.Sector, error) {
	val, err := s.Get(sectorKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return space.Sector{}, fmt.Errorf("fetch sector %s: %w", filter.ID.String(), err)
		}

		return space.Sector{}, fmt.Errorf(
			"fetch sector %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: sectorKey, Index: filter.ID.String() + ":" + filter.ID.String()},
		)
	}

	var sec space.Sector
	if err := sec.Unmarshal([]byte(val)); err != nil {
		return space.Sector{}, fmt.Errorf("fetch sector %s: %w", filter.ID.String(), err)
	}

	return sec, nil
}

// FetchManySector implementation for sector in redis.
func (s *Store) FetchManySector(ctx context.Context, filter space.FilterSector) (map[string]space.Sector, error) {
	secs := make(map[string]space.Sector, len(filter.IDs))

	for _, id := range filter.IDs {
		val, err := s.Get(sectorKey + id.String()).Result()
		if err != nil {
			return nil, fmt.Errorf("fetch sector %s: %w", id.String(), err)
		}

		var tmp space.Sector
		if err := tmp.Unmarshal([]byte(val)); err != nil {
			return nil, fmt.Errorf("fetch items %s: %w", filter.ID.String(), err)
		}

		secs[tmp.ID.String()] = tmp
	}

	return secs, nil
}

// DeleteSector implementation for sector in redis.
func (s *Store) DeleteSector(ctx context.Context, filter space.FilterSector) error {
	if err := s.Del(sectorKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove sector %s: %w", filter.ID.String(), err)
	}

	return nil
}
