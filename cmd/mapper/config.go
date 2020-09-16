package main

import (
	"github.com/elojah/game_02/pkg/errors"
)

// Config is web server structure config.
type Config struct {
	Address string `json:"address"`
	Cert    string `json:"cert"`
	Key     string `json:"key"`

	BufferSectors  uint `json:"buffer_sectors"`
	BufferTileSets uint `json:"buffer_tilesets"`
}

// Dial set the config from a config namespace.
func (c *Config) Dial(fileconf interface{}) error {
	fconf, ok := fileconf.(map[string]interface{})
	if !ok {
		return errors.ErrEmptyNamespace{}
	}

	cAddress, ok := fconf["address"]
	if !ok {
		return errors.ErrMissingKey{Key: "address"}
	}

	if c.Address, ok = cAddress.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "address",
			Expect: "string",
			Value:  cAddress,
		}
	}

	cCert, ok := fconf["cert"]
	if !ok {
		return errors.ErrMissingKey{Key: "cert"}
	}

	if c.Cert, ok = cCert.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "cert",
			Expect: "string",
			Value:  cCert,
		}
	}

	cKey, ok := fconf["key"]
	if !ok {
		return errors.ErrMissingKey{Key: "key"}
	}

	if c.Key, ok = cKey.(string); !ok {
		return errors.ErrInvalidType{
			Key:    "key",
			Expect: "string",
			Value:  cKey,
		}
	}

	cBufferSectors, ok := fconf["buffer_sectors"]
	if !ok {
		return errors.ErrMissingKey{Key: "buffer_sectors"}
	}

	f, ok := cBufferSectors.(float64)
	if !ok {
		return errors.ErrInvalidType{
			Key:    "buffer_sectors",
			Expect: "number",
			Value:  cBufferSectors,
		}
	}
	c.BufferSectors = uint(f)

	cBufferTileSets, ok := fconf["buffer_tile_sets"]
	if !ok {
		return errors.ErrMissingKey{Key: "buffer_tile_sets"}
	}

	f, ok = cBufferTileSets.(float64)
	if !ok {
		return errors.ErrInvalidType{
			Key:    "buffer_tile_sets",
			Expect: "number",
			Value:  cBufferTileSets,
		}
	}
	c.BufferTileSets = uint(f)

	return nil
}
