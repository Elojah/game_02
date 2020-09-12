/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../gogo/protobuf/gogoproto/gogo_pb.js":
/*!*************************************************************************!*\
  !*** /home/elojah/go/src/github.com/gogo/protobuf/gogoproto/gogo_pb.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = __webpack_require__(/*! google-protobuf/google/protobuf/descriptor_pb.js */ "./node_modules/google-protobuf/google/protobuf/descriptor_pb.js");
goog.exportSymbol('proto.gogoproto.benchgen', null, global);
goog.exportSymbol('proto.gogoproto.benchgenAll', null, global);
goog.exportSymbol('proto.gogoproto.castkey', null, global);
goog.exportSymbol('proto.gogoproto.casttype', null, global);
goog.exportSymbol('proto.gogoproto.castvalue', null, global);
goog.exportSymbol('proto.gogoproto.compare', null, global);
goog.exportSymbol('proto.gogoproto.compareAll', null, global);
goog.exportSymbol('proto.gogoproto.customname', null, global);
goog.exportSymbol('proto.gogoproto.customtype', null, global);
goog.exportSymbol('proto.gogoproto.description', null, global);
goog.exportSymbol('proto.gogoproto.descriptionAll', null, global);
goog.exportSymbol('proto.gogoproto.embed', null, global);
goog.exportSymbol('proto.gogoproto.enumCustomname', null, global);
goog.exportSymbol('proto.gogoproto.enumStringer', null, global);
goog.exportSymbol('proto.gogoproto.enumStringerAll', null, global);
goog.exportSymbol('proto.gogoproto.enumdecl', null, global);
goog.exportSymbol('proto.gogoproto.enumdeclAll', null, global);
goog.exportSymbol('proto.gogoproto.enumvalueCustomname', null, global);
goog.exportSymbol('proto.gogoproto.equal', null, global);
goog.exportSymbol('proto.gogoproto.equalAll', null, global);
goog.exportSymbol('proto.gogoproto.face', null, global);
goog.exportSymbol('proto.gogoproto.faceAll', null, global);
goog.exportSymbol('proto.gogoproto.gogoprotoImport', null, global);
goog.exportSymbol('proto.gogoproto.goprotoEnumPrefix', null, global);
goog.exportSymbol('proto.gogoproto.goprotoEnumPrefixAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoEnumStringer', null, global);
goog.exportSymbol('proto.gogoproto.goprotoEnumStringerAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoExtensionsMap', null, global);
goog.exportSymbol('proto.gogoproto.goprotoExtensionsMapAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoGetters', null, global);
goog.exportSymbol('proto.gogoproto.goprotoGettersAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoRegistration', null, global);
goog.exportSymbol('proto.gogoproto.goprotoSizecache', null, global);
goog.exportSymbol('proto.gogoproto.goprotoSizecacheAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoStringer', null, global);
goog.exportSymbol('proto.gogoproto.goprotoStringerAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoUnkeyed', null, global);
goog.exportSymbol('proto.gogoproto.goprotoUnkeyedAll', null, global);
goog.exportSymbol('proto.gogoproto.goprotoUnrecognized', null, global);
goog.exportSymbol('proto.gogoproto.goprotoUnrecognizedAll', null, global);
goog.exportSymbol('proto.gogoproto.gostring', null, global);
goog.exportSymbol('proto.gogoproto.gostringAll', null, global);
goog.exportSymbol('proto.gogoproto.jsontag', null, global);
goog.exportSymbol('proto.gogoproto.marshaler', null, global);
goog.exportSymbol('proto.gogoproto.marshalerAll', null, global);
goog.exportSymbol('proto.gogoproto.messagename', null, global);
goog.exportSymbol('proto.gogoproto.messagenameAll', null, global);
goog.exportSymbol('proto.gogoproto.moretags', null, global);
goog.exportSymbol('proto.gogoproto.nullable', null, global);
goog.exportSymbol('proto.gogoproto.onlyone', null, global);
goog.exportSymbol('proto.gogoproto.onlyoneAll', null, global);
goog.exportSymbol('proto.gogoproto.populate', null, global);
goog.exportSymbol('proto.gogoproto.populateAll', null, global);
goog.exportSymbol('proto.gogoproto.protosizer', null, global);
goog.exportSymbol('proto.gogoproto.protosizerAll', null, global);
goog.exportSymbol('proto.gogoproto.sizer', null, global);
goog.exportSymbol('proto.gogoproto.sizerAll', null, global);
goog.exportSymbol('proto.gogoproto.stableMarshaler', null, global);
goog.exportSymbol('proto.gogoproto.stableMarshalerAll', null, global);
goog.exportSymbol('proto.gogoproto.stdduration', null, global);
goog.exportSymbol('proto.gogoproto.stdtime', null, global);
goog.exportSymbol('proto.gogoproto.stringer', null, global);
goog.exportSymbol('proto.gogoproto.stringerAll', null, global);
goog.exportSymbol('proto.gogoproto.testgen', null, global);
goog.exportSymbol('proto.gogoproto.testgenAll', null, global);
goog.exportSymbol('proto.gogoproto.typedecl', null, global);
goog.exportSymbol('proto.gogoproto.typedeclAll', null, global);
goog.exportSymbol('proto.gogoproto.unmarshaler', null, global);
goog.exportSymbol('proto.gogoproto.unmarshalerAll', null, global);
goog.exportSymbol('proto.gogoproto.unsafeMarshaler', null, global);
goog.exportSymbol('proto.gogoproto.unsafeMarshalerAll', null, global);
goog.exportSymbol('proto.gogoproto.unsafeUnmarshaler', null, global);
goog.exportSymbol('proto.gogoproto.unsafeUnmarshalerAll', null, global);
goog.exportSymbol('proto.gogoproto.verboseEqual', null, global);
goog.exportSymbol('proto.gogoproto.verboseEqualAll', null, global);
goog.exportSymbol('proto.gogoproto.wktpointer', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoEnumPrefix`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoEnumPrefix = new jspb.ExtensionFieldInfo(
    62001,
    {goprotoEnumPrefix: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[62001] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoEnumPrefix,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[62001] = proto.gogoproto.goprotoEnumPrefix;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoEnumStringer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoEnumStringer = new jspb.ExtensionFieldInfo(
    62021,
    {goprotoEnumStringer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[62021] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoEnumStringer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[62021] = proto.gogoproto.goprotoEnumStringer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumStringer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.enumStringer = new jspb.ExtensionFieldInfo(
    62022,
    {enumStringer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[62022] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumStringer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[62022] = proto.gogoproto.enumStringer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumCustomname`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.enumCustomname = new jspb.ExtensionFieldInfo(
    62023,
    {enumCustomname: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[62023] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumCustomname,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[62023] = proto.gogoproto.enumCustomname;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumdecl`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.enumdecl = new jspb.ExtensionFieldInfo(
    62024,
    {enumdecl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[62024] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumdecl,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[62024] = proto.gogoproto.enumdecl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumvalueCustomname`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.enumvalueCustomname = new jspb.ExtensionFieldInfo(
    66001,
    {enumvalueCustomname: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[66001] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumvalueCustomname,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[66001] = proto.gogoproto.enumvalueCustomname;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoGettersAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoGettersAll = new jspb.ExtensionFieldInfo(
    63001,
    {goprotoGettersAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63001] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoGettersAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63001] = proto.gogoproto.goprotoGettersAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoEnumPrefixAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoEnumPrefixAll = new jspb.ExtensionFieldInfo(
    63002,
    {goprotoEnumPrefixAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63002] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoEnumPrefixAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63002] = proto.gogoproto.goprotoEnumPrefixAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoStringerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoStringerAll = new jspb.ExtensionFieldInfo(
    63003,
    {goprotoStringerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63003] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoStringerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63003] = proto.gogoproto.goprotoStringerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `verboseEqualAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.verboseEqualAll = new jspb.ExtensionFieldInfo(
    63004,
    {verboseEqualAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63004] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.verboseEqualAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63004] = proto.gogoproto.verboseEqualAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `faceAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.faceAll = new jspb.ExtensionFieldInfo(
    63005,
    {faceAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63005] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.faceAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63005] = proto.gogoproto.faceAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `gostringAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.gostringAll = new jspb.ExtensionFieldInfo(
    63006,
    {gostringAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63006] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.gostringAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63006] = proto.gogoproto.gostringAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `populateAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.populateAll = new jspb.ExtensionFieldInfo(
    63007,
    {populateAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63007] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.populateAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63007] = proto.gogoproto.populateAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stringerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stringerAll = new jspb.ExtensionFieldInfo(
    63008,
    {stringerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63008] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stringerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63008] = proto.gogoproto.stringerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `onlyoneAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.onlyoneAll = new jspb.ExtensionFieldInfo(
    63009,
    {onlyoneAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63009] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.onlyoneAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63009] = proto.gogoproto.onlyoneAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `equalAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.equalAll = new jspb.ExtensionFieldInfo(
    63013,
    {equalAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63013] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.equalAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63013] = proto.gogoproto.equalAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `descriptionAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.descriptionAll = new jspb.ExtensionFieldInfo(
    63014,
    {descriptionAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63014] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.descriptionAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63014] = proto.gogoproto.descriptionAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testgenAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.testgenAll = new jspb.ExtensionFieldInfo(
    63015,
    {testgenAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63015] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.testgenAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63015] = proto.gogoproto.testgenAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `benchgenAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.benchgenAll = new jspb.ExtensionFieldInfo(
    63016,
    {benchgenAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63016] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.benchgenAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63016] = proto.gogoproto.benchgenAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `marshalerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.marshalerAll = new jspb.ExtensionFieldInfo(
    63017,
    {marshalerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63017] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.marshalerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63017] = proto.gogoproto.marshalerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unmarshalerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unmarshalerAll = new jspb.ExtensionFieldInfo(
    63018,
    {unmarshalerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63018] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unmarshalerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63018] = proto.gogoproto.unmarshalerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stableMarshalerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stableMarshalerAll = new jspb.ExtensionFieldInfo(
    63019,
    {stableMarshalerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63019] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stableMarshalerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63019] = proto.gogoproto.stableMarshalerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sizerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.sizerAll = new jspb.ExtensionFieldInfo(
    63020,
    {sizerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63020] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.sizerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63020] = proto.gogoproto.sizerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoEnumStringerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoEnumStringerAll = new jspb.ExtensionFieldInfo(
    63021,
    {goprotoEnumStringerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63021] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoEnumStringerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63021] = proto.gogoproto.goprotoEnumStringerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumStringerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.enumStringerAll = new jspb.ExtensionFieldInfo(
    63022,
    {enumStringerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63022] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumStringerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63022] = proto.gogoproto.enumStringerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unsafeMarshalerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unsafeMarshalerAll = new jspb.ExtensionFieldInfo(
    63023,
    {unsafeMarshalerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63023] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unsafeMarshalerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63023] = proto.gogoproto.unsafeMarshalerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unsafeUnmarshalerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unsafeUnmarshalerAll = new jspb.ExtensionFieldInfo(
    63024,
    {unsafeUnmarshalerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63024] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unsafeUnmarshalerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63024] = proto.gogoproto.unsafeUnmarshalerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoExtensionsMapAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoExtensionsMapAll = new jspb.ExtensionFieldInfo(
    63025,
    {goprotoExtensionsMapAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63025] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoExtensionsMapAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63025] = proto.gogoproto.goprotoExtensionsMapAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoUnrecognizedAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoUnrecognizedAll = new jspb.ExtensionFieldInfo(
    63026,
    {goprotoUnrecognizedAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63026] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoUnrecognizedAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63026] = proto.gogoproto.goprotoUnrecognizedAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `gogoprotoImport`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.gogoprotoImport = new jspb.ExtensionFieldInfo(
    63027,
    {gogoprotoImport: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63027] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.gogoprotoImport,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63027] = proto.gogoproto.gogoprotoImport;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `protosizerAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.protosizerAll = new jspb.ExtensionFieldInfo(
    63028,
    {protosizerAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63028] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.protosizerAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63028] = proto.gogoproto.protosizerAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `compareAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.compareAll = new jspb.ExtensionFieldInfo(
    63029,
    {compareAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63029] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.compareAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63029] = proto.gogoproto.compareAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `typedeclAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.typedeclAll = new jspb.ExtensionFieldInfo(
    63030,
    {typedeclAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63030] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.typedeclAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63030] = proto.gogoproto.typedeclAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumdeclAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.enumdeclAll = new jspb.ExtensionFieldInfo(
    63031,
    {enumdeclAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63031] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.enumdeclAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63031] = proto.gogoproto.enumdeclAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoRegistration`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoRegistration = new jspb.ExtensionFieldInfo(
    63032,
    {goprotoRegistration: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63032] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoRegistration,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63032] = proto.gogoproto.goprotoRegistration;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messagenameAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.messagenameAll = new jspb.ExtensionFieldInfo(
    63033,
    {messagenameAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63033] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.messagenameAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63033] = proto.gogoproto.messagenameAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoSizecacheAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoSizecacheAll = new jspb.ExtensionFieldInfo(
    63034,
    {goprotoSizecacheAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63034] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoSizecacheAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63034] = proto.gogoproto.goprotoSizecacheAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoUnkeyedAll`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoUnkeyedAll = new jspb.ExtensionFieldInfo(
    63035,
    {goprotoUnkeyedAll: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[63035] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoUnkeyedAll,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[63035] = proto.gogoproto.goprotoUnkeyedAll;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoGetters`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoGetters = new jspb.ExtensionFieldInfo(
    64001,
    {goprotoGetters: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64001] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoGetters,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64001] = proto.gogoproto.goprotoGetters;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoStringer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoStringer = new jspb.ExtensionFieldInfo(
    64003,
    {goprotoStringer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64003] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoStringer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64003] = proto.gogoproto.goprotoStringer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `verboseEqual`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.verboseEqual = new jspb.ExtensionFieldInfo(
    64004,
    {verboseEqual: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64004] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.verboseEqual,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64004] = proto.gogoproto.verboseEqual;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `face`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.face = new jspb.ExtensionFieldInfo(
    64005,
    {face: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64005] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.face,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64005] = proto.gogoproto.face;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `gostring`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.gostring = new jspb.ExtensionFieldInfo(
    64006,
    {gostring: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64006] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.gostring,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64006] = proto.gogoproto.gostring;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `populate`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.populate = new jspb.ExtensionFieldInfo(
    64007,
    {populate: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64007] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.populate,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64007] = proto.gogoproto.populate;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stringer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stringer = new jspb.ExtensionFieldInfo(
    67008,
    {stringer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[67008] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stringer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[67008] = proto.gogoproto.stringer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `onlyone`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.onlyone = new jspb.ExtensionFieldInfo(
    64009,
    {onlyone: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64009] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.onlyone,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64009] = proto.gogoproto.onlyone;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `equal`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.equal = new jspb.ExtensionFieldInfo(
    64013,
    {equal: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64013] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.equal,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64013] = proto.gogoproto.equal;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `description`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.description = new jspb.ExtensionFieldInfo(
    64014,
    {description: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64014] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.description,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64014] = proto.gogoproto.description;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `testgen`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.testgen = new jspb.ExtensionFieldInfo(
    64015,
    {testgen: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64015] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.testgen,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64015] = proto.gogoproto.testgen;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `benchgen`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.benchgen = new jspb.ExtensionFieldInfo(
    64016,
    {benchgen: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64016] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.benchgen,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64016] = proto.gogoproto.benchgen;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `marshaler`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.marshaler = new jspb.ExtensionFieldInfo(
    64017,
    {marshaler: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64017] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.marshaler,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64017] = proto.gogoproto.marshaler;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unmarshaler`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unmarshaler = new jspb.ExtensionFieldInfo(
    64018,
    {unmarshaler: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64018] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unmarshaler,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64018] = proto.gogoproto.unmarshaler;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stableMarshaler`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stableMarshaler = new jspb.ExtensionFieldInfo(
    64019,
    {stableMarshaler: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64019] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stableMarshaler,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64019] = proto.gogoproto.stableMarshaler;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sizer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.sizer = new jspb.ExtensionFieldInfo(
    64020,
    {sizer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64020] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.sizer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64020] = proto.gogoproto.sizer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unsafeMarshaler`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unsafeMarshaler = new jspb.ExtensionFieldInfo(
    64023,
    {unsafeMarshaler: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64023] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unsafeMarshaler,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64023] = proto.gogoproto.unsafeMarshaler;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `unsafeUnmarshaler`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.unsafeUnmarshaler = new jspb.ExtensionFieldInfo(
    64024,
    {unsafeUnmarshaler: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64024] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.unsafeUnmarshaler,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64024] = proto.gogoproto.unsafeUnmarshaler;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoExtensionsMap`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoExtensionsMap = new jspb.ExtensionFieldInfo(
    64025,
    {goprotoExtensionsMap: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64025] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoExtensionsMap,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64025] = proto.gogoproto.goprotoExtensionsMap;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoUnrecognized`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoUnrecognized = new jspb.ExtensionFieldInfo(
    64026,
    {goprotoUnrecognized: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64026] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoUnrecognized,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64026] = proto.gogoproto.goprotoUnrecognized;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `protosizer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.protosizer = new jspb.ExtensionFieldInfo(
    64028,
    {protosizer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64028] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.protosizer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64028] = proto.gogoproto.protosizer;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `compare`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.compare = new jspb.ExtensionFieldInfo(
    64029,
    {compare: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64029] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.compare,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64029] = proto.gogoproto.compare;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `typedecl`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.typedecl = new jspb.ExtensionFieldInfo(
    64030,
    {typedecl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64030] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.typedecl,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64030] = proto.gogoproto.typedecl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messagename`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.messagename = new jspb.ExtensionFieldInfo(
    64033,
    {messagename: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64033] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.messagename,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64033] = proto.gogoproto.messagename;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoSizecache`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoSizecache = new jspb.ExtensionFieldInfo(
    64034,
    {goprotoSizecache: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64034] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoSizecache,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64034] = proto.gogoproto.goprotoSizecache;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `goprotoUnkeyed`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.goprotoUnkeyed = new jspb.ExtensionFieldInfo(
    64035,
    {goprotoUnkeyed: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[64035] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.goprotoUnkeyed,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[64035] = proto.gogoproto.goprotoUnkeyed;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nullable`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.nullable = new jspb.ExtensionFieldInfo(
    65001,
    {nullable: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65001] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.nullable,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65001] = proto.gogoproto.nullable;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `embed`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.embed = new jspb.ExtensionFieldInfo(
    65002,
    {embed: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65002] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.embed,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65002] = proto.gogoproto.embed;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `customtype`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.customtype = new jspb.ExtensionFieldInfo(
    65003,
    {customtype: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65003] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.customtype,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65003] = proto.gogoproto.customtype;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `customname`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.customname = new jspb.ExtensionFieldInfo(
    65004,
    {customname: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65004] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.customname,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65004] = proto.gogoproto.customname;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `jsontag`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.jsontag = new jspb.ExtensionFieldInfo(
    65005,
    {jsontag: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65005] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.jsontag,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65005] = proto.gogoproto.jsontag;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `moretags`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.moretags = new jspb.ExtensionFieldInfo(
    65006,
    {moretags: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65006] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.moretags,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65006] = proto.gogoproto.moretags;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `casttype`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.casttype = new jspb.ExtensionFieldInfo(
    65007,
    {casttype: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65007] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.casttype,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65007] = proto.gogoproto.casttype;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `castkey`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.castkey = new jspb.ExtensionFieldInfo(
    65008,
    {castkey: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65008] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.castkey,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65008] = proto.gogoproto.castkey;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `castvalue`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.gogoproto.castvalue = new jspb.ExtensionFieldInfo(
    65009,
    {castvalue: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65009] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.castvalue,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65009] = proto.gogoproto.castvalue;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stdtime`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stdtime = new jspb.ExtensionFieldInfo(
    65010,
    {stdtime: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65010] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stdtime,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65010] = proto.gogoproto.stdtime;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `stdduration`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.stdduration = new jspb.ExtensionFieldInfo(
    65011,
    {stdduration: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65011] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.stdduration,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65011] = proto.gogoproto.stdduration;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `wktpointer`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.gogoproto.wktpointer = new jspb.ExtensionFieldInfo(
    65012,
    {wktpointer: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[65012] = new jspb.ExtensionFieldBinaryInfo(
    proto.gogoproto.wktpointer,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[65012] = proto.gogoproto.wktpointer;

goog.object.extend(exports, proto.gogoproto);


/***/ }),

/***/ "../../pkg/account/dto/account_pb.js":
/*!***********************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/account/dto/account_pb.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
goog.exportSymbol('proto.dto.Auth', null, global);
goog.exportSymbol('proto.dto.Signin', null, global);
goog.exportSymbol('proto.dto.Subscribe', null, global);
goog.exportSymbol('proto.dto.Token', null, global);
goog.exportSymbol('proto.dto.Unsubscribe', null, global);

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
proto.dto.Auth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Auth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Auth.displayName = 'proto.dto.Auth';
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
proto.dto.Auth.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Auth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Auth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Auth.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    token: msg.getToken_asB64()
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
 * @return {!proto.dto.Auth}
 */
proto.dto.Auth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Auth;
  return proto.dto.Auth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Auth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Auth}
 */
proto.dto.Auth.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToken(value);
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
proto.dto.Auth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Auth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Auth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Auth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dto.Auth.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.dto.Auth.prototype.getId_asB64 = function() {
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
proto.dto.Auth.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.Auth.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Token = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.Auth.prototype.getToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Token = 2;
 * This is a type-conversion wrapper around `getToken()`
 * @return {string}
 */
proto.dto.Auth.prototype.getToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToken()));
};


/**
 * optional bytes Token = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToken()`
 * @return {!Uint8Array}
 */
proto.dto.Auth.prototype.getToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.Auth.prototype.setToken = function(value) {
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
proto.dto.Subscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Subscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Subscribe.displayName = 'proto.dto.Subscribe';
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
proto.dto.Subscribe.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Subscribe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Subscribe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Subscribe.toObject = function(includeInstance, msg) {
  var f, obj = {
    alias: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.dto.Subscribe}
 */
proto.dto.Subscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Subscribe;
  return proto.dto.Subscribe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Subscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Subscribe}
 */
proto.dto.Subscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.dto.Subscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Subscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Subscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Subscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string Alias = 1;
 * @return {string}
 */
proto.dto.Subscribe.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dto.Subscribe.prototype.setAlias = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Email = 2;
 * @return {string}
 */
proto.dto.Subscribe.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dto.Subscribe.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.dto.Subscribe.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.Subscribe.prototype.setPassword = function(value) {
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
proto.dto.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Token.displayName = 'proto.dto.Token';
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
proto.dto.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: msg.getToken_asB64()
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
 * @return {!proto.dto.Token}
 */
proto.dto.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Token;
  return proto.dto.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Token}
 */
proto.dto.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToken(value);
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
proto.dto.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes Token = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dto.Token.prototype.getToken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Token = 1;
 * This is a type-conversion wrapper around `getToken()`
 * @return {string}
 */
proto.dto.Token.prototype.getToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToken()));
};


/**
 * optional bytes Token = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToken()`
 * @return {!Uint8Array}
 */
proto.dto.Token.prototype.getToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.Token.prototype.setToken = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
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
proto.dto.Signin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Signin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Signin.displayName = 'proto.dto.Signin';
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
proto.dto.Signin.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Signin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Signin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Signin.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dto.Signin}
 */
proto.dto.Signin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Signin;
  return proto.dto.Signin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Signin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Signin}
 */
proto.dto.Signin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
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
proto.dto.Signin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Signin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Signin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Signin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Email = 1;
 * @return {string}
 */
proto.dto.Signin.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dto.Signin.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.dto.Signin.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dto.Signin.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.dto.Unsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Unsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Unsubscribe.displayName = 'proto.dto.Unsubscribe';
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
proto.dto.Unsubscribe.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Unsubscribe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Unsubscribe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Unsubscribe.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dto.Unsubscribe}
 */
proto.dto.Unsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Unsubscribe;
  return proto.dto.Unsubscribe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Unsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Unsubscribe}
 */
proto.dto.Unsubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
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
proto.dto.Unsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Unsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Unsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Unsubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Email = 1;
 * @return {string}
 */
proto.dto.Unsubscribe.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dto.Unsubscribe.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.dto.Unsubscribe.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dto.Unsubscribe.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.dto);


/***/ }),

/***/ "../../pkg/entity/entity_pb.js":
/*!*****************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/entity/entity_pb.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_geometry_geometry_pb = __webpack_require__(/*! ../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js */ "../../pkg/geometry/geometry_pb.js");
goog.exportSymbol('proto.entity.Cast', null, global);
goog.exportSymbol('proto.entity.E', null, global);

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
proto.entity.Cast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entity.Cast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.entity.Cast.displayName = 'proto.entity.Cast';
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
proto.entity.Cast.prototype.toObject = function(opt_includeInstance) {
  return proto.entity.Cast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entity.Cast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entity.Cast.toObject = function(includeInstance, msg) {
  var f, obj = {
    abilityid: msg.getAbilityid_asB64(),
    ts: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.entity.Cast}
 */
proto.entity.Cast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entity.Cast;
  return proto.entity.Cast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entity.Cast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entity.Cast}
 */
proto.entity.Cast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAbilityid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTs(value);
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
proto.entity.Cast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entity.Cast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entity.Cast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entity.Cast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbilityid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional bytes AbilityID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.entity.Cast.prototype.getAbilityid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes AbilityID = 1;
 * This is a type-conversion wrapper around `getAbilityid()`
 * @return {string}
 */
proto.entity.Cast.prototype.getAbilityid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAbilityid()));
};


/**
 * optional bytes AbilityID = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAbilityid()`
 * @return {!Uint8Array}
 */
proto.entity.Cast.prototype.getAbilityid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAbilityid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.Cast.prototype.setAbilityid = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 TS = 2;
 * @return {number}
 */
proto.entity.Cast.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.entity.Cast.prototype.setTs = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.entity.E = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entity.E, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.entity.E.displayName = 'proto.entity.E';
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
proto.entity.E.prototype.toObject = function(opt_includeInstance) {
  return proto.entity.E.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entity.E} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entity.E.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    templateid: msg.getTemplateid_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ownerid: msg.getOwnerid_asB64(),
    dead: jspb.Message.getFieldWithDefault(msg, 5, false),
    hp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxhp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    mp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    maxmp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    direction: (f = msg.getDirection()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f),
    cast: (f = msg.getCast()) && proto.entity.Cast.toObject(includeInstance, f),
    assetid: msg.getAssetid_asB64(),
    inventoryid: msg.getInventoryid_asB64(),
    spawnid: msg.getSpawnid_asB64(),
    ts: jspb.Message.getFieldWithDefault(msg, 16, 0),
    state: msg.getState_asB64()
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
 * @return {!proto.entity.E}
 */
proto.entity.E.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entity.E;
  return proto.entity.E.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entity.E} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entity.E}
 */
proto.entity.E.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTemplateid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDead(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxhp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMp(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxmp(value);
      break;
    case 10:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    case 11:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 12:
      var value = new proto.entity.Cast;
      reader.readMessage(value,proto.entity.Cast.deserializeBinaryFromReader);
      msg.setCast(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetid(value);
      break;
    case 14:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInventoryid(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSpawnid(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTs(value);
      break;
    case 17:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setState(value);
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
proto.entity.E.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entity.E.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entity.E} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entity.E.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
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
  f = message.getOwnerid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getDead();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMaxhp();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getMp();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMaxmp();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getCast();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.entity.Cast.serializeBinaryToWriter
    );
  }
  f = message.getAssetid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getInventoryid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      14,
      f
    );
  }
  f = message.getSpawnid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getTs();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      17,
      f
    );
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.entity.E.prototype.getId_asB64 = function() {
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
proto.entity.E.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes TemplateID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getTemplateid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes TemplateID = 2;
 * This is a type-conversion wrapper around `getTemplateid()`
 * @return {string}
 */
proto.entity.E.prototype.getTemplateid_asB64 = function() {
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
proto.entity.E.prototype.getTemplateid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTemplateid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setTemplateid = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.entity.E.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.entity.E.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes OwnerID = 4;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getOwnerid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes OwnerID = 4;
 * This is a type-conversion wrapper around `getOwnerid()`
 * @return {string}
 */
proto.entity.E.prototype.getOwnerid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerid()));
};


/**
 * optional bytes OwnerID = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerid()`
 * @return {!Uint8Array}
 */
proto.entity.E.prototype.getOwnerid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setOwnerid = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bool Dead = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.entity.E.prototype.getDead = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.entity.E.prototype.setDead = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 HP = 6;
 * @return {number}
 */
proto.entity.E.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.entity.E.prototype.setHp = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 MaxHP = 7;
 * @return {number}
 */
proto.entity.E.prototype.getMaxhp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.entity.E.prototype.setMaxhp = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 MP = 8;
 * @return {number}
 */
proto.entity.E.prototype.getMp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.entity.E.prototype.setMp = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 MaxMP = 9;
 * @return {number}
 */
proto.entity.E.prototype.getMaxmp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.entity.E.prototype.setMaxmp = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional geometry.Vec3 Direction = 10;
 * @return {?proto.geometry.Vec3}
 */
proto.entity.E.prototype.getDirection = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 10));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.entity.E.prototype.setDirection = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.entity.E.prototype.clearDirection = function() {
  this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.entity.E.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional geometry.Vec3 Position = 11;
 * @return {?proto.geometry.Vec3}
 */
proto.entity.E.prototype.getPosition = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 11));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.entity.E.prototype.setPosition = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.entity.E.prototype.clearPosition = function() {
  this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.entity.E.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Cast Cast = 12;
 * @return {?proto.entity.Cast}
 */
proto.entity.E.prototype.getCast = function() {
  return /** @type{?proto.entity.Cast} */ (
    jspb.Message.getWrapperField(this, proto.entity.Cast, 12));
};


/** @param {?proto.entity.Cast|undefined} value */
proto.entity.E.prototype.setCast = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.entity.E.prototype.clearCast = function() {
  this.setCast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.entity.E.prototype.hasCast = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes AssetID = 13;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getAssetid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes AssetID = 13;
 * This is a type-conversion wrapper around `getAssetid()`
 * @return {string}
 */
proto.entity.E.prototype.getAssetid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetid()));
};


/**
 * optional bytes AssetID = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetid()`
 * @return {!Uint8Array}
 */
proto.entity.E.prototype.getAssetid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setAssetid = function(value) {
  jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional bytes InventoryID = 14;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getInventoryid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * optional bytes InventoryID = 14;
 * This is a type-conversion wrapper around `getInventoryid()`
 * @return {string}
 */
proto.entity.E.prototype.getInventoryid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInventoryid()));
};


/**
 * optional bytes InventoryID = 14;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInventoryid()`
 * @return {!Uint8Array}
 */
proto.entity.E.prototype.getInventoryid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInventoryid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setInventoryid = function(value) {
  jspb.Message.setProto3BytesField(this, 14, value);
};


/**
 * optional bytes SpawnID = 15;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getSpawnid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes SpawnID = 15;
 * This is a type-conversion wrapper around `getSpawnid()`
 * @return {string}
 */
proto.entity.E.prototype.getSpawnid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSpawnid()));
};


/**
 * optional bytes SpawnID = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSpawnid()`
 * @return {!Uint8Array}
 */
proto.entity.E.prototype.getSpawnid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSpawnid()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setSpawnid = function(value) {
  jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional uint64 TS = 16;
 * @return {number}
 */
proto.entity.E.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.entity.E.prototype.setTs = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bytes State = 17;
 * @return {!(string|Uint8Array)}
 */
proto.entity.E.prototype.getState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * optional bytes State = 17;
 * This is a type-conversion wrapper around `getState()`
 * @return {string}
 */
proto.entity.E.prototype.getState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getState()));
};


/**
 * optional bytes State = 17;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getState()`
 * @return {!Uint8Array}
 */
proto.entity.E.prototype.getState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getState()));
};


/** @param {!(string|Uint8Array)} value */
proto.entity.E.prototype.setState = function(value) {
  jspb.Message.setProto3BytesField(this, 17, value);
};


goog.object.extend(exports, proto.entity);


/***/ }),

/***/ "../../pkg/geometry/geometry_pb.js":
/*!*********************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/geometry/geometry_pb.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
goog.exportSymbol('proto.geometry.Rectangle', null, global);
goog.exportSymbol('proto.geometry.Vec3', null, global);

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
proto.geometry.Vec3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.geometry.Vec3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.geometry.Vec3.displayName = 'proto.geometry.Vec3';
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
proto.geometry.Vec3.prototype.toObject = function(opt_includeInstance) {
  return proto.geometry.Vec3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.geometry.Vec3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry.Vec3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    z: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.geometry.Vec3}
 */
proto.geometry.Vec3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.geometry.Vec3;
  return proto.geometry.Vec3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.geometry.Vec3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.geometry.Vec3}
 */
proto.geometry.Vec3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setZ(value);
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
proto.geometry.Vec3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.geometry.Vec3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.geometry.Vec3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry.Vec3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 X = 1;
 * @return {number}
 */
proto.geometry.Vec3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.geometry.Vec3.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 Y = 2;
 * @return {number}
 */
proto.geometry.Vec3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.geometry.Vec3.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 Z = 3;
 * @return {number}
 */
proto.geometry.Vec3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.geometry.Vec3.prototype.setZ = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.geometry.Rectangle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.geometry.Rectangle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.geometry.Rectangle.displayName = 'proto.geometry.Rectangle';
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
proto.geometry.Rectangle.prototype.toObject = function(opt_includeInstance) {
  return proto.geometry.Rectangle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.geometry.Rectangle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry.Rectangle.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointa: (f = msg.getPointa()) && proto.geometry.Vec3.toObject(includeInstance, f),
    pointb: (f = msg.getPointb()) && proto.geometry.Vec3.toObject(includeInstance, f)
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
 * @return {!proto.geometry.Rectangle}
 */
proto.geometry.Rectangle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.geometry.Rectangle;
  return proto.geometry.Rectangle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.geometry.Rectangle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.geometry.Rectangle}
 */
proto.geometry.Rectangle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.geometry.Vec3;
      reader.readMessage(value,proto.geometry.Vec3.deserializeBinaryFromReader);
      msg.setPointa(value);
      break;
    case 2:
      var value = new proto.geometry.Vec3;
      reader.readMessage(value,proto.geometry.Vec3.deserializeBinaryFromReader);
      msg.setPointb(value);
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
proto.geometry.Rectangle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.geometry.Rectangle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.geometry.Rectangle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry.Rectangle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointa();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.geometry.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getPointb();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.geometry.Vec3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vec3 PointA = 1;
 * @return {?proto.geometry.Vec3}
 */
proto.geometry.Rectangle.prototype.getPointa = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, proto.geometry.Vec3, 1));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.geometry.Rectangle.prototype.setPointa = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.geometry.Rectangle.prototype.clearPointa = function() {
  this.setPointa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.geometry.Rectangle.prototype.hasPointa = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vec3 PointB = 2;
 * @return {?proto.geometry.Vec3}
 */
proto.geometry.Rectangle.prototype.getPointb = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, proto.geometry.Vec3, 2));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.geometry.Rectangle.prototype.setPointb = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.geometry.Rectangle.prototype.clearPointb = function() {
  this.setPointb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.geometry.Rectangle.prototype.hasPointb = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.geometry);


/***/ }),

/***/ "../../pkg/lobby/lobby_pb.js":
/*!***************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/lobby/lobby_pb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_room_room_pb = __webpack_require__(/*! ../../../../../github.com/elojah/game_02/pkg/room/room_pb.js */ "../../pkg/room/room_pb.js");
goog.exportSymbol('proto.lobby.L', null, global);

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
proto.lobby.L = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lobby.L, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lobby.L.displayName = 'proto.lobby.L';
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
proto.lobby.L.prototype.toObject = function(opt_includeInstance) {
  return proto.lobby.L.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lobby.L} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lobby.L.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomsMap: (f = msg.getRoomsMap()) ? f.toObject(includeInstance, proto.room.R.toObject) : []
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
 * @return {!proto.lobby.L}
 */
proto.lobby.L.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lobby.L;
  return proto.lobby.L.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lobby.L} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lobby.L}
 */
proto.lobby.L.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = msg.getRoomsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.room.R.deserializeBinaryFromReader, "");
         });
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
proto.lobby.L.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lobby.L.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lobby.L} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lobby.L.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.room.R.serializeBinaryToWriter);
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lobby.L.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.lobby.L.prototype.getId_asB64 = function() {
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
proto.lobby.L.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.lobby.L.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.lobby.L.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lobby.L.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, room.R> Rooms = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.room.R>}
 */
proto.lobby.L.prototype.getRoomsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.room.R>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.room.R));
};


proto.lobby.L.prototype.clearRoomsMap = function() {
  this.getRoomsMap().clear();
};


goog.object.extend(exports, proto.lobby);


/***/ }),

/***/ "../../pkg/player/player_pb.js":
/*!*****************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/player/player_pb.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_entity_entity_pb = __webpack_require__(/*! ../../../../../github.com/elojah/game_02/pkg/entity/entity_pb.js */ "../../pkg/entity/entity_pb.js");
goog.exportSymbol('proto.player.P', null, global);

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
proto.player.P = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.player.P, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.player.P.displayName = 'proto.player.P';
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
proto.player.P.prototype.toObject = function(opt_includeInstance) {
  return proto.player.P.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.player.P} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.player.P.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && github_com_elojah_game_02_pkg_entity_entity_pb.E.toObject(includeInstance, f),
    account: msg.getAccount_asB64()
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
 * @return {!proto.player.P}
 */
proto.player.P.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.player.P;
  return proto.player.P.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.player.P} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.player.P}
 */
proto.player.P.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_elojah_game_02_pkg_entity_entity_pb.E;
      reader.readMessage(value,github_com_elojah_game_02_pkg_entity_entity_pb.E.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
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
proto.player.P.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.player.P.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.player.P} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.player.P.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_entity_entity_pb.E.serializeBinaryToWriter
    );
  }
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional entity.E Entity = 1;
 * @return {?proto.entity.E}
 */
proto.player.P.prototype.getEntity = function() {
  return /** @type{?proto.entity.E} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_entity_entity_pb.E, 1));
};


/** @param {?proto.entity.E|undefined} value */
proto.player.P.prototype.setEntity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.player.P.prototype.clearEntity = function() {
  this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.player.P.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes Account = 2;
 * @return {!(string|Uint8Array)}
 */
proto.player.P.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Account = 2;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.player.P.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes Account = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.player.P.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/** @param {!(string|Uint8Array)} value */
proto.player.P.prototype.setAccount = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.player);


/***/ }),

/***/ "../../pkg/room/dto/room_pb.js":
/*!*****************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/room/dto/room_pb.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_space_dto_tile_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/space/dto/tile_pb.js */ "../../pkg/space/dto/tile_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_geometry_geometry_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js */ "../../pkg/geometry/geometry_pb.js");
goog.exportSymbol('proto.dto.Connect', null, global);
goog.exportSymbol('proto.dto.Create', null, global);

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
proto.dto.Connect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Connect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Connect.displayName = 'proto.dto.Connect';
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
proto.dto.Connect.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Connect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Connect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Connect.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dto.Connect}
 */
proto.dto.Connect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Connect;
  return proto.dto.Connect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Connect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Connect}
 */
proto.dto.Connect.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dto.Connect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Connect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Connect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Connect.serializeBinaryToWriter = function(message, writer) {
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
proto.dto.Connect.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.Connect.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.Connect.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.Connect.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes ID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.Connect.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ID = 2;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.dto.Connect.prototype.getId_asB64 = function() {
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
proto.dto.Connect.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.Connect.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.dto.Connect.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.Connect.prototype.setPassword = function(value) {
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
proto.dto.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.Create.displayName = 'proto.dto.Create';
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
proto.dto.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Create.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.dto.Create}
 */
proto.dto.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.Create;
  return proto.dto.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.Create}
 */
proto.dto.Create.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = new github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap;
      reader.readMessage(value,github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 5:
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
proto.dto.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.Create.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap.serializeBinaryToWriter
    );
  }
  f = message.getSectordimensions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.Create.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.Create.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.Create.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.Create.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.dto.Create.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.dto.Create.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.dto.Create.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dto.Create.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CreateMap Map = 4;
 * @return {?proto.dto.CreateMap}
 */
proto.dto.Create.prototype.getMap = function() {
  return /** @type{?proto.dto.CreateMap} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_space_dto_tile_pb.CreateMap, 4));
};


/** @param {?proto.dto.CreateMap|undefined} value */
proto.dto.Create.prototype.setMap = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dto.Create.prototype.clearMap = function() {
  this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.Create.prototype.hasMap = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional geometry.Vec3 SectorDimensions = 5;
 * @return {?proto.geometry.Vec3}
 */
proto.dto.Create.prototype.getSectordimensions = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 5));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.dto.Create.prototype.setSectordimensions = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dto.Create.prototype.clearSectordimensions = function() {
  this.setSectordimensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.Create.prototype.hasSectordimensions = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.dto);


/***/ }),

/***/ "../../pkg/room/room_pb.js":
/*!*************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/room/room_pb.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
goog.exportSymbol('proto.room.R', null, global);

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
proto.room.R = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.room.R, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.room.R.displayName = 'proto.room.R';
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
proto.room.R.prototype.toObject = function(opt_includeInstance) {
  return proto.room.R.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.room.R} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.room.R.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: msg.getPassword_asB64(),
    owner: msg.getOwner_asB64(),
    worldid: msg.getWorldid_asB64()
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
 * @return {!proto.room.R}
 */
proto.room.R.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.room.R;
  return proto.room.R.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.room.R} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.room.R}
 */
proto.room.R.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwner(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWorldid(value);
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
proto.room.R.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.room.R.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.room.R} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.room.R.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getOwner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getWorldid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.room.R.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.room.R.prototype.getId_asB64 = function() {
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
proto.room.R.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.room.R.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.room.R.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.room.R.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes Password = 3;
 * @return {!(string|Uint8Array)}
 */
proto.room.R.prototype.getPassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Password = 3;
 * This is a type-conversion wrapper around `getPassword()`
 * @return {string}
 */
proto.room.R.prototype.getPassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPassword()));
};


/**
 * optional bytes Password = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPassword()`
 * @return {!Uint8Array}
 */
proto.room.R.prototype.getPassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPassword()));
};


/** @param {!(string|Uint8Array)} value */
proto.room.R.prototype.setPassword = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes Owner = 4;
 * @return {!(string|Uint8Array)}
 */
proto.room.R.prototype.getOwner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes Owner = 4;
 * This is a type-conversion wrapper around `getOwner()`
 * @return {string}
 */
proto.room.R.prototype.getOwner_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwner()));
};


/**
 * optional bytes Owner = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwner()`
 * @return {!Uint8Array}
 */
proto.room.R.prototype.getOwner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwner()));
};


/** @param {!(string|Uint8Array)} value */
proto.room.R.prototype.setOwner = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes WorldID = 5;
 * @return {!(string|Uint8Array)}
 */
proto.room.R.prototype.getWorldid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes WorldID = 5;
 * This is a type-conversion wrapper around `getWorldid()`
 * @return {string}
 */
proto.room.R.prototype.getWorldid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWorldid()));
};


/**
 * optional bytes WorldID = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWorldid()`
 * @return {!Uint8Array}
 */
proto.room.R.prototype.getWorldid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWorldid()));
};


/** @param {!(string|Uint8Array)} value */
proto.room.R.prototype.setWorldid = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


goog.object.extend(exports, proto.room);


/***/ }),

/***/ "../../pkg/space/dto/tile_pb.js":
/*!******************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/space/dto/tile_pb.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_geometry_geometry_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js */ "../../pkg/geometry/geometry_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_space_tile_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/space/tile_pb.js */ "../../pkg/space/tile_pb.js");
goog.exportSymbol('proto.dto.CreateMap', null, global);
goog.exportSymbol('proto.dto.CreateSet', null, global);
goog.exportSymbol('proto.dto.ReadSet', null, global);

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
proto.dto.CreateMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.CreateMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.CreateMap.displayName = 'proto.dto.CreateMap';
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
proto.dto.CreateMap.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.CreateMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.CreateMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    dimensions: (f = msg.getDimensions()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f),
    nplatforms: jspb.Message.getFieldWithDefault(msg, 2, 0),
    platformsize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    platformvariance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    npaths: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pathvariance: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pathwidth: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pathwidthvariance: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.dto.CreateMap}
 */
proto.dto.CreateMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.CreateMap;
  return proto.dto.CreateMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.CreateMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.CreateMap}
 */
proto.dto.CreateMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setDimensions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNplatforms(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlatformsize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlatformvariance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNpaths(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPathvariance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPathwidth(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPathwidthvariance(value);
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
proto.dto.CreateMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.CreateMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.CreateMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDimensions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getNplatforms();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPlatformsize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPlatformvariance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getNpaths();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getPathvariance();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPathwidth();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getPathwidthvariance();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional geometry.Vec3 Dimensions = 1;
 * @return {?proto.geometry.Vec3}
 */
proto.dto.CreateMap.prototype.getDimensions = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 1));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.dto.CreateMap.prototype.setDimensions = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.CreateMap.prototype.clearDimensions = function() {
  this.setDimensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateMap.prototype.hasDimensions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 NPlatforms = 2;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getNplatforms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setNplatforms = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 PlatformSize = 3;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getPlatformsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setPlatformsize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 PlatformVariance = 4;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getPlatformvariance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setPlatformvariance = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 NPaths = 5;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getNpaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setNpaths = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 PathVariance = 6;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getPathvariance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setPathvariance = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 PathWidth = 7;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getPathwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setPathwidth = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 PathWidthVariance = 8;
 * @return {number}
 */
proto.dto.CreateMap.prototype.getPathwidthvariance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.dto.CreateMap.prototype.setPathwidthvariance = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
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
proto.dto.CreateSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.CreateSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.CreateSet.displayName = 'proto.dto.CreateSet';
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
proto.dto.CreateSet.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.CreateSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.CreateSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    id: msg.getId_asB64(),
    set: (f = msg.getSet()) && github_com_elojah_game_02_pkg_space_tile_pb.TileSet.toObject(includeInstance, f)
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
 * @return {!proto.dto.CreateSet}
 */
proto.dto.CreateSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.CreateSet;
  return proto.dto.CreateSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.CreateSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.CreateSet}
 */
proto.dto.CreateSet.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_elojah_game_02_pkg_space_tile_pb.TileSet;
      reader.readMessage(value,github_com_elojah_game_02_pkg_space_tile_pb.TileSet.deserializeBinaryFromReader);
      msg.setSet(value);
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
proto.dto.CreateSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.CreateSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.CreateSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.CreateSet.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_elojah_game_02_pkg_space_tile_pb.TileSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.CreateSet.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.CreateSet.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.CreateSet.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateSet.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes ID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.CreateSet.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ID = 2;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.dto.CreateSet.prototype.getId_asB64 = function() {
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
proto.dto.CreateSet.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.CreateSet.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional space.TileSet Set = 3;
 * @return {?proto.space.TileSet}
 */
proto.dto.CreateSet.prototype.getSet = function() {
  return /** @type{?proto.space.TileSet} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_space_tile_pb.TileSet, 3));
};


/** @param {?proto.space.TileSet|undefined} value */
proto.dto.CreateSet.prototype.setSet = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dto.CreateSet.prototype.clearSet = function() {
  this.setSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.CreateSet.prototype.hasSet = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.dto.ReadSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dto.ReadSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dto.ReadSet.displayName = 'proto.dto.ReadSet';
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
proto.dto.ReadSet.prototype.toObject = function(opt_includeInstance) {
  return proto.dto.ReadSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dto.ReadSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ReadSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && github_com_elojah_game_02_pkg_account_dto_account_pb.Auth.toObject(includeInstance, f),
    id: msg.getId_asB64()
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
 * @return {!proto.dto.ReadSet}
 */
proto.dto.ReadSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dto.ReadSet;
  return proto.dto.ReadSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dto.ReadSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dto.ReadSet}
 */
proto.dto.ReadSet.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dto.ReadSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dto.ReadSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dto.ReadSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dto.ReadSet.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional Auth Auth = 1;
 * @return {?proto.dto.Auth}
 */
proto.dto.ReadSet.prototype.getAuth = function() {
  return /** @type{?proto.dto.Auth} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_account_dto_account_pb.Auth, 1));
};


/** @param {?proto.dto.Auth|undefined} value */
proto.dto.ReadSet.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dto.ReadSet.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dto.ReadSet.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes ID = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dto.ReadSet.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ID = 2;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.dto.ReadSet.prototype.getId_asB64 = function() {
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
proto.dto.ReadSet.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.dto.ReadSet.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.dto);


/***/ }),

/***/ "../../pkg/space/tile_pb.js":
/*!**************************************************************************!*\
  !*** /home/elojah/go/src/github.com/elojah/game_02/pkg/space/tile_pb.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var github_com_elojah_game_02_pkg_geometry_geometry_pb = __webpack_require__(/*! ../../../../../github.com/elojah/game_02/pkg/geometry/geometry_pb.js */ "../../pkg/geometry/geometry_pb.js");
goog.exportSymbol('proto.space.Terrain', null, global);
goog.exportSymbol('proto.space.TileMap', null, global);
goog.exportSymbol('proto.space.TileSet', null, global);

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
proto.space.TileSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.space.TileSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.space.TileSet.displayName = 'proto.space.TileSet';
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
proto.space.TileSet.prototype.toObject = function(opt_includeInstance) {
  return proto.space.TileSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.space.TileSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.TileSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    x: jspb.Message.getFieldWithDefault(msg, 4, 0),
    y: jspb.Message.getFieldWithDefault(msg, 5, 0),
    terrainsMap: (f = msg.getTerrainsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.space.TileSet}
 */
proto.space.TileSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.space.TileSet;
  return proto.space.TileSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.space.TileSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.space.TileSet}
 */
proto.space.TileSet.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setX(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setY(value);
      break;
    case 6:
      var value = msg.getTerrainsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readUint64, null, 0);
         });
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
proto.space.TileSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.space.TileSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.space.TileSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.TileSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTerrainsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeUint64);
  }
};


/**
 * optional bytes ID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.space.TileSet.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ID = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.space.TileSet.prototype.getId_asB64 = function() {
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
proto.space.TileSet.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.space.TileSet.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.space.TileSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.space.TileSet.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 Size = 3;
 * @return {number}
 */
proto.space.TileSet.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.space.TileSet.prototype.setSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 X = 4;
 * @return {number}
 */
proto.space.TileSet.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.space.TileSet.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 Y = 5;
 * @return {number}
 */
proto.space.TileSet.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.space.TileSet.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * map<int32, uint64> Terrains = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.space.TileSet.prototype.getTerrainsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.space.TileSet.prototype.clearTerrainsMap = function() {
  this.getTerrainsMap().clear();
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
proto.space.TileMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.space.TileMap.repeatedFields_, null);
};
goog.inherits(proto.space.TileMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.space.TileMap.displayName = 'proto.space.TileMap';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.space.TileMap.repeatedFields_ = [3];



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
proto.space.TileMap.prototype.toObject = function(opt_includeInstance) {
  return proto.space.TileMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.space.TileMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.TileMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    set: (f = msg.getSet()) && proto.space.TileSet.toObject(includeInstance, f),
    dim: (f = msg.getDim()) && github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.toObject(includeInstance, f),
    mapList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.space.TileMap}
 */
proto.space.TileMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.space.TileMap;
  return proto.space.TileMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.space.TileMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.space.TileMap}
 */
proto.space.TileMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.space.TileSet;
      reader.readMessage(value,proto.space.TileSet.deserializeBinaryFromReader);
      msg.setSet(value);
      break;
    case 2:
      var value = new github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3;
      reader.readMessage(value,github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setDim(value);
      break;
    case 3:
      var value = /** @type {!Array<!proto.space.Terrain>} */ (reader.readPackedEnum());
      msg.setMapList(value);
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
proto.space.TileMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.space.TileMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.space.TileMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.space.TileMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.space.TileSet.serializeBinaryToWriter
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
  f = message.getMapList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional TileSet Set = 1;
 * @return {?proto.space.TileSet}
 */
proto.space.TileMap.prototype.getSet = function() {
  return /** @type{?proto.space.TileSet} */ (
    jspb.Message.getWrapperField(this, proto.space.TileSet, 1));
};


/** @param {?proto.space.TileSet|undefined} value */
proto.space.TileMap.prototype.setSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.space.TileMap.prototype.clearSet = function() {
  this.setSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.space.TileMap.prototype.hasSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional geometry.Vec3 Dim = 2;
 * @return {?proto.geometry.Vec3}
 */
proto.space.TileMap.prototype.getDim = function() {
  return /** @type{?proto.geometry.Vec3} */ (
    jspb.Message.getWrapperField(this, github_com_elojah_game_02_pkg_geometry_geometry_pb.Vec3, 2));
};


/** @param {?proto.geometry.Vec3|undefined} value */
proto.space.TileMap.prototype.setDim = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.space.TileMap.prototype.clearDim = function() {
  this.setDim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.space.TileMap.prototype.hasDim = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Terrain Map = 3;
 * @return {!Array<!proto.space.Terrain>}
 */
proto.space.TileMap.prototype.getMapList = function() {
  return /** @type {!Array<!proto.space.Terrain>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<!proto.space.Terrain>} value */
proto.space.TileMap.prototype.setMapList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.space.Terrain} value
 * @param {number=} opt_index
 */
proto.space.TileMap.prototype.addMap = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.space.TileMap.prototype.clearMapList = function() {
  this.setMapList([]);
};


/**
 * @enum {number}
 */
proto.space.Terrain = {
  SKY: 0,
  FLOOR: 1,
  PILLAR: 2,
  WALL: 3
};

goog.object.extend(exports, proto.space);


/***/ }),

/***/ "../auth/grpc/auth_pb.js":
/*!*******************************!*\
  !*** ../auth/grpc/auth_pb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var google_protobuf_empty_pb = __webpack_require__(/*! google-protobuf/google/protobuf/empty_pb.js */ "./node_modules/google-protobuf/google/protobuf/empty_pb.js");
var github_com_elojah_game_02_pkg_lobby_lobby_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/lobby/lobby_pb.js */ "../../pkg/lobby/lobby_pb.js");
var github_com_elojah_game_02_pkg_player_player_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/player/player_pb.js */ "../../pkg/player/player_pb.js");
var github_com_elojah_game_02_pkg_room_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/room_pb.js */ "../../pkg/room/room_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_room_dto_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/dto/room_pb.js */ "../../pkg/room/dto/room_pb.js");
// goog.object.extend(exports, proto.grpc);


/***/ }),

/***/ "../auth/grpc/auth_pb_service.js":
/*!***************************************!*\
  !*** ../auth/grpc/auth_pb_service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// package: grpc
// file: github.com/elojah/game_02/cmd/auth/grpc/auth.proto

var github_com_elojah_game_02_cmd_auth_grpc_auth_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/cmd/auth/grpc/auth_pb */ "../auth/grpc/auth_pb.js");
var google_protobuf_empty_pb = __webpack_require__(/*! google-protobuf/google/protobuf/empty_pb */ "./node_modules/google-protobuf/google/protobuf/empty_pb.js");
var github_com_elojah_game_02_pkg_lobby_lobby_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/lobby/lobby_pb */ "../../pkg/lobby/lobby_pb.js");
var github_com_elojah_game_02_pkg_player_player_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/player/player_pb */ "../../pkg/player/player_pb.js");
var github_com_elojah_game_02_pkg_room_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/room_pb */ "../../pkg/room/room_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_room_dto_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/dto/room_pb */ "../../pkg/room/dto/room_pb.js");
var grpc = __webpack_require__(/*! @improbable-eng/grpc-web */ "./node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.umd.js").grpc;

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



/***/ }),

/***/ "./node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.umd.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.umd.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var n, r; }}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.Metadata=n.BrowserHeaders},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.debug?console.debug.apply(null,e):console.log.apply(null,e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(8),s=r(9),i=r(1),a=r(4),u=r(14);t.client=function(e,t){return new d(e,t)};var d=function(){function e(e,t){this.started=!1,this.sentFirstMessage=!1,this.completed=!1,this.closed=!1,this.finishedSending=!1,this.onHeadersCallbacks=[],this.onMessageCallbacks=[],this.onEndCallbacks=[],this.parser=new o.ChunkParser,this.methodDefinition=e,this.props=t,this.createTransport()}return e.prototype.createTransport=function(){var e=this.props.host+"/"+this.methodDefinition.service.serviceName+"/"+this.methodDefinition.methodName,t={methodDefinition:this.methodDefinition,debug:this.props.debug||!1,url:e,onHeaders:this.onTransportHeaders.bind(this),onChunk:this.onTransportChunk.bind(this),onEnd:this.onTransportEnd.bind(this)};this.props.transport?this.transport=this.props.transport(t):this.transport=a.makeDefaultTransport(t)},e.prototype.onTransportHeaders=function(e,t){if(this.props.debug&&i.debug("onHeaders",e,t),this.closed)this.props.debug&&i.debug("grpc.onHeaders received after request was closed - ignoring");else if(0===t);else{this.responseHeaders=e,this.props.debug&&i.debug("onHeaders.responseHeaders",JSON.stringify(this.responseHeaders,null,2));var r=c(e);this.props.debug&&i.debug("onHeaders.gRPCStatus",r);var n=r&&r>=0?r:s.httpStatusToCode(t);this.props.debug&&i.debug("onHeaders.code",n);var o=e.get("grpc-message")||[];if(this.props.debug&&i.debug("onHeaders.gRPCMessage",o),this.rawOnHeaders(e),n!==s.Code.OK){var a=this.decodeGRPCStatus(o[0]);this.rawOnError(n,a,e)}}},e.prototype.onTransportChunk=function(e){var t=this;if(this.closed)this.props.debug&&i.debug("grpc.onChunk received after request was closed - ignoring");else{var r=[];try{r=this.parser.parse(e)}catch(e){return this.props.debug&&i.debug("onChunk.parsing error",e,e.message),void this.rawOnError(s.Code.Internal,"parsing error: "+e.message)}r.forEach(function(e){if(e.chunkType===o.ChunkType.MESSAGE){var r=t.methodDefinition.responseType.deserializeBinary(e.data);t.rawOnMessage(r)}else e.chunkType===o.ChunkType.TRAILERS&&(t.responseHeaders?(t.responseTrailers=new n.Metadata(e.trailers),t.props.debug&&i.debug("onChunk.trailers",t.responseTrailers)):(t.responseHeaders=new n.Metadata(e.trailers),t.rawOnHeaders(t.responseHeaders)))})}},e.prototype.onTransportEnd=function(){if(this.props.debug&&i.debug("grpc.onEnd"),this.closed)this.props.debug&&i.debug("grpc.onEnd received after request was closed - ignoring");else if(void 0!==this.responseTrailers){var e=c(this.responseTrailers);if(null!==e){var t=this.responseTrailers.get("grpc-message"),r=this.decodeGRPCStatus(t[0]);this.rawOnEnd(e,r,this.responseTrailers)}else this.rawOnError(s.Code.Internal,"Response closed without grpc-status (Trailers provided)")}else{if(void 0===this.responseHeaders)return void this.rawOnError(s.Code.Unknown,"Response closed without headers");var n=c(this.responseHeaders),o=this.responseHeaders.get("grpc-message");if(this.props.debug&&i.debug("grpc.headers only response ",n,o),null===n)return void this.rawOnEnd(s.Code.Unknown,"Response closed without grpc-status (Headers only)",this.responseHeaders);var a=this.decodeGRPCStatus(o[0]);this.rawOnEnd(n,a,this.responseHeaders)}},e.prototype.decodeGRPCStatus=function(e){if(!e)return"";try{return decodeURIComponent(e)}catch(t){return e}},e.prototype.rawOnEnd=function(e,t,r){var n=this;this.props.debug&&i.debug("rawOnEnd",e,t,r),this.completed||(this.completed=!0,this.onEndCallbacks.forEach(function(o){if(!n.closed)try{o(e,t,r)}catch(e){setTimeout(function(){throw e})}}))},e.prototype.rawOnHeaders=function(e){this.props.debug&&i.debug("rawOnHeaders",e),this.completed||this.onHeadersCallbacks.forEach(function(t){try{t(e)}catch(e){setTimeout(function(){throw e})}})},e.prototype.rawOnError=function(e,t,r){var o=this;void 0===r&&(r=new n.Metadata),this.props.debug&&i.debug("rawOnError",e,t),this.completed||(this.completed=!0,this.onEndCallbacks.forEach(function(n){if(!o.closed)try{n(e,t,r)}catch(e){setTimeout(function(){throw e})}}))},e.prototype.rawOnMessage=function(e){var t=this;this.props.debug&&i.debug("rawOnMessage",e.toObject()),this.completed||this.closed||this.onMessageCallbacks.forEach(function(r){if(!t.closed)try{r(e)}catch(e){setTimeout(function(){throw e})}})},e.prototype.onHeaders=function(e){this.onHeadersCallbacks.push(e)},e.prototype.onMessage=function(e){this.onMessageCallbacks.push(e)},e.prototype.onEnd=function(e){this.onEndCallbacks.push(e)},e.prototype.start=function(e){if(this.started)throw new Error("Client already started - cannot .start()");this.started=!0;var t=new n.Metadata(e||{});t.set("content-type","application/grpc-web+proto"),t.set("x-grpc-web","1"),this.transport.start(t)},e.prototype.send=function(e){if(!this.started)throw new Error("Client not started - .start() must be called before .send()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .send()");if(!this.methodDefinition.requestStream&&this.sentFirstMessage)throw new Error("Message already sent for non-client-streaming method - cannot .send()");this.sentFirstMessage=!0;var t=u.frameRequest(e);this.transport.sendMessage(t)},e.prototype.finishSend=function(){if(!this.started)throw new Error("Client not started - .finishSend() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .finishSend()");this.finishedSending=!0,this.transport.finishSend()},e.prototype.close=function(){if(!this.started)throw new Error("Client not started - .start() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .close()");this.closed=!0,this.props.debug&&i.debug("request.abort aborting request"),this.transport.cancel()},e}();function c(e){var t=e.get("grpc-status")||[];if(t.length>0)try{var r=t[0];return parseInt(r,10)}catch(e){return null}return null}},function(e,t,r){var n;n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);var o=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={splitValues:!1});var r,o=this;if(this.headersMap={},e)if("undefined"!=typeof Headers&&e instanceof Headers)n.getHeaderKeys(e).forEach(function(r){n.getHeaderValues(e,r).forEach(function(e){t.splitValues?o.append(r,n.splitHeaderValue(e)):o.append(r,e)})});else if("object"==typeof(r=e)&&"object"==typeof r.headersMap&&"function"==typeof r.forEach)e.forEach(function(e,t){o.append(e,t)});else if("undefined"!=typeof Map&&e instanceof Map){e.forEach(function(e,t){o.append(t,e)})}else"string"==typeof e?this.appendFromString(e):"object"==typeof e&&Object.getOwnPropertyNames(e).forEach(function(t){var r=e[t];Array.isArray(r)?r.forEach(function(e){o.append(t,e)}):o.append(t,r)})}return e.prototype.appendFromString=function(e){for(var t=e.split("\r\n"),r=0;r<t.length;r++){var n=t[r],o=n.indexOf(":");if(o>0){var s=n.substring(0,o).trim(),i=n.substring(o+1).trim();this.append(s,i)}}},e.prototype.delete=function(e,t){var r=n.normalizeName(e);if(void 0===t)delete this.headersMap[r];else{var o=this.headersMap[r];if(o){var s=o.indexOf(t);s>=0&&o.splice(s,1),0===o.length&&delete this.headersMap[r]}}},e.prototype.append=function(e,t){var r=this,o=n.normalizeName(e);Array.isArray(this.headersMap[o])||(this.headersMap[o]=[]),Array.isArray(t)?t.forEach(function(e){r.headersMap[o].push(n.normalizeValue(e))}):this.headersMap[o].push(n.normalizeValue(t))},e.prototype.set=function(e,t){var r=n.normalizeName(e);if(Array.isArray(t)){var o=[];t.forEach(function(e){o.push(n.normalizeValue(e))}),this.headersMap[r]=o}else this.headersMap[r]=[n.normalizeValue(t)]},e.prototype.has=function(e,t){var r=this.headersMap[n.normalizeName(e)];if(!Array.isArray(r))return!1;if(void 0!==t){var o=n.normalizeValue(t);return r.indexOf(o)>=0}return!0},e.prototype.get=function(e){var t=this.headersMap[n.normalizeName(e)];return void 0!==t?t.concat():[]},e.prototype.forEach=function(e){var t=this;Object.getOwnPropertyNames(this.headersMap).forEach(function(r){e(r,t.headersMap[r])},this)},e.prototype.toHeaders=function(){if("undefined"!=typeof Headers){var e=new Headers;return this.forEach(function(t,r){r.forEach(function(r){e.append(t,r)})}),e}throw new Error("Headers class is not defined")},e}();t.BrowserHeaders=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.BrowserHeaders=n.BrowserHeaders},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iterateHeaders=function(e,t){for(var r=e[Symbol.iterator](),n=r.next();!n.done;)t(n.value[0]),n=r.next()},t.iterateHeadersKeys=function(e,t){for(var r=e.keys(),n=r.next();!n.done;)t(n.value),n=r.next()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);function o(e){return e}t.normalizeName=function(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()},t.normalizeValue=function(e){return"string"!=typeof e&&(e=String(e)),e},t.getHeaderValues=function(e,t){var r=o(e);if(r instanceof Headers&&r.getAll)return r.getAll(t);var n=r.get(t);return n&&"string"==typeof n?[n]:n},t.getHeaderKeys=function(e){var t=o(e),r={},s=[];return t.keys?n.iterateHeadersKeys(t,function(e){r[e]||(r[e]=!0,s.push(e))}):t.forEach?t.forEach(function(e,t){r[t]||(r[t]=!0,s.push(t))}):n.iterateHeaders(t,function(e){var t=e[0];r[t]||(r[t]=!0,s.push(t))}),s},t.splitHeaderValue=function(e){var t=[];return e.split(", ").forEach(function(e){e.split(",").forEach(function(e){t.push(e)})}),t}}])},e.exports=n()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=function(e){return n.CrossBrowserHttpTransport({withCredentials:!1})(e)};t.setDefaultTransportFactory=function(e){o=e},t.makeDefaultTransport=function(e){return o(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=r(7);t.CrossBrowserHttpTransport=function(e){if(n.detectFetchSupport()){var t={credentials:e.withCredentials?"include":"same-origin"};return n.FetchReadableStreamTransport(t)}return o.XhrTransport({withCredentials:e.withCredentials})}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(1);t.FetchReadableStreamTransport=function(e){return function(t){return function(e,t){return e.debug&&s.debug("fetchRequest",e),new i(e,t)}(t,e)}};var i=function(){function e(e,t){this.cancelled=!1,this.controller=self.AbortController&&new AbortController,this.options=e,this.init=t}return e.prototype.pump=function(e,t){var r=this;if(this.reader=e,this.cancelled)return this.options.debug&&s.debug("Fetch.pump.cancel at first pump"),void this.reader.cancel();this.reader.read().then(function(e){if(e.done)return r.options.onEnd(),t;r.options.onChunk(e.value),r.pump(r.reader,t)}).catch(function(e){r.cancelled?r.options.debug&&s.debug("Fetch.catch - request cancelled"):(r.cancelled=!0,r.options.debug&&s.debug("Fetch.catch",e.message),r.options.onEnd(e))})},e.prototype.send=function(e){var t=this;fetch(this.options.url,n({},this.init,{headers:this.metadata.toHeaders(),method:"POST",body:e,signal:this.controller&&this.controller.signal})).then(function(e){if(t.options.debug&&s.debug("Fetch.response",e),t.options.onHeaders(new o.Metadata(e.headers),e.status),!e.body)return e;t.pump(e.body.getReader(),e)}).catch(function(e){t.cancelled?t.options.debug&&s.debug("Fetch.catch - request cancelled"):(t.cancelled=!0,t.options.debug&&s.debug("Fetch.catch",e.message),t.options.onEnd(e))})},e.prototype.sendMessage=function(e){this.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){this.metadata=e},e.prototype.cancel=function(){this.cancelled?this.options.debug&&s.debug("Fetch.abort.cancel already cancelled"):(this.cancelled=!0,this.reader?(this.options.debug&&s.debug("Fetch.abort.cancel"),this.reader.cancel()):this.options.debug&&s.debug("Fetch.abort.cancel before reader"),this.controller&&this.controller.abort())},e}();t.detectFetchSupport=function(){return"undefined"!=typeof Response&&Response.prototype.hasOwnProperty("body")&&"function"==typeof Headers}},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),i=r(1),a=r(11);t.XhrTransport=function(e){return function(t){if(a.detectMozXHRSupport())return new d(t,e);if(a.detectXHROverrideMimeTypeSupport())return new u(t,e);throw new Error("This environment's XHR implementation cannot support binary transfer.")}};var u=function(){function e(e,t){this.options=e,this.init=t}return e.prototype.onProgressEvent=function(){this.options.debug&&i.debug("XHR.onProgressEvent.length: ",this.xhr.response.length);var e=this.xhr.response.substr(this.index);this.index=this.xhr.response.length;var t=p(e);this.options.onChunk(t)},e.prototype.onLoadEvent=function(){this.options.debug&&i.debug("XHR.onLoadEvent"),this.options.onEnd()},e.prototype.onStateChange=function(){this.options.debug&&i.debug("XHR.onStateChange",this.xhr.readyState),this.xhr.readyState===XMLHttpRequest.HEADERS_RECEIVED&&this.options.onHeaders(new s.Metadata(this.xhr.getAllResponseHeaders()),this.xhr.status)},e.prototype.sendMessage=function(e){this.xhr.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){var t=this;this.metadata=e;var r=new XMLHttpRequest;this.xhr=r,r.open("POST",this.options.url),this.configureXhr(),this.metadata.forEach(function(e,t){r.setRequestHeader(e,t.join(", "))}),r.withCredentials=Boolean(this.init.withCredentials),r.addEventListener("readystatechange",this.onStateChange.bind(this)),r.addEventListener("progress",this.onProgressEvent.bind(this)),r.addEventListener("loadend",this.onLoadEvent.bind(this)),r.addEventListener("error",function(e){t.options.debug&&i.debug("XHR.error",e),t.options.onEnd(e.error)})},e.prototype.configureXhr=function(){this.xhr.responseType="text",this.xhr.overrideMimeType("text/plain; charset=x-user-defined")},e.prototype.cancel=function(){this.options.debug&&i.debug("XHR.abort"),this.xhr.abort()},e}();t.XHR=u;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.configureXhr=function(){this.options.debug&&i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"),this.xhr.responseType="moz-chunked-arraybuffer"},t.prototype.onProgressEvent=function(){var e=this.xhr.response;this.options.debug&&i.debug("MozXHR.onProgressEvent: ",new Uint8Array(e)),this.options.onChunk(new Uint8Array(e))},t}(u);function c(e,t){var r=e.charCodeAt(t);if(r>=55296&&r<=56319){var n=e.charCodeAt(t+1);n>=56320&&n<=57343&&(r=65536+(r-55296<<10)+(n-56320))}return r}function p(e){for(var t=new Uint8Array(e.length),r=0,n=0;n<e.length;n++){var o=String.prototype.codePointAt?e.codePointAt(n):c(e,n);t[r++]=255&o}return t}t.MozChunkedArrayBufferXHR=d,t.stringToArrayBuffer=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),s=function(e){return 9===e||10===e||13===e};function i(e){return s(e)||e>=32&&e<=126}function a(e){for(var t=0;t!==e.length;++t)if(!i(e[t]))throw new Error("Metadata is not valid (printable) ASCII");return String.fromCharCode.apply(String,Array.prototype.slice.call(e))}function u(e){return 128==(128&e.getUint8(0))}function d(e){return e.getUint32(1,!1)}function c(e,t,r){return e.byteLength-t>=r}function p(e,t,r){if(e.slice)return e.slice(t,r);var n=e.length;void 0!==r&&(n=r);for(var o=new Uint8Array(n-t),s=0,i=t;i<n;i++)o[s++]=e[i];return o}t.decodeASCII=a,t.encodeASCII=function(e){for(var t=new Uint8Array(e.length),r=0;r!==e.length;++r){var n=e.charCodeAt(r);if(!i(n))throw new Error("Metadata contains invalid ASCII");t[r]=n}return t},function(e){e[e.MESSAGE=1]="MESSAGE",e[e.TRAILERS=2]="TRAILERS"}(n=t.ChunkType||(t.ChunkType={}));var h=function(){function e(){this.buffer=null,this.position=0}return e.prototype.parse=function(e,t){if(0===e.length&&t)return[];var r,s=[];if(null==this.buffer)this.buffer=e,this.position=0;else if(this.position===this.buffer.byteLength)this.buffer=e,this.position=0;else{var i=this.buffer.byteLength-this.position,h=new Uint8Array(i+e.byteLength),f=p(this.buffer,this.position);h.set(f,0);var l=new Uint8Array(e);h.set(l,i),this.buffer=h,this.position=0}for(;;){if(!c(this.buffer,this.position,5))return s;var g=p(this.buffer,this.position,this.position+5),b=new DataView(g.buffer,g.byteOffset,g.byteLength),y=d(b);if(!c(this.buffer,this.position,5+y))return s;var v=p(this.buffer,this.position+5,this.position+5+y);if(this.position+=5+y,u(b))return s.push({chunkType:n.TRAILERS,trailers:(r=v,new o.Metadata(a(r)))}),s;s.push({chunkType:n.MESSAGE,data:v})}},e}();t.ChunkParser=h},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.Canceled=1]="Canceled",e[e.Unknown=2]="Unknown",e[e.InvalidArgument=3]="InvalidArgument",e[e.DeadlineExceeded=4]="DeadlineExceeded",e[e.NotFound=5]="NotFound",e[e.AlreadyExists=6]="AlreadyExists",e[e.PermissionDenied=7]="PermissionDenied",e[e.ResourceExhausted=8]="ResourceExhausted",e[e.FailedPrecondition=9]="FailedPrecondition",e[e.Aborted=10]="Aborted",e[e.OutOfRange=11]="OutOfRange",e[e.Unimplemented=12]="Unimplemented",e[e.Internal=13]="Internal",e[e.Unavailable=14]="Unavailable",e[e.DataLoss=15]="DataLoss",e[e.Unauthenticated=16]="Unauthenticated"}(n=t.Code||(t.Code={})),t.httpStatusToCode=function(e){switch(e){case 0:return n.Internal;case 200:return n.OK;case 400:return n.InvalidArgument;case 401:return n.Unauthenticated;case 403:return n.PermissionDenied;case 404:return n.NotFound;case 409:return n.Aborted;case 412:return n.FailedPrecondition;case 429:return n.ResourceExhausted;case 499:return n.Canceled;case 500:return n.Unknown;case 501:return n.Unimplemented;case 503:return n.Unavailable;case 504:return n.DeadlineExceeded;default:return n.Unknown}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(4),s=r(6),i=r(12),a=r(7),u=r(5),d=r(9),c=r(13),p=r(15),h=r(2);!function(e){e.setDefaultTransport=o.setDefaultTransportFactory,e.CrossBrowserHttpTransport=u.CrossBrowserHttpTransport,e.FetchReadableStreamTransport=s.FetchReadableStreamTransport,e.XhrTransport=a.XhrTransport,e.WebsocketTransport=i.WebsocketTransport,e.Code=d.Code,e.Metadata=n.BrowserHeaders,e.client=function(e,t){return h.client(e,t)},e.invoke=c.invoke,e.unary=p.unary}(t.grpc||(t.grpc={}))},function(e,t,r){"use strict";var n;function o(){if(void 0!==n)return n;if(XMLHttpRequest){n=new XMLHttpRequest;try{n.open("GET","https://localhost")}catch(e){}}return n}function s(e){var t=o();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.xhrSupportsResponseType=s,t.detectMozXHRSupport=function(){return"undefined"!=typeof XMLHttpRequest&&s("moz-chunked-arraybuffer")},t.detectXHROverrideMimeTypeSupport=function(){return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),s=r(8);!function(e){e[e.FINISH_SEND=1]="FINISH_SEND"}(n||(n={}));var i=new Uint8Array([1]);t.WebsocketTransport=function(){return function(e){return function(e){e.debug&&o.debug("websocketRequest",e);var t,r=function(e){if("https://"===e.substr(0,8))return"wss://"+e.substr(8);if("http://"===e.substr(0,7))return"ws://"+e.substr(7);throw new Error("Websocket transport constructed with non-https:// or http:// host.")}(e.url),a=[];function u(e){if(e===n.FINISH_SEND)t.send(i);else{var r=e,o=new Int8Array(r.byteLength+1);o.set(new Uint8Array([0])),o.set(r,1),t.send(o)}}return{sendMessage:function(e){t&&t.readyState!==t.CONNECTING?u(e):a.push(e)},finishSend:function(){t&&t.readyState!==t.CONNECTING?u(n.FINISH_SEND):a.push(n.FINISH_SEND)},start:function(n){(t=new WebSocket(r,["grpc-websockets"])).binaryType="arraybuffer",t.onopen=function(){var r;e.debug&&o.debug("websocketRequest.onopen"),t.send((r="",n.forEach(function(e,t){r+=e+": "+t.join(", ")+"\r\n"}),s.encodeASCII(r))),a.forEach(function(e){u(e)})},t.onclose=function(t){e.debug&&o.debug("websocketRequest.onclose",t),e.onEnd()},t.onerror=function(t){e.debug&&o.debug("websocketRequest.onerror",t)},t.onmessage=function(t){e.onChunk(new Uint8Array(t.data))}},cancel:function(){e.debug&&o.debug("websocket.abort"),t.close()}}}(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.invoke=function(e,t){if(e.requestStream)throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");var r=n.client(e,{host:t.host,transport:t.transport,debug:t.debug});return t.onHeaders&&r.onHeaders(t.onHeaders),t.onMessage&&r.onMessage(t.onMessage),t.onEnd&&r.onEnd(t.onEnd),r.start(t.metadata),r.send(t.request),r.finishSend(),{close:function(){r.close()}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.frameRequest=function(e){var t=e.serializeBinary(),r=new ArrayBuffer(t.byteLength+5);return new DataView(r,1,4).setUint32(0,t.length,!1),new Uint8Array(r,5).set(t),new Uint8Array(r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2);t.unary=function(e,t){if(e.responseStream)throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");if(e.requestStream)throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");var r=null,s=null,i=o.client(e,{host:t.host,transport:t.transport,debug:t.debug});return i.onHeaders(function(e){r=e}),i.onMessage(function(e){s=e}),i.onEnd(function(e,o,i){t.onEnd({status:e,statusMessage:o,headers:r||new n.Metadata,message:s,trailers:i})}),i.start(t.metadata),i.send(t.request),i.finishSend(),{close:function(){i.close()}}}}])});

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/google-protobuf/google-protobuf.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-protobuf/google-protobuf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.findIndex",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).i}},"es6","es3");
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===c&&(c=b.length);c=Math.max(0,Math.min(c|0,b.length));for(var e=a.length;0<e&&0<c;)if(b[--c]!=a[--e])return!1;return 0>=e}},"es6","es3");$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var g=0;g<f&&c<e;)if(b[c++]!=a[g++])return!1;return g>=f}},"es6","es3");
$jscomp.polyfill("String.prototype.repeat",function(a){return a?a:function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}},"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=this||self;goog.isDef=function(a){return void 0!==a};goog.isString=function(a){return"string"==typeof a};goog.isBoolean=function(a){return"boolean"==typeof a};
goog.isNumber=function(a){return"number"==typeof a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}};
goog.define=function(a,b){if(!COMPILED){var c=goog.global.CLOSURE_UNCOMPILED_DEFINES,d=goog.global.CLOSURE_DEFINES;c&&void 0===c.nodeType&&Object.prototype.hasOwnProperty.call(c,a)?b=c[a]:d&&void 0===d.nodeType&&Object.prototype.hasOwnProperty.call(d,a)&&(b=d[a])}return b};goog.FEATURESET_YEAR=2012;goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;
goog.provide=function(a){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};
goog.getScriptNonce=function(a){if(a&&a!=goog.global)return goog.getScriptNonce_(a.document);null===goog.cspNonce_&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document));return goog.cspNonce_};goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/;goog.cspNonce_=null;goog.getScriptNonce_=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(a)?a:""};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if(!goog.isString(a)||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED){if(a in goog.loadedModules_)return goog.loadedModules_[a].exports;if(!goog.implicitNamespaces_[a])return a=goog.getObjectByName(a),null!=a?a:null}return null};goog.ModuleType={ES6:"es6",GOOG:"goog"};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()};goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG};
goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var a=goog.global.$jscomp;return a?"function"!=typeof a.getCurrentModulePath?!1:!!a.getCurrentModulePath():!1};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInGoogModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.declareModuleId=function(a){if(!COMPILED){if(!goog.isInEs6ModuleLoader_())throw Error("goog.declareModuleId may only be called from within an ES6 module");if(goog.moduleLoaderState_&&goog.moduleLoaderState_.moduleName)throw Error("goog.declareModuleId may only be called once per module.");if(a in goog.loadedModules_)throw Error('Module with namespace "'+a+'" already exists.');}if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=a;else{var b=goog.global.$jscomp;if(!b||"function"!=typeof b.getCurrentModulePath)throw Error('Module with namespace "'+
a+'" has been loaded incorrectly.');b=b.require(b.getCurrentModulePath());goog.loadedModules_[a]={exports:b,type:goog.ModuleType.ES6,moduleId:a}}};goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};
COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});goog.getObjectByName=function(a,b){a=a.split(".");b=b||goog.global;for(var c=0;c<a.length;c++)if(b=b[a[c]],!goog.isDefAndNotNull(b))return null;return b};goog.globalize=function(a,b){b=b||goog.global;for(var c in a)b[c]=a[c]};
goog.addDependency=function(a,b,c,d){!COMPILED&&goog.DEPENDENCIES_ENABLED&&goog.debugLoader_.addDependency(a,b,c,d)};goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};
goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.debugLoader_.requested(a);if(goog.isProvided_(a)){if(goog.isInModuleLoader_())return goog.module.getInternal_(a)}else if(goog.ENABLE_DEBUG_LOADER){var b=goog.moduleLoaderState_;goog.moduleLoaderState_=null;try{goog.debugLoader_.load_(a)}finally{goog.moduleLoaderState_=b}}return null}};goog.requireType=function(a){return{}};goog.basePath="";goog.nullFunction=function(){};
goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.instance_=void 0;a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;goog.TRANSPILE="detect";
goog.ASSUME_ES_MODULES_TRANSPILED=!1;goog.TRANSPILE_TO_LANGUAGE="";goog.TRANSPILER="transpile.js";goog.hasBadLetScoping=null;goog.useSafari10Workaround=function(){if(null==goog.hasBadLetScoping){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(b){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping};goog.workaroundSafari10EvalBug=function(a){return"(function(){"+a+"\n;})();\n"};
goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG};if(goog.isFunction(a))var c=a.call(void 0,{});else if(goog.isString(a))goog.useSafari10Workaround()&&(a=goog.workaroundSafari10EvalBug(a)),c=goog.loadModuleFromSource_.call(void 0,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;if(goog.isString(d)&&d)goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,
c):goog.SEAL_MODULE_EXPORTS&&Object.seal&&"object"==typeof c&&null!=c&&Object.seal(c),goog.loadedModules_[d]={exports:c,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName};else throw Error('Invalid module name "'+d+'"');}finally{goog.moduleLoaderState_=b}};goog.loadModuleFromSource_=function(a){eval(a);return{}};goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);try{var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return 0==b.status||200==b.status?b.responseText:null}catch(c){return null}};
goog.transpile_=function(a,b,c){var d=goog.global.$jscomp;d||(goog.global.$jscomp=d={});var e=d.transpile;if(!e){var f=goog.basePath+goog.TRANSPILER,g=goog.loadFileSync_(f);if(g){(function(){(0,eval)(g+"\n//# sourceURL="+f)}).call(goog.global);if(goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=
goog.global.$gwtExport.$jscomp.transpile;d=goog.global.$jscomp;e=d.transpile}}e||(e=d.transpile=function(a,b){goog.logToConsole_(b+" requires transpilation but no transpiler was found.");return a});return e(a,b,c)};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isFunction=function(a){return"function"==goog.typeOf(a)};
goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;
goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if("function"===typeof a.clone)return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_){try{goog.global.eval("var _evalTest_ = 1;")}catch(d){}if("undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=
!1;c.appendChild(b.createTextNode(a));b.head.appendChild(c);b.head.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;
goog.getCssName=function(a,b){if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")};d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};a=b?a+"-"+d(b):d(a);return goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(a):a};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b,c){c&&c.html&&(a=a.replace(/</g,"&lt;"));b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,c){return null!=b&&c in b?b[c]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};
goog.exportProperty=function(a,b,c){a[b]=c};goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if("undefined"!==typeof d.superClass_){for(var e=Array(arguments.length-1),f=1;f<arguments.length;f++)e[f-1]=arguments[f];return d.superClass_.constructor.apply(a,e)}if("string"!=typeof b&&"symbol"!=typeof b)throw Error("method names provided to goog.base must be a string or a symbol");
e=Array(arguments.length-2);for(f=2;f<arguments.length;f++)e[f-2]=arguments[f];f=!1;for(var g=a.constructor.prototype;g;g=Object.getPrototypeOf(g))if(g[b]===d)f=!0;else if(f)return g[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");a.call(goog.global)};
COMPILED||(goog.global.COMPILED=COMPILED);goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};
goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;goog.defineClass.createSealingConstructor_=function(a,b){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return a;var c=!goog.defineClass.isUnsealable_(b),d=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===d&&c&&Object.seal instanceof Function&&Object.seal(b);return b};return d};goog.defineClass.isUnsealable_=function(a){return a&&a.prototype&&a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};
goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
!COMPILED&&goog.DEPENDENCIES_ENABLED&&(goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.isDocumentLoading_=function(){var a=goog.global.document;return a.attachEvent?"complete"!=a.readyState:"loading"==a.readyState},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH)&&goog.isString(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_()){var a=goog.global.document,b=a.currentScript;
a=b?[b]:a.getElementsByTagName("SCRIPT");for(b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?");d=-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}}},goog.findBasePath_(),goog.Transpiler=function(){this.requiresTranspilation_=null;this.transpilationTarget_=goog.TRANSPILE_TO_LANGUAGE},goog.Transpiler.prototype.createRequiresTranspilation_=function(){function a(a,b){e?d[a]=!0:b()?(c=a,d[a]=!1):e=d[a]=!0}function b(a){try{return!!eval(a)}catch(h){return!1}}
var c="es3",d={es3:!1},e=!1,f=goog.global.navigator&&goog.global.navigator.userAgent?goog.global.navigator.userAgent:"";a("es5",function(){return b("[1,].length==1")});a("es6",function(){return f.match(/Edge\/(\d+)(\.\d)*/i)?!1:b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
a("es7",function(){return b("2 ** 2 == 4")});a("es8",function(){return b("async () => 1, true")});a("es9",function(){return b("({...rest} = {}), true")});a("es_next",function(){return!1});return{target:c,map:d}},goog.Transpiler.prototype.needsTranspile=function(a,b){if("always"==goog.TRANSPILE)return!0;if("never"==goog.TRANSPILE)return!1;if(!this.requiresTranspilation_){var c=this.createRequiresTranspilation_();this.requiresTranspilation_=c.map;this.transpilationTarget_=this.transpilationTarget_||
c.target}if(a in this.requiresTranspilation_)return this.requiresTranspilation_[a]?!0:!goog.inHtmlDocument_()||"es6"!=b||"noModule"in goog.global.document.createElement("script")?!1:!0;throw Error("Unknown language mode: "+a);},goog.Transpiler.prototype.transpile=function(a,b){return goog.transpile_(a,b,this.transpilationTarget_)},goog.transpiler_=new goog.Transpiler,goog.protectScriptTag_=function(a){return a.replace(/<\/(SCRIPT)/ig,"\\x3c/$1")},goog.DebugLoader_=function(){this.dependencies_={};
this.idToPath_={};this.written_={};this.loadingDeps_=[];this.depsToLoad_=[];this.paused_=!1;this.factory_=new goog.DependencyFactory(goog.transpiler_);this.deferredCallbacks_={};this.deferredQueue_=[]},goog.DebugLoader_.prototype.bootstrap=function(a,b){function c(){d&&(goog.global.setTimeout(d,0),d=null)}var d=b;if(a.length){b=[];for(var e=0;e<a.length;e++){var f=this.getPathFromDeps_(a[e]);if(!f)throw Error("Unregonized namespace: "+a[e]);b.push(this.dependencies_[f])}f=goog.require;var g=0;for(e=
0;e<a.length;e++)f(a[e]),b[e].onLoad(function(){++g==a.length&&c()})}else c()},goog.DebugLoader_.prototype.loadClosureDeps=function(){this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath+"deps.js"),"deps.js",[],[],{},!1));this.loadDeps_()},goog.DebugLoader_.prototype.requested=function(a,b){(a=this.getPathFromDeps_(a))&&(b||this.areDepsLoaded_(this.dependencies_[a].requires))&&(b=this.deferredCallbacks_[a])&&(delete this.deferredCallbacks_[a],b())},goog.DebugLoader_.prototype.setDependencyFactory=
function(a){this.factory_=a},goog.DebugLoader_.prototype.load_=function(a){if(this.getPathFromDeps_(a)){var b=this,c=[],d=function(a){var e=b.getPathFromDeps_(a);if(!e)throw Error("Bad dependency path or symbol: "+a);if(!b.written_[e]){b.written_[e]=!0;a=b.dependencies_[e];for(e=0;e<a.requires.length;e++)goog.isProvided_(a.requires[e])||d(a.requires[e]);c.push(a)}};d(a);a=!!this.depsToLoad_.length;this.depsToLoad_=this.depsToLoad_.concat(c);this.paused_||a||this.loadDeps_()}else throw a="goog.require could not find: "+
a,goog.logToConsole_(a),Error(a);},goog.DebugLoader_.prototype.loadDeps_=function(){for(var a=this,b=this.paused_;this.depsToLoad_.length&&!b;)(function(){var c=!1,d=a.depsToLoad_.shift(),e=!1;a.loading_(d);var f={pause:function(){if(c)throw Error("Cannot call pause after the call to load.");b=!0},resume:function(){c?a.resume_():b=!1},loaded:function(){if(e)throw Error("Double call to loaded.");e=!0;a.loaded_(d)},pending:function(){for(var b=[],c=0;c<a.loadingDeps_.length;c++)b.push(a.loadingDeps_[c]);
return b},setModuleState:function(a){goog.moduleLoaderState_={type:a,moduleName:"",declareLegacyNamespace:!1}},registerEs6ModuleExports:function(a,b,c){c&&(goog.loadedModules_[c]={exports:b,type:goog.ModuleType.ES6,moduleId:c||""})},registerGoogModuleExports:function(a,b){goog.loadedModules_[a]={exports:b,type:goog.ModuleType.GOOG,moduleId:a}},clearModuleState:function(){goog.moduleLoaderState_=null},defer:function(b){if(c)throw Error("Cannot register with defer after the call to load.");a.defer_(d,
b)},areDepsLoaded:function(){return a.areDepsLoaded_(d.requires)}};try{d.load(f)}finally{c=!0}})();b&&this.pause_()},goog.DebugLoader_.prototype.pause_=function(){this.paused_=!0},goog.DebugLoader_.prototype.resume_=function(){this.paused_&&(this.paused_=!1,this.loadDeps_())},goog.DebugLoader_.prototype.loading_=function(a){this.loadingDeps_.push(a)},goog.DebugLoader_.prototype.loaded_=function(a){for(var b=0;b<this.loadingDeps_.length;b++)if(this.loadingDeps_[b]==a){this.loadingDeps_.splice(b,1);
break}for(b=0;b<this.deferredQueue_.length;b++)if(this.deferredQueue_[b]==a.path){this.deferredQueue_.splice(b,1);break}if(this.loadingDeps_.length==this.deferredQueue_.length&&!this.depsToLoad_.length)for(;this.deferredQueue_.length;)this.requested(this.deferredQueue_.shift(),!0);a.loaded()},goog.DebugLoader_.prototype.areDepsLoaded_=function(a){for(var b=0;b<a.length;b++){var c=this.getPathFromDeps_(a[b]);if(!c||!(c in this.deferredCallbacks_||goog.isProvided_(a[b])))return!1}return!0},goog.DebugLoader_.prototype.getPathFromDeps_=
function(a){return a in this.idToPath_?this.idToPath_[a]:a in this.dependencies_?a:null},goog.DebugLoader_.prototype.defer_=function(a,b){this.deferredCallbacks_[a.path]=b;this.deferredQueue_.push(a.path)},goog.LoadController=function(){},goog.LoadController.prototype.pause=function(){},goog.LoadController.prototype.resume=function(){},goog.LoadController.prototype.loaded=function(){},goog.LoadController.prototype.pending=function(){},goog.LoadController.prototype.registerEs6ModuleExports=function(a,
b,c){},goog.LoadController.prototype.setModuleState=function(a){},goog.LoadController.prototype.clearModuleState=function(){},goog.LoadController.prototype.defer=function(a){},goog.LoadController.prototype.areDepsLoaded=function(){},goog.Dependency=function(a,b,c,d,e){this.path=a;this.relativePath=b;this.provides=c;this.requires=d;this.loadFlags=e;this.loaded_=!1;this.loadCallbacks_=[]},goog.Dependency.prototype.getPathName=function(){var a=this.path,b=a.indexOf("://");0<=b&&(a=a.substring(b+3),b=
a.indexOf("/"),0<=b&&(a=a.substring(b+1)));return a},goog.Dependency.prototype.onLoad=function(a){this.loaded_?a():this.loadCallbacks_.push(a)},goog.Dependency.prototype.loaded=function(){this.loaded_=!0;var a=this.loadCallbacks_;this.loadCallbacks_=[];for(var b=0;b<a.length;b++)a[b]()},goog.Dependency.defer_=!1,goog.Dependency.callbackMap_={},goog.Dependency.registerCallback_=function(a){var b=Math.random().toString(32);goog.Dependency.callbackMap_[b]=a;return b},goog.Dependency.unregisterCallback_=
function(a){delete goog.Dependency.callbackMap_[a]},goog.Dependency.callback_=function(a,b){if(a in goog.Dependency.callbackMap_){for(var c=goog.Dependency.callbackMap_[a],d=[],e=1;e<arguments.length;e++)d.push(arguments[e]);c.apply(void 0,d)}else throw Error("Callback key "+a+" does not exist (was base.js loaded more than once?).");},goog.Dependency.prototype.load=function(a){if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var b=
goog.global.document;if("complete"==b.readyState&&!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING){if(/\bdeps.js$/.test(this.path)){a.loaded();return}throw Error('Cannot write "'+this.path+'" after document load');}if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&goog.isDocumentLoading_()){var c=goog.Dependency.registerCallback_(function(b){goog.DebugLoader_.IS_OLD_IE_&&"complete"!=b.readyState||(goog.Dependency.unregisterCallback_(c),a.loaded())}),d=!goog.DebugLoader_.IS_OLD_IE_&&goog.getScriptNonce()?
' nonce="'+goog.getScriptNonce()+'"':"";d='<script src="'+this.path+'" '+(goog.DebugLoader_.IS_OLD_IE_?"onreadystatechange":"onload")+"=\"goog.Dependency.callback_('"+c+'\', this)" type="text/javascript" '+(goog.Dependency.defer_?"defer":"")+d+">\x3c/script>";b.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}else{var e=b.createElement("script");e.defer=goog.Dependency.defer_;e.async=!1;e.type="text/javascript";(d=goog.getScriptNonce())&&e.setAttribute("nonce",d);goog.DebugLoader_.IS_OLD_IE_?
(a.pause(),e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)a.loaded(),a.resume()}):e.onload=function(){e.onload=null;a.loaded()};e.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path):this.path;b.head.appendChild(e)}}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),"deps.js"==this.relativePath?(goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
a.loaded()):a.pause()},goog.Es6ModuleDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e)},goog.inherits(goog.Es6ModuleDependency,goog.Dependency),goog.Es6ModuleDependency.prototype.load=function(a){function b(a,b){a=b?'<script type="module" crossorigin>'+b+"\x3c/script>":'<script type="module" crossorigin src="'+a+'">\x3c/script>';d.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(a):a)}function c(a,b){var c=d.createElement("script");c.defer=!0;c.async=!1;c.type=
"module";c.setAttribute("crossorigin",!0);var e=goog.getScriptNonce();e&&c.setAttribute("nonce",e);b?c.textContent=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScript(b):b:c.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(a):a;d.head.appendChild(c)}if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var d=goog.global.document,e=this;if(goog.isDocumentLoading_()){var f=b;goog.Dependency.defer_=
!0}else f=c;var g=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(g);a.setModuleState(goog.ModuleType.ES6)});f(void 0,'goog.Dependency.callback_("'+g+'")');f(this.path,void 0);var h=goog.Dependency.registerCallback_(function(b){goog.Dependency.unregisterCallback_(h);a.registerEs6ModuleExports(e.path,b,goog.moduleLoaderState_.moduleName)});f(void 0,'import * as m from "'+this.path+'"; goog.Dependency.callback_("'+h+'", m)');var k=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(k);
a.clearModuleState();a.loaded()});f(void 0,'goog.Dependency.callback_("'+k+'")')}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),a.pause()},goog.TransformedDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e);this.contents_=null;this.lazyFetch_=!goog.inHtmlDocument_()||!("noModule"in goog.global.document.createElement("script"))},goog.inherits(goog.TransformedDependency,goog.Dependency),goog.TransformedDependency.prototype.load=function(a){function b(){e.contents_=
goog.loadFileSync_(e.path);e.contents_&&(e.contents_=e.transform(e.contents_),e.contents_&&(e.contents_+="\n//# sourceURL="+e.path))}function c(){e.lazyFetch_&&b();if(e.contents_){f&&a.setModuleState(goog.ModuleType.ES6);try{var c=e.contents_;e.contents_=null;goog.globalEval(c);if(f)var d=goog.moduleLoaderState_.moduleName}finally{f&&a.clearModuleState()}f&&goog.global.$jscomp.require.ensure([e.getPathName()],function(){a.registerEs6ModuleExports(e.path,goog.global.$jscomp.require(e.getPathName()),
d)});a.loaded()}}function d(){var a=goog.global.document,b=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(b);c()}),d='<script type="text/javascript">'+goog.protectScriptTag_('goog.Dependency.callback_("'+b+'");')+"\x3c/script>";a.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}var e=this;if(goog.global.CLOSURE_IMPORT_SCRIPT)b(),this.contents_&&goog.global.CLOSURE_IMPORT_SCRIPT("",this.contents_)?(this.contents_=null,a.loaded()):a.pause();
else{var f=this.loadFlags.module==goog.ModuleType.ES6;this.lazyFetch_||b();var g=1<a.pending().length,h=g&&goog.DebugLoader_.IS_OLD_IE_;g=goog.Dependency.defer_&&(g||goog.isDocumentLoading_());if(h||g)a.defer(function(){c()});else{var k=goog.global.document;h=goog.inHtmlDocument_()&&"ActiveXObject"in goog.global;if(f&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()&&!h){goog.Dependency.defer_=!0;a.pause();var l=k.onreadystatechange;k.onreadystatechange=function(){"interactive"==k.readyState&&(k.onreadystatechange=
l,c(),a.resume());goog.isFunction(l)&&l.apply(void 0,arguments)}}else!goog.DebugLoader_.IS_OLD_IE_&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()?d():c()}}},goog.TransformedDependency.prototype.transform=function(a){},goog.TranspiledDependency=function(a,b,c,d,e,f){goog.TransformedDependency.call(this,a,b,c,d,e);this.transpiler=f},goog.inherits(goog.TranspiledDependency,goog.TransformedDependency),goog.TranspiledDependency.prototype.transform=function(a){return this.transpiler.transpile(a,this.getPathName())},
goog.PreTranspiledEs6ModuleDependency=function(a,b,c,d,e){goog.TransformedDependency.call(this,a,b,c,d,e)},goog.inherits(goog.PreTranspiledEs6ModuleDependency,goog.TransformedDependency),goog.PreTranspiledEs6ModuleDependency.prototype.transform=function(a){return a},goog.GoogModuleDependency=function(a,b,c,d,e,f,g){goog.TransformedDependency.call(this,a,b,c,d,e);this.needsTranspile_=f;this.transpiler_=g},goog.inherits(goog.GoogModuleDependency,goog.TransformedDependency),goog.GoogModuleDependency.prototype.transform=
function(a){this.needsTranspile_&&(a=this.transpiler_.transpile(a,this.getPathName()));return goog.LOAD_MODULE_USING_EVAL&&goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(a+"\n//# sourceURL="+this.path+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+a+"\n;return exports});\n//# sourceURL="+this.path+"\n"},goog.DebugLoader_.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.DebugLoader_.prototype.addDependency=function(a,b,
c,d){b=b||[];a=a.replace(/\\/g,"/");var e=goog.normalizePath_(goog.basePath+a);d&&"boolean"!==typeof d||(d=d?{module:goog.ModuleType.GOOG}:{});c=this.factory_.createDependency(e,a,b,c,d,goog.transpiler_.needsTranspile(d.lang||"es3",d.module));this.dependencies_[e]=c;for(c=0;c<b.length;c++)this.idToPath_[b[c]]=e;this.idToPath_[a]=e},goog.DependencyFactory=function(a){this.transpiler=a},goog.DependencyFactory.prototype.createDependency=function(a,b,c,d,e,f){return e.module==goog.ModuleType.GOOG?new goog.GoogModuleDependency(a,
b,c,d,e,f,this.transpiler):f?new goog.TranspiledDependency(a,b,c,d,e,this.transpiler):e.module==goog.ModuleType.ES6?"never"==goog.TRANSPILE&&goog.ASSUME_ES_MODULES_TRANSPILED?new goog.PreTranspiledEs6ModuleDependency(a,b,c,d,e):new goog.Es6ModuleDependency(a,b,c,d,e):new goog.Dependency(a,b,c,d,e)},goog.debugLoader_=new goog.DebugLoader_,goog.loadClosureDeps=function(){goog.debugLoader_.loadClosureDeps()},goog.setDependencyFactory=function(a){goog.debugLoader_.setDependencyFactory(a)},goog.global.CLOSURE_NO_DEPS||
goog.debugLoader_.loadClosureDeps(),goog.bootstrap=function(a,b){goog.debugLoader_.bootstrap(a,b)});goog.TRUSTED_TYPES_POLICY_NAME="";goog.identity_=function(a){return a};goog.createTrustedTypesPolicy=function(a){var b=null;if("undefined"===typeof TrustedTypes||!TrustedTypes.createPolicy)return b;try{b=TrustedTypes.createPolicy(a,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(c){goog.logToConsole_(c.message)}return b};
goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null;var jspb={BinaryConstants:{},ConstBinaryMessage:function(){},BinaryMessage:function(){}};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31};jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5};
jspb.BinaryConstants.FieldTypeToWireType=function(a){var b=jspb.BinaryConstants.FieldType,c=jspb.BinaryConstants.WireType;switch(a){case b.INT32:case b.INT64:case b.UINT32:case b.UINT64:case b.SINT32:case b.SINT64:case b.BOOL:case b.ENUM:case b.VHASH64:return c.VARINT;case b.DOUBLE:case b.FIXED64:case b.SFIXED64:case b.FHASH64:return c.FIXED64;case b.STRING:case b.MESSAGE:case b.BYTES:return c.DELIMITED;case b.FLOAT:case b.FIXED32:case b.SFIXED32:return c.FIXED32;default:return c.INVALID}};
jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1;jspb.BinaryConstants.FLOAT32_EPS=1.401298464324817E-45;jspb.BinaryConstants.FLOAT32_MIN=1.1754943508222875E-38;jspb.BinaryConstants.FLOAT32_MAX=3.4028234663852886E38;jspb.BinaryConstants.FLOAT64_EPS=4.9E-324;jspb.BinaryConstants.FLOAT64_MIN=2.2250738585072014E-308;jspb.BinaryConstants.FLOAT64_MAX=1.7976931348623157E308;jspb.BinaryConstants.TWO_TO_20=1048576;jspb.BinaryConstants.TWO_TO_23=8388608;jspb.BinaryConstants.TWO_TO_31=2147483648;
jspb.BinaryConstants.TWO_TO_32=4294967296;jspb.BinaryConstants.TWO_TO_52=4503599627370496;jspb.BinaryConstants.TWO_TO_63=0x7fffffffffffffff;jspb.BinaryConstants.TWO_TO_64=1.8446744073709552E19;jspb.BinaryConstants.ZERO_HASH="\x00\x00\x00\x00\x00\x00\x00\x00";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a));this.reportErrorToServer=!0};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){goog.debug.Error.call(this,goog.asserts.subs_(a,b));this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");return c+a[d]};goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertExists=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&null==a&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertFinite=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||"number"==typeof a&&isFinite(a)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){var d=a.length,e=goog.isString(a)?a.split(""):a;for(--d;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);goog.asserts.assert(null!=b);d&&(b=goog.bind(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){var d=a.length,e=goog.isString(a)?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){b=goog.array.indexOf(a,b);var c;(c=0<=b)&&goog.array.removeAt(a,b);return c};
goog.array.removeLast=function(a,b){b=goog.array.lastIndexOf(a,b);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};
goog.array.concat=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.join=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(goog.isArrayLike(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};
goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return Array.prototype.splice.apply(a,goog.array.slice(arguments,1))};goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(a)?"o"+goog.getUid(a):(typeof a).charAt(0)+a};c=c||d;d={};for(var e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};
goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1;var l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};goog.array.stableSort=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]={index:d,value:a[d]};var e=b||goog.array.defaultCompare;goog.array.sort(c,function(a,b){return e(a.value,b.value)||a.index-b.index});for(d=0;d<a.length;d++)a[d]=c[d].value};
goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};
goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};
goog.array.inverseDefaultCompare=function(a,b){return-goog.array.defaultCompare(a,b)};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};
goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};
goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(goog.isArray(d))for(var e=0;e<d.length;e+=8192){var f=goog.array.slice(d,e,e+8192);f=goog.array.flatten.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};goog.array.shuffle=function(a,b){b=b||Math.random;for(var c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};goog.array.copyByIndex=function(a,b){var c=[];goog.array.forEach(b,function(b){c.push(a[b])});return c};
goog.array.concatMap=function(a,b,c){return goog.array.concat.apply([],goog.array.map(a,b,c))};goog.crypt={};goog.crypt.stringToByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};goog.crypt.byteArrayToString=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192){var d=goog.array.slice(a,c,c+8192);b+=String.fromCharCode.apply(null,d)}return b};
goog.crypt.byteArrayToHex=function(a,b){return goog.array.map(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join(b||"")};goog.crypt.hexToByteArray=function(a){goog.asserts.assert(0==a.length%2,"Key string length must be multiple of 2");for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
goog.crypt.stringToUtf8ByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
goog.crypt.utf8ByteArrayToString=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var g=a[c++],h=a[c++];e=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")};
goog.crypt.xorByteArray=function(a,b){goog.asserts.assert(a.length==b.length,"XOR array lengths must match");for(var c=[],d=0;d<a.length;d++)c.push(a[d]^b[d]);return c};goog.string={};goog.string.internal={};goog.string.internal.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.internal.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.internal.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.internal.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.internal.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.internal.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};goog.string.internal.caseInsensitiveCompare=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1};
goog.string.internal.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.internal.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.internal.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.internal.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.internal.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.internal.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.internal.NULL_RE_,"&#0;"))}return a};goog.string.internal.AMP_RE_=/&/g;goog.string.internal.LT_RE_=/</g;goog.string.internal.GT_RE_=/>/g;goog.string.internal.QUOT_RE_=/"/g;goog.string.internal.SINGLE_QUOTE_RE_=/'/g;
goog.string.internal.NULL_RE_=/\x00/g;goog.string.internal.ALL_RE_=/[\x00&<>"']/;goog.string.internal.whitespaceEscape=function(a,b){return goog.string.internal.newLineToBr(a.replace(/  /g," &#160;"),b)};goog.string.internal.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.internal.caseInsensitiveContains=function(a,b){return goog.string.internal.contains(a.toLowerCase(),b.toLowerCase())};
goog.string.internal.compareVersions=function(a,b){var c=0;a=goog.string.internal.trim(String(a)).split(".");b=goog.string.internal.trim(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=0==f[1].length?0:parseInt(f[1],10);var h=0==g[1].length?0:parseInt(g[1],10);c=goog.string.internal.compareElements_(c,h)||goog.string.internal.compareElements_(0==
f[2].length,0==g[2].length)||goog.string.internal.compareElements_(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};goog.string.internal.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.TypedString=function(){};goog.string.Const=function(a,b){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=a===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&b||"";this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_};goog.string.Const.prototype.implementsGoogStringTypedString=!0;goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_};
goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"};goog.string.Const.unwrap=function(a){if(a instanceof goog.string.Const&&a.constructor===goog.string.Const&&a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_)return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;goog.asserts.fail("expected object of type Const, got '"+a+"'");return"type_error:Const"};
goog.string.Const.from=function(a){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,a)};goog.string.Const.TYPE_MARKER_={};goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={};goog.string.Const.EMPTY=goog.string.Const.from("");goog.fs={};goog.fs.url={};goog.fs.url.createObjectUrl=function(a){return goog.fs.url.getUrlObject_().createObjectURL(a)};goog.fs.url.revokeObjectUrl=function(a){goog.fs.url.getUrlObject_().revokeObjectURL(a)};goog.fs.url.getUrlObject_=function(){var a=goog.fs.url.findUrlObject_();if(null!=a)return a;throw Error("This browser doesn't seem to support blob URLs");};
goog.fs.url.findUrlObject_=function(){return goog.isDef(goog.global.URL)&&goog.isDef(goog.global.URL.createObjectURL)?goog.global.URL:goog.isDef(goog.global.webkitURL)&&goog.isDef(goog.global.webkitURL.createObjectURL)?goog.global.webkitURL:goog.isDef(goog.global.createObjectURL)?goog.global:null};goog.fs.url.browserSupportsObjectUrls=function(){return null!=goog.fs.url.findUrlObject_()};goog.html={};goog.html.trustedtypes={};goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null;goog.i18n={};goog.i18n.bidi={};goog.i18n.bidi.FORCE_RTL=!1;
goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||("ar"==goog.LOCALE.substring(0,2).toLowerCase()||"fa"==goog.LOCALE.substring(0,2).toLowerCase()||"he"==goog.LOCALE.substring(0,2).toLowerCase()||"iw"==goog.LOCALE.substring(0,2).toLowerCase()||"ps"==goog.LOCALE.substring(0,2).toLowerCase()||"sd"==goog.LOCALE.substring(0,2).toLowerCase()||"ug"==goog.LOCALE.substring(0,2).toLowerCase()||"ur"==goog.LOCALE.substring(0,2).toLowerCase()||"yi"==goog.LOCALE.substring(0,2).toLowerCase())&&(2==goog.LOCALE.length||
"-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))||3<=goog.LOCALE.length&&"ckb"==goog.LOCALE.substring(0,3).toLowerCase()&&(3==goog.LOCALE.length||"-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))||7<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))&&("adlm"==goog.LOCALE.substring(3,7).toLowerCase()||"arab"==goog.LOCALE.substring(3,7).toLowerCase()||"hebr"==goog.LOCALE.substring(3,7).toLowerCase()||"nkoo"==goog.LOCALE.substring(3,
7).toLowerCase()||"rohg"==goog.LOCALE.substring(3,7).toLowerCase()||"thaa"==goog.LOCALE.substring(3,7).toLowerCase())||8<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))&&("adlm"==goog.LOCALE.substring(4,8).toLowerCase()||"arab"==goog.LOCALE.substring(4,8).toLowerCase()||"hebr"==goog.LOCALE.substring(4,8).toLowerCase()||"nkoo"==goog.LOCALE.substring(4,8).toLowerCase()||"rohg"==goog.LOCALE.substring(4,8).toLowerCase()||"thaa"==goog.LOCALE.substring(4,8).toLowerCase());
goog.i18n.bidi.Format={LRE:"\u202a",RLE:"\u202b",PDF:"\u202c",LRM:"\u200e",RLM:"\u200f"};goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0};goog.i18n.bidi.RIGHT="right";goog.i18n.bidi.LEFT="left";goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT;goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir=function(a,b){return"number"==typeof a?0<a?goog.i18n.bidi.Dir.LTR:0>a?goog.i18n.bidi.Dir.RTL:b?null:goog.i18n.bidi.Dir.NEUTRAL:null==a?null:a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};goog.i18n.bidi.ltrChars_="A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";goog.i18n.bidi.rtlChars_="\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g;goog.i18n.bidi.stripHtmlIfNeeded_=function(a,b){return b?a.replace(goog.i18n.bidi.htmlSkipReg_,""):a};goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.hasAnyRtl=function(a,b){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr=function(a,b){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.isRtlChar=function(a){return goog.i18n.bidi.rtlRe_.test(a)};goog.i18n.bidi.isLtrChar=function(a){return goog.i18n.bidi.ltrRe_.test(a)};goog.i18n.bidi.isNeutralChar=function(a){return!goog.i18n.bidi.isLtrChar(a)&&!goog.i18n.bidi.isRtlChar(a)};
goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.startsWithRtl=function(a,b){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr=function(a,b){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr;goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/;goog.i18n.bidi.isNeutralText=function(a,b){a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b);return goog.i18n.bidi.isRequiredLtrRe_.test(a)||!goog.i18n.bidi.hasAnyLtr(a)&&!goog.i18n.bidi.hasAnyRtl(a)};
goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$");goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$");goog.i18n.bidi.endsWithLtr=function(a,b){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl=function(a,b){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl;goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;goog.i18n.bidi.isRtlLanguage=function(a){return goog.i18n.bidi.rtlLocalesRe_.test(a)};goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText=function(a,b){b=(void 0===b?goog.i18n.bidi.hasAnyRtl(a):b)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM;return a.replace(goog.i18n.bidi.bracketGuardTextRe_,b+"$&"+b)};goog.i18n.bidi.enforceRtlInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+a+"</span>"};goog.i18n.bidi.enforceRtlInText=function(a){return goog.i18n.bidi.Format.RLE+a+goog.i18n.bidi.Format.PDF};
goog.i18n.bidi.enforceLtrInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+a+"</span>"};goog.i18n.bidi.enforceLtrInText=function(a){return goog.i18n.bidi.Format.LRE+a+goog.i18n.bidi.Format.PDF};goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;goog.i18n.bidi.leftRe_=/left/gi;goog.i18n.bidi.rightRe_=/right/gi;goog.i18n.bidi.tempRe_=/%%%%/g;
goog.i18n.bidi.mirrorCSS=function(a){return a.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)};goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g;goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote=function(a){return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1\u05f3")};goog.i18n.bidi.wordSeparatorRe_=/\s+/;goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/;goog.i18n.bidi.rtlDetectionThreshold_=.4;
goog.i18n.bidi.estimateDirection=function(a,b){var c=0,d=0,e=!1;a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b).split(goog.i18n.bidi.wordSeparatorRe_);for(b=0;b<a.length;b++){var f=a[b];goog.i18n.bidi.startsWithRtl(f)?(c++,d++):goog.i18n.bidi.isRequiredLtrRe_.test(f)?e=!0:goog.i18n.bidi.hasAnyLtr(f)?d++:goog.i18n.bidi.hasNumeralsRe_.test(f)&&(e=!0)}return 0==d?e?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:c/d>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};
goog.i18n.bidi.detectRtlDirectionality=function(a,b){return goog.i18n.bidi.estimateDirection(a,b)==goog.i18n.bidi.Dir.RTL};goog.i18n.bidi.setElementDirAndAlign=function(a,b){a&&(b=goog.i18n.bidi.toDir(b))&&(a.style.textAlign=b==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,a.dir=b==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")};
goog.i18n.bidi.setElementDirByTextDirectionality=function(a,b){switch(goog.i18n.bidi.estimateDirection(b)){case goog.i18n.bidi.Dir.LTR:a.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:a.dir="rtl";break;default:a.removeAttribute("dir")}};goog.i18n.bidi.DirectionalString=function(){};goog.html.TrustedResourceUrl=function(){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_="";this.trustedURL_=null;this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0;goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};
goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(a,b){var c=goog.html.TrustedResourceUrl.unwrap(this);c=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);var d=c[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",c[2]||"",a)+goog.html.TrustedResourceUrl.stringifyParams_("#",d,b))};
goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"});goog.html.TrustedResourceUrl.unwrap=function(a){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString()};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(a){if(a instanceof goog.html.TrustedResourceUrl&&a.constructor===goog.html.TrustedResourceUrl&&a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:TrustedResourceUrl"};
goog.html.TrustedResourceUrl.unwrapTrustedURL=function(a){return a.trustedURL_?a.trustedURL_:goog.html.TrustedResourceUrl.unwrap(a)};
goog.html.TrustedResourceUrl.format=function(a,b){var c=goog.string.Const.unwrap(a);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof goog.string.Const?goog.string.Const.unwrap(a):
encodeURIComponent(String(a))});return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g;goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams=function(a,b,c,d){return goog.html.TrustedResourceUrl.format(a,b).cloneWithParams(c,d)};goog.html.TrustedResourceUrl.fromConstant=function(a){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};goog.html.TrustedResourceUrl.fromConstants=function(a){for(var b="",c=0;c<a.length;c++)b+=goog.string.Const.unwrap(a[c]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(a){var b=new goog.html.TrustedResourceUrl;b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a):a;goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY&&(b.trustedURL_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a));return b};
goog.html.TrustedResourceUrl.stringifyParams_=function(a,b,c){if(null==c)return b;if(goog.isString(c))return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=goog.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b};goog.html.SafeUrl=function(){this.privateDoNotAccessOrElseSafeUrlWrappedValue_="";this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez";goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0;goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"});goog.html.SafeUrl.unwrap=function(a){return goog.html.SafeUrl.unwrapTrustedURL(a).toString()};
goog.html.SafeUrl.unwrapTrustedURL=function(a){if(a instanceof goog.html.SafeUrl&&a.constructor===goog.html.SafeUrl&&a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;goog.asserts.fail("expected object of type SafeUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeUrl"};goog.html.SafeUrl.fromConstant=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};
goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;goog.html.SafeUrl.isSafeMimeType=function(a){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a)};goog.html.SafeUrl.fromBlob=function(a){a=goog.html.SAFE_MIME_TYPE_PATTERN_.test(a.type)?goog.fs.url.createObjectUrl(a):goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.DATA_URL_PATTERN_=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;goog.html.SafeUrl.fromDataUrl=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(goog.html.DATA_URL_PATTERN_);b=b&&goog.html.SAFE_MIME_TYPE_PATTERN_.test(b[1]);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b?a:goog.html.SafeUrl.INNOCUOUS_STRING)};goog.html.SafeUrl.fromTelUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"tel:")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;goog.html.SafeUrl.fromSipUrl=function(a){goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a))||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromFacebookMessengerUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"fb-messenger://share")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.fromWhatsAppUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"whatsapp://send")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromSmsUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.isSmsUrlBodyValid_=function(a){var b=a.indexOf("#");0<b&&(a=a.substring(0,b));b=a.match(/[?&]body=/gi);if(!b)return!0;if(1<b.length)return!1;a=a.match(/[?&]body=([^&]*)/)[1];if(!a)return!0;try{decodeURIComponent(a)}catch(c){return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a)};goog.html.SafeUrl.fromSshUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"ssh://")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,a,b)};
goog.html.SafeUrl.sanitizeExtensionUrl_=function(a,b,c){(a=a.exec(b))?(a=a[1],-1==(c instanceof goog.string.Const?[goog.string.Const.unwrap(c)]:c.map(function(a){return goog.string.Const.unwrap(a)})).indexOf(a)&&(b=goog.html.SafeUrl.INNOCUOUS_STRING)):b=goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};goog.html.SafeUrl.fromTrustedResourceUrl=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a))};
goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_;goog.html.SafeUrl.sanitize=function(a){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);goog.html.SAFE_URL_PATTERN_.test(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeAssertUnchanged=function(a,b){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);if(b&&/^data:/i.test(a)&&(b=goog.html.SafeUrl.fromDataUrl(a),b.getTypedStringValue()==a))return b;goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a),"%s does not match the safe URL pattern",a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(a){var b=new goog.html.SafeUrl;b.privateDoNotAccessOrElseSafeUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a):a;return b};goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="";this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyle.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyle.EMPTY;goog.asserts.assert(goog.string.internal.endsWith(a,";"),"Last character of style string is not ';': "+a);goog.asserts.assert(goog.string.internal.contains(a,":"),"Style string must contain at least one ':', to specify a \"name: value\" pair: "+a);return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_};goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"});
goog.html.SafeStyle.unwrap=function(a){if(a instanceof goog.html.SafeStyle&&a.constructor===goog.html.SafeStyle&&a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;goog.asserts.fail("expected object of type SafeStyle, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyle"};goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleWrappedValue_=a;return this};goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez";
goog.html.SafeStyle.create=function(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=goog.isArray(d)?goog.array.map(d,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(d),b+=c+":"+d+";")}return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};
goog.html.SafeStyle.sanitizePropertyValue_=function(a){if(a instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof goog.string.Const?goog.string.Const.unwrap(a):goog.html.SafeStyle.sanitizePropertyValueString_(String(a));if(/[{;}]/.test(a))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[a]);return a};
goog.html.SafeStyle.sanitizePropertyValueString_=function(a){var b=a.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");if(goog.html.SafeStyle.VALUE_RE_.test(b)){if(goog.html.SafeStyle.COMMENT_RE_.test(a))return goog.asserts.fail("String value disallows comments, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedQuotes_(a))return goog.asserts.fail("String value requires balanced quotes, got: "+
a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedSquareBrackets_(a))return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING}else return goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;return goog.html.SafeStyle.sanitizeUrl_(a)};
goog.html.SafeStyle.hasBalancedQuotes_=function(a){for(var b=!0,c=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}return b&&c};goog.html.SafeStyle.hasBalancedSquareBrackets_=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};goog.html.SafeStyle.VALUE_ALLOWED_CHARS_="[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$");goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;goog.html.SafeStyle.FUNCTIONS_RE_=/\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;goog.html.SafeStyle.COMMENT_RE_=/\/\*/;
goog.html.SafeStyle.sanitizeUrl_=function(a){return a.replace(goog.html.SafeStyle.URL_RE_,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});a=goog.html.SafeUrl.sanitize(d).getTypedStringValue();return c+b+a+b+e})};goog.html.SafeStyle.concat=function(a){var b="",c=function(a){goog.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyle.unwrap(a)};goog.array.forEach(arguments,c);return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="";this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0;goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeScript.fromConstant=function(a){a=goog.string.Const.unwrap(a);return 0===a.length?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeScript.fromConstantAndArgs=function(a,b){for(var c=[],d=1;d<arguments.length;d++)c.push(goog.html.SafeScript.stringify_(arguments[d]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(a)+")("+c.join(", ")+");")};goog.html.SafeScript.fromJson=function(a){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a))};goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()};
goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"});goog.html.SafeScript.unwrap=function(a){return goog.html.SafeScript.unwrapTrustedScript(a).toString()};
goog.html.SafeScript.unwrapTrustedScript=function(a){if(a instanceof goog.html.SafeScript&&a.constructor===goog.html.SafeScript&&a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;goog.asserts.fail("expected object of type SafeScript, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeScript"};
goog.html.SafeScript.stringify_=function(a){return JSON.stringify(a).replace(/</g,"\\x3c")};goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a):a;return this};goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");goog.object={};goog.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};goog.object.getValueByKeys=function(a,b){var c=goog.isArrayLike(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};goog.object.containsKey=function(a,b){return null!==a&&b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return null!==a&&b in a?a[b]:c};
goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};goog.object.setWithReturnValueIfNotSet=function(a,b,c){if(b in a)return a[b];c=c();return a[b]=c};goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(goog.isFunction(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};
goog.object.getAllPropertyNames=function(a,b,c){if(!a)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(a);for(var d={};a&&(a!==Object.prototype||b)&&(a!==Function.prototype||c);){for(var e=Object.getOwnPropertyNames(a),f=0;f<e.length;f++)d[e[f]]=!0;a=Object.getPrototypeOf(a)}return goog.object.getKeys(d)};goog.object.getSuperClass=function(a){return(a=Object.getPrototypeOf(a.prototype))&&a.constructor};goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="";this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyleSheet.createRule=function(a,b){if(goog.string.internal.contains(a,"<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(c))throw Error("() and [] in selector must be balanced, got: "+a);b instanceof goog.html.SafeStyle||(b=goog.html.SafeStyle.create(b));
a=a+"{"+goog.html.SafeStyle.unwrap(b).replace(/</g,"\\3C ")+"}";return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.hasBalancedBrackets_=function(a){for(var b={"(":")","[":"]"},c=[],d=0;d<a.length;d++){var e=a[d];if(b[e])c.push(b[e]);else if(goog.object.contains(b,e)&&c.pop()!=e)return!1}return 0==c.length};
goog.html.SafeStyleSheet.concat=function(a){var b="",c=function(a){goog.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyleSheet.unwrap(a)};goog.array.forEach(arguments,c);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.SafeStyleSheet.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyleSheet.EMPTY;goog.asserts.assert(!goog.string.internal.contains(a,"<"),"Forbidden '<' character in style sheet string: "+a);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_};
goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"});
goog.html.SafeStyleSheet.unwrap=function(a){if(a instanceof goog.html.SafeStyleSheet&&a.constructor===goog.html.SafeStyleSheet&&a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;goog.asserts.fail("expected object of type SafeStyleSheet, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyleSheet"};
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(a)};goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=a;return this};goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");goog.dom.tags={};goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};goog.dom.tags.isVoidTag=function(a){return!0===goog.dom.tags.VOID_TAGS_[a]};goog.dom.HtmlElement=function(){};goog.dom.TagName=function(a){this.tagName_=a};goog.dom.TagName.prototype.toString=function(){return this.tagName_};goog.dom.TagName.A=new goog.dom.TagName("A");goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR");goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM");goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS");goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET");goog.dom.TagName.AREA=new goog.dom.TagName("AREA");goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE");
goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE");goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO");goog.dom.TagName.B=new goog.dom.TagName("B");goog.dom.TagName.BASE=new goog.dom.TagName("BASE");goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT");goog.dom.TagName.BDI=new goog.dom.TagName("BDI");goog.dom.TagName.BDO=new goog.dom.TagName("BDO");goog.dom.TagName.BIG=new goog.dom.TagName("BIG");goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE");goog.dom.TagName.BODY=new goog.dom.TagName("BODY");
goog.dom.TagName.BR=new goog.dom.TagName("BR");goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON");goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS");goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION");goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER");goog.dom.TagName.CITE=new goog.dom.TagName("CITE");goog.dom.TagName.CODE=new goog.dom.TagName("CODE");goog.dom.TagName.COL=new goog.dom.TagName("COL");goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP");
goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND");goog.dom.TagName.DATA=new goog.dom.TagName("DATA");goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST");goog.dom.TagName.DD=new goog.dom.TagName("DD");goog.dom.TagName.DEL=new goog.dom.TagName("DEL");goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS");goog.dom.TagName.DFN=new goog.dom.TagName("DFN");goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG");goog.dom.TagName.DIR=new goog.dom.TagName("DIR");goog.dom.TagName.DIV=new goog.dom.TagName("DIV");
goog.dom.TagName.DL=new goog.dom.TagName("DL");goog.dom.TagName.DT=new goog.dom.TagName("DT");goog.dom.TagName.EM=new goog.dom.TagName("EM");goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED");goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET");goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION");goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE");goog.dom.TagName.FONT=new goog.dom.TagName("FONT");goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER");goog.dom.TagName.FORM=new goog.dom.TagName("FORM");
goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME");goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET");goog.dom.TagName.H1=new goog.dom.TagName("H1");goog.dom.TagName.H2=new goog.dom.TagName("H2");goog.dom.TagName.H3=new goog.dom.TagName("H3");goog.dom.TagName.H4=new goog.dom.TagName("H4");goog.dom.TagName.H5=new goog.dom.TagName("H5");goog.dom.TagName.H6=new goog.dom.TagName("H6");goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD");goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER");
goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP");goog.dom.TagName.HR=new goog.dom.TagName("HR");goog.dom.TagName.HTML=new goog.dom.TagName("HTML");goog.dom.TagName.I=new goog.dom.TagName("I");goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME");goog.dom.TagName.IMG=new goog.dom.TagName("IMG");goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT");goog.dom.TagName.INS=new goog.dom.TagName("INS");goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX");goog.dom.TagName.KBD=new goog.dom.TagName("KBD");
goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN");goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL");goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND");goog.dom.TagName.LI=new goog.dom.TagName("LI");goog.dom.TagName.LINK=new goog.dom.TagName("LINK");goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN");goog.dom.TagName.MAP=new goog.dom.TagName("MAP");goog.dom.TagName.MARK=new goog.dom.TagName("MARK");goog.dom.TagName.MATH=new goog.dom.TagName("MATH");goog.dom.TagName.MENU=new goog.dom.TagName("MENU");
goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM");goog.dom.TagName.META=new goog.dom.TagName("META");goog.dom.TagName.METER=new goog.dom.TagName("METER");goog.dom.TagName.NAV=new goog.dom.TagName("NAV");goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES");goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT");goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT");goog.dom.TagName.OL=new goog.dom.TagName("OL");goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP");
goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION");goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT");goog.dom.TagName.P=new goog.dom.TagName("P");goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM");goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE");goog.dom.TagName.PRE=new goog.dom.TagName("PRE");goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS");goog.dom.TagName.Q=new goog.dom.TagName("Q");goog.dom.TagName.RP=new goog.dom.TagName("RP");goog.dom.TagName.RT=new goog.dom.TagName("RT");
goog.dom.TagName.RTC=new goog.dom.TagName("RTC");goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY");goog.dom.TagName.S=new goog.dom.TagName("S");goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP");goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT");goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION");goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT");goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL");goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE");goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN");
goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE");goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG");goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE");goog.dom.TagName.SUB=new goog.dom.TagName("SUB");goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY");goog.dom.TagName.SUP=new goog.dom.TagName("SUP");goog.dom.TagName.SVG=new goog.dom.TagName("SVG");goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE");goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY");goog.dom.TagName.TD=new goog.dom.TagName("TD");
goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE");goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA");goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT");goog.dom.TagName.TH=new goog.dom.TagName("TH");goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD");goog.dom.TagName.TIME=new goog.dom.TagName("TIME");goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE");goog.dom.TagName.TR=new goog.dom.TagName("TR");goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK");goog.dom.TagName.TT=new goog.dom.TagName("TT");
goog.dom.TagName.U=new goog.dom.TagName("U");goog.dom.TagName.UL=new goog.dom.TagName("UL");goog.dom.TagName.VAR=new goog.dom.TagName("VAR");goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO");goog.dom.TagName.WBR=new goog.dom.TagName("WBR");goog.labs={};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")};
goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))};
goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};
goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()};goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())};
goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_;goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_;goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);b=goog.labs.userAgent.util.extractVersionTuples(b);var c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?a(["Edge"]):
goog.labs.userAgent.browser.isEdgeChromium()?a(["Edg"]):goog.labs.userAgent.browser.isChrome()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="";this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;this.dir_=null};goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_};goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0;goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()};
goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"});goog.html.SafeHtml.unwrap=function(a){return goog.html.SafeHtml.unwrapTrustedHTML(a).toString()};
goog.html.SafeHtml.unwrapTrustedHTML=function(a){if(a instanceof goog.html.SafeHtml&&a.constructor===goog.html.SafeHtml&&a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;goog.asserts.fail("expected object of type SafeHtml, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeHtml"};
goog.html.SafeHtml.htmlEscape=function(a){if(a instanceof goog.html.SafeHtml)return a;var b="object"==typeof a,c=null;b&&a.implementsGoogI18nBidiDirectionalString&&(c=a.getDirection());a=b&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a),c)};
goog.html.SafeHtml.htmlEscapePreservingNewlines=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a)),a.getDirection())};
goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a)),a.getDirection())};goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape;goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/;
goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};goog.html.SafeHtml.create=function(a,b,c){goog.html.SafeHtml.verifyTagName(String(a));return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a),b,c)};
goog.html.SafeHtml.verifyTagName=function(a){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");};
goog.html.SafeHtml.createIframe=function(a,b,c,d){a&&goog.html.TrustedResourceUrl.unwrap(a);var e={};e.src=a||null;e.srcdoc=b&&goog.html.SafeHtml.unwrap(b);a=goog.html.SafeHtml.combineAttributes(e,{sandbox:""},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.createSandboxIframe=function(a,b,c,d){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error("The browser does not support sandboxed iframes.");var e={};e.src=a?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)):null;e.srcdoc=b||null;e.sandbox="";a=goog.html.SafeHtml.combineAttributes(e,{},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype};goog.html.SafeHtml.createScriptSrc=function(a,b){goog.html.TrustedResourceUrl.unwrap(a);a=goog.html.SafeHtml.combineAttributes({src:a},{},b);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",a)};
goog.html.SafeHtml.createScript=function(a,b){for(var c in b){var d=c.toLowerCase();if("language"==d||"src"==d||"text"==d||"type"==d)throw Error('Cannot set "'+d+'" attribute');}c="";a=goog.array.concat(a);for(d=0;d<a.length;d++)c+=goog.html.SafeScript.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",b,a)};
goog.html.SafeHtml.createStyle=function(a,b){b=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},b);var c="";a=goog.array.concat(a);for(var d=0;d<a.length;d++)c+=goog.html.SafeStyleSheet.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",b,a)};
goog.html.SafeHtml.createMetaRefresh=function(a,b){a=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'");return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(b||0)+"; url="+a})};
goog.html.SafeHtml.getAttrNameAndValue_=function(a,b,c){if(c instanceof goog.string.Const)c=goog.string.Const.unwrap(c);else if("style"==b.toLowerCase())c=goog.html.SafeHtml.getStyleValue_(c);else{if(/^on/i.test(b))throw Error('Attribute "'+b+'" requires goog.string.Const value, "'+c+'" given.');if(b.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)if(c instanceof goog.html.TrustedResourceUrl)c=goog.html.TrustedResourceUrl.unwrap(c);else if(c instanceof goog.html.SafeUrl)c=goog.html.SafeUrl.unwrap(c);
else if(goog.isString(c))c=goog.html.SafeUrl.sanitize(c).getTypedStringValue();else throw Error('Attribute "'+b+'" on tag "'+a+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+c+'" given.');}c.implementsGoogStringTypedString&&(c=c.getTypedStringValue());goog.asserts.assert(goog.isString(c)||goog.isNumber(c),"String or number value expected, got "+typeof c+" with value: "+c);return b+'="'+goog.string.internal.htmlEscape(String(c))+'"'};
goog.html.SafeHtml.getStyleValue_=function(a){if(!goog.isObject(a))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof a+" given: "+a);a instanceof goog.html.SafeStyle||(a=goog.html.SafeStyle.create(a));return goog.html.SafeStyle.unwrap(a)};goog.html.SafeHtml.createWithDir=function(a,b,c,d){b=goog.html.SafeHtml.create(b,c,d);b.dir_=a;return b};
goog.html.SafeHtml.join=function(a,b){a=goog.html.SafeHtml.htmlEscape(a);var c=a.getDirection(),d=[],e=function(a){goog.isArray(a)?goog.array.forEach(a,e):(a=goog.html.SafeHtml.htmlEscape(a),d.push(goog.html.SafeHtml.unwrap(a)),a=a.getDirection(),c==goog.i18n.bidi.Dir.NEUTRAL?c=a:a!=goog.i18n.bidi.Dir.NEUTRAL&&c!=a&&(c=null))};goog.array.forEach(b,e);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a)),c)};
goog.html.SafeHtml.concat=function(a){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))};goog.html.SafeHtml.concatWithDir=function(a,b){var c=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));c.dir_=a;return c};goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(a,b){return(new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(a,b)};
goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a,b){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a):a;this.dir_=b;return this};
goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(a,b,c){var d=null;var e="<"+a+goog.html.SafeHtml.stringifyAttributes(a,b);goog.isDefAndNotNull(c)?goog.isArray(c)||(c=[c]):c=[];goog.dom.tags.isVoidTag(a.toLowerCase())?(goog.asserts.assert(!c.length,"Void tag <"+a+"> does not allow content."),e+=">"):(d=goog.html.SafeHtml.concat(c),e+=">"+goog.html.SafeHtml.unwrap(d)+"</"+a+">",d=d.getDirection());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?goog.i18n.bidi.Dir.NEUTRAL:
null);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e,d)};goog.html.SafeHtml.stringifyAttributes=function(a,b){var c="";if(b)for(var d in b){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d))throw Error('Invalid attribute name "'+d+'".');var e=b[d];goog.isDefAndNotNull(e)&&(c+=" "+goog.html.SafeHtml.getAttrNameAndValue_(a,d,e))}return c};
goog.html.SafeHtml.combineAttributes=function(a,b,c){var d={},e;for(e in a)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=a[e];for(e in b)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=b[e];for(e in c){var f=e.toLowerCase();if(f in a)throw Error('Cannot override "'+f+'" attribute, got "'+e+'" with value "'+c[e]+'"');f in b&&delete d[f];d[e]=c[e]}return d};
goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.uncheckedconversions={};goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(a,b,c){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b,c||null)};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};goog.dom.asserts={};goog.dom.asserts.assertIsLocation=function(a){if(goog.asserts.ENABLE_ASSERTS){var b=goog.dom.asserts.getWindow_(a);b&&(!a||!(a instanceof b.Location)&&a instanceof b.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(a))}return a};
goog.dom.asserts.assertIsElementType_=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=goog.dom.asserts.getWindow_(a);c&&"undefined"!=typeof c[b]&&(a&&(a instanceof c[b]||!(a instanceof c.Location||a instanceof c.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",b,goog.dom.asserts.debugStringForType_(a)))}return a};goog.dom.asserts.assertIsHTMLAnchorElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAnchorElement")};
goog.dom.asserts.assertIsHTMLButtonElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLButtonElement")};goog.dom.asserts.assertIsHTMLLinkElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLLinkElement")};goog.dom.asserts.assertIsHTMLImageElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLImageElement")};goog.dom.asserts.assertIsHTMLAudioElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAudioElement")};
goog.dom.asserts.assertIsHTMLVideoElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLVideoElement")};goog.dom.asserts.assertIsHTMLInputElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLInputElement")};goog.dom.asserts.assertIsHTMLTextAreaElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLTextAreaElement")};goog.dom.asserts.assertIsHTMLCanvasElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLCanvasElement")};
goog.dom.asserts.assertIsHTMLEmbedElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLEmbedElement")};goog.dom.asserts.assertIsHTMLFormElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFormElement")};goog.dom.asserts.assertIsHTMLFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFrameElement")};goog.dom.asserts.assertIsHTMLIFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLIFrameElement")};
goog.dom.asserts.assertIsHTMLObjectElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLObjectElement")};goog.dom.asserts.assertIsHTMLScriptElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLScriptElement")};
goog.dom.asserts.debugStringForType_=function(a){if(goog.isObject(a))try{return a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(b){return"<object could not be stringified>"}else return void 0===a?"undefined":null===a?"null":typeof a};goog.dom.asserts.getWindow_=function(a){try{var b=a&&a.ownerDocument,c=b&&(b.defaultView||b.parentWindow);c=c||goog.global;if(c.Element&&c.Location)return c}catch(d){}return null};goog.functions={};goog.functions.constant=function(a){return function(){return a}};goog.functions.FALSE=function(){return!1};goog.functions.TRUE=function(){return!0};goog.functions.NULL=function(){return null};goog.functions.identity=function(a,b){return a};goog.functions.error=function(a){return function(){throw Error(a);}};goog.functions.fail=function(a){return function(){throw a;}};
goog.functions.lock=function(a,b){b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};goog.functions.nth=function(a){return function(){return arguments[a]}};goog.functions.partialRight=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.push.apply(b,c);return a.apply(this,b)}};goog.functions.withReturnValue=function(a,b){return goog.functions.sequence(a,goog.functions.constant(b))};
goog.functions.equalTo=function(a,b){return function(c){return b?a==c:a===c}};goog.functions.compose=function(a,b){var c=arguments,d=c.length;return function(){var a;d&&(a=c[d-1].apply(this,arguments));for(var b=d-2;0<=b;b--)a=c[b].call(this,a);return a}};goog.functions.sequence=function(a){var b=arguments,c=b.length;return function(){for(var a,e=0;e<c;e++)a=b[e].apply(this,arguments);return a}};
goog.functions.and=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};goog.functions.or=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(b[a].apply(this,arguments))return!0;return!1}};goog.functions.not=function(a){return function(){return!a.apply(this,arguments)}};
goog.functions.create=function(a,b){var c=function(){};c.prototype=a.prototype;c=new c;a.apply(c,Array.prototype.slice.call(arguments,1));return c};goog.functions.CACHE_RETURN_VALUE=!0;goog.functions.cacheReturnValue=function(a){var b=!1,c;return function(){if(!goog.functions.CACHE_RETURN_VALUE)return a();b||(c=a(),b=!0);return c}};goog.functions.once=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
goog.functions.debounce=function(a,b,c){var d=0;return function(e){goog.global.clearTimeout(d);var f=arguments;d=goog.global.setTimeout(function(){a.apply(c,f)},b)}};goog.functions.throttle=function(a,b,c){var d=0,e=!1,f=[],g=function(){d=0;e&&(e=!1,h())},h=function(){d=goog.global.setTimeout(g,b);a.apply(c,f)};return function(a){f=arguments;d?e=!0:h()}};goog.functions.rateLimit=function(a,b,c){var d=0,e=function(){d=0};return function(f){d||(d=goog.global.setTimeout(e,b),a.apply(c,arguments))}};goog.dom.safe={};goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"};goog.dom.safe.insertAdjacentHtml=function(a,b,c){a.insertAdjacentHTML(b,goog.html.SafeHtml.unwrapTrustedHTML(c))};goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue(function(){if(goog.DEBUG&&"undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(goog.DEBUG&&!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);return!b.parentElement});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(a,b){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setInnerHtml=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=a.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a,b)};goog.dom.safe.setOuterHtml=function(a,b){a.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setFormElementAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLFormElement(a).action=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setButtonFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLButtonElement(a).formAction=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setInputFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLInputElement(a).formAction=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setStyle=function(a,b){a.style.cssText=goog.html.SafeStyle.unwrap(b)};goog.dom.safe.documentWrite=function(a,b){a.write(goog.html.SafeHtml.unwrapTrustedHTML(b))};
goog.dom.safe.setAnchorHref=function(a,b){goog.dom.asserts.assertIsHTMLAnchorElement(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setImageSrc=function(a,b){goog.dom.asserts.assertIsHTMLImageElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:image\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setAudioSrc=function(a,b){goog.dom.asserts.assertIsHTMLAudioElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:audio\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setVideoSrc=function(a,b){goog.dom.asserts.assertIsHTMLVideoElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:video\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setEmbedSrc=function(a,b){goog.dom.asserts.assertIsHTMLEmbedElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setFrameSrc=function(a,b){goog.dom.asserts.assertIsHTMLFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)};goog.dom.safe.setIframeSrc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)};
goog.dom.safe.setIframeSrcdoc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setLinkHrefAndRel=function(a,b,c){goog.dom.asserts.assertIsHTMLLinkElement(a);a.rel=c;goog.string.internal.caseInsensitiveContains(c,"stylesheet")?(goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),a.href=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)):a.href=b instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrapTrustedURL(b):b instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrapTrustedURL(b):
goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b))};goog.dom.safe.setObjectData=function(a,b){goog.dom.asserts.assertIsHTMLObjectElement(a);a.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setScriptSrc=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};
goog.dom.safe.setScriptContent=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.text=goog.html.SafeScript.unwrapTrustedScript(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};goog.dom.safe.setLocationHref=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.assignLocation=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.assign(goog.html.SafeUrl.unwrapTrustedURL(b))};goog.dom.safe.replaceLocation=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.replace(goog.html.SafeUrl.unwrapTrustedURL(b))};
goog.dom.safe.openInWindow=function(a,b,c,d,e){a=a instanceof goog.html.SafeUrl?a:goog.html.SafeUrl.sanitizeAssertUnchanged(a);return(b||goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a),c?goog.string.Const.unwrap(c):"",d,e)};goog.dom.safe.parseFromStringHtml=function(a,b){return goog.dom.safe.parseFromString(a,b,"text/html")};goog.dom.safe.parseFromString=function(a,b,c){return a.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b),c)};
goog.dom.safe.createImageFromBlob=function(a){if(!/^image\/.*/g.test(a.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var b=goog.global.URL.createObjectURL(a);a=new goog.global.Image;a.onload=function(){goog.global.URL.revokeObjectURL(b)};goog.dom.safe.setImageSrc(a,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),b));return a};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=goog.string.internal.startsWith;goog.string.endsWith=goog.string.internal.endsWith;goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith;goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith;goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals;
goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace;goog.string.isEmptyString=function(a){return 0==a.length};goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};
goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};
goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.string.internal.trim;
goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_=function(a,b,c){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var d=a.toLowerCase().match(c),e=b.toLowerCase().match(c),f=Math.min(d.length,e.length),g=0;g<f;g++){c=d[g];var h=e[g];if(c!=h)return a=parseInt(c,10),!isNaN(a)&&(b=parseInt(h,10),!isNaN(b)&&a-b)?a-b:c<h?-1:1}return d.length!=e.length?d.length-e.length:a<b?-1:1};goog.string.intAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\D+/g)};
goog.string.floatAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\.\d+|\D+/g)};goog.string.numerateCompare=goog.string.floatAwareCompare;goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=goog.string.internal.newLineToBr;
goog.string.htmlEscape=function(a,b){a=goog.string.internal.htmlEscape(a,b);goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));return a};goog.string.E_RE_=/e/g;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var e=c[a];if(e)return e;"#"==b.charAt(0)&&(b=Number("0"+b.substr(1)),isNaN(b)||(e=String.fromCharCode(b)));e||(goog.dom.safe.setInnerHtml(d,goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."),
a+" ")),e=d.firstChild.nodeValue.slice(0,-1));return c[a]=e})};goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=c.charAt(0)||(c=Number("0"+c.substr(1)),isNaN(c))?a:String.fromCharCode(c)}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a.charCodeAt(0);if(31<b&&127>b)var c=a;else{if(256>b){if(c="\\x",16>b||256<b)c+="0"}else c="\\u",4096>b&&(c+="0");c+=b.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=c};goog.string.contains=goog.string.internal.contains;goog.string.caseInsensitiveContains=goog.string.internal.caseInsensitiveContains;
goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){return a.replace(b,"")};goog.string.removeAll=function(a,b){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,"")};goog.string.replaceAll=function(a,b,c){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,c.replace(/\$/g,"$$$$"))};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};
goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};goog.string.compareVersions=goog.string.internal.compareVersions;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;
goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmptyOrWhitespace(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){b=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};goog.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.string.lastComponent=function(a,b){if(b)"string"==typeof b&&(b=[b]);else return a;for(var c=-1,d=0;d<b.length;d++)if(""!=b[d]){var e=a.lastIndexOf(b[d]);e>c&&(c=e)}return-1==c?a:a.slice(c+1)};
goog.string.editDistance=function(a,b){var c=[],d=[];if(a==b)return 0;if(!a.length||!b.length)return Math.max(a.length,b.length);for(var e=0;e<b.length+1;e++)c[e]=e;for(e=0;e<a.length;e++){d[0]=e+1;for(var f=0;f<b.length;f++)d[f+1]=Math.min(d[f]+1,c[f+1]+1,c[f]+Number(a[e]!=b[f]));for(f=0;f<c.length;f++)c[f]=d[f]}return d[b.length]};goog.labs.userAgent.platform={};goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")};goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")};goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")};
goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()};goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")};goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")};goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")};
goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")};goog.labs.userAgent.platform.isChromecast=function(){return goog.labs.userAgent.util.matchUserAgent("CrKey")};goog.labs.userAgent.platform.isKaiOS=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")};goog.labs.userAgent.platform.isGo2Phone=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")};
goog.labs.userAgent.platform.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent(),b="";goog.labs.userAgent.platform.isWindows()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):goog.labs.userAgent.platform.isIos()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):goog.labs.userAgent.platform.isMacintosh()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):goog.labs.userAgent.platform.isKaiOS()?(b=/(?:KaiOS)\/(\S+)/i,
b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isAndroid()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isChromeOS()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);return b||""};goog.labs.userAgent.platform.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),a)};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.objectProperty=function(a,b){return a};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.reflect.cache=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};
goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()};goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()};
goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){a=goog.labs.userAgent.util.extractVersionTuples(a);var b=goog.labs.userAgent.engine.getEngineTuple_(a);if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];a=a[0];var c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.getEngineTuple_=function(a){if(!goog.labs.userAgent.engine.isEdge())return a[1];for(var b=0;b<a.length;b++){var c=a[b];if("Edge"==c[0])return c}};goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){return(a=goog.array.find(a,function(a){return b==a[0]}))&&a[1]||""};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_EDGE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigatorTyped=function(){return goog.global.navigator||null};goog.userAgent.getNavigator=function(){return goog.userAgent.getNavigatorTyped()};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE;goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};
goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigatorTyped();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;
goog.userAgent.ASSUME_IPAD=!1;goog.userAgent.ASSUME_IPOD=!1;goog.userAgent.ASSUME_KAIOS=!1;goog.userAgent.ASSUME_GO2PHONE=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD;goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows();goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()};goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_();goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigatorTyped();return!!a&&goog.string.contains(a.appVersion||"","X11")};
goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid();goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone();goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIpod();goog.userAgent.IOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIos();goog.userAgent.KAIOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_KAIOS:goog.labs.userAgent.platform.isKaiOS();goog.userAgent.GO2PHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_GO2PHONE:goog.labs.userAgent.platform.isGo2Phone();
goog.userAgent.determineVersion_=function(){var a="",b=goog.userAgent.getVersionRegexResult_();b&&(a=b?b[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),null!=b&&b>parseFloat(a))?String(b):a};
goog.userAgent.getVersionRegexResult_=function(){var a=goog.userAgent.getUserAgentString();if(goog.userAgent.GECKO)return/rv:([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.EDGE)return/Edge\/([\d\.]+)/.exec(a);if(goog.userAgent.IE)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.WEBKIT)return/WebKit\/(\S+)/.exec(a);if(goog.userAgent.OPERA)return/(?:Version)[ \/]?(\S+)/.exec(a)};goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};
goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_,a,function(){return 0<=goog.string.compareVersions(goog.userAgent.VERSION,a)})};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher=function(a){return Number(goog.userAgent.DOCUMENT_MODE)>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;goog.userAgent.DOCUMENT_MODE=function(){if(goog.global.document&&goog.userAgent.IE)return goog.userAgent.getDocumentMode_()}();goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;goog.userAgent.product.OPERA=goog.userAgent.OPERA;goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.EDGE=goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox();goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()};goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser();goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()};goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_();goog.crypt.base64={};goog.crypt.base64.DEFAULT_ALPHABET_COMMON_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"+/=";goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"-_.";goog.crypt.base64.Alphabet={DEFAULT:0,NO_PADDING:1,WEBSAFE:2,WEBSAFE_DOT_PADDING:3,WEBSAFE_NO_PADDING:4};goog.crypt.base64.paddingChars_="=.";
goog.crypt.base64.isPadding_=function(a){return goog.string.contains(goog.crypt.base64.paddingChars_,a)};goog.crypt.base64.byteToCharMaps_={};goog.crypt.base64.charToByteMap_=null;goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA;goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob;
goog.crypt.base64.encodeByteArray=function(a,b){goog.asserts.assert(goog.isArrayLike(a),"encodeByteArray takes an array as a parameter");void 0===b&&(b=goog.crypt.base64.Alphabet.DEFAULT);goog.crypt.base64.init_();b=goog.crypt.base64.byteToCharMaps_[b];for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,h=d+2<a.length,k=h?a[d+2]:0,l=e>>2;e=(e&3)<<4|g>>4;g=(g&15)<<2|k>>6;k&=63;h||(k=64,f||(g=64));c.push(b[l],b[e],b[g]||"",b[k]||"")}return c.join("")};
goog.crypt.base64.encodeString=function(a,b){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!b?goog.global.btoa(a):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a),b)};goog.crypt.base64.decodeString=function(a,b){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!b)return goog.global.atob(a);var c="";goog.crypt.base64.decodeStringInternal_(a,function(a){c+=String.fromCharCode(a)});return c};
goog.crypt.base64.decodeStringToByteArray=function(a,b){var c=[];goog.crypt.base64.decodeStringInternal_(a,function(a){c.push(a)});return c};
goog.crypt.base64.decodeStringToUint8Array=function(a){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):goog.crypt.base64.isPadding_(a[b-1])&&(c=goog.crypt.base64.isPadding_(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;goog.crypt.base64.decodeStringInternal_(a,function(a){d[e++]=a});return d.subarray(0,e)};
goog.crypt.base64.decodeStringInternal_=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=goog.crypt.base64.charToByteMap_[c];if(null!=e)return e;if(!goog.string.isEmptyOrWhitespace(c))throw Error("Unknown base64 encoding at char: "+c);}return b}goog.crypt.base64.init_();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
goog.crypt.base64.init_=function(){if(!goog.crypt.base64.charToByteMap_){goog.crypt.base64.charToByteMap_={};for(var a=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));goog.crypt.base64.byteToCharMaps_[c]=d;for(var e=0;e<d.length;e++){var f=d[e],g=goog.crypt.base64.charToByteMap_[f];void 0===g?goog.crypt.base64.charToByteMap_[f]=e:goog.asserts.assert(g===e)}}}};jspb.utils={};jspb.utils.split64Low=0;jspb.utils.split64High=0;jspb.utils.splitUint64=function(a){var b=a>>>0;a=Math.floor((a-b)/jspb.BinaryConstants.TWO_TO_32)>>>0;jspb.utils.split64Low=b;jspb.utils.split64High=a};jspb.utils.splitInt64=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/jspb.BinaryConstants.TWO_TO_32);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));jspb.utils.split64Low=c;jspb.utils.split64High=a};
jspb.utils.splitZigzag64=function(a){var b=0>a;a=2*Math.abs(a);jspb.utils.splitUint64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);jspb.utils.split64Low=a;jspb.utils.split64High=c};
jspb.utils.splitFloat32=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648);else if(isNaN(a))jspb.utils.split64High=0,jspb.utils.split64Low=2147483647;else if(a>jspb.BinaryConstants.FLOAT32_MAX)jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|2139095040)>>>0;else if(a<jspb.BinaryConstants.FLOAT32_MIN)a=Math.round(a/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|
a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(a*jspb.BinaryConstants.TWO_TO_23)&8388607;jspb.utils.split64High=0;jspb.utils.split64Low=(b<<31|c+127<<23|a)>>>0}};
jspb.utils.splitFloat64=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)jspb.utils.split64High=0<1/a?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(a))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(a>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(b<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(a<jspb.BinaryConstants.FLOAT64_MIN){var c=a/Math.pow(2,-1074);a=c/jspb.BinaryConstants.TWO_TO_32;jspb.utils.split64High=(b<<31|a)>>>0;jspb.utils.split64Low=c>>>0}else{c=
a;var d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;c=a*Math.pow(2,-d);a=c*jspb.BinaryConstants.TWO_TO_20&1048575;c=c*jspb.BinaryConstants.TWO_TO_52>>>0;jspb.utils.split64High=(b<<31|d+1023<<20|a)>>>0;jspb.utils.split64Low=c}};
jspb.utils.splitHash64=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=a.charCodeAt(4),g=a.charCodeAt(5),h=a.charCodeAt(6);a=a.charCodeAt(7);jspb.utils.split64Low=b+(c<<8)+(d<<16)+(e<<24)>>>0;jspb.utils.split64High=f+(g<<8)+(h<<16)+(a<<24)>>>0};jspb.utils.joinUint64=function(a,b){return b*jspb.BinaryConstants.TWO_TO_32+(a>>>0)};
jspb.utils.joinInt64=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=jspb.utils.joinUint64(a,b);return c?-a:a};jspb.utils.toZigzag64=function(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)};jspb.utils.joinZigzag64=function(a,b){return jspb.utils.fromZigzag64(a,b,jspb.utils.joinInt64)};jspb.utils.fromZigzag64=function(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)};
jspb.utils.joinFloat32=function(a,b){b=2*(a>>31)+1;var c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))};jspb.utils.joinFloat64=function(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=jspb.BinaryConstants.TWO_TO_32*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+jspb.BinaryConstants.TWO_TO_52)};
jspb.utils.joinHash64=function(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)};jspb.utils.DIGITS="0123456789abcdef".split("");jspb.utils.ZERO_CHAR_CODE_=48;jspb.utils.A_CHAR_CODE_=97;
jspb.utils.joinUnsignedDecimalString=function(a,b){function c(a,b){a=a?String(a):"";return b?"0000000".slice(a.length)+a:a}if(2097151>=b)return""+(jspb.BinaryConstants.TWO_TO_32*b+a);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)};
jspb.utils.joinSignedDecimalString=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=jspb.utils.joinUnsignedDecimalString(a,b);return c?"-"+a:a};jspb.utils.hash64ToDecimalString=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinSignedDecimalString(a,c):jspb.utils.joinUnsignedDecimalString(a,c)};
jspb.utils.hash64ArrayToDecimalStrings=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=jspb.utils.hash64ToDecimalString(a[d],b);return c};
jspb.utils.decimalStringToHash64=function(a){function b(a,b){for(var c=0;8>c&&(1!==a||0<b);c++)b=a*e[c]+b,e[c]=b&255,b>>>=8}function c(){for(var a=0;8>a;a++)e[a]=~e[a]&255}goog.asserts.assert(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var e=[0,0,0,0,0,0,0,0],f=0;f<a.length;f++)b(10,a.charCodeAt(f)-jspb.utils.ZERO_CHAR_CODE_);d&&(c(),b(1,1));return goog.crypt.byteArrayToString(e)};jspb.utils.splitDecimalString=function(a){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a))};
jspb.utils.toHexDigit_=function(a){return String.fromCharCode(10>a?jspb.utils.ZERO_CHAR_CODE_+a:jspb.utils.A_CHAR_CODE_-10+a)};jspb.utils.fromHexCharCode_=function(a){return a>=jspb.utils.A_CHAR_CODE_?a-jspb.utils.A_CHAR_CODE_+10:a-jspb.utils.ZERO_CHAR_CODE_};jspb.utils.hash64ToHexString=function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=jspb.utils.toHexDigit_(d>>4);b[2*c+3]=jspb.utils.toHexDigit_(d&15)}return b.join("")};
jspb.utils.hexStringToHash64=function(a){a=a.toLowerCase();goog.asserts.assert(18==a.length);goog.asserts.assert("0"==a[0]);goog.asserts.assert("x"==a[1]);for(var b="",c=0;8>c;c++){var d=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+2)),e=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+3));b=String.fromCharCode(16*d+e)+b}return b};
jspb.utils.hash64ToNumber=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinInt64(a,c):jspb.utils.joinUint64(a,c)};jspb.utils.numberToHash64=function(a){jspb.utils.splitInt64(a);return jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.utils.countVarints=function(a,b,c){for(var d=0,e=b;e<c;e++)d+=a[e]>>7;return c-b-d};
jspb.utils.countVarintFields=function(a,b,c,d){var e=0;d=8*d+jspb.BinaryConstants.WireType.VARINT;if(128>d)for(;b<c&&a[b++]==d;)for(e++;;){var f=a[b++];if(0==(f&128))break}else for(;b<c;){for(f=d;128<f;){if(a[b]!=(f&127|128))return e;b++;f>>=7}if(a[b++]!=f)break;for(e++;f=a[b++],0!=(f&128););}return e};jspb.utils.countFixedFields_=function(a,b,c,d,e){var f=0;if(128>d)for(;b<c&&a[b++]==d;)f++,b+=e;else for(;b<c;){for(var g=d;128<g;){if(a[b++]!=(g&127|128))return f;g>>=7}if(a[b++]!=g)break;f++;b+=e}return f};
jspb.utils.countFixed32Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED32,4)};jspb.utils.countFixed64Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED64,8)};
jspb.utils.countDelimitedFields=function(a,b,c,d){var e=0;for(d=8*d+jspb.BinaryConstants.WireType.DELIMITED;b<c;){for(var f=d;128<f;){if(a[b++]!=(f&127|128))return e;f>>=7}if(a[b++]!=f)break;e++;for(var g=0,h=1;f=a[b++],g+=(f&127)*h,h*=128,0!=(f&128););b+=g}return e};jspb.utils.debugBytesToTextFormat=function(a){var b='"';if(a){a=jspb.utils.byteSourceToUint8Array(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'};
jspb.utils.debugScalarToTextFormat=function(a){return"string"===typeof a?goog.string.quote(a):a.toString()};jspb.utils.stringToByteArray=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b};
jspb.utils.byteSourceToUint8Array=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer||"undefined"!=typeof Buffer&&a.constructor===Buffer||a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Type not convertible to Uint8Array.");return new Uint8Array(0)};jspb.BinaryDecoder=function(a,b,c){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1;a&&this.setBlock(a,b,c)};jspb.BinaryDecoder.instanceCache_=[];jspb.BinaryDecoder.alloc=function(a,b,c){if(jspb.BinaryDecoder.instanceCache_.length){var d=jspb.BinaryDecoder.instanceCache_.pop();a&&d.setBlock(a,b,c);return d}return new jspb.BinaryDecoder(a,b,c)};jspb.BinaryDecoder.prototype.free=function(){this.clear();100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)};
jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)};jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1};jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_};
jspb.BinaryDecoder.prototype.setBlock=function(a,b,c){this.bytes_=jspb.utils.byteSourceToUint8Array(a);this.start_=void 0!==b?b:0;this.end_=void 0!==c?this.start_+c:this.bytes_.length;this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_};jspb.BinaryDecoder.prototype.setEnd=function(a){this.end_=a};jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_};
jspb.BinaryDecoder.prototype.setCursor=function(a){this.cursor_=a};jspb.BinaryDecoder.prototype.advance=function(a){this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_)};jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_};jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_};jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_};
jspb.BinaryDecoder.prototype.readSplitVarint64=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=this.bytes_[this.cursor_++],c|=(b&127)<<7*e;128<=b&&(b=this.bytes_[this.cursor_++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=this.bytes_[this.cursor_++],d|=(b&127)<<7*e+3;if(128>b)return a(c>>>0,d>>>0);goog.asserts.fail("Failed to read varint, encoding is invalid.");this.error_=!0};
jspb.BinaryDecoder.prototype.readSplitZigzagVarint64=function(a){return this.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};jspb.BinaryDecoder.prototype.readSplitFixed64=function(a){var b=this.bytes_,c=this.cursor_;this.cursor_+=8;for(var d=0,e=0,f=c+7;f>=c;f--)d=d<<8|b[f],e=e<<8|b[f+4];return a(d,e)};jspb.BinaryDecoder.prototype.skipVarint=function(){for(;this.bytes_[this.cursor_]&128;)this.cursor_++;this.cursor_++};
jspb.BinaryDecoder.prototype.unskipVarint=function(a){for(;128<a;)this.cursor_--,a>>>=7;this.cursor_--};
jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var a=this.bytes_;var b=a[this.cursor_+0];var c=b&127;if(128>b)return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+1];c|=(b&127)<<7;if(128>b)return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+2];c|=(b&127)<<14;if(128>b)return this.cursor_+=3,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+3];c|=(b&127)<<21;if(128>b)return this.cursor_+=4,goog.asserts.assert(this.cursor_<=
this.end_),c;b=a[this.cursor_+4];c|=(b&15)<<28;if(128>b)return this.cursor_+=5,goog.asserts.assert(this.cursor_<=this.end_),c>>>0;this.cursor_+=5;128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&goog.asserts.assert(!1);goog.asserts.assert(this.cursor_<=this.end_);return c};jspb.BinaryDecoder.prototype.readSignedVarint32=jspb.BinaryDecoder.prototype.readUnsignedVarint32;jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()};
jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()};jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var a=this.readUnsignedVarint32();return a>>>1^-(a&1)};jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinUint64)};jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)};
jspb.BinaryDecoder.prototype.readSignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinInt64)};jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){return this.readSplitVarint64(jspb.utils.joinZigzag64)};jspb.BinaryDecoder.prototype.readZigzagVarintHash64=function(){return this.readSplitZigzagVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readUint8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a};jspb.BinaryDecoder.prototype.readUint16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8};
jspb.BinaryDecoder.prototype.readUint32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8|c<<16|d<<24)>>>0};jspb.BinaryDecoder.prototype.readUint64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUint64(a,b)};
jspb.BinaryDecoder.prototype.readUint64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUnsignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readInt8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a<<24>>24};
jspb.BinaryDecoder.prototype.readInt16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8)<<16>>16};jspb.BinaryDecoder.prototype.readInt32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8|c<<16|d<<24};
jspb.BinaryDecoder.prototype.readInt64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinInt64(a,b)};jspb.BinaryDecoder.prototype.readInt64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinSignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readFloat=function(){var a=this.readUint32();return jspb.utils.joinFloat32(a,0)};
jspb.BinaryDecoder.prototype.readDouble=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinFloat64(a,b)};jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]};jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()};
jspb.BinaryDecoder.prototype.readString=function(a){var b=this.bytes_,c=this.cursor_;a=c+a;for(var d=[],e="";c<a;){var f=b[c++];if(128>f)d.push(f);else if(192>f)continue;else if(224>f){var g=b[c++];d.push((f&31)<<6|g&63)}else if(240>f){g=b[c++];var h=b[c++];d.push((f&15)<<12|(g&63)<<6|h&63)}else if(248>f){g=b[c++];h=b[c++];var k=b[c++];f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63;f-=65536;d.push((f>>10&1023)+55296,(f&1023)+56320)}8192<=d.length&&(e+=String.fromCharCode.apply(null,d),d.length=0)}e+=goog.crypt.byteArrayToString(d);
this.cursor_=c;return e};jspb.BinaryDecoder.prototype.readStringWithLength=function(){var a=this.readUnsignedVarint32();return this.readString(a)};jspb.BinaryDecoder.prototype.readBytes=function(a){if(0>a||this.cursor_+a>this.bytes_.length)return this.error_=!0,goog.asserts.fail("Invalid byte length!"),new Uint8Array(0);var b=this.bytes_.subarray(this.cursor_,this.cursor_+a);this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_);return b};jspb.BinaryDecoder.prototype.readVarintHash64=function(){return this.readSplitVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readFixedHash64=function(){var a=this.bytes_,b=this.cursor_,c=a[b+0],d=a[b+1],e=a[b+2],f=a[b+3],g=a[b+4],h=a[b+5],k=a[b+6];a=a[b+7];this.cursor_+=8;return String.fromCharCode(c,d,e,f,g,h,k,a)};jspb.BinaryReader=function(a,b,c){this.decoder_=jspb.BinaryDecoder.alloc(a,b,c);this.fieldCursor_=this.decoder_.getCursor();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null};jspb.BinaryReader.instanceCache_=[];
jspb.BinaryReader.alloc=function(a,b,c){if(jspb.BinaryReader.instanceCache_.length){var d=jspb.BinaryReader.instanceCache_.pop();a&&d.decoder_.setBlock(a,b,c);return d}return new jspb.BinaryReader(a,b,c)};jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free=function(){this.decoder_.clear();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null;100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)};jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_};jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()};
jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()};jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_};jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_};jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP};jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()};
jspb.BinaryReader.prototype.setBlock=function(a,b,c){this.decoder_.setBlock(a,b,c);this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.advance=function(a){this.decoder_.advance(a)};
jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return goog.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var a=this.decoder_.readUnsignedVarint32(),b=a>>>3;a&=7;if(a!=jspb.BinaryConstants.WireType.VARINT&&a!=jspb.BinaryConstants.WireType.FIXED32&&a!=jspb.BinaryConstants.WireType.FIXED64&&a!=jspb.BinaryConstants.WireType.DELIMITED&&a!=jspb.BinaryConstants.WireType.START_GROUP&&a!=jspb.BinaryConstants.WireType.END_GROUP)return goog.asserts.fail("Invalid wire type: %s (at position %s)",
a,this.fieldCursor_),this.error_=!0,!1;this.nextField_=b;this.nextWireType_=a;return!0};jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)};jspb.BinaryReader.prototype.skipMatchingFields=function(){var a=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==a;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()};
jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(goog.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()};jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)goog.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var a=this.decoder_.readUnsignedVarint32();this.decoder_.advance(a)}};
jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(goog.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)};jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(goog.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)};
jspb.BinaryReader.prototype.skipGroup=function(){var a=this.nextField_;do{if(!this.nextField()){goog.asserts.fail("Unmatched start-group tag: stream EOF");this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP){this.nextField_!=a&&(goog.asserts.fail("Unmatched end-group tag"),this.error_=!0);break}this.skipField()}while(1)};
jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:goog.asserts.fail("Invalid wire encoding for field.")}};
jspb.BinaryReader.prototype.registerReadCallback=function(a,b){null===this.readCallbacks_&&(this.readCallbacks_={});goog.asserts.assert(!this.readCallbacks_[a]);this.readCallbacks_[a]=b};jspb.BinaryReader.prototype.runReadCallback=function(a){goog.asserts.assert(null!==this.readCallbacks_);a=this.readCallbacks_[a];goog.asserts.assert(a);return a(this)};
jspb.BinaryReader.prototype.readAny=function(a){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(a);var b=jspb.BinaryConstants.FieldType;switch(a){case b.DOUBLE:return this.readDouble();case b.FLOAT:return this.readFloat();case b.INT64:return this.readInt64();case b.UINT64:return this.readUint64();case b.INT32:return this.readInt32();case b.FIXED64:return this.readFixed64();case b.FIXED32:return this.readFixed32();case b.BOOL:return this.readBool();case b.STRING:return this.readString();
case b.GROUP:goog.asserts.fail("Group field type not supported in readAny()");case b.MESSAGE:goog.asserts.fail("Message field type not supported in readAny()");case b.BYTES:return this.readBytes();case b.UINT32:return this.readUint32();case b.ENUM:return this.readEnum();case b.SFIXED32:return this.readSfixed32();case b.SFIXED64:return this.readSfixed64();case b.SINT32:return this.readSint32();case b.SINT64:return this.readSint64();case b.FHASH64:return this.readFixedHash64();case b.VHASH64:return this.readVarintHash64();
default:goog.asserts.fail("Invalid field type in readAny()")}return 0};jspb.BinaryReader.prototype.readMessage=function(a,b){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var c=this.decoder_.getEnd(),d=this.decoder_.readUnsignedVarint32();d=this.decoder_.getCursor()+d;this.decoder_.setEnd(d);b(a,this);this.decoder_.setCursor(d);this.decoder_.setEnd(c)};
jspb.BinaryReader.prototype.readGroup=function(a,b,c){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP);goog.asserts.assert(this.nextField_==a);c(b,this);this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(goog.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)};
jspb.BinaryReader.prototype.getFieldDecoder=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor(),c=b+a;a=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),b,a);this.decoder_.setCursor(c);return a};jspb.BinaryReader.prototype.readInt32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32()};
jspb.BinaryReader.prototype.readInt32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32String()};jspb.BinaryReader.prototype.readInt64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};jspb.BinaryReader.prototype.readInt64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64String()};
jspb.BinaryReader.prototype.readUint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readUint32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32String()};jspb.BinaryReader.prototype.readUint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64()};
jspb.BinaryReader.prototype.readUint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64String()};jspb.BinaryReader.prototype.readSint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint32()};jspb.BinaryReader.prototype.readSint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64()};
jspb.BinaryReader.prototype.readSint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64String()};jspb.BinaryReader.prototype.readFixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readUint32()};jspb.BinaryReader.prototype.readFixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64()};
jspb.BinaryReader.prototype.readFixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64String()};jspb.BinaryReader.prototype.readSfixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32()};jspb.BinaryReader.prototype.readSfixed32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32().toString()};
jspb.BinaryReader.prototype.readSfixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64()};jspb.BinaryReader.prototype.readSfixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64String()};jspb.BinaryReader.prototype.readFloat=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readFloat()};
jspb.BinaryReader.prototype.readDouble=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readDouble()};jspb.BinaryReader.prototype.readBool=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return!!this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readEnum=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};
jspb.BinaryReader.prototype.readString=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(a)};jspb.BinaryReader.prototype.readBytes=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(a)};
jspb.BinaryReader.prototype.readVarintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readVarintHash64()};jspb.BinaryReader.prototype.readSintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarintHash64()};jspb.BinaryReader.prototype.readSplitVarint64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(a)};
jspb.BinaryReader.prototype.readSplitZigzagVarint64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};jspb.BinaryReader.prototype.readFixedHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readFixedHash64()};
jspb.BinaryReader.prototype.readSplitFixed64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readSplitFixed64(a)};jspb.BinaryReader.prototype.readPackedField_=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var b=this.decoder_.readUnsignedVarint32();b=this.decoder_.getCursor()+b;for(var c=[];this.decoder_.getCursor()<b;)c.push(a.call(this.decoder_));return c};
jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)};jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)};jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)};jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)};
jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)};jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)};jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)};jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)};
jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)};jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)};jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)};jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)};
jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)};jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)};jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)};jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)};
jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)};jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)};jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)};jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)};jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)};
jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)};jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)};jspb.Map=function(a,b){this.arr_=a;this.valueCtor_=b;this.map_={};this.arrClean=!0;0<this.arr_.length&&this.loadFromArray_()};jspb.Map.prototype.loadFromArray_=function(){for(var a=0;a<this.arr_.length;a++){var b=this.arr_[a],c=b[0];this.map_[c.toString()]=new jspb.Map.Entry_(c,b[1])}this.arrClean=!0};
jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var a=this.map_,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].valueWrapper;c&&c.toArray()}}}else{this.arr_.length=0;a=this.stringKeys_();a.sort();for(b=0;b<a.length;b++){var d=this.map_[a[b]];(c=d.valueWrapper)&&c.toArray();this.arr_.push([d.key,d.value])}this.arrClean=!0}return this.arr_};
jspb.Map.prototype.toObject=function(a,b){for(var c=this.toArray(),d=[],e=0;e<c.length;e++){var f=this.map_[c[e][0].toString()];this.wrapEntry_(f);var g=f.valueWrapper;g?(goog.asserts.assert(b),d.push([f.key,b(a,g)])):d.push([f.key,f.value])}return d};jspb.Map.fromObject=function(a,b,c){b=new jspb.Map([],b);for(var d=0;d<a.length;d++){var e=a[d][0],f=c(a[d][1]);b.set(e,f)}return b};jspb.Map.ArrayIteratorIterable_=function(a){this.idx_=0;this.arr_=a};
jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}};"undefined"!=typeof Symbol&&(jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this});jspb.Map.prototype.getLength=function(){return this.stringKeys_().length};jspb.Map.prototype.clear=function(){this.map_={};this.arrClean=!1};
jspb.Map.prototype.del=function(a){a=a.toString();var b=this.map_.hasOwnProperty(a);delete this.map_[a];this.arrClean=!1;return b};jspb.Map.prototype.getEntryList=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,d.value])}return a};jspb.Map.prototype.entries=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,this.wrapEntry_(d)])}return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.keys=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.map_[b[c]].key);return new jspb.Map.ArrayIteratorIterable_(a)};jspb.Map.prototype.values=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.wrapEntry_(this.map_[b[c]]));return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.forEach=function(a,b){var c=this.stringKeys_();c.sort();for(var d=0;d<c.length;d++){var e=this.map_[c[d]];a.call(b,this.wrapEntry_(e),e.key,this)}};jspb.Map.prototype.set=function(a,b){var c=new jspb.Map.Entry_(a);this.valueCtor_?(c.valueWrapper=b,c.value=b.toArray()):c.value=b;this.map_[a.toString()]=c;this.arrClean=!1;return this};jspb.Map.prototype.wrapEntry_=function(a){return this.valueCtor_?(a.valueWrapper||(a.valueWrapper=new this.valueCtor_(a.value)),a.valueWrapper):a.value};
jspb.Map.prototype.get=function(a){if(a=this.map_[a.toString()])return this.wrapEntry_(a)};jspb.Map.prototype.has=function(a){return a.toString()in this.map_};jspb.Map.prototype.serializeBinary=function(a,b,c,d,e){var f=this.stringKeys_();f.sort();for(var g=0;g<f.length;g++){var h=this.map_[f[g]];b.beginSubMessage(a);c.call(b,1,h.key);this.valueCtor_?d.call(b,2,this.wrapEntry_(h),e):d.call(b,2,h.value);b.endSubMessage()}};
jspb.Map.deserializeBinary=function(a,b,c,d,e,f,g){for(;b.nextField()&&!b.isEndGroup();){var h=b.getFieldNumber();1==h?f=c.call(b):2==h&&(a.valueCtor_?(goog.asserts.assert(e),g||(g=new a.valueCtor_),d.call(b,g,e)):g=d.call(b))}goog.asserts.assert(void 0!=f);goog.asserts.assert(void 0!=g);a.set(f,g)};jspb.Map.prototype.stringKeys_=function(){var a=this.map_,b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b};
jspb.Map.Entry_=function(a,b){this.key=a;this.value=b;this.valueWrapper=void 0};jspb.ExtensionFieldInfo=function(a,b,c,d,e){this.fieldIndex=a;this.fieldName=b;this.ctor=c;this.toObjectFn=d;this.isRepeated=e};jspb.ExtensionFieldBinaryInfo=function(a,b,c,d,e,f){this.fieldInfo=a;this.binaryReaderFn=b;this.binaryWriterFn=c;this.binaryMessageSerializeFn=d;this.binaryMessageDeserializeFn=e;this.isPacked=f};jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor};jspb.Message=function(){};jspb.Message.GENERATE_TO_OBJECT=!0;jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE;
jspb.Message.GENERATE_TO_STRING=!0;jspb.Message.ASSUME_LOCAL_ARRAYS=!1;jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=!0;jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array;jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_};jspb.Message.getIndex_=function(a,b){return b+a.arrayIndexOffset_};jspb.Message.hiddenES6Property_=function(){};jspb.Message.getFieldNumber_=function(a,b){return b-a.arrayIndexOffset_};
jspb.Message.initialize=function(a,b,c,d,e,f){a.wrappers_=null;b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;jspb.Message.initPivotAndExtensionObject_(a,d);a.convertedPrimitiveFields_={};jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS||(a.repeatedFields=e);if(e)for(b=0;b<e.length;b++)c=e[b],c<a.pivot_?(c=jspb.Message.getIndex_(a,c),a.array[c]=a.array[c]||jspb.Message.EMPTY_LIST_SENTINEL_):(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[c]=
a.extensionObject_[c]||jspb.Message.EMPTY_LIST_SENTINEL_);if(f&&f.length)for(b=0;b<f.length;b++)jspb.Message.computeOneofCase(a,f[b])};jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[];jspb.Message.isArray_=function(a){return jspb.Message.ASSUME_LOCAL_ARRAYS?a instanceof Array:Array.isArray(a)};jspb.Message.isExtensionObject_=function(a){return null!==a&&"object"==typeof a&&!jspb.Message.isArray_(a)&&!(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)};
jspb.Message.initPivotAndExtensionObject_=function(a,b){var c=a.array.length,d=-1;if(c&&(d=c-1,c=a.array[d],jspb.Message.isExtensionObject_(c))){a.pivot_=jspb.Message.getFieldNumber_(a,d);a.extensionObject_=c;return}-1<b?(a.pivot_=Math.max(b,jspb.Message.getFieldNumber_(a,d+1)),a.extensionObject_=null):a.pivot_=Number.MAX_VALUE};jspb.Message.maybeInitEmptyExtensionObject_=function(a){var b=jspb.Message.getIndex_(a,a.pivot_);a.array[b]||(a.extensionObject_=a.array[b]={})};
jspb.Message.toObjectList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)d[e]=b.call(a[e],c,a[e]);return d};jspb.Message.toObjectExtension=function(a,b,c,d,e){for(var f in c){var g=c[f],h=d.call(a,g);if(null!=h){for(var k in g.fieldName)if(g.fieldName.hasOwnProperty(k))break;b[k]=g.toObjectFn?g.isRepeated?jspb.Message.toObjectList(h,g.toObjectFn,e):g.toObjectFn(e,h):h}}};
jspb.Message.serializeBinaryExtensions=function(a,b,c,d){for(var e in c){var f=c[e],g=f.fieldInfo;if(!f.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var h=d.call(a,g);if(null!=h)if(g.isMessageType())if(f.binaryMessageSerializeFn)f.binaryWriterFn.call(b,g.fieldIndex,h,f.binaryMessageSerializeFn);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
else f.binaryWriterFn.call(b,g.fieldIndex,h)}};jspb.Message.readBinaryExtension=function(a,b,c,d,e){var f=c[b.getFieldNumber()];if(f){c=f.fieldInfo;if(!f.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");if(c.isMessageType()){var g=new c.ctor;f.binaryReaderFn.call(b,g,f.binaryMessageDeserializeFn)}else g=f.binaryReaderFn.call(b);c.isRepeated&&!f.isPacked?(b=d.call(a,c))?b.push(g):e.call(a,c,[g]):e.call(a,c,g)}else b.skipField()};
jspb.Message.getField=function(a,b){if(b<a.pivot_){b=jspb.Message.getIndex_(a,b);var c=a.array[b];return c===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[b]=[]:c}if(a.extensionObject_)return c=a.extensionObject_[b],c===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:c};jspb.Message.getRepeatedField=function(a,b){return jspb.Message.getField(a,b)};jspb.Message.getOptionalFloatingPointField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:+a};
jspb.Message.getBooleanField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:!!a};jspb.Message.getRepeatedFloatingPointField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.convertedPrimitiveFields_[b]=!0}return c};
jspb.Message.getRepeatedBooleanField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.convertedPrimitiveFields_[b]=!0}return c};
jspb.Message.bytesAsB64=function(a){if(null==a||"string"===typeof a)return a;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return goog.crypt.base64.encodeByteArray(a);goog.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(a));return null};jspb.Message.bytesAsU8=function(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(a));return null};
jspb.Message.bytesListAsB64=function(a){jspb.Message.assertConsistentTypes_(a);return a.length&&"string"!==typeof a[0]?goog.array.map(a,jspb.Message.bytesAsB64):a};jspb.Message.bytesListAsU8=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||a[0]instanceof Uint8Array?a:goog.array.map(a,jspb.Message.bytesAsU8)};
jspb.Message.assertConsistentTypes_=function(a){if(goog.DEBUG&&a&&1<a.length){var b=goog.typeOf(a[0]);goog.array.forEach(a,function(a){goog.typeOf(a)!=b&&goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(a)+" expected "+b)})}};jspb.Message.getFieldWithDefault=function(a,b,c){a=jspb.Message.getField(a,b);return null==a?c:a};jspb.Message.getBooleanFieldWithDefault=function(a,b,c){a=jspb.Message.getBooleanField(a,b);return null==a?c:a};
jspb.Message.getFloatingPointFieldWithDefault=function(a,b,c){a=jspb.Message.getOptionalFloatingPointField(a,b);return null==a?c:a};jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault;jspb.Message.getMapField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(b in a.wrappers_)return a.wrappers_[b];var e=jspb.Message.getField(a,b);if(!e){if(c)return;e=[];jspb.Message.setField(a,b,e)}return a.wrappers_[b]=new jspb.Map(e,d)};
jspb.Message.setField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=c:(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[b]=c);return a};jspb.Message.setProto3IntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};jspb.Message.setProto3FloatField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3BooleanField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,!1)};jspb.Message.setProto3StringField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3BytesField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3EnumField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3StringIntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"0")};jspb.Message.setFieldIgnoringDefault_=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);c!==d?jspb.Message.setField(a,b,c):b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=null:(jspb.Message.maybeInitEmptyExtensionObject_(a),delete a.extensionObject_[b]);return a};
jspb.Message.addToRepeatedField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);b=jspb.Message.getRepeatedField(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};jspb.Message.setOneofField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);(c=jspb.Message.computeOneofCase(a,c))&&c!==b&&void 0!==d&&(a.wrappers_&&c in a.wrappers_&&(a.wrappers_[c]=void 0),jspb.Message.setField(a,c,void 0));return jspb.Message.setField(a,b,d)};
jspb.Message.computeOneofCase=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=jspb.Message.getField(a,f);null!=g&&(c=f,d=g,jspb.Message.setField(a,f,void 0))}return c?(jspb.Message.setField(a,c,d),c):0};jspb.Message.getWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=jspb.Message.getField(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]};
jspb.Message.getRepeatedWrapperField=function(a,b,c){jspb.Message.wrapRepeatedField_(a,b,c);b=a.wrappers_[c];b==jspb.Message.EMPTY_LIST_SENTINEL_&&(b=a.wrappers_[c]=[]);return b};jspb.Message.wrapRepeatedField_=function(a,b,c){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){for(var d=jspb.Message.getRepeatedField(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.wrappers_[c]=e}};
jspb.Message.setWrapperField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var d=c?c.toArray():c;a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};jspb.Message.setOneofWrapperField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var e=d?d.toArray():d;a.wrappers_[b]=d;return jspb.Message.setOneofField(a,b,c,e)};
jspb.Message.setRepeatedWrapperField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].toArray();a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};
jspb.Message.addToRepeatedWrapperField=function(a,b,c,d,e){jspb.Message.wrapRepeatedField_(a,d,b);var f=a.wrappers_[b];f||(f=a.wrappers_[b]=[]);c=c?c:new d;a=jspb.Message.getRepeatedField(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.toArray())):(f.push(c),a.push(c.toArray()));return c};jspb.Message.toMap=function(a,b,c,d){for(var e={},f=0;f<a.length;f++)e[b.call(a[f])]=c?c.call(a[f],d,a[f]):a[f];return e};
jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var a in this.wrappers_){var b=this.wrappers_[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].toArray();else b&&b.toArray()}};jspb.Message.prototype.toArray=function(){this.syncMapFields_();return this.array};jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){this.syncMapFields_();return this.array.toString()});
jspb.Message.prototype.getExtension=function(a){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;if(a.isRepeated){if(a.isMessageType())return this.wrappers_[b]||(this.wrappers_[b]=goog.array.map(this.extensionObject_[b]||[],function(b){return new a.ctor(b)})),this.wrappers_[b]}else if(a.isMessageType())return!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b];return this.extensionObject_[b]}};
jspb.Message.prototype.setExtension=function(a,b){this.wrappers_||(this.wrappers_={});jspb.Message.maybeInitEmptyExtensionObject_(this);var c=a.fieldIndex;a.isRepeated?(b=b||[],a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=goog.array.map(b,function(a){return a.toArray()})):this.extensionObject_[c]=b):a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=b?b.toArray():b):this.extensionObject_[c]=b;return this};
jspb.Message.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.toArray();b=b.toArray();var d=[],e=0,f=c.length>b.length?c.length:b.length;a.getJsPbMessageId()&&(d[0]=a.getJsPbMessageId(),e=1);for(;e<f;e++)jspb.Message.compareFields(c[e],b[e])||(d[e]=b[e]);return new a.constructor(d)};jspb.Message.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&jspb.Message.compareFields(a.toArray(),b.toArray())};
jspb.Message.compareExtensions=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!jspb.Message.compareFields(a[d],b[d]))return!1;return!0};
jspb.Message.compareFields=function(a,b){if(a==b)return!0;if(!goog.isObject(a)||!goog.isObject(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,e=void 0,f=Math.max(a.length,b.length);for(c=0;c<f;c++){var g=a[c],h=b[c];g&&
g.constructor==Object&&(goog.asserts.assert(void 0===d),goog.asserts.assert(c===a.length-1),d=g,g=void 0);h&&h.constructor==Object&&(goog.asserts.assert(void 0===e),goog.asserts.assert(c===b.length-1),e=h,h=void 0);if(!jspb.Message.compareFields(g,h))return!1}return d||e?(d=d||{},e=e||{},jspb.Message.compareExtensions(d,e)):!0}if(a.constructor===Object)return jspb.Message.compareExtensions(a,b);throw Error("Invalid type in JSPB array");};jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)};
jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)};jspb.Message.clone=function(a){return jspb.Message.cloneMessage(a)};jspb.Message.cloneMessage=function(a){return new a.constructor(jspb.Message.clone_(a.toArray()))};
jspb.Message.copyInto=function(a,b){goog.asserts.assertInstanceof(a,jspb.Message);goog.asserts.assertInstanceof(b,jspb.Message);goog.asserts.assert(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=jspb.Message.clone(a);for(var c=b.toArray(),d=a.toArray(),e=c.length=0;e<d.length;e++)c[e]=d[e];b.wrappers_=a.wrappers_;b.extensionObject_=a.extensionObject_};
jspb.Message.clone_=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(goog.asserts.assert(d)):d)}return b}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(goog.asserts.assert(d)):d);return b};jspb.Message.registerMessageType=function(a,b){b.messageId=a};jspb.Message.messageSetExtensions={};
jspb.Message.messageSetExtensionsBinary={};jspb.arith={};jspb.arith.UInt64=function(a,b){this.lo=a;this.hi=b};jspb.arith.UInt64.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};
jspb.arith.UInt64.prototype.msb=function(){return!!(this.hi&2147483648)};jspb.arith.UInt64.prototype.lsb=function(){return!!(this.lo&1)};jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi};jspb.arith.UInt64.prototype.add=function(a){return new jspb.arith.UInt64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};
jspb.arith.UInt64.prototype.sub=function(a){return new jspb.arith.UInt64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.UInt64.mul32x32=function(a,b){var c=a&65535;a>>>=16;var d=b&65535,e=b>>>16;b=c*d+65536*(c*e&65535)+65536*(a*d&65535);for(c=a*e+(c*e>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new jspb.arith.UInt64(b>>>0,c>>>0)};
jspb.arith.UInt64.prototype.mul=function(a){var b=jspb.arith.UInt64.mul32x32(this.lo,a);a=jspb.arith.UInt64.mul32x32(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};
jspb.arith.UInt64.prototype.div=function(a){if(0==a)return[];var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(this.lo,this.hi);a=new jspb.arith.UInt64(a,0);for(var d=new jspb.arith.UInt64(1,0);!a.msb();)a=a.leftShift(),d=d.leftShift();for(;!d.zero();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.rightShift(),d=d.rightShift();return[b,c]};jspb.arith.UInt64.prototype.toString=function(){for(var a="",b=this;!b.zero();){b=b.div(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};
jspb.arith.UInt64.fromString=function(a){for(var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;var e=parseInt(a[d],10);c.lo=e;b=b.mul(10).add(c)}return b};jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)};jspb.arith.Int64=function(a,b){this.lo=a;this.hi=b};
jspb.arith.Int64.prototype.add=function(a){return new jspb.arith.Int64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.sub=function(a){return new jspb.arith.Int64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)};
jspb.arith.Int64.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new jspb.arith.UInt64(this.lo,this.hi);a&&(b=(new jspb.arith.UInt64(0,0)).sub(b));return(a?"-":"")+b.toString()};jspb.arith.Int64.fromString=function(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=jspb.arith.UInt64.fromString(a);if(null===a)return null;b&&(a=(new jspb.arith.UInt64(0,0)).sub(a));return new jspb.arith.Int64(a.lo,a.hi)};jspb.BinaryEncoder=function(){this.buffer_=[]};jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length};jspb.BinaryEncoder.prototype.end=function(){var a=this.buffer_;this.buffer_=[];return a};
jspb.BinaryEncoder.prototype.writeSplitVarint64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);for(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);0<b||127<a;)this.buffer_.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSplitFixed64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);this.writeUint32(a);this.writeUint32(b)};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));for(goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);127<a;)this.buffer_.push(a&127|128),a>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);if(0<=a)this.writeUnsignedVarint32(a);else{for(var b=0;9>b;b++)this.buffer_.push(a&127|128),a>>=7;this.buffer_.push(1)}};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeSignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeUnsignedVarint32((a<<1^a>>31)>>>0)};jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitZigzag64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(a){this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a))};jspb.BinaryEncoder.prototype.writeZigzagVarintHash64=function(a){var b=this;jspb.utils.splitHash64(a);jspb.utils.toZigzag64(jspb.utils.split64Low,jspb.utils.split64High,function(a,d){b.writeSplitVarint64(a>>>0,d>>>0)})};
jspb.BinaryEncoder.prototype.writeUint8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&256>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeUint16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&65536>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeUint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};jspb.BinaryEncoder.prototype.writeUint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitUint64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-128<=a&&128>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeInt16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-32768<=a&&32768>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeInt32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};
jspb.BinaryEncoder.prototype.writeInt64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt64String=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(+a>=-jspb.BinaryConstants.TWO_TO_63&&+a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFloat=function(a){goog.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT32_MAX&&a<=jspb.BinaryConstants.FLOAT32_MAX);jspb.utils.splitFloat32(a);this.writeUint32(jspb.utils.split64Low)};
jspb.BinaryEncoder.prototype.writeDouble=function(a){goog.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT64_MAX&&a<=jspb.BinaryConstants.FLOAT64_MAX);jspb.utils.splitFloat64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeBool=function(a){goog.asserts.assert("boolean"===typeof a||"number"===typeof a);this.buffer_.push(a?1:0)};
jspb.BinaryEncoder.prototype.writeEnum=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32(a)};jspb.BinaryEncoder.prototype.writeBytes=function(a){this.buffer_.push.apply(this.buffer_,a)};jspb.BinaryEncoder.prototype.writeVarintHash64=function(a){jspb.utils.splitHash64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFixedHash64=function(a){jspb.utils.splitHash64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeString=function(a){for(var b=this.buffer_.length,c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.buffer_.push(d);else if(2048>d)this.buffer_.push(d>>6|192),this.buffer_.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var e=a.charCodeAt(c+1);56320<=e&&57343>=e&&(d=1024*(d-55296)+e-56320+65536,this.buffer_.push(d>>18|240),this.buffer_.push(d>>12&63|128),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128),c++)}else this.buffer_.push(d>>
12|224),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128)}return this.buffer_.length-b};jspb.BinaryWriter=function(){this.blocks_=[];this.totalLength_=0;this.encoder_=new jspb.BinaryEncoder;this.bookmarks_=[]};jspb.BinaryWriter.prototype.appendUint8Array_=function(a){var b=this.encoder_.end();this.blocks_.push(b);this.blocks_.push(a);this.totalLength_+=b.length+a.length};
jspb.BinaryWriter.prototype.beginDelimited_=function(a){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);a=this.encoder_.end();this.blocks_.push(a);this.totalLength_+=a.length;a.push(this.totalLength_);return a};jspb.BinaryWriter.prototype.endDelimited_=function(a){var b=a.pop();b=this.totalLength_+this.encoder_.length()-b;for(goog.asserts.assert(0<=b);127<b;)a.push(b&127|128),b>>>=7,this.totalLength_++;a.push(b);this.totalLength_++};
jspb.BinaryWriter.prototype.writeSerializedMessage=function(a,b,c){this.appendUint8Array_(a.subarray(b,c))};jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(a,b,c){null!=a&&null!=b&&null!=c&&this.writeSerializedMessage(a,b,c)};jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[];this.encoder_.end();this.totalLength_=0;this.bookmarks_=[]};
jspb.BinaryWriter.prototype.getResultBuffer=function(){goog.asserts.assert(0==this.bookmarks_.length);for(var a=new Uint8Array(this.totalLength_+this.encoder_.length()),b=this.blocks_,c=b.length,d=0,e=0;e<c;e++){var f=b[e];a.set(f,d);d+=f.length}b=this.encoder_.end();a.set(b,d);d+=b.length;goog.asserts.assert(d==a.length);this.blocks_=[a];return a};jspb.BinaryWriter.prototype.getResultBase64String=function(a){return goog.crypt.base64.encodeByteArray(this.getResultBuffer(),a)};
jspb.BinaryWriter.prototype.beginSubMessage=function(a){this.bookmarks_.push(this.beginDelimited_(a))};jspb.BinaryWriter.prototype.endSubMessage=function(){goog.asserts.assert(0<=this.bookmarks_.length);this.endDelimited_(this.bookmarks_.pop())};jspb.BinaryWriter.prototype.writeFieldHeader_=function(a,b){goog.asserts.assert(1<=a&&a==Math.floor(a));this.encoder_.writeUnsignedVarint32(8*a+b)};
jspb.BinaryWriter.prototype.writeAny=function(a,b,c){var d=jspb.BinaryConstants.FieldType;switch(a){case d.DOUBLE:this.writeDouble(b,c);break;case d.FLOAT:this.writeFloat(b,c);break;case d.INT64:this.writeInt64(b,c);break;case d.UINT64:this.writeUint64(b,c);break;case d.INT32:this.writeInt32(b,c);break;case d.FIXED64:this.writeFixed64(b,c);break;case d.FIXED32:this.writeFixed32(b,c);break;case d.BOOL:this.writeBool(b,c);break;case d.STRING:this.writeString(b,c);break;case d.GROUP:goog.asserts.fail("Group field type not supported in writeAny()");
break;case d.MESSAGE:goog.asserts.fail("Message field type not supported in writeAny()");break;case d.BYTES:this.writeBytes(b,c);break;case d.UINT32:this.writeUint32(b,c);break;case d.ENUM:this.writeEnum(b,c);break;case d.SFIXED32:this.writeSfixed32(b,c);break;case d.SFIXED64:this.writeSfixed64(b,c);break;case d.SINT32:this.writeSint32(b,c);break;case d.SINT64:this.writeSint64(b,c);break;case d.FHASH64:this.writeFixedHash64(b,c);break;case d.VHASH64:this.writeVarintHash64(b,c);break;default:goog.asserts.fail("Invalid field type in writeAny()")}};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(b))};jspb.BinaryWriter.prototype.writeSignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(b))};
jspb.BinaryWriter.prototype.writeSignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(b))};jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(b))};jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(b))};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(b))};jspb.BinaryWriter.prototype.writeZigzagVarintHash64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarintHash64(b))};
jspb.BinaryWriter.prototype.writeInt32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeInt32String=function(a,b){null!=b&&(b=parseInt(b,10),goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeInt64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(a,b))};jspb.BinaryWriter.prototype.writeInt64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeUint32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeUint32String=function(a,b){null!=b&&(b=parseInt(b,10),goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeUint64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeUint64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeSint32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeSint64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(a,b))};jspb.BinaryWriter.prototype.writeSintHash64=function(a,b){null!=b&&this.writeZigzagVarintHash64_(a,b)};jspb.BinaryWriter.prototype.writeSint64String=function(a,b){null!=b&&this.writeZigzagVarint64String_(a,b)};
jspb.BinaryWriter.prototype.writeFixed32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(b))};jspb.BinaryWriter.prototype.writeFixed64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(b))};
jspb.BinaryWriter.prototype.writeFixed64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeSfixed32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(b))};
jspb.BinaryWriter.prototype.writeSfixed64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(b))};jspb.BinaryWriter.prototype.writeSfixed64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeFloat=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(b))};jspb.BinaryWriter.prototype.writeDouble=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(b))};
jspb.BinaryWriter.prototype.writeBool=function(a,b){null!=b&&(goog.asserts.assert("boolean"===typeof b||"number"===typeof b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(b))};jspb.BinaryWriter.prototype.writeEnum=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};
jspb.BinaryWriter.prototype.writeString=function(a,b){null!=b&&(a=this.beginDelimited_(a),this.encoder_.writeString(b),this.endDelimited_(a))};jspb.BinaryWriter.prototype.writeBytes=function(a,b){null!=b&&(b=jspb.utils.byteSourceToUint8Array(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),this.appendUint8Array_(b))};jspb.BinaryWriter.prototype.writeMessage=function(a,b,c){null!=b&&(a=this.beginDelimited_(a),c(b,this),this.endDelimited_(a))};
jspb.BinaryWriter.prototype.writeMessageSet=function(a,b,c){null!=b&&(this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.START_GROUP),this.writeFieldHeader_(2,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(a),a=this.beginDelimited_(3),c(b,this),this.endDelimited_(a),this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.END_GROUP))};
jspb.BinaryWriter.prototype.writeGroup=function(a,b,c){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b,this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP))};jspb.BinaryWriter.prototype.writeFixedHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(b))};
jspb.BinaryWriter.prototype.writeVarintHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(b))};jspb.BinaryWriter.prototype.writeSplitFixed64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(b,c)};
jspb.BinaryWriter.prototype.writeSplitVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(b,c)};jspb.BinaryWriter.prototype.writeSplitZigzagVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);var d=this.encoder_;jspb.utils.toZigzag64(b,c,function(a,b){d.writeSplitVarint64(a>>>0,b>>>0)})};
jspb.BinaryWriter.prototype.writeRepeatedInt32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt32String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint64_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitFixed64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitVarint64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitZigzagVarint64(a,c(b[e]),d(b[e]))};
jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint32_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64String_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarintHash64_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFloat=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFloat(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedDouble=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeDouble(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBool=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBool(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedEnum=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeEnum(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedString=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeString(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBytes=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBytes(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedMessage=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var e=this.beginDelimited_(a);c(b[d],this);this.endDelimited_(e)}};
jspb.BinaryWriter.prototype.writeRepeatedGroup=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b[d],this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP)};jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixedHash64(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeVarintHash64(a,b[c])};jspb.BinaryWriter.prototype.writePackedInt32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedInt32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSplitFixed64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitFixed64(c(b[e]),d(b[e]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSplitVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitVarint64(c(b[e]),d(b[e]));this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=this.encoder_,f=0;f<b.length;f++)jspb.utils.toZigzag64(c(b[f]),d(b[f]),function(a,b){e.writeSplitVarint64(a>>>0,b>>>0)});this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.Int64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedUint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedUint32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedUint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint64(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedUint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.UInt64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint32(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedFixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeUint32(b[a])};jspb.BinaryWriter.prototype.writePackedFixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeUint64(b[a])};
jspb.BinaryWriter.prototype.writePackedFixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++){var c=jspb.arith.UInt64.fromString(b[a]);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};
jspb.BinaryWriter.prototype.writePackedSfixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeInt32(b[a])};jspb.BinaryWriter.prototype.writePackedSfixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64(b[a])};
jspb.BinaryWriter.prototype.writePackedSfixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64String(b[a])};jspb.BinaryWriter.prototype.writePackedFloat=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeFloat(b[a])};
jspb.BinaryWriter.prototype.writePackedDouble=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeDouble(b[a])};jspb.BinaryWriter.prototype.writePackedBool=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),a=0;a<b.length;a++)this.encoder_.writeBool(b[a])};
jspb.BinaryWriter.prototype.writePackedEnum=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeEnum(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedFixedHash64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeFixedHash64(b[a])};
jspb.BinaryWriter.prototype.writePackedVarintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeVarintHash64(b[c]);this.endDelimited_(a)}};jspb.Export={};exports.Map=jspb.Map;exports.Message=jspb.Message;exports.BinaryReader=jspb.BinaryReader;exports.BinaryWriter=jspb.BinaryWriter;exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo;exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo;exports.exportSymbol=goog.exportSymbol;exports.inherits=goog.inherits;exports.object={extend:goog.object.extend};exports.typeOf=goog.typeOf;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/google-protobuf/google/protobuf/descriptor_pb.js":
/*!***********************************************************************!*\
  !*** ./node_modules/google-protobuf/google/protobuf/descriptor_pb.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: google/protobuf/descriptor.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.DescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.DescriptorProto.ExtensionRange', null, global);
goog.exportSymbol('proto.google.protobuf.DescriptorProto.ReservedRange', null, global);
goog.exportSymbol('proto.google.protobuf.EnumDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.EnumDescriptorProto.EnumReservedRange', null, global);
goog.exportSymbol('proto.google.protobuf.EnumOptions', null, global);
goog.exportSymbol('proto.google.protobuf.EnumValueDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.EnumValueOptions', null, global);
goog.exportSymbol('proto.google.protobuf.ExtensionRangeOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto.Label', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto.Type', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions.CType', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions.JSType', null, global);
goog.exportSymbol('proto.google.protobuf.FileDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.FileDescriptorSet', null, global);
goog.exportSymbol('proto.google.protobuf.FileOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FileOptions.OptimizeMode', null, global);
goog.exportSymbol('proto.google.protobuf.GeneratedCodeInfo', null, global);
goog.exportSymbol('proto.google.protobuf.GeneratedCodeInfo.Annotation', null, global);
goog.exportSymbol('proto.google.protobuf.MessageOptions', null, global);
goog.exportSymbol('proto.google.protobuf.MethodDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.MethodOptions', null, global);
goog.exportSymbol('proto.google.protobuf.MethodOptions.IdempotencyLevel', null, global);
goog.exportSymbol('proto.google.protobuf.OneofDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.OneofOptions', null, global);
goog.exportSymbol('proto.google.protobuf.ServiceDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.ServiceOptions', null, global);
goog.exportSymbol('proto.google.protobuf.SourceCodeInfo', null, global);
goog.exportSymbol('proto.google.protobuf.SourceCodeInfo.Location', null, global);
goog.exportSymbol('proto.google.protobuf.UninterpretedOption', null, global);
goog.exportSymbol('proto.google.protobuf.UninterpretedOption.NamePart', null, global);
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
proto.google.protobuf.FileDescriptorSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorSet.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.FileDescriptorSet.displayName = 'proto.google.protobuf.FileDescriptorSet';
}
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
proto.google.protobuf.FileDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.FileDescriptorProto.displayName = 'proto.google.protobuf.FileDescriptorProto';
}
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
proto.google.protobuf.DescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.DescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.DescriptorProto.displayName = 'proto.google.protobuf.DescriptorProto';
}
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
proto.google.protobuf.DescriptorProto.ExtensionRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ExtensionRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.DescriptorProto.ExtensionRange.displayName = 'proto.google.protobuf.DescriptorProto.ExtensionRange';
}
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
proto.google.protobuf.DescriptorProto.ReservedRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ReservedRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.DescriptorProto.ReservedRange.displayName = 'proto.google.protobuf.DescriptorProto.ReservedRange';
}
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
proto.google.protobuf.ExtensionRangeOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.ExtensionRangeOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ExtensionRangeOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.ExtensionRangeOptions.displayName = 'proto.google.protobuf.ExtensionRangeOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.ExtensionRangeOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.ExtensionRangeOptions.extensionsBinary = {};

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
proto.google.protobuf.FieldDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.FieldDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.FieldDescriptorProto.displayName = 'proto.google.protobuf.FieldDescriptorProto';
}
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
proto.google.protobuf.OneofDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.OneofDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.OneofDescriptorProto.displayName = 'proto.google.protobuf.OneofDescriptorProto';
}
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
proto.google.protobuf.EnumDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.EnumDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.EnumDescriptorProto.displayName = 'proto.google.protobuf.EnumDescriptorProto';
}
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
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.displayName = 'proto.google.protobuf.EnumDescriptorProto.EnumReservedRange';
}
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
proto.google.protobuf.EnumValueDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.EnumValueDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.EnumValueDescriptorProto.displayName = 'proto.google.protobuf.EnumValueDescriptorProto';
}
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
proto.google.protobuf.ServiceDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.ServiceDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.ServiceDescriptorProto.displayName = 'proto.google.protobuf.ServiceDescriptorProto';
}
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
proto.google.protobuf.MethodDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.MethodDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.MethodDescriptorProto.displayName = 'proto.google.protobuf.MethodDescriptorProto';
}
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
proto.google.protobuf.FileOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.FileOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.FileOptions.displayName = 'proto.google.protobuf.FileOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FileOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.FileOptions.extensionsBinary = {};

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
proto.google.protobuf.MessageOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.MessageOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MessageOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.MessageOptions.displayName = 'proto.google.protobuf.MessageOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MessageOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.MessageOptions.extensionsBinary = {};

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
proto.google.protobuf.FieldOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.FieldOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FieldOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.FieldOptions.displayName = 'proto.google.protobuf.FieldOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FieldOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.FieldOptions.extensionsBinary = {};

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
proto.google.protobuf.OneofOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.OneofOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.OneofOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.OneofOptions.displayName = 'proto.google.protobuf.OneofOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.OneofOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.OneofOptions.extensionsBinary = {};

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
proto.google.protobuf.EnumOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.EnumOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.EnumOptions.displayName = 'proto.google.protobuf.EnumOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.EnumOptions.extensionsBinary = {};

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
proto.google.protobuf.EnumValueOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.EnumValueOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumValueOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.EnumValueOptions.displayName = 'proto.google.protobuf.EnumValueOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumValueOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.EnumValueOptions.extensionsBinary = {};

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
proto.google.protobuf.ServiceOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.ServiceOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.ServiceOptions.displayName = 'proto.google.protobuf.ServiceOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.ServiceOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.ServiceOptions.extensionsBinary = {};

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
proto.google.protobuf.MethodOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.MethodOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MethodOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.MethodOptions.displayName = 'proto.google.protobuf.MethodOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MethodOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.MethodOptions.extensionsBinary = {};

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
proto.google.protobuf.UninterpretedOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.UninterpretedOption.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.UninterpretedOption.displayName = 'proto.google.protobuf.UninterpretedOption';
}
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
proto.google.protobuf.UninterpretedOption.NamePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption.NamePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.UninterpretedOption.NamePart.displayName = 'proto.google.protobuf.UninterpretedOption.NamePart';
}
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
proto.google.protobuf.SourceCodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.SourceCodeInfo.displayName = 'proto.google.protobuf.SourceCodeInfo';
}
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
proto.google.protobuf.SourceCodeInfo.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.SourceCodeInfo.Location.displayName = 'proto.google.protobuf.SourceCodeInfo.Location';
}
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
proto.google.protobuf.GeneratedCodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.GeneratedCodeInfo.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.GeneratedCodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.GeneratedCodeInfo.displayName = 'proto.google.protobuf.GeneratedCodeInfo';
}
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
proto.google.protobuf.GeneratedCodeInfo.Annotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.GeneratedCodeInfo.Annotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.GeneratedCodeInfo.Annotation.displayName = 'proto.google.protobuf.GeneratedCodeInfo.Annotation';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.google.protobuf.FileDescriptorProto.toObject, includeInstance)
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
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorSet;
  return proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.FileDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader);
      msg.addFile(value);
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
proto.google.protobuf.FileDescriptorSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileDescriptorProto file = 1;
 * @return {!Array<!proto.google.protobuf.FileDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorSet.prototype.getFileList = function() {
  return /** @type{!Array<!proto.google.protobuf.FileDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.FileDescriptorProto>} value
 * @return {!proto.google.protobuf.FileDescriptorSet} returns this
*/
proto.google.protobuf.FileDescriptorSet.prototype.setFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.FileDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorSet.prototype.addFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.FileDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorSet} returns this
 */
proto.google.protobuf.FileDescriptorSet.prototype.clearFileList = function() {
  return this.setFileList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorProto.repeatedFields_ = [3,10,11,4,5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    pb_package: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    dependencyList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    publicDependencyList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    weakDependencyList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    messageTypeList: jspb.Message.toObjectList(msg.getMessageTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    serviceList: jspb.Message.toObjectList(msg.getServiceList(),
    proto.google.protobuf.ServiceDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.FileOptions.toObject(includeInstance, f),
    sourceCodeInfo: (f = msg.getSourceCodeInfo()) && proto.google.protobuf.SourceCodeInfo.toObject(includeInstance, f),
    syntax: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorProto;
  return proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDependency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addPublicDependency(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addWeakDependency(value);
      break;
    case 4:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.addMessageType(value);
      break;
    case 5:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.addEnumType(value);
      break;
    case 6:
      var value = new proto.google.protobuf.ServiceDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader);
      msg.addService(value);
      break;
    case 7:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FileOptions;
      reader.readMessage(value,proto.google.protobuf.FileOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.SourceCodeInfo;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader);
      msg.setSourceCodeInfo(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSyntax(value);
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
proto.google.protobuf.FileDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPublicDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      10,
      f
    );
  }
  f = message.getWeakDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      11,
      f
    );
  }
  f = message.getMessageTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getServiceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FileOptions.serializeBinaryToWriter
    );
  }
  f = message.getSourceCodeInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string package = 2;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setPackage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearPackage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string dependency = 3;
 * @return {!Array<string>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getDependencyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setDependencyList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.addDependency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearDependencyList = function() {
  return this.setDependencyList([]);
};


/**
 * repeated int32 public_dependency = 10;
 * @return {!Array<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPublicDependencyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setPublicDependencyList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.addPublicDependency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearPublicDependencyList = function() {
  return this.setPublicDependencyList([]);
};


/**
 * repeated int32 weak_dependency = 11;
 * @return {!Array<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getWeakDependencyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setWeakDependencyList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.addWeakDependency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearWeakDependencyList = function() {
  return this.setWeakDependencyList([]);
};


/**
 * repeated DescriptorProto message_type = 4;
 * @return {!Array<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getMessageTypeList = function() {
  return /** @type{!Array<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 4));
};


/**
 * @param {!Array<!proto.google.protobuf.DescriptorProto>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setMessageTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addMessageType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.DescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearMessageTypeList = function() {
  return this.setMessageTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 5;
 * @return {!Array<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 5));
};


/**
 * @param {!Array<!proto.google.protobuf.EnumDescriptorProto>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setEnumTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addEnumType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.EnumDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearEnumTypeList = function() {
  return this.setEnumTypeList([]);
};


/**
 * repeated ServiceDescriptorProto service = 6;
 * @return {!Array<!proto.google.protobuf.ServiceDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getServiceList = function() {
  return /** @type{!Array<!proto.google.protobuf.ServiceDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.ServiceDescriptorProto, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.ServiceDescriptorProto>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setServiceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.ServiceDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addService = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.ServiceDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearServiceList = function() {
  return this.setServiceList([]);
};


/**
 * repeated FieldDescriptorProto extension = 7;
 * @return {!Array<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 7));
};


/**
 * @param {!Array<!proto.google.protobuf.FieldDescriptorProto>} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional FileOptions options = 8;
 * @return {?proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.FileOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FileOptions, 8));
};


/**
 * @param {?proto.google.protobuf.FileOptions|undefined} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SourceCodeInfo source_code_info = 9;
 * @return {?proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSourceCodeInfo = function() {
  return /** @type{?proto.google.protobuf.SourceCodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceCodeInfo, 9));
};


/**
 * @param {?proto.google.protobuf.SourceCodeInfo|undefined} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
*/
proto.google.protobuf.FileDescriptorProto.prototype.setSourceCodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearSourceCodeInfo = function() {
  return this.setSourceCodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasSourceCodeInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string syntax = 12;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSyntax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.setSyntax = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileDescriptorProto} returns this
 */
proto.google.protobuf.FileDescriptorProto.prototype.clearSyntax = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasSyntax = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.DescriptorProto.repeatedFields_ = [2,6,3,4,5,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    fieldList: jspb.Message.toObjectList(msg.getFieldList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    nestedTypeList: jspb.Message.toObjectList(msg.getNestedTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    extensionRangeList: jspb.Message.toObjectList(msg.getExtensionRangeList(),
    proto.google.protobuf.DescriptorProto.ExtensionRange.toObject, includeInstance),
    oneofDeclList: jspb.Message.toObjectList(msg.getOneofDeclList(),
    proto.google.protobuf.OneofDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.MessageOptions.toObject(includeInstance, f),
    reservedRangeList: jspb.Message.toObjectList(msg.getReservedRangeList(),
    proto.google.protobuf.DescriptorProto.ReservedRange.toObject, includeInstance),
    reservedNameList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto;
  return proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addField(value);
      break;
    case 6:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.addNestedType(value);
      break;
    case 4:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.addEnumType(value);
      break;
    case 5:
      var value = new proto.google.protobuf.DescriptorProto.ExtensionRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader);
      msg.addExtensionRange(value);
      break;
    case 8:
      var value = new proto.google.protobuf.OneofDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader);
      msg.addOneofDecl(value);
      break;
    case 7:
      var value = new proto.google.protobuf.MessageOptions;
      reader.readMessage(value,proto.google.protobuf.MessageOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.DescriptorProto.ReservedRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader);
      msg.addReservedRange(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedName(value);
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
proto.google.protobuf.DescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getNestedTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter
    );
  }
  f = message.getOneofDeclList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.protobuf.MessageOptions.serializeBinaryToWriter
    );
  }
  f = message.getReservedRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter
    );
  }
  f = message.getReservedNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ExtensionRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    end: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.google.protobuf.ExtensionRangeOptions.toObject(includeInstance, f)
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
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ExtensionRange;
  return proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.google.protobuf.ExtensionRangeOptions;
      reader.readMessage(value,proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearStart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExtensionRangeOptions options = 3;
 * @return {?proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.ExtensionRangeOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ExtensionRangeOptions, 3));
};


/**
 * @param {?proto.google.protobuf.ExtensionRangeOptions|undefined} value
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
*/
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} returns this
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ReservedRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ReservedRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    end: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ReservedRange;
  return proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
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
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange} returns this
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange} returns this
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearStart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange} returns this
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange} returns this
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.DescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FieldDescriptorProto field = 2;
 * @return {!Array<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getFieldList = function() {
  return /** @type{!Array<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.FieldDescriptorProto>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setFieldList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addField = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearFieldList = function() {
  return this.setFieldList([]);
};


/**
 * repeated FieldDescriptorProto extension = 6;
 * @return {!Array<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.FieldDescriptorProto>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated DescriptorProto nested_type = 3;
 * @return {!Array<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getNestedTypeList = function() {
  return /** @type{!Array<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.DescriptorProto>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setNestedTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addNestedType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.DescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearNestedTypeList = function() {
  return this.setNestedTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 4;
 * @return {!Array<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 4));
};


/**
 * @param {!Array<!proto.google.protobuf.EnumDescriptorProto>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setEnumTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addEnumType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.EnumDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearEnumTypeList = function() {
  return this.setEnumTypeList([]);
};


/**
 * repeated ExtensionRange extension_range = 5;
 * @return {!Array<!proto.google.protobuf.DescriptorProto.ExtensionRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionRangeList = function() {
  return /** @type{!Array<!proto.google.protobuf.DescriptorProto.ExtensionRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ExtensionRange, 5));
};


/**
 * @param {!Array<!proto.google.protobuf.DescriptorProto.ExtensionRange>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setExtensionRangeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.prototype.addExtensionRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.DescriptorProto.ExtensionRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearExtensionRangeList = function() {
  return this.setExtensionRangeList([]);
};


/**
 * repeated OneofDescriptorProto oneof_decl = 8;
 * @return {!Array<!proto.google.protobuf.OneofDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getOneofDeclList = function() {
  return /** @type{!Array<!proto.google.protobuf.OneofDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.OneofDescriptorProto, 8));
};


/**
 * @param {!Array<!proto.google.protobuf.OneofDescriptorProto>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setOneofDeclList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.OneofDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addOneofDecl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.OneofDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearOneofDeclList = function() {
  return this.setOneofDeclList([]);
};


/**
 * optional MessageOptions options = 7;
 * @return {?proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.DescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.MessageOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MessageOptions, 7));
};


/**
 * @param {?proto.google.protobuf.MessageOptions|undefined} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.DescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ReservedRange reserved_range = 9;
 * @return {!Array<!proto.google.protobuf.DescriptorProto.ReservedRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedRangeList = function() {
  return /** @type{!Array<!proto.google.protobuf.DescriptorProto.ReservedRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ReservedRange, 9));
};


/**
 * @param {!Array<!proto.google.protobuf.DescriptorProto.ReservedRange>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
*/
proto.google.protobuf.DescriptorProto.prototype.setReservedRangeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.prototype.addReservedRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.protobuf.DescriptorProto.ReservedRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearReservedRangeList = function() {
  return this.setReservedRangeList([]);
};


/**
 * repeated string reserved_name = 10;
 * @return {!Array<string>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.setReservedNameList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.addReservedName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.DescriptorProto} returns this
 */
proto.google.protobuf.DescriptorProto.prototype.clearReservedNameList = function() {
  return this.setReservedNameList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ExtensionRangeOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ExtensionRangeOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ExtensionRangeOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ExtensionRangeOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.ExtensionRangeOptions.extensions, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.ExtensionRangeOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ExtensionRangeOptions;
  return proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ExtensionRangeOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.ExtensionRangeOptions.extensionsBinary,
        proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension,
        proto.google.protobuf.ExtensionRangeOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ExtensionRangeOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.ExtensionRangeOptions} returns this
*/
proto.google.protobuf.ExtensionRangeOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.ExtensionRangeOptions} returns this
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    number: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    label: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    typeName: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    extendee: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    defaultValue: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    oneofIndex: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    jsonName: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.google.protobuf.FieldOptions.toObject(includeInstance, f),
    proto3Optional: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldDescriptorProto;
  return proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (reader.readEnum());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtendee(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofIndex(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonName(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FieldOptions;
      reader.readMessage(value,proto.google.protobuf.FieldOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProto3Optional(value);
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
proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FieldOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Type = {
  TYPE_DOUBLE: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_UINT64: 4,
  TYPE_INT32: 5,
  TYPE_FIXED64: 6,
  TYPE_FIXED32: 7,
  TYPE_BOOL: 8,
  TYPE_STRING: 9,
  TYPE_GROUP: 10,
  TYPE_MESSAGE: 11,
  TYPE_BYTES: 12,
  TYPE_UINT32: 13,
  TYPE_ENUM: 14,
  TYPE_SFIXED32: 15,
  TYPE_SFIXED64: 16,
  TYPE_SINT32: 17,
  TYPE_SINT64: 18
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Label = {
  LABEL_OPTIONAL: 1,
  LABEL_REQUIRED: 2,
  LABEL_REPEATED: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setNumber = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearNumber = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Label label = 4;
 * @return {!proto.google.protobuf.FieldDescriptorProto.Label}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getLabel = function() {
  return /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto.Label} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Type type = 5;
 * @return {!proto.google.protobuf.FieldDescriptorProto.Type}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getType = function() {
  return /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto.Type} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string type_name = 6;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setTypeName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearTypeName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasTypeName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string extendee = 2;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getExtendee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setExtendee = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearExtendee = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasExtendee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string default_value = 7;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setDefaultValue = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearDefaultValue = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 oneof_index = 9;
 * @return {number}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOneofIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setOneofIndex = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearOneofIndex = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasOneofIndex = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string json_name = 10;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getJsonName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setJsonName = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearJsonName = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasJsonName = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional FieldOptions options = 8;
 * @return {?proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.FieldOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FieldOptions, 8));
};


/**
 * @param {?proto.google.protobuf.FieldOptions|undefined} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
*/
proto.google.protobuf.FieldDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool proto3_optional = 17;
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getProto3Optional = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.setProto3Optional = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldDescriptorProto} returns this
 */
proto.google.protobuf.FieldDescriptorProto.prototype.clearProto3Optional = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasProto3Optional = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.OneofDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.google.protobuf.OneofOptions.toObject(includeInstance, f)
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
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.OneofDescriptorProto;
  return proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.OneofOptions;
      reader.readMessage(value,proto.google.protobuf.OneofOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.OneofDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.OneofOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.OneofDescriptorProto} returns this
 */
proto.google.protobuf.OneofDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.OneofDescriptorProto} returns this
 */
proto.google.protobuf.OneofDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OneofOptions options = 2;
 * @return {?proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.OneofOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.OneofOptions, 2));
};


/**
 * @param {?proto.google.protobuf.OneofOptions|undefined} value
 * @return {!proto.google.protobuf.OneofDescriptorProto} returns this
*/
proto.google.protobuf.OneofDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.OneofDescriptorProto} returns this
 */
proto.google.protobuf.OneofDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumDescriptorProto.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.google.protobuf.EnumValueDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumOptions.toObject(includeInstance, f),
    reservedRangeList: jspb.Message.toObjectList(msg.getReservedRangeList(),
    proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject, includeInstance),
    reservedNameList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumDescriptorProto;
  return proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.EnumValueDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumOptions;
      reader.readMessage(value,proto.google.protobuf.EnumOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 4:
      var value = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader);
      msg.addReservedRange(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedName(value);
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
proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumOptions.serializeBinaryToWriter
    );
  }
  f = message.getReservedRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter
    );
  }
  f = message.getReservedNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    end: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
  return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
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
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} returns this
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} returns this
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearStart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} returns this
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} returns this
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated EnumValueDescriptorProto value = 2;
 * @return {!Array<!proto.google.protobuf.EnumValueDescriptorProto>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getValueList = function() {
  return /** @type{!Array<!proto.google.protobuf.EnumValueDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValueDescriptorProto, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.EnumValueDescriptorProto>} value
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
*/
proto.google.protobuf.EnumDescriptorProto.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.EnumValueDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.EnumValueDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * optional EnumOptions options = 3;
 * @return {?proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.EnumOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumOptions, 3));
};


/**
 * @param {?proto.google.protobuf.EnumOptions|undefined} value
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
*/
proto.google.protobuf.EnumDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated EnumReservedRange reserved_range = 4;
 * @return {!Array<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getReservedRangeList = function() {
  return /** @type{!Array<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, 4));
};


/**
 * @param {!Array<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>} value
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
*/
proto.google.protobuf.EnumDescriptorProto.prototype.setReservedRangeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addReservedRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedRangeList = function() {
  return this.setReservedRangeList([]);
};


/**
 * repeated string reserved_name = 5;
 * @return {!Array<string>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getReservedNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.setReservedNameList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addReservedName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.EnumDescriptorProto} returns this
 */
proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedNameList = function() {
  return this.setReservedNameList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    number: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumValueOptions.toObject(includeInstance, f)
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
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueDescriptorProto;
  return proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumValueOptions;
      reader.readMessage(value,proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 number = 2;
 * @return {number}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setNumber = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.clearNumber = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EnumValueOptions options = 3;
 * @return {?proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.EnumValueOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumValueOptions, 3));
};


/**
 * @param {?proto.google.protobuf.EnumValueOptions|undefined} value
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
*/
proto.google.protobuf.EnumValueDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} returns this
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceDescriptorProto.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    methodList: jspb.Message.toObjectList(msg.getMethodList(),
    proto.google.protobuf.MethodDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.ServiceOptions.toObject(includeInstance, f)
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
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceDescriptorProto;
  return proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.MethodDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader);
      msg.addMethod(value);
      break;
    case 3:
      var value = new proto.google.protobuf.ServiceOptions;
      reader.readMessage(value,proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.ServiceOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MethodDescriptorProto method = 2;
 * @return {!Array<!proto.google.protobuf.MethodDescriptorProto>}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getMethodList = function() {
  return /** @type{!Array<!proto.google.protobuf.MethodDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.MethodDescriptorProto, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.MethodDescriptorProto>} value
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
*/
proto.google.protobuf.ServiceDescriptorProto.prototype.setMethodList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.MethodDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.addMethod = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.MethodDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.clearMethodList = function() {
  return this.setMethodList([]);
};


/**
 * optional ServiceOptions options = 3;
 * @return {?proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.ServiceOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ServiceOptions, 3));
};


/**
 * @param {?proto.google.protobuf.ServiceOptions|undefined} value
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
*/
proto.google.protobuf.ServiceDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.ServiceDescriptorProto} returns this
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    inputType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    outputType: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.google.protobuf.MethodOptions.toObject(includeInstance, f),
    clientStreaming: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    serverStreaming: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodDescriptorProto;
  return proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputType(value);
      break;
    case 4:
      var value = new proto.google.protobuf.MethodOptions;
      reader.readMessage(value,proto.google.protobuf.MethodOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClientStreaming(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerStreaming(value);
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
proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.MethodOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string input_type = 2;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getInputType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.setInputType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearInputType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasInputType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string output_type = 3;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOutputType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.setOutputType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearOutputType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasOutputType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MethodOptions options = 4;
 * @return {?proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.MethodOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MethodOptions, 4));
};


/**
 * @param {?proto.google.protobuf.MethodOptions|undefined} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
*/
proto.google.protobuf.MethodDescriptorProto.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool client_streaming = 5;
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getClientStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.setClientStreaming = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearClientStreaming = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasClientStreaming = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool server_streaming = 6;
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getServerStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.setServerStreaming = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodDescriptorProto} returns this
 */
proto.google.protobuf.MethodDescriptorProto.prototype.clearServerStreaming = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasServerStreaming = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    javaPackage: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    javaOuterClassname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    javaMultipleFiles: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    javaGenerateEqualsAndHash: (f = jspb.Message.getBooleanField(msg, 20)) == null ? undefined : f,
    javaStringCheckUtf8: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    optimizeFor: jspb.Message.getFieldWithDefault(msg, 9, 1),
    goPackage: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    ccGenericServices: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    javaGenericServices: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    pyGenericServices: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    phpGenericServices: jspb.Message.getBooleanFieldWithDefault(msg, 42, false),
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    ccEnableArenas: jspb.Message.getBooleanFieldWithDefault(msg, 31, true),
    objcClassPrefix: (f = jspb.Message.getField(msg, 36)) == null ? undefined : f,
    csharpNamespace: (f = jspb.Message.getField(msg, 37)) == null ? undefined : f,
    swiftPrefix: (f = jspb.Message.getField(msg, 39)) == null ? undefined : f,
    phpClassPrefix: (f = jspb.Message.getField(msg, 40)) == null ? undefined : f,
    phpNamespace: (f = jspb.Message.getField(msg, 41)) == null ? undefined : f,
    phpMetadataNamespace: (f = jspb.Message.getField(msg, 44)) == null ? undefined : f,
    rubyPackage: (f = jspb.Message.getField(msg, 45)) == null ? undefined : f,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FileOptions.extensions, proto.google.protobuf.FileOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileOptions;
  return proto.google.protobuf.FileOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaPackage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaOuterClassname(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaMultipleFiles(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenerateEqualsAndHash(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaStringCheckUtf8(value);
      break;
    case 9:
      var value = /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (reader.readEnum());
      msg.setOptimizeFor(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoPackage(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcGenericServices(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenericServices(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPyGenericServices(value);
      break;
    case 42:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhpGenericServices(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcEnableArenas(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjcClassPrefix(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsharpNamespace(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwiftPrefix(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhpClassPrefix(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhpNamespace(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhpMetadataNamespace(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readString());
      msg.setRubyPackage(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.FileOptions.extensionsBinary,
        proto.google.protobuf.FileOptions.prototype.getExtension,
        proto.google.protobuf.FileOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeBool(
      27,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 42));
  if (f != null) {
    writer.writeBool(
      42,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeBool(
      31,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 36));
  if (f != null) {
    writer.writeString(
      36,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 37));
  if (f != null) {
    writer.writeString(
      37,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeString(
      39,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 40));
  if (f != null) {
    writer.writeString(
      40,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 41));
  if (f != null) {
    writer.writeString(
      41,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 44));
  if (f != null) {
    writer.writeString(
      44,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 45));
  if (f != null) {
    writer.writeString(
      45,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.FileOptions.OptimizeMode = {
  SPEED: 1,
  CODE_SIZE: 2,
  LITE_RUNTIME: 3
};

/**
 * optional string java_package = 1;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getJavaPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaPackage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaPackage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaPackage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string java_outer_classname = 8;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getJavaOuterClassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaOuterClassname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaOuterClassname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaOuterClassname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool java_multiple_files = 10;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaMultipleFiles = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaMultipleFiles = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaMultipleFiles = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaMultipleFiles = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool java_generate_equals_and_hash = 20;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenerateEqualsAndHash = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaGenerateEqualsAndHash = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaGenerateEqualsAndHash = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaGenerateEqualsAndHash = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool java_string_check_utf8 = 27;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaStringCheckUtf8 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaStringCheckUtf8 = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaStringCheckUtf8 = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaStringCheckUtf8 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional OptimizeMode optimize_for = 9;
 * @return {!proto.google.protobuf.FileOptions.OptimizeMode}
 */
proto.google.protobuf.FileOptions.prototype.getOptimizeFor = function() {
  return /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/**
 * @param {!proto.google.protobuf.FileOptions.OptimizeMode} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setOptimizeFor = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearOptimizeFor = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasOptimizeFor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string go_package = 11;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getGoPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setGoPackage = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearGoPackage = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasGoPackage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool cc_generic_services = 16;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setCcGenericServices = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearCcGenericServices = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCcGenericServices = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool java_generic_services = 17;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setJavaGenericServices = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearJavaGenericServices = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaGenericServices = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool py_generic_services = 18;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getPyGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setPyGenericServices = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearPyGenericServices = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPyGenericServices = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool php_generic_services = 42;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getPhpGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 42, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setPhpGenericServices = function(value) {
  return jspb.Message.setField(this, 42, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearPhpGenericServices = function() {
  return jspb.Message.setField(this, 42, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpGenericServices = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional bool deprecated = 23;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bool cc_enable_arenas = 31;
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcEnableArenas = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, true));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setCcEnableArenas = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearCcEnableArenas = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCcEnableArenas = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string objc_class_prefix = 36;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getObjcClassPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setObjcClassPrefix = function(value) {
  return jspb.Message.setField(this, 36, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearObjcClassPrefix = function() {
  return jspb.Message.setField(this, 36, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasObjcClassPrefix = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional string csharp_namespace = 37;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getCsharpNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setCsharpNamespace = function(value) {
  return jspb.Message.setField(this, 37, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearCsharpNamespace = function() {
  return jspb.Message.setField(this, 37, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCsharpNamespace = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string swift_prefix = 39;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getSwiftPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setSwiftPrefix = function(value) {
  return jspb.Message.setField(this, 39, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearSwiftPrefix = function() {
  return jspb.Message.setField(this, 39, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasSwiftPrefix = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional string php_class_prefix = 40;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getPhpClassPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setPhpClassPrefix = function(value) {
  return jspb.Message.setField(this, 40, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearPhpClassPrefix = function() {
  return jspb.Message.setField(this, 40, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpClassPrefix = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional string php_namespace = 41;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getPhpNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setPhpNamespace = function(value) {
  return jspb.Message.setField(this, 41, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearPhpNamespace = function() {
  return jspb.Message.setField(this, 41, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpNamespace = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional string php_metadata_namespace = 44;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getPhpMetadataNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setPhpMetadataNamespace = function(value) {
  return jspb.Message.setField(this, 44, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearPhpMetadataNamespace = function() {
  return jspb.Message.setField(this, 44, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpMetadataNamespace = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional string ruby_package = 45;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getRubyPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 45, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.setRubyPackage = function(value) {
  return jspb.Message.setField(this, 45, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearRubyPackage = function() {
  return jspb.Message.setField(this, 45, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasRubyPackage = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FileOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.FileOptions} returns this
*/
proto.google.protobuf.FileOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.FileOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FileOptions} returns this
 */
proto.google.protobuf.FileOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MessageOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MessageOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MessageOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MessageOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MessageOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSetWireFormat: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    noStandardDescriptorAccessor: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    mapEntry: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MessageOptions.extensions, proto.google.protobuf.MessageOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MessageOptions;
  return proto.google.protobuf.MessageOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MessageOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMessageSetWireFormat(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoStandardDescriptorAccessor(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapEntry(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.MessageOptions.extensionsBinary,
        proto.google.protobuf.MessageOptions.prototype.getExtension,
        proto.google.protobuf.MessageOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MessageOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MessageOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MessageOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MessageOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension);
};


/**
 * optional bool message_set_wire_format = 1;
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getMessageSetWireFormat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.setMessageSetWireFormat = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.clearMessageSetWireFormat = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasMessageSetWireFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool no_standard_descriptor_accessor = 2;
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getNoStandardDescriptorAccessor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.setNoStandardDescriptorAccessor = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.clearNoStandardDescriptorAccessor = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasNoStandardDescriptorAccessor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool deprecated = 3;
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool map_entry = 7;
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getMapEntry = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.setMapEntry = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.clearMapEntry = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasMapEntry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MessageOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.MessageOptions} returns this
*/
proto.google.protobuf.MessageOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.MessageOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.MessageOptions} returns this
 */
proto.google.protobuf.MessageOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FieldOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ctype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    packed: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    jstype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lazy: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    weak: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FieldOptions.extensions, proto.google.protobuf.FieldOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldOptions;
  return proto.google.protobuf.FieldOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.FieldOptions.CType} */ (reader.readEnum());
      msg.setCtype(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacked(value);
      break;
    case 6:
      var value = /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (reader.readEnum());
      msg.setJstype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLazy(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWeak(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.FieldOptions.extensionsBinary,
        proto.google.protobuf.FieldOptions.prototype.getExtension,
        proto.google.protobuf.FieldOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FieldOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.FieldOptions.CType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2
};

/**
 * optional CType ctype = 1;
 * @return {!proto.google.protobuf.FieldOptions.CType}
 */
proto.google.protobuf.FieldOptions.prototype.getCtype = function() {
  return /** @type {!proto.google.protobuf.FieldOptions.CType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.protobuf.FieldOptions.CType} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setCtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearCtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool packed = 2;
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getPacked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setPacked = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearPacked = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasPacked = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JSType jstype = 6;
 * @return {!proto.google.protobuf.FieldOptions.JSType}
 */
proto.google.protobuf.FieldOptions.prototype.getJstype = function() {
  return /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.protobuf.FieldOptions.JSType} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setJstype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearJstype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasJstype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool lazy = 5;
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getLazy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setLazy = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearLazy = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasLazy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool deprecated = 3;
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool weak = 10;
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getWeak = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.setWeak = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearWeak = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasWeak = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FieldOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.FieldOptions} returns this
*/
proto.google.protobuf.FieldOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.FieldOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.FieldOptions} returns this
 */
proto.google.protobuf.FieldOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.OneofOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.OneofOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.OneofOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.OneofOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.OneofOptions.extensions, proto.google.protobuf.OneofOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.OneofOptions;
  return proto.google.protobuf.OneofOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.OneofOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.OneofOptions.extensionsBinary,
        proto.google.protobuf.OneofOptions.prototype.getExtension,
        proto.google.protobuf.OneofOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.OneofOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.OneofOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.OneofOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.OneofOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.OneofOptions} returns this
*/
proto.google.protobuf.OneofOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.OneofOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.OneofOptions} returns this
 */
proto.google.protobuf.OneofOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowAlias: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumOptions.extensions, proto.google.protobuf.EnumOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumOptions;
  return proto.google.protobuf.EnumOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowAlias(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.EnumOptions.extensionsBinary,
        proto.google.protobuf.EnumOptions.prototype.getExtension,
        proto.google.protobuf.EnumOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension);
};


/**
 * optional bool allow_alias = 2;
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.getAllowAlias = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.EnumOptions} returns this
 */
proto.google.protobuf.EnumOptions.prototype.setAllowAlias = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumOptions} returns this
 */
proto.google.protobuf.EnumOptions.prototype.clearAllowAlias = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.hasAllowAlias = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool deprecated = 3;
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.EnumOptions} returns this
 */
proto.google.protobuf.EnumOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumOptions} returns this
 */
proto.google.protobuf.EnumOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.EnumOptions} returns this
*/
proto.google.protobuf.EnumOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.EnumOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.EnumOptions} returns this
 */
proto.google.protobuf.EnumOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumValueOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumValueOptions.extensions, proto.google.protobuf.EnumValueOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueOptions;
  return proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.EnumValueOptions.extensionsBinary,
        proto.google.protobuf.EnumValueOptions.prototype.getExtension,
        proto.google.protobuf.EnumValueOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValueOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension);
};


/**
 * optional bool deprecated = 1;
 * @return {boolean}
 */
proto.google.protobuf.EnumValueOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.EnumValueOptions} returns this
 */
proto.google.protobuf.EnumValueOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.EnumValueOptions} returns this
 */
proto.google.protobuf.EnumValueOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumValueOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.EnumValueOptions} returns this
*/
proto.google.protobuf.EnumValueOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.EnumValueOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.EnumValueOptions} returns this
 */
proto.google.protobuf.EnumValueOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.ServiceOptions.extensions, proto.google.protobuf.ServiceOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceOptions;
  return proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.ServiceOptions.extensionsBinary,
        proto.google.protobuf.ServiceOptions.prototype.getExtension,
        proto.google.protobuf.ServiceOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ServiceOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ServiceOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension);
};


/**
 * optional bool deprecated = 33;
 * @return {boolean}
 */
proto.google.protobuf.ServiceOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.ServiceOptions} returns this
 */
proto.google.protobuf.ServiceOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.ServiceOptions} returns this
 */
proto.google.protobuf.ServiceOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.ServiceOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.ServiceOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.ServiceOptions} returns this
*/
proto.google.protobuf.ServiceOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.ServiceOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.ServiceOptions} returns this
 */
proto.google.protobuf.ServiceOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MethodOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    idempotencyLevel: jspb.Message.getFieldWithDefault(msg, 34, 0),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MethodOptions.extensions, proto.google.protobuf.MethodOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodOptions;
  return proto.google.protobuf.MethodOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 34:
      var value = /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (reader.readEnum());
      msg.setIdempotencyLevel(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.google.protobuf.MethodOptions.extensionsBinary,
        proto.google.protobuf.MethodOptions.prototype.getExtension,
        proto.google.protobuf.MethodOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MethodOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MethodOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.MethodOptions.IdempotencyLevel = {
  IDEMPOTENCY_UNKNOWN: 0,
  NO_SIDE_EFFECTS: 1,
  IDEMPOTENT: 2
};

/**
 * optional bool deprecated = 33;
 * @return {boolean}
 */
proto.google.protobuf.MethodOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.MethodOptions} returns this
 */
proto.google.protobuf.MethodOptions.prototype.setDeprecated = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodOptions} returns this
 */
proto.google.protobuf.MethodOptions.prototype.clearDeprecated = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional IdempotencyLevel idempotency_level = 34;
 * @return {!proto.google.protobuf.MethodOptions.IdempotencyLevel}
 */
proto.google.protobuf.MethodOptions.prototype.getIdempotencyLevel = function() {
  return /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.google.protobuf.MethodOptions.IdempotencyLevel} value
 * @return {!proto.google.protobuf.MethodOptions} returns this
 */
proto.google.protobuf.MethodOptions.prototype.setIdempotencyLevel = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.MethodOptions} returns this
 */
proto.google.protobuf.MethodOptions.prototype.clearIdempotencyLevel = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.MethodOptions.prototype.hasIdempotencyLevel = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MethodOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption>} value
 * @return {!proto.google.protobuf.MethodOptions} returns this
*/
proto.google.protobuf.MethodOptions.prototype.setUninterpretedOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.MethodOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.MethodOptions} returns this
 */
proto.google.protobuf.MethodOptions.prototype.clearUninterpretedOptionList = function() {
  return this.setUninterpretedOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.UninterpretedOption.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.toObjectList(msg.getNameList(),
    proto.google.protobuf.UninterpretedOption.NamePart.toObject, includeInstance),
    identifierValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    positiveIntValue: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    negativeIntValue: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    doubleValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    stringValue: msg.getStringValue_asB64(),
    aggregateValue: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption;
  return proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.protobuf.UninterpretedOption.NamePart;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader);
      msg.addName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifierValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositiveIntValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNegativeIntValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStringValue(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateValue(value);
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
proto.google.protobuf.UninterpretedOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.NamePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.NamePart.toObject = function(includeInstance, msg) {
  var f, obj = {
    namePart: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    isExtension: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption.NamePart;
  return proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamePart(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExtension(value);
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
proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * required string name_part = 1;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getNamePart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart} returns this
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setNamePart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart} returns this
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearNamePart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasNamePart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required bool is_extension = 2;
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getIsExtension = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart} returns this
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setIsExtension = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart} returns this
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearIsExtension = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasIsExtension = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NamePart name = 2;
 * @return {!Array<!proto.google.protobuf.UninterpretedOption.NamePart>}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNameList = function() {
  return /** @type{!Array<!proto.google.protobuf.UninterpretedOption.NamePart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption.NamePart, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.UninterpretedOption.NamePart>} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
*/
proto.google.protobuf.UninterpretedOption.prototype.setNameList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.prototype.addName = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.UninterpretedOption.NamePart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearNameList = function() {
  return this.setNameList([]);
};


/**
 * optional string identifier_value = 3;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getIdentifierValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setIdentifierValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearIdentifierValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasIdentifierValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 positive_int_value = 4;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getPositiveIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setPositiveIntValue = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearPositiveIntValue = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasPositiveIntValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 negative_int_value = 5;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNegativeIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setNegativeIntValue = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearNegativeIntValue = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasNegativeIntValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double double_value = 6;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setDoubleValue = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearDoubleValue = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes string_value = 7;
 * @return {!(string|Uint8Array)}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes string_value = 7;
 * This is a type-conversion wrapper around `getStringValue()`
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStringValue()));
};


/**
 * optional bytes string_value = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStringValue()`
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStringValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setStringValue = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearStringValue = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string aggregate_value = 8;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getAggregateValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.setAggregateValue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.UninterpretedOption} returns this
 */
proto.google.protobuf.UninterpretedOption.prototype.clearAggregateValue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasAggregateValue = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationList: jspb.Message.toObjectList(msg.getLocationList(),
    proto.google.protobuf.SourceCodeInfo.Location.toObject, includeInstance)
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
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo;
  return proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.SourceCodeInfo.Location;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader);
      msg.addLocation(value);
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
proto.google.protobuf.SourceCodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_ = [1,2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    spanList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    leadingComments: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    trailingComments: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    leadingDetachedCommentsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo.Location;
  return proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setPathList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setSpanList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadingComments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrailingComments(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addLeadingDetachedComments(value);
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
proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getSpanList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLeadingDetachedCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * repeated int32 path = 1;
 * @return {!Array<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getPathList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * repeated int32 span = 2;
 * @return {!Array<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getSpanList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setSpanList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addSpan = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.clearSpanList = function() {
  return this.setSpanList([]);
};


/**
 * optional string leading_comments = 3;
 * @return {string}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingComments = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingComments = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.hasLeadingComments = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string trailing_comments = 4;
 * @return {string}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getTrailingComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setTrailingComments = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.clearTrailingComments = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.hasTrailingComments = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string leading_detached_comments = 6;
 * @return {!Array<string>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingDetachedCommentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingDetachedCommentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addLeadingDetachedComments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} returns this
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingDetachedCommentsList = function() {
  return this.setLeadingDetachedCommentsList([]);
};


/**
 * repeated Location location = 1;
 * @return {!Array<!proto.google.protobuf.SourceCodeInfo.Location>}
 */
proto.google.protobuf.SourceCodeInfo.prototype.getLocationList = function() {
  return /** @type{!Array<!proto.google.protobuf.SourceCodeInfo.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.SourceCodeInfo.Location, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.SourceCodeInfo.Location>} value
 * @return {!proto.google.protobuf.SourceCodeInfo} returns this
*/
proto.google.protobuf.SourceCodeInfo.prototype.setLocationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.SourceCodeInfo.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.prototype.addLocation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.SourceCodeInfo.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.SourceCodeInfo} returns this
 */
proto.google.protobuf.SourceCodeInfo.prototype.clearLocationList = function() {
  return this.setLocationList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.GeneratedCodeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.GeneratedCodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.GeneratedCodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationList: jspb.Message.toObjectList(msg.getAnnotationList(),
    proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject, includeInstance)
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
 * @return {!proto.google.protobuf.GeneratedCodeInfo}
 */
proto.google.protobuf.GeneratedCodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.GeneratedCodeInfo;
  return proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.GeneratedCodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.GeneratedCodeInfo}
 */
proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
      reader.readMessage(value,proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader);
      msg.addAnnotation(value);
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
proto.google.protobuf.GeneratedCodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.GeneratedCodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    sourceFile: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    begin: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    end: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
  return proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setPathList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBegin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
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
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated int32 path = 1;
 * @return {!Array<number>}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getPathList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional string source_file = 2;
 * @return {string}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getSourceFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setSourceFile = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearSourceFile = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasSourceFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 begin = 3;
 * @return {number}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getBegin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setBegin = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearBegin = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasBegin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 end = 4;
 * @return {number}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Annotation annotation = 1;
 * @return {!Array<!proto.google.protobuf.GeneratedCodeInfo.Annotation>}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.getAnnotationList = function() {
  return /** @type{!Array<!proto.google.protobuf.GeneratedCodeInfo.Annotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.GeneratedCodeInfo.Annotation, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.GeneratedCodeInfo.Annotation>} value
 * @return {!proto.google.protobuf.GeneratedCodeInfo} returns this
*/
proto.google.protobuf.GeneratedCodeInfo.prototype.setAnnotationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.addAnnotation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.GeneratedCodeInfo.Annotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.GeneratedCodeInfo} returns this
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.clearAnnotationList = function() {
  return this.setAnnotationList([]);
};


goog.object.extend(exports, proto.google.protobuf);


/***/ }),

/***/ "./node_modules/google-protobuf/google/protobuf/empty_pb.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-protobuf/google/protobuf/empty_pb.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: google/protobuf/empty.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.Empty', null, global);
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
proto.google.protobuf.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.Empty.displayName = 'proto.google.protobuf.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Empty;
  return proto.google.protobuf.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.protobuf.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.google.protobuf);


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var grpc_web_1 = __webpack_require__(/*! @improbable-eng/grpc-web */ "./node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.umd.js");
var auth_pb_service_1 = __webpack_require__(/*! ../../../cmd/auth/grpc/auth_pb_service */ "../auth/grpc/auth_pb_service.js");
var account_pb_1 = __webpack_require__(/*! ../../../pkg/account/dto/account_pb */ "../../pkg/account/dto/account_pb.js");
function subscribe() {
    var sub = new account_pb_1.Subscribe();
    sub.setAlias("test_grpcweb");
    sub.setEmail("test_grpcweb@test.gg");
    sub.setPassword("password");
    grpc_web_1.grpc.unary(auth_pb_service_1.Auth.Subscribe, {
        request: sub,
        host: "https://localhost:8081",
        onEnd: function (res) {
            var status = res.status, statusMessage = res.statusMessage, headers = res.headers, message = res.message, trailers = res.trailers;
            console.log("subscribe.onEnd.status", status, statusMessage);
            console.log("subscribe.onEnd.headers", headers);
            if (status === grpc_web_1.grpc.Code.OK && message) {
                console.log("subscribe.onEnd.message", message.toObject());
            }
            console.log("subscribe.onEnd.trailers", trailers);
        }
    });
}
subscribe();


/***/ })

/******/ });