// package: dto
// file: github.com/elojah/game_02/pkg/player/dto/player.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_account_dto_account_pb from "../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb";

export class Connect extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getPlayerid(): Uint8Array | string;
  getPlayerid_asU8(): Uint8Array;
  getPlayerid_asB64(): string;
  setPlayerid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connect.AsObject;
  static toObject(includeInstance: boolean, msg: Connect): Connect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connect;
  static deserializeBinaryFromReader(message: Connect, reader: jspb.BinaryReader): Connect;
}

export namespace Connect {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    playerid: Uint8Array | string,
  }
}

export class Create extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): github_com_elojah_game_02_pkg_account_dto_account_pb.Auth | undefined;
  setAuth(value?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth): void;

  getTemplateid(): Uint8Array | string;
  getTemplateid_asU8(): Uint8Array;
  getTemplateid_asB64(): string;
  setTemplateid(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Create.AsObject;
  static toObject(includeInstance: boolean, msg: Create): Create.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Create, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Create;
  static deserializeBinaryFromReader(message: Create, reader: jspb.BinaryReader): Create;
}

export namespace Create {
  export type AsObject = {
    auth?: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.AsObject,
    templateid: Uint8Array | string,
    name: string,
  }
}

