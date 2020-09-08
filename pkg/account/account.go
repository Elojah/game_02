package account

import (
	"context"

	gulid "github.com/elojah/game_02/pkg/ulid"
)

// Filter object for account domain.
type Filter struct {
	ID gulid.ID
}

// Store layer for account domain.
type Store interface {
	Upsert(context.Context, A) error
	Fetch(context.Context, Filter) (A, error)
	Delete(context.Context, Filter) error
}

// Filter object for account email domain.
type FilterEmail struct {
	Email string
}

// Store layer for account email relation.
type StoreEmail interface {
	UpsertEmail(context.Context, A) error
	FetchEmail(context.Context, FilterEmail) (gulid.ID, error)
	DeleteEmail(context.Context, FilterEmail) error
}

// Application layer for account domain.
type App interface {
	Store
	StoreEmail
	Login(context.Context, string, string) (A, error)
	Logout(context.Context, gulid.ID, gulid.ID) (A, error)
	Authorize(context.Context, gulid.ID, gulid.ID) (A, error)
}
