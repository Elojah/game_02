// package: grpc
// file: github.com/elojah/game_02/cmd/mapper/grpc/mapper.proto

import * as github_com_elojah_game_02_cmd_mapper_grpc_mapper_pb from "../../../../../../github.com/elojah/game_02/cmd/mapper/grpc/mapper_pb";
import * as github_com_elojah_game_02_pkg_space_dto_sector_pb from "../../../../../../github.com/elojah/game_02/pkg/space/dto/sector_pb";
import * as github_com_elojah_game_02_pkg_space_dto_tile_pb from "../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb";
import * as github_com_elojah_game_02_pkg_space_sector_pb from "../../../../../../github.com/elojah/game_02/pkg/space/sector_pb";
import * as github_com_elojah_game_02_pkg_space_tile_pb from "../../../../../../github.com/elojah/game_02/pkg/space/tile_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MapperListSectors = {
  readonly methodName: string;
  readonly service: typeof Mapper;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof github_com_elojah_game_02_pkg_space_dto_sector_pb.ListSector;
  readonly responseType: typeof github_com_elojah_game_02_pkg_space_sector_pb.Sector;
};

type MapperListTileSets = {
  readonly methodName: string;
  readonly service: typeof Mapper;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof github_com_elojah_game_02_pkg_space_dto_tile_pb.ListSet;
  readonly responseType: typeof github_com_elojah_game_02_pkg_space_tile_pb.TileSet;
};

export class Mapper {
  static readonly serviceName: string;
  static readonly ListSectors: MapperListSectors;
  static readonly ListTileSets: MapperListTileSets;
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

export class MapperClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listSectors(requestMessage: github_com_elojah_game_02_pkg_space_dto_sector_pb.ListSector, metadata?: grpc.Metadata): ResponseStream<github_com_elojah_game_02_pkg_space_sector_pb.Sector>;
  listTileSets(requestMessage: github_com_elojah_game_02_pkg_space_dto_tile_pb.ListSet, metadata?: grpc.Metadata): ResponseStream<github_com_elojah_game_02_pkg_space_tile_pb.TileSet>;
}

