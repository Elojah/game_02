package buntdb

import (
	"context"
	"fmt"
	"strconv"
	"strings"

	"github.com/elojah/game_02/pkg/geometry"
	"github.com/elojah/game_02/pkg/space"
	"github.com/tidwall/buntdb"
)

func fetchEntityID(key string) string {
	return strings.Split(key, ":")[1]
}

// UpsertCoordinate implementation for space in redis.
func (s *Store) UpsertCoordinate(ctx context.Context, coo space.Coordinate) error {
	return s.Update(func(tx *buntdb.Tx) error {
		var key, value strings.Builder
		key.WriteString(s.IndexName)
		key.WriteByte(':')
		key.WriteString(coo.EntityID.String())
		value.WriteString(":[")
		value.WriteString(strconv.FormatUint(coo.Position.X, 10))
		value.WriteByte(' ')
		value.WriteString(strconv.FormatUint(coo.Position.Y, 10))
		value.WriteByte(']')
		_, _, err := tx.Set(key.String(), value.String(), nil)
		return err
	})
}

// FetchManyCoordinate implementation for space in redis.
func (s *Store) FetchManyCoordinate(
	ctx context.Context,
	filter space.FilterCoordinate,
) (map[string]space.Coordinate, error) {
	var result map[string]space.Coordinate

	err := s.Update(func(tx *buntdb.Tx) error {
		var rect strings.Builder
		rect.WriteByte('[')
		rect.WriteString(strconv.FormatUint(filter.Rectangle.PointA.X, 10))
		rect.WriteByte(' ')
		rect.WriteString(strconv.FormatUint(filter.Rectangle.PointA.Y, 10))
		rect.WriteString("],[")
		rect.WriteString(strconv.FormatUint(filter.Rectangle.PointB.X, 10))
		rect.WriteByte(' ')
		rect.WriteString(strconv.FormatUint(filter.Rectangle.PointB.Y, 10))
		rect.WriteByte(']')
		return tx.Intersects(s.IndexName, rect.String(), func(key, val string) bool {
			min, max := buntdb.IndexRect(val)
			entityID := fetchEntityID(key)
			fmt.Println("intersects min, max:", min, max)
			result[entityID] = space.Coordinate{
				Position: geometry.Vec3{
					X: uint64(min[0]),
					Y: uint64(max[0]),
				},
			}
			return true
		})
	})

	return nil, err
}

// DeleteCoordinate implementation for space in redis.
func (s *Store) DeleteCoordinate(ctx context.Context, filter space.FilterCoordinate) (space.Coordinate, error) {
	var result space.Coordinate

	err := s.Update(func(tx *buntdb.Tx) error {
		var key strings.Builder
		key.WriteString(s.IndexName)
		key.WriteByte(':')
		key.WriteString(filter.EntityID.String())
		val, err := tx.Delete(key.String())
		if err != nil {
			return fmt.Errorf("remove coordinate %s: %w", filter.EntityID.String(), err)
		}
		min, max := buntdb.IndexRect(val)
		fmt.Println("delete min, max:", min, max)
		result = space.Coordinate{
			Position: geometry.Vec3{
				X: uint64(min[0]),
				Y: uint64(max[0]),
			},
		}
		return nil
	})

	return result, err
}
