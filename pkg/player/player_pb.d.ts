// package: player
// file: player.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_entity_entity_pb from "./github.com/elojah/game_02/pkg/entity/entity_pb";

export class P extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): github_com_elojah_game_02_pkg_entity_entity_pb.E | undefined;
  setEntity(value?: github_com_elojah_game_02_pkg_entity_entity_pb.E): void;

  getAccount(): Uint8Array | string;
  getAccount_asU8(): Uint8Array;
  getAccount_asB64(): string;
  setAccount(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P.AsObject;
  static toObject(includeInstance: boolean, msg: P): P.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P;
  static deserializeBinaryFromReader(message: P, reader: jspb.BinaryReader): P;
}

export namespace P {
  export type AsObject = {
    entity?: github_com_elojah_game_02_pkg_entity_entity_pb.E.AsObject,
    account: Uint8Array | string,
  }
}

