// package: lobby
// file: github.com/elojah/game_02/pkg/lobby/lobby.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as github_com_elojah_game_02_pkg_room_room_pb from "../../../../../github.com/elojah/game_02/pkg/room/room_pb";

export class L extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getRoomsMap(): jspb.Map<string, github_com_elojah_game_02_pkg_room_room_pb.R>;
  clearRoomsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): L.AsObject;
  static toObject(includeInstance: boolean, msg: L): L.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: L, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): L;
  static deserializeBinaryFromReader(message: L, reader: jspb.BinaryReader): L;
}

export namespace L {
  export type AsObject = {
    id: Uint8Array | string,
    name: string,
    roomsMap: Array<[string, github_com_elojah_game_02_pkg_room_room_pb.R.AsObject]>,
  }
}

