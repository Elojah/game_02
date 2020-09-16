import {grpc} from "@improbable-eng/grpc-web";
import {Auth} from "@cmd/auth/grpc/auth_pb_service";
import {Subscribe} from "@pkg/account/dto/account_pb";
import * as PIXI from 'pixi.js';

function setup() {
  // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container
  const app = new PIXI.Application();

  // The application will create a canvas element for you that you
  // can then insert into the DOM
  document.body.appendChild(app.view);
}
setup();

function subscribe() {
  const sub = new Subscribe();
  sub.setAlias("test_grpcweb")
  sub.setEmail("test_grpcweb@test.gg")
  sub.setPassword("password")
  grpc.unary(Auth.Subscribe, {
    request: sub,
    host: "https://localhost:8081",
    onEnd: res => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("subscribe.onEnd.status", status, statusMessage);
      console.log("subscribe.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("subscribe.onEnd.message", message.toObject());
      }
      console.log("subscribe.onEnd.trailers", trailers);
    }
  });
}

// subscribe();
