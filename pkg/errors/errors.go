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

// ErrInvalidKey is raised when an input field is not valid.
type ErrInvalidKey struct {
	Key   string
	Value string

	Rules []string
}

// Error implementation for ErrInvalidRequest.
func (e ErrInvalidKey) Error() string {
	var b strings.Builder

	b.WriteString(fmt.Sprintf("invalid %s (%s):", e.Key, e.Value))

	for _, r := range e.Rules {
		b.WriteRune('\n')
		b.WriteString(r)
	}

	return b.String()
}

// ErrNullRequest is raised when a request is null and shouldn't.
type ErrNullRequest struct{}

// Error implementation for ErrNullRequest.
func (e ErrNullRequest) Error() string {
	return "null request"
}

// ErrDuplicateEmail is raised when an account creation failed because of a duplicate email.
type ErrDuplicateEmail struct {
	Email string
}

// Error implementation for ErrDuplicateEmail.
func (e ErrDuplicateEmail) Error() string {
	return fmt.Sprintf("account for email %s already exists", e.Email)
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

// ErrInternalLogic is raised when an internal logic is not respected.
// Don't use it for everything plz.
type ErrInternalLogic struct {
	Logic string
}

// Error implementation for ErrInternalLogic.
func (e ErrInternalLogic) Error() string {
	return e.Logic
}
