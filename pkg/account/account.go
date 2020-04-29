package account

type Filter struct {
	Alias string
}

// Store layer for account domain.
type Store interface {
	Upsert(A) error
	Fetch(Filter) (A, error)
	Delete(Filter) error
}

// Application layer for account domain.
type App interface {
	Store
}
