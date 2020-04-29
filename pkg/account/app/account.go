package app

import (
	"context"
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
)

// A application layer for account.
type A struct {
	account.Store
}

func (a *A) Login(ctx context.Context, email string, password string) (account.A, error) {

	// #Check if account already exist with email
	ac, err := a.Fetch(ctx, account.Filter{Email: email})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			return account.A{}, &gerrors.ErrInvalidCredentials{}
		}
		return account.A{}, err
	}

	// #Check password
	if err := bcrypt.CompareHashAndPassword(ac.Password, []byte(password)); err != nil {
		return account.A{}, &gerrors.ErrInvalidCredentials{}
	}

	return ac, nil
}
