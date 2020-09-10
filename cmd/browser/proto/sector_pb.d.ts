// package: dto
// file: sector.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_account_dto_account_pb from "./github.com/elojah/game_02/pkg/account/dto/account_pb";

export class ReadSector extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadSector.AsObject;
  static toObject(includeInstance: boolean, msg: ReadSector): ReadSector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadSector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadSector;
  static deserializeBinaryFromReader(message: ReadSector, reader: jspb.BinaryReader): ReadSector;
}

export namespace ReadSector {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    id: Uint8Array | string,
  }
}

