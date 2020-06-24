package ws

import (
	"context"

	"github.com/rs/zerolog/log"
	"nhooyr.io/websocket"

	accountdto "github.com/elojah/game_02/pkg/account/dto"
	"github.com/elojah/game_02/pkg/player/dto"
)

// Socket websocket dialer.
type Socket struct {
	*websocket.Conn
}

func (s Socket) Dial(c Config) error {
	var err error
	s.Conn, _, err = websocket.Dial(context.Background(), c.URL, nil)

	return err
}

func (s Socket) Close() error { // nolint
	return s.Conn.Close(websocket.StatusNormalClosure, "")
}

func (s Socket) Login(playerID string, token string) error {

	req := dto.ConnectPlayer{
		PlayerID: playerID,
		Auth:     accountdto.Auth{},
	}
	_ = req
	err = ws.Write(ctx, websocket.MessageText, []byte("hi"))
	if err != nil {
		log.Error().Err(err).Msg("failed to write message")
	}
}
