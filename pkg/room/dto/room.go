package dto

import (
	"strconv"

	"github.com/elojah/game_02/pkg/account/dto"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/geometry"
	"github.com/elojah/game_02/pkg/room"
	spacedto "github.com/elojah/game_02/pkg/space/dto"
	gulid "github.com/elojah/game_02/pkg/ulid"
)

// RoomResp response format for room route.
type RoomResp struct {
	Room room.R `json:"room"`
}

// ConnectRoom request format for room route.
type ConnectRoom struct {
	dto.Auth

	ID       string `json:"id"`
	Password string `json:"password"`
}

func (r ConnectRoom) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if _, err := gulid.Parse(r.ID); err != nil {
		return err
	}

	return nil
}

// CreateRoom request format for room route.
type CreateRoom struct {
	dto.Auth

	spacedto.CreateTileMap

	Name     string `json:"name"`
	Password string `json:"password"`

	SectorDimensions geometry.Vec3 `json:"sector_dimensions"`
}

func (r CreateRoom) Check() error {
	if err := r.Auth.Check(); err != nil {
		return err
	}

	if err := r.CreateTileMap.Check(); err != nil {
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
