// package: grpc
// file: github.com/elojah/game_02/cmd/tool/grpc/tool.proto

var github_com_elojah_game_02_cmd_tool_grpc_tool_pb = require("../../../../../../github.com/elojah/game_02/cmd/tool/grpc/tool_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var github_com_elojah_game_02_pkg_space_dto_tile_pb = require("../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Tool = (function () {
  function Tool() {}
  Tool.serviceName = "grpc.Tool";
  return Tool;
}());

Tool.CreateTileSet = {
  methodName: "CreateTileSet",
  service: Tool,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateSet,
  responseType: google_protobuf_empty_pb.Empty
};

exports.Tool = Tool;

function ToolClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ToolClient.prototype.createTileSet = function createTileSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tool.CreateTileSet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ToolClient = ToolClient;

