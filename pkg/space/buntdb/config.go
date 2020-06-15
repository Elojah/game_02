package buntdb

import (
	"github.com/elojah/game_02/pkg/errors"
)

// Config is buntdb structure config.
type Config struct {
	IndexName    string
	IndexPattern string
}

// Equal returns is both configs are equal.
func (c Config) Equal(rhs Config) bool {
	return c.IndexName == rhs.IndexName && c.IndexPattern == rhs.IndexPattern
}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	fconf, ok := fileconf.(map[string]interface{})
	if !ok {
		return errors.ErrEmptyNamespace{}
	}

	cIndexName, ok := fconf["index_name"]
	if !ok {
		return errors.ErrMissingKey{Key: "index_name"}
	}

	if c.IndexName, ok = cIndexName.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "index_name",
			Expect: "string",
			Value:  cIndexName,
		}
	}

	cIndexPattern, ok := fconf["index_pattern"]
	if !ok {
		return errors.ErrMissingKey{Key: "index_pattern"}
	}

	if c.IndexPattern, ok = cIndexPattern.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "index_pattern",
			Expect: "string",
			Value:  cIndexPattern,
		}
	}

	return nil
}
