// package: dto
// file: github.com/elojah/game_02/pkg/space/dto/tile.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "../../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb";
import * as github_com_elojah_game_02_pkg_account_dto_account_pb from "../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb";
import * as github_com_elojah_game_02_pkg_space_tile_pb from "../../../../../../github.com/elojah/game_02/pkg/space/tile_pb";

export class CreateMap extends jspb.Message {
  hasDimensions(): boolean;
  clearDimensions(): void;
  getDimensions(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDimensions(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  getNplatforms(): number;
  setNplatforms(value: number): void;

  getPlatformsize(): number;
  setPlatformsize(value: number): void;

  getPlatformvariance(): number;
  setPlatformvariance(value: number): void;

  getNpaths(): number;
  setNpaths(value: number): void;

  getPathvariance(): number;
  setPathvariance(value: number): void;

  getPathwidth(): number;
  setPathwidth(value: number): void;

  getPathwidthvariance(): number;
  setPathwidthvariance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMap.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMap): CreateMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMap;
  static deserializeBinaryFromReader(message: CreateMap, reader: jspb.BinaryReader): CreateMap;
}

export namespace CreateMap {
  export type AsObject = {
    dimensions?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    nplatforms: number,
    platformsize: number,
    platformvariance: number,
    npaths: number,
    pathvariance: number,
    pathwidth: number,
    pathwidthvariance: number,
  }
}

export class CreateSet extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasSet(): boolean;
  clearSet(): void;
  getSet(): github_com_elojah_game_02_pkg_space_tile_pb.TileSet | undefined;
  setSet(value?: github_com_elojah_game_02_pkg_space_tile_pb.TileSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSet.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSet): CreateSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSet;
  static deserializeBinaryFromReader(message: CreateSet, reader: jspb.BinaryReader): CreateSet;
}

export namespace CreateSet {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    id: Uint8Array | string,
    set?: github_com_elojah_game_02_pkg_space_tile_pb.TileSet.AsObject,
  }
}

export class ListSet extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  clearIdsList(): void;
  getIdsList(): Array<Uint8Array | string>;
  getIdsList_asU8(): Array<Uint8Array>;
  getIdsList_asB64(): Array<string>;
  setIdsList(value: Array<Uint8Array | string>): void;
  addIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSet.AsObject;
  static toObject(includeInstance: boolean, msg: ListSet): ListSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSet;
  static deserializeBinaryFromReader(message: ListSet, reader: jspb.BinaryReader): ListSet;
}

export namespace ListSet {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    idsList: Array<Uint8Array | string>,
  }
}

