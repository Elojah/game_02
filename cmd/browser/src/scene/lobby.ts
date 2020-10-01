import {Scene} from "phaser";
import {grpc} from "@improbable-eng/grpc-web";

import * as AuthService from "@cmd/auth/grpc/auth_pb_service";
import {Auth, Signin, Subscribe} from "@pkg/account/dto/account_pb";
import {CreateRoom} from "@pkg/room/dto/room_pb";
import {CreateMap} from "@pkg/space/dto/tile_pb";
import { L } from "@pkg/lobby/lobby_pb";
import { Vec3 } from "@pkg/geometry/geometry_pb";

export class Lobby extends Scene {

    HTMLLobbies: Phaser.GameObjects.DOMElement;
    HTMLCreateRoom: Phaser.GameObjects.DOMElement;
    HTMLCreateLobby: Phaser.GameObjects.DOMElement;
    DefaultLobbyID?: string;

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.image('background_lobby', 'background_lobby.png')
        this.load.html('lobbies', 'html/lobbies.html')
        this.load.html('create_lobby', 'html/create_lobby.html')
        this.load.html('create_room', 'html/create_room.html')
    }
    create() {
        this.add.image(0, 0, 'background_lobby').setOrigin(0)
        this.HTMLLobbies = this.add.dom(300, 30).createFromCache('lobbies').setOrigin(0);
        this.HTMLCreateLobby = this.add.dom(10, 5).createFromCache('create_lobby').setOrigin(0);
        this.HTMLCreateLobby.addListener('click');
        this.HTMLCreateLobby.on('click', this.createLobby, this)
        this.HTMLCreateRoom = this.add.dom(10, 55).createFromCache('create_room').setOrigin(0);
        this.HTMLCreateRoom.addListener('click');
        this.HTMLCreateRoom.on('click', this.createRoom, this)

        const auth = new Auth();
        auth.setId(window.sessionStorage.getItem('account_id')!)
        auth.setToken(window.sessionStorage.getItem('token')!)

        const htmlLobbies = window.document.getElementById('lobbies')
        grpc.invoke(AuthService.Auth.ListLobbies, {
            request: auth,
            host: "https://localhost:8081",
            onMessage: message => {
                const l = message as L

                if (!this.DefaultLobbyID) {
                    this.DefaultLobbyID = l.getId_asB64()
                }

                const htmlL = document.createElement('li') as HTMLLIElement
                htmlL.textContent = l.getName()
                const htmlConnect = document.createElement('button') as HTMLButtonElement
                htmlConnect.textContent = 'connect'
                htmlL.appendChild(htmlConnect)

                htmlLobbies?.appendChild(htmlL)
            },
            onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                if (code != grpc.Code.OK) {
                    console.log('failed to list lobbies')
                    return
                }
              }
                // this.HTMLLobbies.destroy()
        });
    }
    createLobby() {
        const auth = new Auth();
        auth.setId(window.sessionStorage.getItem('account_id')!)
        auth.setToken(window.sessionStorage.getItem('token')!)

        grpc.unary(AuthService.Auth.CreateLobby, {
            request: auth,
            host: "https://localhost:8081",
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status !== grpc.Code.OK || !message) {
                    console.log("grpc error: ", status, statusMessage, headers, message, trailers)
                    return
                }
                // const lobby = message as L
                this.scene.restart()                
            }
        });
    }
    createRoom() {
        const createRoom = new CreateRoom()

        createRoom.setName(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
        if (this.DefaultLobbyID) {
            createRoom.setLobbyid(this.DefaultLobbyID)
        }
        const auth = new Auth();
        auth.setId(window.sessionStorage.getItem('account_id')!)
        auth.setToken(window.sessionStorage.getItem('token')!)
        createRoom.setAuth(auth)

        const dim = new Vec3()
        dim.setX(500)
        dim.setY(500)
        dim.setZ(500)
        createRoom.setSectordimensions(dim)

        const map = new CreateMap()
        map.setNplatforms(10)
        map.setPlatformsize(3)
        map.setPlatformvariance(4)
        map.setNpaths(3)
        map.setPathvariance(2)
        map.setPathwidth(7)
        map.setPathwidthvariance(8)
        createRoom.setMap(map)

        grpc.unary(AuthService.Auth.CreateRoom, {
            request: createRoom,
            host: "https://localhost:8081",
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status !== grpc.Code.OK || !message) {
                    console.log("grpc error: ", status, statusMessage, headers, message, trailers)
                    return
                }
                // const lobby = message as L
                this.scene.restart()                
            }
        });
    }

        // this.HTMLsubscribe = this.add.dom(60, 30).createFromCache('subscribe').setOrigin(0);
        // this.HTMLsubscribe.addListener('click');
        // this.HTMLsubscribe.on('click', this.subscribe, this)

        // this.HTMLsignin = this.add.dom(60, 120).createFromCache('signin').setOrigin(0);
        // this.HTMLsignin.addListener('click');
        // this.HTMLsignin.on('click', this.signin, this)
    update() {}
}