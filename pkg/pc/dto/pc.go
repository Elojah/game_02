package dto

import (
	"strings"

	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// SetPC represents the payload to send to create a new PC.
type SetPC struct {
	Name  string
	Type  gulid.ID
	Spawn gulid.ID
}

// Check checks setpc validity.
func (spc SetPC) Check() error {
	l := len(spc.Name)
	if l < 4 || l > 24 || strings.IndexFunc(spc.Name, func(r rune) bool {
		return (r < 'A' || r > 'z') && (r < '0' || r > '9') && (r != '_')
	}) != -1 {
		return gerrors.ErrInvalidPCName{Name: spc.Name}
	}
	return nil
}

// DelPC represents the payload to delete a PC.
type DelPC struct {
	PC gulid.ID
}

// ConnectPC represents the payload to connect to an existing PC.
type ConnectPC struct {
	PC gulid.ID
}

// EntityPC represents the response when connecting to an existing PC.
type EntityPC struct {
	ID gulid.ID
}
