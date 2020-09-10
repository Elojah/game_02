// package: grpc
// file: auth.proto

var auth_pb = require("./auth_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var github_com_elojah_game_02_pkg_lobby_lobby_pb = require("./github.com/elojah/game_02/pkg/lobby/lobby_pb");
var github_com_elojah_game_02_pkg_player_player_pb = require("./github.com/elojah/game_02/pkg/player/player_pb");
var github_com_elojah_game_02_pkg_room_room_pb = require("./github.com/elojah/game_02/pkg/room/room_pb");
var github_com_elojah_game_02_pkg_account_dto_account_pb = require("./github.com/elojah/game_02/pkg/account/dto/account_pb");
var github_com_elojah_game_02_pkg_room_dto_room_pb = require("./github.com/elojah/game_02/pkg/room/dto/room_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Auth = (function () {
  function Auth() {}
  Auth.serviceName = "grpc.Auth";
  return Auth;
}());

Auth.Subscribe = {
  methodName: "Subscribe",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_account_dto_account_pb.Subscribe,
  responseType: google_protobuf_empty_pb.Empty
};

Auth.Unsubscribe = {
  methodName: "Unsubscribe",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_account_dto_account_pb.Unsubscribe,
  responseType: google_protobuf_empty_pb.Empty
};

Auth.Signin = {
  methodName: "Signin",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_account_dto_account_pb.Signin,
  responseType: github_com_elojah_game_02_pkg_account_dto_account_pb.Token
};

Auth.Signout = {
  methodName: "Signout",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
  responseType: google_protobuf_empty_pb.Empty
};

Auth.ListLobbies = {
  methodName: "ListLobbies",
  service: Auth,
  requestStream: false,
  responseStream: true,
  requestType: github_com_elojah_game_02_pkg_account_dto_account_pb.Auth,
  responseType: github_com_elojah_game_02_pkg_lobby_lobby_pb.L
};

Auth.CreateRoom = {
  methodName: "CreateRoom",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
  responseType: github_com_elojah_game_02_pkg_room_room_pb.R
};

Auth.ConnectRoom = {
  methodName: "ConnectRoom",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_room_dto_room_pb.Connect,
  responseType: github_com_elojah_game_02_pkg_room_room_pb.R
};

Auth.CreatePlayer = {
  methodName: "CreatePlayer",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: github_com_elojah_game_02_pkg_room_dto_room_pb.Create,
  responseType: github_com_elojah_game_02_pkg_player_player_pb.P
};

exports.Auth = Auth;

function AuthClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthClient.prototype.subscribe = function subscribe(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.Subscribe, {
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

AuthClient.prototype.unsubscribe = function unsubscribe(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.Unsubscribe, {
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

AuthClient.prototype.signin = function signin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.Signin, {
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

AuthClient.prototype.signout = function signout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.Signout, {
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

AuthClient.prototype.listLobbies = function listLobbies(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Auth.ListLobbies, {
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

AuthClient.prototype.createRoom = function createRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.CreateRoom, {
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

AuthClient.prototype.connectRoom = function connectRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.ConnectRoom, {
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

AuthClient.prototype.createPlayer = function createPlayer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Auth.CreatePlayer, {
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

exports.AuthClient = AuthClient;

