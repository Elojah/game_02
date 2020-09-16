// package: grpc
// file: github.com/elojah/game_02/cmd/mapper/grpc/mapper.proto

var github_com_elojah_game_02_cmd_mapper_grpc_mapper_pb = require("../../../../../../github.com/elojah/game_02/cmd/mapper/grpc/mapper_pb");
var github_com_elojah_game_02_pkg_space_dto_sector_pb = require("../../../../../../github.com/elojah/game_02/pkg/space/dto/sector_pb");
var github_com_elojah_game_02_pkg_space_dto_tile_pb = require("../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb");
var github_com_elojah_game_02_pkg_space_sector_pb = require("../../../../../../github.com/elojah/game_02/pkg/space/sector_pb");
var github_com_elojah_game_02_pkg_space_tile_pb = require("../../../../../../github.com/elojah/game_02/pkg/space/tile_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Mapper = (function () {
  function Mapper() {}
  Mapper.serviceName = "grpc.Mapper";
  return Mapper;
}());

Mapper.ListSectors = {
  methodName: "ListSectors",
  service: Mapper,
  requestStream: false,
  responseStream: true,
  requestType: github_com_elojah_game_02_pkg_space_dto_sector_pb.ListSector,
  responseType: github_com_elojah_game_02_pkg_space_sector_pb.Sector
};

Mapper.ListTileSets = {
  methodName: "ListTileSets",
  service: Mapper,
  requestStream: false,
  responseStream: true,
  requestType: github_com_elojah_game_02_pkg_space_dto_tile_pb.ListSet,
  responseType: github_com_elojah_game_02_pkg_space_tile_pb.TileSet
};

exports.Mapper = Mapper;

function MapperClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MapperClient.prototype.listSectors = function listSectors(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mapper.ListSectors, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MapperClient.prototype.listTileSets = function listTileSets(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Mapper.ListTileSets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.MapperClient = MapperClient;

