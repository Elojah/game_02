// package: space
// file: github.com/elojah/game_02/pkg/space/tile.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_geometry_geometry_pb from "../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb";

export class TileSet extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getTerrainsMap(): jspb.Map<number, number>;
  clearTerrainsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TileSet.AsObject;
  static toObject(includeInstance: boolean, msg: TileSet): TileSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TileSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TileSet;
  static deserializeBinaryFromReader(message: TileSet, reader: jspb.BinaryReader): TileSet;
}

export namespace TileSet {
  export type AsObject = {
    id: Uint8Array | string,
    name: string,
    size: number,
    x: number,
    y: number,
    terrainsMap: Array<[number, number]>,
  }
}

export class TileMap extends jspb.Message {
  hasSet(): boolean;
  clearSet(): void;
  getSet(): TileSet | undefined;
  setSet(value?: TileSet): void;

  hasDim(): boolean;
  clearDim(): void;
  getDim(): github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3 | undefined;
  setDim(value?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3): void;

  clearMapList(): void;
  getMapList(): Array<TerrainMap[keyof TerrainMap]>;
  setMapList(value: Array<TerrainMap[keyof TerrainMap]>): void;
  addMap(value: TerrainMap[keyof TerrainMap], index?: number): TerrainMap[keyof TerrainMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TileMap.AsObject;
  static toObject(includeInstance: boolean, msg: TileMap): TileMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TileMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TileMap;
  static deserializeBinaryFromReader(message: TileMap, reader: jspb.BinaryReader): TileMap;
}

export namespace TileMap {
  export type AsObject = {
    set?: TileSet.AsObject,
    dim?: github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.AsObject,
    mapList: Array<TerrainMap[keyof TerrainMap]>,
  }
}

export interface TerrainMap {
  SKY: 0;
  FLOOR: 1;
  PILLAR: 2;
  WALL: 3;
}

export const Terrain: TerrainMap;

