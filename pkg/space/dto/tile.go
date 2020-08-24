package dto

import (
	"github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/geometry"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// CreateTileMap request required in create room route.
type CreateTileMap struct {
	Dimensions        geometry.Vec3 `json:"dimensions"`
	NPlatforms        uint64        `json:"n_platforms"`
	PlatformSize      uint64        `json:"platform_size"`
	PlatformVariance  uint64        `json:"platform_variance"`
	NPaths            uint64        `json:"n_paths"`
	PathVariance      uint64        `json:"path_variance"`
	PathWidth         uint64        `json:"path_width"`
	PathWidthVariance uint64        `json:"path_width_variance"`
}

func (r CreateTileMap) Check() error {
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

// GetTileSet request format for tileset route.
type GetTileSet struct {
	dto.Auth

	ID string `json:"id"`
}

func (r GetTileSet) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}
