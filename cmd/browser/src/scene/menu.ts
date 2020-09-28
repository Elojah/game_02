import {Scene} from "phaser";

export class Menu extends Scene {
    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.image('background', 'background_0.png')
        this.load.image('theme', 'theme.png')
    }
    create() {
        this.add.image(400, 300, 'background')
    }
    update() {}
}