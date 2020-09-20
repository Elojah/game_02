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

    const style = new PIXI.TextStyle();
    const text = new PIXI.Text(b.text, style);
    text.x = b.x
    text.y = b.y
    text.anchor.set(0.5, 0.5)
    result.addChild(text)

    result.x = b.x
    result.y = b.y
    result.anchor.set(0.5, 0.5)

    result.interactive = true
    result.buttonMode = true

    var down = false
    var over = false

    const onButtonDown = () => {
        down = true;
        result.texture = b.textureDown;
        result.alpha = 1;
    }
    
    const onButtonUp = () => {
        down = false;
        if (over) {
            result.texture = b.textureOver;
        } else {
            result.texture = b.textureDefault;
        }
    }
    
    const onButtonOver = () => {
        over = true;
        if (down) {
            return;
        }
        result.texture = b.textureOver;
    }
    
    const onButtonOut = () => {
        result.isOver = false;
        if (result.isdown) {
            return;
        }
        result.texture = b.textureDefault;
    }

    result
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    return result
}
