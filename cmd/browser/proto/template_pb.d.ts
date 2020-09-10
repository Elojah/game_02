// package: entity
// file: template.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Template extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getMaxhp(): number;
  setMaxhp(value: number): void;

  getMaxmp(): number;
  setMaxmp(value: number): void;

  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getSpawnid(): Uint8Array | string;
  getSpawnid_asU8(): Uint8Array;
  getSpawnid_asB64(): string;
  setSpawnid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    id: Uint8Array | string,
    name: string,
    maxhp: number,
    maxmp: number,
    assetid: Uint8Array | string,
    spawnid: Uint8Array | string,
  }
}

