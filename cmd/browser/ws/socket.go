package ws

import (
	"context"

	"nhooyr.io/websocket"
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

// err = ws.Write(ctx, websocket.MessageText, []byte("hi"))
// if err != nil {
// 	log.Error().Err(err).Msg("failed to write message")
// }
