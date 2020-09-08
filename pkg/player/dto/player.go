package dto

import (
	gerrors "github.com/elojah/game_02/pkg/errors"
)

// Check returns if subscription request is valid.
func (r Create) Check() error {

	if len(r.Name) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "name",
			Value: r.Name,
			Rules: []string{"must not be empty"},
		}
	}

	return nil
}

// Check returns if subscription request is valid.
func (r Connect) Check() error {
	return nil
}
