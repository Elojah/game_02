// package: room
// file: github.com/elojah/game_02/pkg/room/room.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class R extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): Uint8Array | string;
  getPassword_asU8(): Uint8Array;
  getPassword_asB64(): string;
  setPassword(value: Uint8Array | string): void;

  getOwner(): Uint8Array | string;
  getOwner_asU8(): Uint8Array;
  getOwner_asB64(): string;
  setOwner(value: Uint8Array | string): void;

  getWorldid(): Uint8Array | string;
  getWorldid_asU8(): Uint8Array;
  getWorldid_asB64(): string;
  setWorldid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): R.AsObject;
  static toObject(includeInstance: boolean, msg: R): R.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: R, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): R;
  static deserializeBinaryFromReader(message: R, reader: jspb.BinaryReader): R;
}

export namespace R {
  export type AsObject = {
    id: Uint8Array | string,
    name: string,
    password: Uint8Array | string,
    owner: Uint8Array | string,
    worldid: Uint8Array | string,
  }
}

