package main

import "errors"

// Config for game object.
type Config struct{}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	fconf, ok := fileconf.(map[string]interface{})
	if !ok {
		return errors.New("namespace empty")
	}

	_ = fconf

	return nil
}
