// package: player
// file: github.com/elojah/game_02/pkg/player/spawn.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class Spawn extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setPosition(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDirection(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spawn.AsObject;
  static toObject(includeInstance: boolean, msg: Spawn): Spawn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spawn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spawn;
  static deserializeBinaryFromReader(message: Spawn, reader: jspb.BinaryReader): Spawn;
}

export namespace Spawn {
  export type AsObject = {
    id: Uint8Array | string,
    position?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    direction?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    duration: number,
  }
}

