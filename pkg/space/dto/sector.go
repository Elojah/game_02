package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

const (
	minDimension = 1
	maxDimension = 200
)

// GetSector request format for sector route.
type GetSector struct {
	dto.Auth

	ID string `json:"id"`
}

func (r GetSector) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}

// PostSectorRandom request format for post sector route.
type PostSectorRandom struct {
	dto.Auth

	Dimensions geometry.Vec3 `json:"dimensions"`
}

func (r PostSectorRandom) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if r.Dimensions.X < minDimension || r.Dimensions.X > maxDimension {
		return errors.ErrInvalidNumericalRange{
			Key:   "x",
			Min:   minDimension,
			Max:   maxDimension,
			Value: int(r.Dimensions.X),
		}
	}

	if r.Dimensions.Y < minDimension || r.Dimensions.Y > maxDimension {
		return errors.ErrInvalidNumericalRange{
			Key:   "y",
			Min:   minDimension,
			Max:   maxDimension,
			Value: int(r.Dimensions.Y),
		}
	}

	return nil
}
