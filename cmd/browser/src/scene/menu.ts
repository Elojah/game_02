import {Scene} from "phaser";

export class Menu extends Scene {
    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.html('login', 'html/text_input.html')
        this.load.image('background', 'background_menu.png')
        this.load.image('theme', 'theme.png')
    }
    create() {
        this.add.image(0, 0, 'background').setOrigin(0)
        const login = this.add.dom(0, 0).createFromCache('login').setOrigin(0);
        login.addListener('click');
        login.on('click', function () {console.log("hey")})
    }
    update() {}
}