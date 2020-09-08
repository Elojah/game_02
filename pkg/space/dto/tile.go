package dto

import (
	"fmt"
	"strconv"

	"github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
)

func (r CreateMap) Check() error {
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

	if r.NPlatforms < 2 || r.NPlatforms > maxDimension {
		return errors.ErrInvalidNumericalRange{
			Key:   "n_platforms",
			Min:   2, // nolint: gomnd
			Max:   maxDimension,
			Value: int(r.NPlatforms),
		}
	}

	if r.PlatformSize < minDimension || r.PlatformSize > maxDimension {
		return errors.ErrInvalidNumericalRange{
			Key:   "platform_size",
			Min:   minDimension,
			Max:   maxDimension,
			Value: int(r.PlatformSize),
		}
	}

	if r.PathWidth < minDimension || r.PathWidth > maxDimension {
		return errors.ErrInvalidNumericalRange{
			Key:   "path_width",
			Min:   minDimension,
			Max:   maxDimension,
			Value: int(r.PathWidth),
		}
	}

	return nil
}

func (r ReadSet) Check() error {
	return nil
}

func (r CreateSet) Check() error {
	if r.Set.Name == "" {
		return errors.ErrMissingKey{
			Key: "name",
		}
	}

	if !(r.Set.Size_ > 0) {
		return errors.ErrInvalidKey{
			Key:   "size",
			Value: strconv.FormatUint(r.Set.Size_, 10),
			Rules: []string{"must be > 0"},
		}
	}

	if !(r.Set.X > 0) {
		return errors.ErrInvalidKey{
			Key:   "x",
			Value: strconv.FormatUint(r.Set.X, 10),
			Rules: []string{"must be > 0"},
		}
	}

	if !(r.Set.Y > 0) {
		return errors.ErrInvalidKey{
			Key:   "y",
			Value: strconv.FormatUint(r.Set.Y, 10),
			Rules: []string{"must be > 0"},
		}
	}

	if len(r.Set.Terrains) == 0 {
		return errors.ErrMissingKey{
			Key: "terrains",
		}
	}

	for key, name := range space.Terrain_name {
		if _, ok := r.Set.Terrains[key]; !ok {
			return errors.ErrInvalidKey{
				Key:   "terrains",
				Value: "nil",
				Rules: []string{fmt.Sprintf("must contain key %d (%s)", key, name)},
			}
		}
	}

	return nil
}
