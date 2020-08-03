package http

import (
	"github.com/elojah/game_02/pkg/errors"
)

// Config for game object.
type Config struct {
	CreateRoomURL string
}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	fconf, ok := fileconf.(map[string]interface{})
	if !ok {
		return errors.ErrEmptyNamespace{}
	}

	cCreateRoomURL, ok := fconf["create_room_url"]
	if !ok {
		return errors.ErrMissingKey{Key: "create_room_url"}
	}

	if c.CreateRoomURL, ok = cCreateRoomURL.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "create_room_url",
			Expect: "string",
			Value:  cCreateRoomURL,
		}
	}

	return nil
}
