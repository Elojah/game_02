package buntdb

import (
	"github.com/elojah/buntdb"
	"github.com/elojah/game_02/pkg/space"
)

var _ space.Store = (*Store)(nil)

// Store for item in buntdb.
type Store struct {
	*buntdb.Service
}
