package http

import (
	"github.com/elojah/game_02/pkg/errors"
)

// Config for game object.
type Config struct {
	MapperURL string
}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	fconf, ok := fileconf.(map[string]interface{})
	if !ok {
		return errors.ErrEmptyNamespace{}
	}

	cMapperURL, ok := fconf["mapper_url"]
	if !ok {
		return errors.ErrMissingKey{Key: "mapper_url"}
	}

	if c.MapperURL, ok = cMapperURL.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "mapper_url",
			Expect: "string",
			Value:  cMapperURL,
		}
	}

	return nil
}
