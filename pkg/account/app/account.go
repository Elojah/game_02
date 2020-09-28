package app

import (
	"context"
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/elojah/game_02/pkg/account"
	gerrors "github.com/elojah/game_02/pkg/errors"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

var _ account.App = (*A)(nil)

// A application layer for account.
type A struct {
	account.Store
	account.StoreEmail
}

func (a *A) Signin(ctx context.Context, email string, password string) (account.A, error) {
	// #Check if account exist
	id, err := a.FetchEmail(ctx, account.FilterEmail{Email: email})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			return account.A{}, &gerrors.ErrInvalidCredentials{}
		}

		return account.A{}, err
	}

	ac, err := a.Fetch(ctx, account.Filter{ID: id})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			return account.A{}, &gerrors.ErrInternalLogic{
				Logic: "account email valid but account not found",
			}
		}

		return account.A{}, err
	}

	// #Check password
	if err := bcrypt.CompareHashAndPassword(ac.Password, []byte(password)); err != nil {
		return account.A{}, &gerrors.ErrInvalidCredentials{}
	}

	// #Generate token
	id = gulid.NewID()
	ac.Token = &id

	// #Clean previous data
	ac.Room = nil

	// #Update account with token
	if err := a.Upsert(ctx, ac); err != nil {
		return account.A{}, err
	}

	return ac, nil
}

func (a *A) Signout(ctx context.Context, id gulid.ID, token gulid.ID) (account.A, error) {
	// #Check if account exist
	ac, err := a.Fetch(ctx, account.Filter{ID: id})
	if err != nil {
		return account.A{}, err
	}

	// #Remove token and room from account
	ac.Token = nil
	ac.Room = nil

	// #Update account with removed token
	if err := a.Upsert(ctx, ac); err != nil {
		return account.A{}, err
	}

	return ac, nil
}

func (a *A) Authorize(ctx context.Context, id gulid.ID, token gulid.ID) (account.A, error) {
	// #Check if account exist
	ac, err := a.Fetch(ctx, account.Filter{ID: id})
	if err != nil {
		if errors.As(err, &gerrors.ErrNotFound{}) {
			return account.A{}, &gerrors.ErrInvalidCredentials{}
		}

		return account.A{}, err
	}

	// #Check token validity
	if ac.Token.Compare(token) != 0 {
		return account.A{}, &gerrors.ErrInvalidToken{}
	}

	return ac, nil
}
