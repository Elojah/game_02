package dto

import (
	"regexp"
	"strings"

	gerrors "github.com/elojah/game_02/pkg/errors"
)

var (
	emailValidation = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
)

// SubscribeReq request type for subscribe route.
type SubscribeReq struct {
	Alias    string
	Email    string
	Password string
}

// Check returns if subscription request is valid.
func (r SubscribeReq) Check() error {

	// Alias check
	if len(r.Alias) < 3 || len(r.Alias) > 20 ||
		strings.IndexFunc(r.Alias, func(r rune) bool {
			return (r < 'A' || r > 'z') && (r < '0' || r > '9') && (r != '_')
		}) != -1 {
		return gerrors.ErrInvalidRequest{
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
		return gerrors.ErrInvalidRequest{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Password) == 0 {
		return gerrors.ErrInvalidRequest{
			Key:   "password",
			Value: r.Password,
			Rules: []string{
				"contains more than 1 character",
			},
		}
	}

	return nil
}

// SigninReq request type for Signin route.
type SigninReq struct {
	Email    string
	Password string
}

// Check returns if subscription request is valid.
func (r SigninReq) Check() error {

	// Email check
	if len(r.Email) == 0 || !emailValidation.MatchString(r.Email) {
		return gerrors.ErrInvalidRequest{
			Key:   "email",
			Value: r.Email,
			Rules: []string{
				"is valid email format",
			},
		}
	}

	// Password check
	if len(r.Password) == 0 {
		return gerrors.ErrInvalidRequest{
			Key:   "password",
			Value: r.Password,
			Rules: []string{
				"contains more than 1 character",
			},
		}
	}

	return nil
}
