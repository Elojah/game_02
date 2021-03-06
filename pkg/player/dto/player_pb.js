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
var github_com_elojah_game_02_pkg_account_dto_account_pb = require('../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js');
goog.exportSymbol('proto.dto.ConnectPlayer', null, global);
goog.exportSymbol('proto.dto.CreatePlayer', null, global);

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
proto.dto.ConnectPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.ConnectPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.ConnectPlayer.displayName = 'proto.dto.ConnectPlayer';
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
proto.dto.ConnectPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.ConnectPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.ConnectPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ConnectPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    playerid: msg.getPlayerid_asB64()
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
 * @return {!proto.dto.ConnectPlayer}
 */
proto.dto.ConnectPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.ConnectPlayer;
  return proto.dto.ConnectPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.ConnectPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.ConnectPlayer}
 */
proto.dto.ConnectPlayer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPlayerid(value);
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
proto.dto.ConnectPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.ConnectPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.ConnectPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ConnectPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getPlayerid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.ConnectPlayer.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.ConnectPlayer.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.ConnectPlayer.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.ConnectPlayer.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes PlayerID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.ConnectPlayer.prototype.getPlayerid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes PlayerID = 2;
 * This is a type-conversion wrapper around `getPlayerid()`
 * @return {string}
 */
proto.dto.ConnectPlayer.prototype.getPlayerid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlayerid()));
};


/**
 * optional bytes PlayerID = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlayerid()`
 * @return {!Uint8Array}
 */
proto.dto.ConnectPlayer.prototype.getPlayerid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlayerid()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.ConnectPlayer.prototype.setPlayerid = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
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
proto.dto.CreatePlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.CreatePlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.CreatePlayer.displayName = 'proto.dto.CreatePlayer';
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
proto.dto.CreatePlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.CreatePlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.CreatePlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreatePlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    templateid: msg.getTemplateid_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dto.CreatePlayer}
 */
proto.dto.CreatePlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.CreatePlayer;
  return proto.dto.CreatePlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.CreatePlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.CreatePlayer}
 */
proto.dto.CreatePlayer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTemplateid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.dto.CreatePlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.CreatePlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.CreatePlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreatePlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getTemplateid_asU8();
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
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.CreatePlayer.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.CreatePlayer.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.CreatePlayer.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreatePlayer.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes TemplateID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.CreatePlayer.prototype.getTemplateid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes TemplateID = 2;
 * This is a type-conversion wrapper around `getTemplateid()`
 * @return {string}
 */
proto.dto.CreatePlayer.prototype.getTemplateid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTemplateid()));
};


/**
 * optional bytes TemplateID = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTemplateid()`
 * @return {!Uint8Array}
 */
proto.dto.CreatePlayer.prototype.getTemplateid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTemplateid()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.CreatePlayer.prototype.setTemplateid = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.dto.CreatePlayer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.CreatePlayer.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.dto);
