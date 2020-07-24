package http

import (
	"bytes"
	"context"
	"crypto/tls"
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
	cl.Client = &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true}, // nolint: gosec
		},
	}
	cl.MapperURL = c.MapperURL

	return nil
}

func (cl *Client) Close() error {
	return nil
}

func (cl *Client) PostSectorRandom(ctx context.Context, params dto.PostSectorRandom) (space.Area, error) {
	raw, err := json.Marshal(params)
	if err != nil {
		return space.Area{}, err
	}

	req, err := http.NewRequest(http.MethodPost, cl.MapperURL, bytes.NewReader(raw))
	if err != nil {
		return space.Area{}, err
	}

	req.Header.Set("Origin", "https://localhost:8080")

	resp, err := cl.Do(req)
	if err != nil {
		return space.Area{}, err
	}

	var a space.Area
	if err := json.NewDecoder(resp.Body).Decode(&a); err != nil {
		return space.Area{}, err
	}

	return a, resp.Body.Close()
}
