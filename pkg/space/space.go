package space

// Application layer for space domain.
type App interface {
	StoreCoordinate
	StoreSector
}
