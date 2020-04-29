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
