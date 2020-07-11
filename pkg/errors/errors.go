package errors

import (
	"fmt"
	"strings"
)

// ErrNotFound is raised when an object is not found.
type ErrNotFound struct {
	Resource string
	Index    string
}

// Error implementation for ErrNotFound.
func (e ErrNotFound) Error() string {
	return fmt.Sprintf("resource %s not found for %s", e.Resource, e.Index)
}

// ErrInvalidRequest is raised when an input field is not valid.
type ErrInvalidRequest struct {
	Key   string
	Value string

	Rules []string
}

// Error implementation for ErrInvalidRequest.
func (e ErrInvalidRequest) Error() string {
	var b strings.Builder

	b.WriteString(fmt.Sprintf("invalid %s (%s):", e.Key, e.Value))

	for _, r := range e.Rules {
		b.WriteRune('\n')
		b.WriteString(r)
	}

	return b.String()
}

// ErrInvalidCredentials is raised when invalid credentials are provided.
type ErrInvalidCredentials struct{}

// Error implementation for ErrInvalidCredentials.
func (e ErrInvalidCredentials) Error() string {
	return "invalid credentials"
}

// ErrInvalidToken is raised when invalid token is provided.
type ErrInvalidToken struct{}

// Error implementation for ErrInvalidToken.
func (e ErrInvalidToken) Error() string {
	return "invalid token"
}

// ErrInvalidNumericalRange is raised when a numerical value is out of range.
type ErrInvalidNumericalRange struct {
	Key   string
	Value int

	Min int
	Max int
}

// Error implementation for ErrInvalidNumericalRange.
func (e ErrInvalidNumericalRange) Error() string {
	return fmt.Sprintf("key %s must be between %d and %d. current value: %d", e.Key, e.Min, e.Max, e.Value)
}
