import {Scene} from "phaser";
import {grpc} from "@improbable-eng/grpc-web";

import {Auth} from "@cmd/auth/grpc/auth_pb_service";
import {Signin, Subscribe} from "@pkg/account/dto/account_pb";

export class Menu extends Scene {

    HTMLsubscribe: Phaser.GameObjects.DOMElement;
    HTMLlogin: Phaser.GameObjects.DOMElement;

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.html('subscribe', 'html/subscribe.html')
        this.load.html('signin', 'html/signin.html')
        this.load.image('background', 'background_menu.png')
    }
    create() {
        this.add.image(0, 0, 'background').setOrigin(0)

        this.HTMLsubscribe = this.add.dom(60, 30).createFromCache('subscribe').setOrigin(0);
        this.HTMLsubscribe.addListener('click');
        this.HTMLsubscribe.on('click', this.subscribe, this)

        this.HTMLlogin = this.add.dom(60, 120).createFromCache('signin').setOrigin(0);
        this.HTMLlogin.addListener('click');
        this.HTMLlogin.on('click', this.signin, this)
    }
    update() {}
    subscribe(event: MouseEvent) {
        if ((<HTMLInputElement>event.target).name !== 'subscribe') {
            return
        }
        const alias = this.HTMLsubscribe.getChildByName('alias') as HTMLInputElement
        const email = this.HTMLsubscribe.getChildByName('email') as HTMLInputElement
        const password = this.HTMLsubscribe.getChildByName('password') as HTMLInputElement
        // Apply basic security checks for those fields
        const sub = new Subscribe();
        sub.setAlias(alias.value)
        sub.setEmail(email.value)
        sub.setPassword(password.value)
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
    signin(event: MouseEvent) {
        if ((<HTMLInputElement>event.target).name !== 'signin') {
            return
        }
        const email = this.HTMLsubscribe.getChildByName('email') as HTMLInputElement
        const password = this.HTMLsubscribe.getChildByName('password') as HTMLInputElement
        // Apply basic security checks for those fields
        const log = new Signin();
        log.setEmail(email.value)
        log.setPassword(password.value)
        grpc.unary(Auth.Signin, {
            request: log,
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
      
}
