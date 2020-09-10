// package: item
// file: item.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Orb extends jspb.Message {
  getAbilityid(): Uint8Array | string;
  getAbilityid_asU8(): Uint8Array;
  getAbilityid_asB64(): string;
  setAbilityid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orb.AsObject;
  static toObject(includeInstance: boolean, msg: Orb): Orb.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orb;
  static deserializeBinaryFromReader(message: Orb, reader: jspb.BinaryReader): Orb;
}

export namespace Orb {
  export type AsObject = {
    abilityid: Uint8Array | string,
  }
}

export class Component extends jspb.Message {
  getType(): Uint8Array | string;
  getType_asU8(): Uint8Array;
  getType_asB64(): string;
  setType(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Component.AsObject;
  static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Component;
  static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
}

export namespace Component {
  export type AsObject = {
    type: Uint8Array | string,
  }
}

export class Type extends jspb.Message {
  hasOrb(): boolean;
  clearOrb(): void;
  getOrb(): Orb | undefined;
  setOrb(value?: Orb): void;

  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): Component | undefined;
  setComponent(value?: Component): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    orb?: Orb.AsObject,
    component?: Component.AsObject,
  }
}

export class I extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  getIcon(): Uint8Array | string;
  getIcon_asU8(): Uint8Array;
  getIcon_asB64(): string;
  setIcon(value: Uint8Array | string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): I.AsObject;
  static toObject(includeInstance: boolean, msg: I): I.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: I, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): I;
  static deserializeBinaryFromReader(message: I, reader: jspb.BinaryReader): I;
}

export namespace I {
  export type AsObject = {
    id: Uint8Array | string,
    name: string,
    details: string,
    icon: Uint8Array | string,
    type?: Type.AsObject,
  }
}

