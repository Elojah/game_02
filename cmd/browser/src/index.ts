import {grpc} from "@improbable-eng/grpc-web";
import {Auth} from "@cmd/auth/grpc/auth_pb_service";
import {Subscribe} from "@pkg/account/dto/account_pb";
import {CreateButton} from "@cmd/browser/src/component/button";
import * as PIXI from 'pixi.js';

function main() {
  // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1
  });

  // The application will create a canvas element for you that you
  // can then insert into the DOM
  document.body.style.margin = '0'
  document.body.appendChild(app.view);

  app.loader.add(
    [
      'background_0.png',
      'yellow_button00.png',
      'yellow_button01.png',
      'theme.png'
    ]
  ).load(function(){
    console.log("start setup")
    setup(app)
  });
}
main();

function setup(app: PIXI.Application) {

  // create a background
  const background = new PIXI.Sprite(app.loader.resources['background_0.png'].texture);
  background.width = app.screen.width;
  background.height = app.screen.height;

  // add background to stage
  app.stage.addChild(background);

  const textureDefault = app.loader.resources['theme.png'].texture
  textureDefault.frame = new PIXI.Rectangle(200, 113, 168, 50)
  const textureDown = app.loader.resources['theme.png'].texture
  textureDown.frame = new PIXI.Rectangle(200, 241, 168, 50)
  const textureOver = app.loader.resources['theme.png'].texture
  textureOver.frame = new PIXI.Rectangle(200, 177, 168, 50)

  const login = CreateButton({
    text: 'LOGIN',
    x: app.screen.width/2,
    y: app.screen.height/2,
    textureDefault: textureDefault,
    textureDown: textureDown,
    textureOver: textureOver,
  })
  app.stage.addChild(login);
  login.children.map(function(v){
    app.stage.addChild(v)
  })
}

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
