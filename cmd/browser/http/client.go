package http

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/json"
	"net/http"

	"github.com/elojah/game_02/pkg/room"
	"github.com/elojah/game_02/pkg/room/dto"
)

// Client websocket dialer.
type Client struct {
	*http.Client

	CreateRoomURL string
}

func (cl *Client) Dial(c Config) error {
	cl.Client = &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true}, // nolint: gosec
		},
	}
	cl.CreateRoomURL = c.CreateRoomURL

	return nil
}

func (cl *Client) Close() error {
	return nil
}

func (cl *Client) CreateRoom(ctx context.Context, params dto.CreateRoom) (room.R, error) {
	raw, err := json.Marshal(params)
	if err != nil {
		return room.R{}, err
	}

	req, err := http.NewRequest(http.MethodPost, cl.CreateRoomURL, bytes.NewReader(raw))
	if err != nil {
		return room.R{}, err
	}

	req.Header.Set("Origin", "https://localhost:8080")

	resp, err := cl.Do(req)
	if err != nil {
		return room.R{}, err
	}

	var a room.R
	if err := json.NewDecoder(resp.Body).Decode(&a); err != nil {
		return room.R{}, err
	}

	return a, resp.Body.Close()
}
