package entity

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// FilterTemplate object for entity template domain.
type FilterTemplate struct {
	ID gulid.ID
}

// StoreTemplate layer for entity template domain.
type StoreTemplate interface {
	UpsertTemplate(context.Context, Template) error
	FetchTemplate(context.Context, FilterTemplate) (Template, error)
	DeleteTemplate(context.Context, FilterTemplate) error
}
