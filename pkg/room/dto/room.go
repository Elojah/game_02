package dto

import (
	"strconv"

	gerrors "github.com/elojah/game_02/pkg/errors"
)

func (r Connect) Check() error {
	return nil
}

func (r Create) Check() error {
	if err := r.Map.Check(); err != nil {
		return err
	}

	if len(r.Name) == 0 {
		return gerrors.ErrInvalidKey{
			Key:   "name",
			Value: r.Name,
			Rules: []string{"must not be empty"},
		}
	}

	if r.SectorDimensions.X < 100 || r.SectorDimensions.X > 1000 {
		return gerrors.ErrInvalidKey{
			Key:   "sector_dimensions.x",
			Value: strconv.FormatUint(r.SectorDimensions.X, 10),
			Rules: []string{"must be between 100 and 1000"},
		}
	}

	if r.SectorDimensions.Y < 100 || r.SectorDimensions.Y > 1000 {
		return gerrors.ErrInvalidKey{
			Key:   "sector_dimensions.x",
			Value: strconv.FormatUint(r.SectorDimensions.Y, 10),
			Rules: []string{"must be between 100 and 1000"},
		}
	}

	return nil
}
