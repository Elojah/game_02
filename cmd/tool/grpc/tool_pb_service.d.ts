// package: grpc
// file: github.com/elojah/game_02/cmd/tool/grpc/tool.proto

import * as github_com_elojah_game_02_cmd_tool_grpc_tool_pb from "../../../../../../github.com/elojah/game_02/cmd/tool/grpc/tool_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as github_com_elojah_game_02_pkg_space_dto_tile_pb from "../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ToolCreateTileSet = {
  readonly methodName: string;
  readonly service: typeof Tool;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateSet;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class Tool {
  static readonly serviceName: string;
  static readonly CreateTileSet: ToolCreateTileSet;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ToolClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTileSet(
    requestMessage: github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateSet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createTileSet(
    requestMessage: github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateSet,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

