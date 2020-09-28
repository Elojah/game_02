import {grpc} from "@improbable-eng/grpc-web";
import {Auth} from "@cmd/auth/grpc/auth_pb_service";
import {Subscribe} from "@pkg/account/dto/account_pb";
import {Menu} from "@cmd/browser/src/scene/menu";
import * as Phaser from "phaser";

function main() {

  const config: Phaser.Types.Core.GameConfig = {
    title: 'GAME_02',
    type: Phaser.AUTO,
    scale: {
      width: window.document.body.clientWidth,
      height: window.innerHeight,
    },
    // physics: {
    //   default: 'arcade',
    //   arcade: {
    //     debug: true,
    //   },
    // },
    // parent: 'game',
    backgroundColor: '#000000',
  };

  const g = new Phaser.Game(config)
  const sm = new Phaser.Scenes.SceneManager(g, {})
  sm.add('menu', new Menu({
    key: 'menu',
    active: true,
    visible: true,
  }), true)
};

main();

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
