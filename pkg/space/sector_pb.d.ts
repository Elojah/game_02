// package: space
// file: sector.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "./github.com/elojah/game_02/pkg/geometry/geometry_pb";
import * as tile_pb from "./tile_pb";

export class Sector extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasDim(): boolean;
  clearDim(): void;
  getDim(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDim(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  getAdjacentsMap(): jspb.Map<string, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3>;
  clearAdjacentsMap(): void;
  hasTilemap(): boolean;
  clearTilemap(): void;
  getTilemap(): tile_pb.TileMap | undefined;
  setTilemap(value?: tile_pb.TileMap): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sector.AsObject;
  static toObject(includeInstance: boolean, msg: Sector): Sector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sector;
  static deserializeBinaryFromReader(message: Sector, reader: jspb.BinaryReader): Sector;
}

export namespace Sector {
  export type AsObject = {
    id: Uint8Array | string,
    dim?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    adjacentsMap: Array<[string, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject]>,
    tilemap?: tile_pb.TileMap.AsObject,
  }
}

