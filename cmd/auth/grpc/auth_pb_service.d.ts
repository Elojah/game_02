// package: grpc
// file: github.com/elojah/game_02/cmd/auth/grpc/auth.proto

import * as github_com_elojah_game_02_cmd_auth_grpc_auth_pb from "../../../../../../github.com/elojah/game_02/cmd/auth/grpc/auth_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as github_com_elojah_game_02_pkg_lobby_lobby_pb from "../../../../../../github.com/elojah/game_02/pkg/lobby/lobby_pb";
import * as github_com_elojah_game_02_pkg_player_player_pb from "../../../../../../github.com/elojah/game_02/pkg/player/player_pb";
import * as github_com_elojah_game_02_pkg_room_room_pb from "../../../../../../github.com/elojah/game_02/pkg/room/room_pb";
import * as github_com_elojah_game_02_pkg_account_dto_account_pb from "../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb";
import * as github_com_elojah_game_02_pkg_room_dto_room_pb from "../../../../../../github.com/elojah/game_02/pkg/room/dto/room_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthSubscribe = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Subscribe;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthUnsubscribe = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthSignin = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Signin;
  readonly responseType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
};

type AuthSignout = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthListLobbies = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
  readonly responseType: typeof github_com_elojah_game_02_pkg_lobby_lobby_pb.L;
};

type AuthCreateRoom = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_room_dto_room_pb.Create;
  readonly responseType: typeof github_com_elojah_game_02_pkg_room_room_pb.R;
};

type AuthConnectRoom = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_room_dto_room_pb.Connect;
  readonly responseType: typeof github_com_elojah_game_02_pkg_room_room_pb.R;
};

type AuthCreatePlayer = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_room_dto_room_pb.Create;
  readonly responseType: typeof github_com_elojah_game_02_pkg_player_player_pb.P;
};

export class Auth {
  static readonly serviceName: string;
  static readonly Subscribe: AuthSubscribe;
  static readonly Unsubscribe: AuthUnsubscribe;
  static readonly Signin: AuthSignin;
  static readonly Signout: AuthSignout;
  static readonly ListLobbies: AuthListLobbies;
  static readonly CreateRoom: AuthCreateRoom;
  static readonly ConnectRoom: AuthConnectRoom;
  static readonly CreatePlayer: AuthCreatePlayer;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  subscribe(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Subscribe,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  subscribe(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Subscribe,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unsubscribe(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unsubscribe(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  signin(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Signin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth|null) => void
  ): UnaryResponse;
  signin(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Signin,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth|null) => void
  ): UnaryResponse;
  signout(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  signout(
    requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listLobbies(requestMessage: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, metadata?: grpc.Metadata): ResponseStream<github_com_elojah_game_02_pkg_lobby_lobby_pb.L>;
  createRoom(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_room_room_pb.R|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_room_room_pb.R|null) => void
  ): UnaryResponse;
  connectRoom(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Connect,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_room_room_pb.R|null) => void
  ): UnaryResponse;
  connectRoom(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Connect,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_room_room_pb.R|null) => void
  ): UnaryResponse;
  createPlayer(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_player_player_pb.P|null) => void
  ): UnaryResponse;
  createPlayer(
    requestMessage: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
    callback: (error: ServiceError|null, responseMessage: github_com_elojah_game_02_pkg_player_player_pb.P|null) => void
  ): UnaryResponse;
}

