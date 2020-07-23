package http

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"

	"github.com/elojah/game_02/pkg/space"
	"github.com/elojah/game_02/pkg/space/dto"
)

// Client websocket dialer.
type Client struct {
	*http.Client

	MapperURL string
}

func (cl *Client) Dial(c Config) error {
	cl.Client = &http.Client{}
	cl.MapperURL = c.MapperURL

	return nil
}

func (cl *Client) Close() error {
	return nil
}

func (cl *Client) PostSectorRandom(ctx context.Context, req dto.PostSectorRandom) (space.Area, error) {
	raw, err := json.Marshal(req)
	if err != nil {
		return space.Area{}, err
	}

	resp, err := cl.Post(cl.MapperURL, "application/json", bytes.NewReader(raw))
	if err != nil {
		return space.Area{}, err
	}

	var a space.Area
	if err := json.NewDecoder(resp.Body).Decode(&a); err != nil {
		return space.Area{}, err
	}

	return a, resp.Body.Close()
}
