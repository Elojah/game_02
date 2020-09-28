import {Scene} from "phaser";
import {grpc} from "@improbable-eng/grpc-web";

export class Lobby extends Scene {
    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.image('background_lobby', 'background_lobby.png')
    }
    create() {
        this.add.image(0, 0, 'background_lobby').setOrigin(0)

        // this.HTMLsubscribe = this.add.dom(60, 30).createFromCache('subscribe').setOrigin(0);
        // this.HTMLsubscribe.addListener('click');
        // this.HTMLsubscribe.on('click', this.subscribe, this)

        // this.HTMLsignin = this.add.dom(60, 120).createFromCache('signin').setOrigin(0);
        // this.HTMLsignin.addListener('click');
        // this.HTMLsignin.on('click', this.signin, this)
    }
    update() {}
}