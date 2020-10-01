import {Scene} from "phaser";
import {grpc} from "@improbable-eng/grpc-web";

import * as AuthService from "@cmd/auth/grpc/auth_pb_service";
import {Auth, Signin, Subscribe} from "@pkg/account/dto/account_pb";

export class Menu extends Scene {

    Alpha: number;
    Background: Phaser.GameObjects.Image;
    HTMLsubscribe: Phaser.GameObjects.DOMElement;
    HTMLsignin: Phaser.GameObjects.DOMElement;

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.html('subscribe', 'html/subscribe.html')
        this.load.html('signin', 'html/signin.html')
        this.load.image('background_menu', 'background_menu.png')
    }
    create() {
        this.Alpha = 1;
        this.Background = this.add.image(0, 0, 'background_menu').setOrigin(0)

        this.HTMLsubscribe = this.add.dom(60, 30).createFromCache('subscribe').setOrigin(0);
        this.HTMLsubscribe.addListener('click');
        this.HTMLsubscribe.on('click', this.subscribe, this)

        this.HTMLsignin = this.add.dom(60, 120).createFromCache('signin').setOrigin(0);
        this.HTMLsignin.addListener('click');
        this.HTMLsignin.on('click', this.signin, this)
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
        grpc.unary(AuthService.Auth.Subscribe, {
            request: sub,
            host: "https://localhost:8081",
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status !== grpc.Code.OK || !message) {
                    console.log("grpc error: ", status, statusMessage, headers, message, trailers)
                    return
                }
                // Send a validate thing back
            }
        });
    }
    signin(event: MouseEvent) {
        if ((<HTMLInputElement>event.target).name !== 'signin') {
            return
        }
        const email = this.HTMLsignin.getChildByName('email') as HTMLInputElement
        const password = this.HTMLsignin.getChildByName('password') as HTMLInputElement
        // Apply basic security checks for those fields
        const log = new Signin();
        log.setEmail(email.value)
        log.setPassword(password.value)
        grpc.unary(AuthService.Auth.Signin, {
            request: log,
            host: "https://localhost:8081",
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status !== grpc.Code.OK || !message) {
                    console.log('failed to signin')
                    return
                }

                this.HTMLsignin.destroy()
                this.HTMLsubscribe.destroy()

                const account = message as Auth
                window.sessionStorage.setItem("account_id", account.getId_asB64())
                window.sessionStorage.setItem("token", account.getToken_asB64())
                this.scene.switch('lobby')
            }
        });
    }
      
      // subscribe();
      
}
