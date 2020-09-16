package main

import (
	"errors"

	"github.com/elojah/game_02/cmd/mapper/grpc"
	gerrors "github.com/elojah/game_02/pkg/errors"
	"github.com/elojah/game_02/pkg/space"
	"github.com/elojah/game_02/pkg/space/dto"
	"github.com/gogo/status"
	"github.com/hashicorp/go-multierror"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
)

func (h handler) ListTileSets(request *dto.ListSet, stream grpc.Mapper_ListTileSetsServer) error {
	ctx := stream.Context()
	logger := log.With().Str("method", "list_tile_sets").Logger()

	// #Request processing
	if request == nil {
		err := gerrors.ErrNullRequest{}
		logger.Error().Err(err).Msg("null request")

		return status.New(codes.InvalidArgument, err.Error()).Err()
	}

	// #Check credentials
	if _, err := h.account.Authorize(ctx, request.Auth.ID, request.Auth.Token); err != nil {
		if errors.As(err, &gerrors.ErrInvalidCredentials{}) {
			logger.Error().Err(err).Msg("invalid credentials")

			return status.New(codes.Unauthenticated, err.Error()).Err()
		}

		logger.Error().Err(err).Msg("failed to authenticate")

		return status.New(codes.Internal, err.Error()).Err()
	}

	// #Fetch tilesets
	c := make(chan space.TileSet, h.c.BufferTileSets)

	var result error

	go func() {
		// #Send tileset through stream
		for ts := range c {
			local := ts
			if err := stream.Send(&local); err != nil {
				result = multierror.Append(result, err)
			}
		}
	}()

	if err := h.space.FetchManyTileSet(ctx, c, space.FilterTileSet{IDs: request.IDs}); err != nil {
		close(c)
		logger.Error().Err(err).Msg("failed to fetch tilesets")

		return status.New(codes.Internal, err.Error()).Err()
	}

	close(c)

	if result != nil {
		return status.New(codes.Internal, result.Error()).Err()
	}

	return nil

}
