// package: space
// file: world.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "./github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class World extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasDim(): boolean;
  clearDim(): void;
  getDim(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDim(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  getSectorsMap(): jspb.Map<string, number>;
  clearSectorsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): World.AsObject;
  static toObject(includeInstance: boolean, msg: World): World.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: World, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): World;
  static deserializeBinaryFromReader(message: World, reader: jspb.BinaryReader): World;
}

export namespace World {
  export type AsObject = {
    id: Uint8Array | string,
    dim?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    sectorsMap: Array<[string, number]>,
  }
}

