package badger

import (
	"github.com/elojah/badger"
)

// Store for user in badger.
type Store struct {
	badger.Service
}
