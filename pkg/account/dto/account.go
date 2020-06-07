package dto

import (
	"regexp"
	"strings"

	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

var (
	emailValidation = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
)

// AuthReq request type commonly embed in other dto to authorize a route.
type AuthReq struct {
	Email string `json:"email"`
	Token string `json:"token"`
}

// Check returns if subscription request is valid.
func (r AuthReq) Check() error {
	if _, err := gulid.Parse(r.Token); err != nil {
		return err
	}

	return nil
}

// SubscribeReq request type for subscribe route.
type SubscribeReq struct {
	Alias    string `json:"alias"`
	Email    string `json:"email"`
	Password string `json:"password"`
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
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// SigninReq request type for signin route.
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
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// SigninResp response type for signin route.
type SigninResp struct {
	Token string `json:"token"`
}

// SignoutReq request type for signin route.
type SignoutReq struct {
	Email string `json:"email"`
	Token string `json:"token"`
}

// Check returns if subscription request is valid.
func (r SignoutReq) Check() error {

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
	if len(r.Token) == 0 {
		return gerrors.ErrInvalidRequest{
			Key:   "token",
			Value: r.Token,
			Rules: []string{
				"contains at least 1 character",
			},
		}
	}

	return nil
}

// UnsubscribeReq request type for unsubscribe route.
type UnsubscribeReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Check returns if unsubscription request is valid.
func (r UnsubscribeReq) Check() error {

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
				"contains at least 1 character",
			},
		}
	}

	return nil
}
