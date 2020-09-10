// package: entity
// file: entity.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "./github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class Cast extends jspb.Message {
  getAbilityid(): Uint8Array | string;
  getAbilityid_asU8(): Uint8Array;
  getAbilityid_asB64(): string;
  setAbilityid(value: Uint8Array | string): void;

  getTs(): number;
  setTs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cast.AsObject;
  static toObject(includeInstance: boolean, msg: Cast): Cast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cast;
  static deserializeBinaryFromReader(message: Cast, reader: jspb.BinaryReader): Cast;
}

export namespace Cast {
  export type AsObject = {
    abilityid: Uint8Array | string,
    ts: number,
  }
}

export class E extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getTemplateid(): Uint8Array | string;
  getTemplateid_asU8(): Uint8Array;
  getTemplateid_asB64(): string;
  setTemplateid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getOwnerid(): Uint8Array | string;
  getOwnerid_asU8(): Uint8Array;
  getOwnerid_asB64(): string;
  setOwnerid(value: Uint8Array | string): void;

  getDead(): boolean;
  setDead(value: boolean): void;

  getHp(): number;
  setHp(value: number): void;

  getMaxhp(): number;
  setMaxhp(value: number): void;

  getMp(): number;
  setMp(value: number): void;

  getMaxmp(): number;
  setMaxmp(value: number): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDirection(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setPosition(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  hasCast(): boolean;
  clearCast(): void;
  getCast(): Cast | undefined;
  setCast(value?: Cast): void;

  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getInventoryid(): Uint8Array | string;
  getInventoryid_asU8(): Uint8Array;
  getInventoryid_asB64(): string;
  setInventoryid(value: Uint8Array | string): void;

  getSpawnid(): Uint8Array | string;
  getSpawnid_asU8(): Uint8Array;
  getSpawnid_asB64(): string;
  setSpawnid(value: Uint8Array | string): void;

  getTs(): number;
  setTs(value: number): void;

  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): E.AsObject;
  static toObject(includeInstance: boolean, msg: E): E.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: E, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): E;
  static deserializeBinaryFromReader(message: E, reader: jspb.BinaryReader): E;
}

export namespace E {
  export type AsObject = {
    id: Uint8Array | string,
    templateid: Uint8Array | string,
    name: string,
    ownerid: Uint8Array | string,
    dead: boolean,
    hp: number,
    maxhp: number,
    mp: number,
    maxmp: number,
    direction?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    position?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    cast?: Cast.AsObject,
    assetid: Uint8Array | string,
    inventoryid: Uint8Array | string,
    spawnid: Uint8Array | string,
    ts: number,
    state: Uint8Array | string,
  }
}

