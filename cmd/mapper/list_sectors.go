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

func (h handler) ListSectors(request *dto.ListSector, stream grpc.Mapper_ListSectorsServer) error {
	ctx := stream.Context()
	logger := log.With().Str("method", "list_sectors").Logger()

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

	// #Fetch sectors
	c := make(chan space.Sector, h.c.BufferSectors)

	var result error

	go func() {
		// #Send sector through stream
		for sec := range c {
			local := sec
			if err := stream.Send(&local); err != nil {
				result = multierror.Append(result, err)
			}
		}
	}()

	if err := h.space.FetchManySector(ctx, c, space.FilterSector{IDs: request.IDs}); err != nil {
		close(c)
		logger.Error().Err(err).Msg("failed to fetch sectors")

		return status.New(codes.Internal, err.Error()).Err()
	}

	close(c)

	if result != nil {
		return status.New(codes.Internal, result.Error()).Err()
	}

	return nil
}
