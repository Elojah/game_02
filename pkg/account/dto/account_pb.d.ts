// package: dto
// file: github.com/elojah/game_02/pkg/account/dto/account.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Auth extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Auth.AsObject;
  static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Auth;
  static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
}

export namespace Auth {
  export type AsObject = {
    id: Uint8Array | string,
    token: Uint8Array | string,
  }
}

export class Subscribe extends jspb.Message {
  getAlias(): string;
  setAlias(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscribe.AsObject;
  static toObject(includeInstance: boolean, msg: Subscribe): Subscribe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscribe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscribe;
  static deserializeBinaryFromReader(message: Subscribe, reader: jspb.BinaryReader): Subscribe;
}

export namespace Subscribe {
  export type AsObject = {
    alias: string,
    email: string,
    password: string,
  }
}

export class Token extends jspb.Message {
  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: Uint8Array | string,
  }
}

export class Signin extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signin.AsObject;
  static toObject(includeInstance: boolean, msg: Signin): Signin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signin;
  static deserializeBinaryFromReader(message: Signin, reader: jspb.BinaryReader): Signin;
}

export namespace Signin {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class Unsubscribe extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unsubscribe.AsObject;
  static toObject(includeInstance: boolean, msg: Unsubscribe): Unsubscribe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Unsubscribe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unsubscribe;
  static deserializeBinaryFromReader(message: Unsubscribe, reader: jspb.BinaryReader): Unsubscribe;
}

export namespace Unsubscribe {
  export type AsObject = {
    email: string,
    password: string,
  }
}

