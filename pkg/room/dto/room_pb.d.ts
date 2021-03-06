// package: dto
// file: github.com/elojah/game_02/pkg/room/dto/room.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_space_dto_tile_pb from "../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb";
import * as github_com_elojah_game_02_pkg_account_dto_account_pb from "../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "../../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class ConnectRoom extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectRoom): ConnectRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectRoom;
  static deserializeBinaryFromReader(message: ConnectRoom, reader: jspb.BinaryReader): ConnectRoom;
}

export namespace ConnectRoom {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    id: Uint8Array | string,
    password: string,
  }
}

export class CreateRoom extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getLobbyid(): Uint8Array | string;
  getLobbyid_asU8(): Uint8Array;
  getLobbyid_asB64(): string;
  setLobbyid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasMap(): boolean;
  clearMap(): void;
  getMap(): github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap | undefined;
  setMap(value?: github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap): void;

  hasSectordimensions(): boolean;
  clearSectordimensions(): void;
  getSectordimensions(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setSectordimensions(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoom.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoom): CreateRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoom;
  static deserializeBinaryFromReader(message: CreateRoom, reader: jspb.BinaryReader): CreateRoom;
}

export namespace CreateRoom {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    lobbyid: Uint8Array | string,
    name: string,
    password: string,
    map?: github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.AsObject,
    sectordimensions?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
  }
}

