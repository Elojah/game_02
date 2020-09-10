// package: geometry
// file: geometry.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Vec3 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vec3.AsObject;
  static toObject(includeInstance: boolean, msg: Vec3): Vec3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vec3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vec3;
  static deserializeBinaryFromReader(message: Vec3, reader: jspb.BinaryReader): Vec3;
}

export namespace Vec3 {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Rectangle extends jspb.Message {
  hasPointa(): boolean;
  clearPointa(): void;
  getPointa(): Vec3 | undefined;
  setPointa(value?: Vec3): void;

  hasPointb(): boolean;
  clearPointb(): void;
  getPointb(): Vec3 | undefined;
  setPointb(value?: Vec3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rectangle.AsObject;
  static toObject(includeInstance: boolean, msg: Rectangle): Rectangle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rectangle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rectangle;
  static deserializeBinaryFromReader(message: Rectangle, reader: jspb.BinaryReader): Rectangle;
}

export namespace Rectangle {
  export type AsObject = {
    pointa?: Vec3.AsObject,
    pointb?: Vec3.AsObject,
  }
}

