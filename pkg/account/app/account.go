package app

import (
	"context"
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
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

	// #Generate token
	ac.Token = gulid.NewID()

	// #Update account with token
	if err := a.Upsert(ctx, ac); err != nil {
		return account.A{}, err
	}

	return ac, nil
}

func (a *A) Logout(ctx context.Context, email string, token string) (account.A, error) {

	// #Check if account already exist with email
	ac, err := a.Fetch(ctx, account.Filter{Email: email})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			return account.A{}, &gerrors.ErrNotFound{
				Resource: "account",
				Index:    email,
			}
		}
		return account.A{}, err
	}

	// #Remove token from account
	ac.Token = gulid.ID{}

	// #Update account with removed token
	if err := a.Upsert(ctx, ac); err != nil {
		return account.A{}, err
	}

	return ac, nil
}
