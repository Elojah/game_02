package redis

import (
	"context"
	"errors"
	"fmt"

	"github.com/go-redis/redis"

	"github.com/elojah/game_02/pkg/entity"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

const (
	templateKey = "template_entity:"
)

// UpsertTemplate implementation for entity template in redis.
func (s *Store) UpsertTemplate(ctx context.Context, t entity.Template) error {
	raw, err := t.Marshal()
	if err != nil {
		return err
	}

	if err := s.Set(templateKey+t.ID.String(), raw, 0).Err(); err != nil {
		return fmt.Errorf("upsert template %s: %w", t.ID.String(), err)
	}

	return nil
}

// FetchTemplate implementation for entity template in redis.
func (s *Store) FetchTemplate(ctx context.Context, filter entity.FilterTemplate) (entity.Template, error) {
	val, err := s.Get(templateKey + filter.ID.String()).Result()
	if err != nil {
		if !errors.Is(err, redis.Nil) {
			return entity.Template{}, fmt.Errorf("fetch template %s: %w", filter.ID.String(), err)
		}

		return entity.Template{}, fmt.Errorf(
			"fetch template %s: %w",
			filter.ID.String(),
			gerrors.ErrNotFound{Resource: templateKey, Index: filter.ID.String()},
		)
	}

	var t entity.Template
	if err := t.Unmarshal([]byte(val)); err != nil {
		return entity.Template{}, fmt.Errorf("fetch template %s: %w", filter.ID.String(), err)
	}

	return t, nil
}

// DeleteTemplate implementation for entity template in redis.
func (s *Store) DeleteTemplate(ctx context.Context, filter entity.FilterTemplate) error {
	if err := s.Del(templateKey + filter.ID.String()).Err(); err != nil {
		return fmt.Errorf("remove template %s: %w", filter.ID.String(), err)
	}

	return nil
}
