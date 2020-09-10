// package: space
// file: coordinate.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "./github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class Coordinate extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setPosition(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDirection(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  getTs(): number;
  setTs(value: number): void;

  getEntityid(): Uint8Array | string;
  getEntityid_asU8(): Uint8Array;
  getEntityid_asB64(): string;
  setEntityid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coordinate.AsObject;
  static toObject(includeInstance: boolean, msg: Coordinate): Coordinate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Coordinate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coordinate;
  static deserializeBinaryFromReader(message: Coordinate, reader: jspb.BinaryReader): Coordinate;
}

export namespace Coordinate {
  export type AsObject = {
    position?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    direction?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    ts: number,
    entityid: Uint8Array | string,
  }
}

