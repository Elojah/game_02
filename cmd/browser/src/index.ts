import * as Phaser from "phaser";
import {Menu} from "@cmd/browser/src/scene/menu";
import {Lobby} from "@cmd/browser/src/scene/lobby";

function main() {

  const config: Phaser.Types.Core.GameConfig = {
    title: 'GAME_02',
    type: Phaser.AUTO,
    parent: 'main',
    scale: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    dom: {
      createContainer: true
    }
    // physics: {
    //   default: 'arcade',
    //   arcade: {
    //     debug: true,
    //   },
    // },
    // parent: 'game',
    // backgroundColor: '#000000',
  };

  const g = new Phaser.Game(config)
  g.scene.add('menu', new Menu({
    key: 'menu',
    active: true,
    visible: true,
  }))
  g.scene.add('lobby', new Lobby({
    key: 'lobby',
    active: false,
    visible: true,
  }))
  g.scene.start('menu')
};

main();