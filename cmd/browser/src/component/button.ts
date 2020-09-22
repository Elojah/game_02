import * as PIXI from 'pixi.js';

interface Button {
    text: PIXI.Text,
    style:  PIXI.TextStyle,
    x: number;
    y: number;

    textureDefault: PIXI.Texture;
    textureDown: PIXI.Texture;
    textureOver: PIXI.Texture;

    sprite?: PIXI.Sprite;
    down?: boolean;
    over?: boolean;
}

export function createButton(b: Button, stage: PIXI.Container) {
    b.down = false
    b.over = false

    b.text.anchor.set(0.5, 0.5)
    b.text.x = b.x
    b.text.y = b.y

    b.sprite = new PIXI.Sprite(b.textureDefault)
    b.sprite.anchor.set(0.5, 0.5)
    b.sprite.x = b.x
    b.sprite.y = b.y

    b.sprite.interactive = true
    b.sprite.buttonMode = true

    b.sprite.addChild(b.text)

    b.sprite
        .on('pointerdown', onButtonDown.bind(b))
        .on('pointerup', onButtonUp.bind(b))
        .on('pointerupoutside', onButtonUp.bind(b))
        .on('pointerover', onButtonOver.bind(b))
        .on('pointerout', onButtonOut.bind(b));

    stage.addChild(b.sprite!)
    stage.addChild(b.text)

    return b
}

function onButtonDown() {
    const b = this as unknown as Button
    console.log("onButtonDown:", b)
    b.down = true;
    b.sprite!.texture = b.textureDown;
    b.sprite!.alpha = 1;
}

function onButtonUp() {
    const b = this as unknown as Button
    b.down = false;
    if (b.over) {
        b.sprite!.texture = b.textureOver;
    } else {
        b.sprite!.texture = b.textureDefault;
    }
}

function onButtonOver() {
    const b = this as unknown as Button
    b.over = true;
    if (b.down) {
        return;
    }
    b.sprite!.texture = b.textureOver;
}

function onButtonOut() {
    const b = this as unknown as Button
    b.over = false;
    if (b.down) {
        return;
    }
    b.sprite!.texture = b.textureDefault;
}
