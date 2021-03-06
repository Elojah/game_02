/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var github_com_elojah_game_02_pkg_space_dto_tile_pb = require('../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb.js');
var github_com_elojah_game_02_pkg_account_dto_account_pb = require('../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js');
var github_com_elojah_game_02_pkg_geometry_geometry_pb = require('../../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js');
goog.exportSymbol('proto.dto.ConnectRoom', null, global);
goog.exportSymbol('proto.dto.CreateRoom', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dto.ConnectRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.ConnectRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.ConnectRoom.displayName = 'proto.dto.ConnectRoom';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dto.ConnectRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.ConnectRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.ConnectRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ConnectRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    id: msg.getId_asB64(),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dto.ConnectRoom}
 */
proto.dto.ConnectRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.ConnectRoom;
  return proto.dto.ConnectRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.ConnectRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.ConnectRoom}
 */
proto.dto.ConnectRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
      reader.readMessage(value,github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dto.ConnectRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.ConnectRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.ConnectRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ConnectRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.ConnectRoom.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.ConnectRoom.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.ConnectRoom.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.ConnectRoom.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes ID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.ConnectRoom.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ID = 2;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.dto.ConnectRoom.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes ID = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.dto.ConnectRoom.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.ConnectRoom.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.dto.ConnectRoom.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.ConnectRoom.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dto.CreateRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.CreateRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.CreateRoom.displayName = 'proto.dto.CreateRoom';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dto.CreateRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.CreateRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.CreateRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    lobbyid: msg.getLobbyid_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    map: (f = msg.getMap()) && github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.toObject(includeInstance, f),
    sectordimensions: (f = msg.getSectordimensions()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dto.CreateRoom}
 */
proto.dto.CreateRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.CreateRoom;
  return proto.dto.CreateRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.CreateRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.CreateRoom}
 */
proto.dto.CreateRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_elojah_game_02_pkg_account_dto_account_pb.Auth;
      reader.readMessage(value,github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLobbyid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = new github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap;
      reader.readMessage(value,github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 6:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setSectordimensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dto.CreateRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.CreateRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.CreateRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getLobbyid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.serializeBinaryToWriter
    );
  }
  f = message.getSectordimensions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.CreateRoom.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.CreateRoom.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.CreateRoom.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateRoom.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes LobbyID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.CreateRoom.prototype.getLobbyid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes LobbyID = 2;
 * This is a type-conversion wrapper around `getLobbyid()`
 * @return {string}
 */
proto.dto.CreateRoom.prototype.getLobbyid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLobbyid()));
};


/**
 * optional bytes LobbyID = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLobbyid()`
 * @return {!Uint8Array}
 */
proto.dto.CreateRoom.prototype.getLobbyid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLobbyid()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.CreateRoom.prototype.setLobbyid = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.dto.CreateRoom.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.CreateRoom.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Password = 4;
 * @return {string}
 */
proto.dto.CreateRoom.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.dto.CreateRoom.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CreateMap Map = 5;
 * @return {?proto.dto.CreateMap}
 */
proto.dto.CreateRoom.prototype.getMap = function() {
  return /** @type{?proto.dto.CreateMap} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap, 5));
};


/** @param {?proto.dto.CreateMap|undefined} value */
proto.dto.CreateRoom.prototype.setMap = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dto.CreateRoom.prototype.clearMap = function() {
  this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateRoom.prototype.hasMap = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional geometry.Vec3 SectorDimensions = 6;
 * @return {?proto.geometry.Vec3}
 */
proto.dto.CreateRoom.prototype.getSectordimensions = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 6));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.dto.CreateRoom.prototype.setSectordimensions = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dto.CreateRoom.prototype.clearSectordimensions = function() {
  this.setSectordimensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateRoom.prototype.hasSectordimensions = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.dto);
