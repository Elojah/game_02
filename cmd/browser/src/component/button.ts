import * as PIXI from 'pixi.js';

interface Button {
    text: string;
    x: number;
    y: number;

    textureDefault: PIXI.Texture;
    textureDown: PIXI.Texture;
    textureOver: PIXI.Texture;
}

export function CreateButton(b: Button) {
    const result = new PIXI.Sprite(b.textureDefault);


    result.x = b.x
    result.y = b.y

    result.anchor.set(0.5, 0.5)
    result.interactive = true
    result.buttonMode = true

    function onButtonDown() {
        this.isdown = true;
        this.texture = b.textureDown;
        this.alpha = 1;
    }
    
    function onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = b.textureOver;
        } else {
            this.texture = b.textureDefault;
        }
    }
    
    function onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = b.textureOver;
    }
    
    function onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = b.textureDefault;
    }

    result
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    return result
}

