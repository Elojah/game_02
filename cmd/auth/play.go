package main

import (
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{} // use default options

func (h handler) play(w http.ResponseWriter, r *http.Request) {}
