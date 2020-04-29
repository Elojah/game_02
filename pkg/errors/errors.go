package errors

import "fmt"

// ErrInvalidPCName raised when a pc is created with an invalid name.
type ErrInvalidPCName struct {
	Name string
}

// Error implementation for ErrInvalidPCName.
func (e ErrInvalidPCName) Error() string {
	return fmt.Sprintf("name %s is invalid", e.Name)
}

// ErrNotFound is raised when an object is not found.
type ErrNotFound struct {
	Resource string
	Index    string
}

// Error implementation for ErrNotFound.
func (e ErrNotFound) Error() string {
	return fmt.Sprintf("resource %s not found for %s", e.Resource, e.Index)
}
