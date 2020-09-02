package dto

import (
	"regexp"
	"strings"

	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

var (
	emailValidation = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$") // nolint: lll
)

// Check returns if subscription request is valid.
func (r Auth) Check() error {
	if _, err := gulid.Parse(r.Token); err != nil {
		return err
	}

	return nil
}

// Check returns if subscription request is valid.
func (r Subscribe) Check() error {
	// Alias check
	if len(r.Alias) < 3 || len(r.Alias) > 20 ||
		strings.IndexFunc(r.Alias, func(r rune) bool {
			return (r < 'A' || r > 'z') && (r < '0' || r > '9') && (r != '_')
		}) != -1 {
		return gerrors.ErrInvalidKey{
			Key:   "alias",
			Value: r.Alias,
			Rules: []string{
				"contains between 3 and 20 characters",
				"contains alphanumeric characters only",
			},
		}
	}

	// Email check
	if len(r.Email) == 0 || !emailValidation.MatchString(r.Email) {
		return gerrors.ErrInvalidKey{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Password) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "password",
			Value: r.Password,
			Rules: []string{
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// Check returns if subscription request is valid.
func (r Signin) Check() error {
	// Email check
	if len(r.Email) == 0 || !emailValidation.MatchString(r.Email) {
		return gerrors.ErrInvalidKey{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Password) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "password",
			Value: r.Password,
			Rules: []string{
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// Check returns if subscription request is valid.
func (r Signout) Check() error {
	// Email check
	if len(r.Email) == 0 || !emailValidation.MatchString(r.Email) {
		return gerrors.ErrInvalidKey{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Token) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "token",
			Value: r.Token,
			Rules: []string{
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// Check returns if unsubscription request is valid.
func (r Unsubscribe) Check() error {
	// Email check
	if len(r.Email) == 0 || !emailValidation.MatchString(r.Email) {
		return gerrors.ErrInvalidKey{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Password) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "password",
			Value: r.Password,
			Rules: []string{
				"contains at least 1 character",
			},
		}
	}

	return nil
}
