package account

import "context"

type Filter struct {
	Email string
}

// Store layer for account domain.
type Store interface {
	Upsert(context.Context, A) error
	Fetch(context.Context, Filter) (A, error)
	Delete(context.Context, Filter) error
}

// Application layer for account domain.
type App interface {
	Store
	Login(context.Context, string, string) (A, error)
}
