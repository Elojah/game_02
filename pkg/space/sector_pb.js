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

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var github_com_elojah_game_02_pkg_geometry_geometry_pb = require('../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js');
var github_com_elojah_game_02_pkg_space_tile_pb = require('../../../../../github.com/elojah/game_02/pkg/space/tile_pb.js');
goog.exportSymbol('proto.space.Sector', null, global);

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
proto.space.Sector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.space.Sector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.space.Sector.displayName = 'proto.space.Sector';
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
proto.space.Sector.prototype.toObject = function(opt_includeInstance) {
  return proto.space.Sector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.space.Sector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.Sector.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    dim: (f = msg.getDim()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f),
    adjacentsMap: (f = msg.getAdjacentsMap()) ? f.toObject(includeInstance, proto.geometry.Vec3.toObject) : [],
    tilemap: (f = msg.getTilemap()) && github_com_elojah_game_02_pkg_space_tile_pb.TileMap.toObject(includeInstance, f)
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
 * @return {!proto.space.Sector}
 */
proto.space.Sector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.space.Sector;
  return proto.space.Sector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.space.Sector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.space.Sector}
 */
proto.space.Sector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setDim(value);
      break;
    case 3:
      var value = msg.getAdjacentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.geometry.Vec3.deserializeBinaryFromReader, "");
         });
      break;
    case 4:
      var value = new github_com_elojah_game_02_pkg_space_tile_pb.TileMap;
      reader.readMessage(value,github_com_elojah_game_02_pkg_space_tile_pb.TileMap.deserializeBinaryFromReader);
      msg.setTilemap(value);
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
proto.space.Sector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.space.Sector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.space.Sector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.Sector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDim();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getAdjacentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.geometry.Vec3.serializeBinaryToWriter);
  }
  f = message.getTilemap();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_elojah_game_02_pkg_space_tile_pb.TileMap.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.space.Sector.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.space.Sector.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes ID = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.space.Sector.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.space.Sector.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional geometry.Vec3 Dim = 2;
 * @return {?proto.geometry.Vec3}
 */
proto.space.Sector.prototype.getDim = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 2));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.space.Sector.prototype.setDim = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.space.Sector.prototype.clearDim = function() {
  this.setDim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.space.Sector.prototype.hasDim = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, geometry.Vec3> Adjacents = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.geometry.Vec3>}
 */
proto.space.Sector.prototype.getAdjacentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.geometry.Vec3>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.geometry.Vec3));
};


proto.space.Sector.prototype.clearAdjacentsMap = function() {
  this.getAdjacentsMap().clear();
};


/**
 * optional TileMap TileMap = 4;
 * @return {?proto.space.TileMap}
 */
proto.space.Sector.prototype.getTilemap = function() {
  return /** @type{?proto.space.TileMap} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_space_tile_pb.TileMap, 4));
};


/** @param {?proto.space.TileMap|undefined} value */
proto.space.Sector.prototype.setTilemap = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.space.Sector.prototype.clearTilemap = function() {
  this.setTilemap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.space.Sector.prototype.hasTilemap = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.space);
