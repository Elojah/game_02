// package: account
// file: account.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class A extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): Uint8Array | string;
  getPassword_asU8(): Uint8Array;
  getPassword_asB64(): string;
  setPassword(value: Uint8Array | string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): void;

  getRoom(): Uint8Array | string;
  getRoom_asU8(): Uint8Array;
  getRoom_asB64(): string;
  setRoom(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): A.AsObject;
  static toObject(includeInstance: boolean, msg: A): A.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: A, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): A;
  static deserializeBinaryFromReader(message: A, reader: jspb.BinaryReader): A;
}

export namespace A {
  export type AsObject = {
    id: Uint8Array | string,
    email: string,
    password: Uint8Array | string,
    alias: string,
    token: Uint8Array | string,
    room: Uint8Array | string,
  }
}

