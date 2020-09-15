package main

import (
	"github.com/elojah/game_02/pkg/errors"
)

// Config is web server structure config.
type Config struct {
	Address string `json:"address"`
	Cert    string `json:"cert"`
	Key     string `json:"key"`
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

	return nil
}
