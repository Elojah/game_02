package buntdb

import (
	"errors"
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
		return errors.New("namespace empty")
	}

	cIndexName, ok := fconf["index_name"]
	if !ok {
		return errors.New("missing key index_name")
	}
	if c.IndexName, ok = cIndexName.(string); !ok {
		return errors.New("key index_name invalid. must be string")
	}

	cIndexPattern, ok := fconf["index_pattern"]
	if !ok {
		return errors.New("missing key index_pattern")
	}
	if c.IndexPattern, ok = cIndexPattern.(string); !ok {
		return errors.New("key index_pattern invalid. must be string")
	}

	return nil
}
