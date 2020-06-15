package errors

import (
	"fmt"
)

// ErrMissingKey is raised when a config key is missing.
type ErrMissingKey struct {
	Key string
}

// Error implementation for ErrMissingKey.
func (e ErrMissingKey) Error() string {
	return fmt.Sprintf("missing key %s", e.Key)
}

// ErrEmptyNamespace is raised when config namespace is empty.
type ErrEmptyNamespace struct{}

// Error implementation for ErrEmptyNamespace.
func (e ErrEmptyNamespace) Error() string {
	return "empty namespace"
}

// ErrInvalidType is raised when config value is wrong type.
type ErrInvalidType struct {
	Key    string
	Expect string
	Value  interface{}
}

// Error implementation for ErrInvalidType.
func (e ErrInvalidType) Error() string {
	return fmt.Sprintf("key %s invalid. expect %s got %v", e.Key, e.Expect, e.Value)
}
