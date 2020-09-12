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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf/google/protobuf/descriptor_pb.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

var jspb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = __webpack_require__(/*! ../../../../../../github.com/gogo/protobuf/gogoproto/gogo_pb.js */ "../../../../gogo/protobuf/gogoproto/gogo_pb.js");
var google_protobuf_empty_pb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf/google/protobuf/empty_pb.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var github_com_elojah_game_02_pkg_lobby_lobby_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/lobby/lobby_pb.js */ "../../pkg/lobby/lobby_pb.js");
var github_com_elojah_game_02_pkg_player_player_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/player/player_pb.js */ "../../pkg/player/player_pb.js");
var github_com_elojah_game_02_pkg_room_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/room_pb.js */ "../../pkg/room/room_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb.js */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_room_dto_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/dto/room_pb.js */ "../../pkg/room/dto/room_pb.js");
goog.object.extend(exports, proto.grpc);


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
var google_protobuf_empty_pb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'google-protobuf/google/protobuf/empty_pb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var github_com_elojah_game_02_pkg_lobby_lobby_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/lobby/lobby_pb */ "../../pkg/lobby/lobby_pb.js");
var github_com_elojah_game_02_pkg_player_player_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/player/player_pb */ "../../pkg/player/player_pb.js");
var github_com_elojah_game_02_pkg_room_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/room_pb */ "../../pkg/room/room_pb.js");
var github_com_elojah_game_02_pkg_account_dto_account_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/account/dto/account_pb */ "../../pkg/account/dto/account_pb.js");
var github_com_elojah_game_02_pkg_room_dto_room_pb = __webpack_require__(/*! ../../../../../../github.com/elojah/game_02/pkg/room/dto/room_pb */ "../../pkg/room/dto/room_pb.js");
var grpc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@improbable-eng/grpc-web'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).grpc;

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
        host: "https://localhost:8080",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Vsb2phaC9nby9zcmMvZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90by9nb2dvX3BiLmpzIiwid2VicGFjazovLy8vaG9tZS9lbG9qYWgvZ28vc3JjL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL2FjY291bnQvZHRvL2FjY291bnRfcGIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Vsb2phaC9nby9zcmMvZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvZW50aXR5L2VudGl0eV9wYi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZWxvamFoL2dvL3NyYy9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9nZW9tZXRyeS9nZW9tZXRyeV9wYi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZWxvamFoL2dvL3NyYy9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9sb2JieS9sb2JieV9wYi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZWxvamFoL2dvL3NyYy9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9wbGF5ZXIvcGxheWVyX3BiLmpzIiwid2VicGFjazovLy8vaG9tZS9lbG9qYWgvZ28vc3JjL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL3Jvb20vZHRvL3Jvb21fcGIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Vsb2phaC9nby9zcmMvZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvcm9vbS9yb29tX3BiLmpzIiwid2VicGFjazovLy8vaG9tZS9lbG9qYWgvZ28vc3JjL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL3NwYWNlL2R0by90aWxlX3BiLmpzIiwid2VicGFjazovLy8vaG9tZS9lbG9qYWgvZ28vc3JjL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL3NwYWNlL3RpbGVfcGIuanMiLCJ3ZWJwYWNrOi8vLy4uL2F1dGgvZ3JwYy9hdXRoX3BiLmpzIiwid2VicGFjazovLy8uLi9hdXRoL2dycGMvYXV0aF9wYl9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW1wcm9iYWJsZS1lbmcvZ3JwYy13ZWIvZGlzdC9ncnBjLXdlYi1jbGllbnQudW1kLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLHlJQUFpQjtBQUNwQztBQUNBOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDBLQUFrRDtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0EsZ0JBQWdCLHVEQUF1RDtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0EsZ0JBQWdCLHVEQUF1RDtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0EsZ0JBQWdCLHVEQUF1RDtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0JBQWtCO0FBQ3ZCO0FBQ0EsZ0JBQWdCLHVEQUF1RDtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdCQUF3QjtBQUM3QjtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNCQUFzQjtBQUMzQjtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1CQUFtQjtBQUN4QjtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL2Rlc2NyaXB0b3JfcGIuanMnKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uYmVuY2hnZW4nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5iZW5jaGdlbkFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmNhc3RrZXknLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5jYXN0dHlwZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmNhc3R2YWx1ZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmNvbXBhcmUnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5jb21wYXJlQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uY3VzdG9tbmFtZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmN1c3RvbXR5cGUnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5kZXNjcmlwdGlvbicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmRlc2NyaXB0aW9uQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZW1iZWQnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5lbnVtQ3VzdG9tbmFtZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmVudW1TdHJpbmdlcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmVudW1TdHJpbmdlckFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmVudW1kZWNsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZW51bWRlY2xBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5lbnVtdmFsdWVDdXN0b21uYW1lJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZXF1YWwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5lcXVhbEFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmZhY2UnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5mYWNlQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29nb3Byb3RvSW1wb3J0JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29wcm90b0VudW1QcmVmaXgnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVByZWZpeEFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9FbnVtU3RyaW5nZXInLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVN0cmluZ2VyQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29wcm90b0V4dGVuc2lvbnNNYXAnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvRXh0ZW5zaW9uc01hcEFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9HZXR0ZXJzJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29wcm90b0dldHRlcnNBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvUmVnaXN0cmF0aW9uJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29wcm90b1NpemVjYWNoZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9TaXplY2FjaGVBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvU3RyaW5nZXInLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvU3RyaW5nZXJBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3Byb3RvVW5rZXllZCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbmtleWVkQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uZ29wcm90b1VucmVjb2duaXplZCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbnJlY29nbml6ZWRBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5nb3N0cmluZycsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLmdvc3RyaW5nQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uanNvbnRhZycsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLm1hcnNoYWxlcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLm1hcnNoYWxlckFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLm1lc3NhZ2VuYW1lJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8ubWVzc2FnZW5hbWVBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5tb3JldGFncycsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLm51bGxhYmxlJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8ub25seW9uZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLm9ubHlvbmVBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5wb3B1bGF0ZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnBvcHVsYXRlQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8ucHJvdG9zaXplcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnByb3Rvc2l6ZXJBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5zaXplcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnNpemVyQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uc3RhYmxlTWFyc2hhbGVyJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uc3RhYmxlTWFyc2hhbGVyQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uc3RkZHVyYXRpb24nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5zdGR0aW1lJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8uc3RyaW5nZXInLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by5zdHJpbmdlckFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnRlc3RnZW4nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by50ZXN0Z2VuQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8udHlwZWRlY2wnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by50eXBlZGVjbEFsbCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnVubWFyc2hhbGVyJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8udW5tYXJzaGFsZXJBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by51bnNhZmVNYXJzaGFsZXInLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by51bnNhZmVNYXJzaGFsZXJBbGwnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdvZ29wcm90by51bnNhZmVVbm1hcnNoYWxlcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29nb3Byb3RvLnVuc2FmZVVubWFyc2hhbGVyQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8udmVyYm9zZUVxdWFsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8udmVyYm9zZUVxdWFsQWxsJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb2dvcHJvdG8ud2t0cG9pbnRlcicsIG51bGwsIGdsb2JhbCk7XG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvRW51bVByZWZpeGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b0VudW1QcmVmaXggPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjIwMDEsXG4gICAge2dvcHJvdG9FbnVtUHJlZml4OiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkVudW1PcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjIwMDFdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVByZWZpeCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtT3B0aW9ucy5leHRlbnNpb25zWzYyMDAxXSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVByZWZpeDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b0VudW1TdHJpbmdlcmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b0VudW1TdHJpbmdlciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MjAyMSxcbiAgICB7Z29wcm90b0VudW1TdHJpbmdlcjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYyMDIxXSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b0VudW1TdHJpbmdlcixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtT3B0aW9ucy5leHRlbnNpb25zWzYyMDIxXSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVN0cmluZ2VyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBlbnVtU3RyaW5nZXJgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmVudW1TdHJpbmdlciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MjAyMixcbiAgICB7ZW51bVN0cmluZ2VyOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkVudW1PcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjIwMjJdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5lbnVtU3RyaW5nZXIsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRW51bU9wdGlvbnMuZXh0ZW5zaW9uc1s2MjAyMl0gPSBwcm90by5nb2dvcHJvdG8uZW51bVN0cmluZ2VyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBlbnVtQ3VzdG9tbmFtZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPHN0cmluZz59XG4gKi9cbnByb3RvLmdvZ29wcm90by5lbnVtQ3VzdG9tbmFtZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MjAyMyxcbiAgICB7ZW51bUN1c3RvbW5hbWU6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRW51bU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MjAyM10gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVudW1DdXN0b21uYW1lLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZyxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtT3B0aW9ucy5leHRlbnNpb25zWzYyMDIzXSA9IHByb3RvLmdvZ29wcm90by5lbnVtQ3VzdG9tbmFtZTtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZW51bWRlY2xgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmVudW1kZWNsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYyMDI0LFxuICAgIHtlbnVtZGVjbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYyMDI0XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZW51bWRlY2wsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRW51bU9wdGlvbnMuZXh0ZW5zaW9uc1s2MjAyNF0gPSBwcm90by5nb2dvcHJvdG8uZW51bWRlY2w7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGVudW12YWx1ZUN1c3RvbW5hbWVgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxzdHJpbmc+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZW51bXZhbHVlQ3VzdG9tbmFtZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NjAwMSxcbiAgICB7ZW51bXZhbHVlQ3VzdG9tbmFtZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtVmFsdWVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjYwMDFdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5lbnVtdmFsdWVDdXN0b21uYW1lLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZyxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5FbnVtVmFsdWVPcHRpb25zLmV4dGVuc2lvbnNbNjYwMDFdID0gcHJvdG8uZ29nb3Byb3RvLmVudW12YWx1ZUN1c3RvbW5hbWU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGdvcHJvdG9HZXR0ZXJzQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvR2V0dGVyc0FsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAwMSxcbiAgICB7Z29wcm90b0dldHRlcnNBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAwMV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9HZXR0ZXJzQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMDFdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9HZXR0ZXJzQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvRW51bVByZWZpeEFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b0VudW1QcmVmaXhBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMDIsXG4gICAge2dvcHJvdG9FbnVtUHJlZml4QWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMDJdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVByZWZpeEFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDAyXSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVByZWZpeEFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b1N0cmluZ2VyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvU3RyaW5nZXJBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMDMsXG4gICAge2dvcHJvdG9TdHJpbmdlckFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDAzXSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b1N0cmluZ2VyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMDNdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9TdHJpbmdlckFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdmVyYm9zZUVxdWFsQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by52ZXJib3NlRXF1YWxBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMDQsXG4gICAge3ZlcmJvc2VFcXVhbEFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDA0XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udmVyYm9zZUVxdWFsQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMDRdID0gcHJvdG8uZ29nb3Byb3RvLnZlcmJvc2VFcXVhbEFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZmFjZUFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZmFjZUFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAwNSxcbiAgICB7ZmFjZUFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDA1XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZmFjZUFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDA1XSA9IHByb3RvLmdvZ29wcm90by5mYWNlQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3N0cmluZ0FsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29zdHJpbmdBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMDYsXG4gICAge2dvc3RyaW5nQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMDZdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3N0cmluZ0FsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDA2XSA9IHByb3RvLmdvZ29wcm90by5nb3N0cmluZ0FsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgcG9wdWxhdGVBbGxgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnBvcHVsYXRlQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDA3LFxuICAgIHtwb3B1bGF0ZUFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDA3XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ucG9wdWxhdGVBbGwsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc1s2MzAwN10gPSBwcm90by5nb2dvcHJvdG8ucG9wdWxhdGVBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHN0cmluZ2VyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5zdHJpbmdlckFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAwOCxcbiAgICB7c3RyaW5nZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAwOF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnN0cmluZ2VyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMDhdID0gcHJvdG8uZ29nb3Byb3RvLnN0cmluZ2VyQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBvbmx5b25lQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5vbmx5b25lQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDA5LFxuICAgIHtvbmx5b25lQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMDldID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5vbmx5b25lQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMDldID0gcHJvdG8uZ29nb3Byb3RvLm9ubHlvbmVBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGVxdWFsQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5lcXVhbEFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAxMyxcbiAgICB7ZXF1YWxBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAxM10gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVxdWFsQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMTNdID0gcHJvdG8uZ29nb3Byb3RvLmVxdWFsQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBkZXNjcmlwdGlvbkFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZGVzY3JpcHRpb25BbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMTQsXG4gICAge2Rlc2NyaXB0aW9uQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMTRdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5kZXNjcmlwdGlvbkFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDE0XSA9IHByb3RvLmdvZ29wcm90by5kZXNjcmlwdGlvbkFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdGVzdGdlbkFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8udGVzdGdlbkFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAxNSxcbiAgICB7dGVzdGdlbkFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDE1XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udGVzdGdlbkFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDE1XSA9IHByb3RvLmdvZ29wcm90by50ZXN0Z2VuQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBiZW5jaGdlbkFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uYmVuY2hnZW5BbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMTYsXG4gICAge2JlbmNoZ2VuQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMTZdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5iZW5jaGdlbkFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDE2XSA9IHByb3RvLmdvZ29wcm90by5iZW5jaGdlbkFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgbWFyc2hhbGVyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5tYXJzaGFsZXJBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMTcsXG4gICAge21hcnNoYWxlckFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDE3XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ubWFyc2hhbGVyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMTddID0gcHJvdG8uZ29nb3Byb3RvLm1hcnNoYWxlckFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdW5tYXJzaGFsZXJBbGxgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnVubWFyc2hhbGVyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDE4LFxuICAgIHt1bm1hcnNoYWxlckFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDE4XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udW5tYXJzaGFsZXJBbGwsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc1s2MzAxOF0gPSBwcm90by5nb2dvcHJvdG8udW5tYXJzaGFsZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHN0YWJsZU1hcnNoYWxlckFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uc3RhYmxlTWFyc2hhbGVyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDE5LFxuICAgIHtzdGFibGVNYXJzaGFsZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAxOV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnN0YWJsZU1hcnNoYWxlckFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDE5XSA9IHByb3RvLmdvZ29wcm90by5zdGFibGVNYXJzaGFsZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHNpemVyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5zaXplckFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAyMCxcbiAgICB7c2l6ZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAyMF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnNpemVyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMjBdID0gcHJvdG8uZ29nb3Byb3RvLnNpemVyQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvRW51bVN0cmluZ2VyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVN0cmluZ2VyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDIxLFxuICAgIHtnb3Byb3RvRW51bVN0cmluZ2VyQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMjFdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvRW51bVN0cmluZ2VyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMjFdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9FbnVtU3RyaW5nZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGVudW1TdHJpbmdlckFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZW51bVN0cmluZ2VyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDIyLFxuICAgIHtlbnVtU3RyaW5nZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAyMl0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVudW1TdHJpbmdlckFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDIyXSA9IHByb3RvLmdvZ29wcm90by5lbnVtU3RyaW5nZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHVuc2FmZU1hcnNoYWxlckFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8udW5zYWZlTWFyc2hhbGVyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDIzLFxuICAgIHt1bnNhZmVNYXJzaGFsZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAyM10gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnVuc2FmZU1hcnNoYWxlckFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDIzXSA9IHByb3RvLmdvZ29wcm90by51bnNhZmVNYXJzaGFsZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHVuc2FmZVVubWFyc2hhbGVyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by51bnNhZmVVbm1hcnNoYWxlckFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAyNCxcbiAgICB7dW5zYWZlVW5tYXJzaGFsZXJBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAyNF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnVuc2FmZVVubWFyc2hhbGVyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMjRdID0gcHJvdG8uZ29nb3Byb3RvLnVuc2FmZVVubWFyc2hhbGVyQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvRXh0ZW5zaW9uc01hcEFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b0V4dGVuc2lvbnNNYXBBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMjUsXG4gICAge2dvcHJvdG9FeHRlbnNpb25zTWFwQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMjVdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvRXh0ZW5zaW9uc01hcEFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDI1XSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvRXh0ZW5zaW9uc01hcEFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b1VucmVjb2duaXplZEFsbGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b1VucmVjb2duaXplZEFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAyNixcbiAgICB7Z29wcm90b1VucmVjb2duaXplZEFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDI2XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b1VucmVjb2duaXplZEFsbCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zWzYzMDI2XSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvVW5yZWNvZ25pemVkQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb2dvcHJvdG9JbXBvcnRgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmdvZ29wcm90b0ltcG9ydCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAyNyxcbiAgICB7Z29nb3Byb3RvSW1wb3J0OiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMjddID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb2dvcHJvdG9JbXBvcnQsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc1s2MzAyN10gPSBwcm90by5nb2dvcHJvdG8uZ29nb3Byb3RvSW1wb3J0O1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBwcm90b3NpemVyQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5wcm90b3NpemVyQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDI4LFxuICAgIHtwcm90b3NpemVyQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMjhdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5wcm90b3NpemVyQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMjhdID0gcHJvdG8uZ29nb3Byb3RvLnByb3Rvc2l6ZXJBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGNvbXBhcmVBbGxgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmNvbXBhcmVBbGwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjMwMjksXG4gICAge2NvbXBhcmVBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAyOV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmNvbXBhcmVBbGwsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc1s2MzAyOV0gPSBwcm90by5nb2dvcHJvdG8uY29tcGFyZUFsbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdHlwZWRlY2xBbGxgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnR5cGVkZWNsQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDMwLFxuICAgIHt0eXBlZGVjbEFsbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWxlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzYzMDMwXSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udHlwZWRlY2xBbGwsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc1s2MzAzMF0gPSBwcm90by5nb2dvcHJvdG8udHlwZWRlY2xBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGVudW1kZWNsQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5lbnVtZGVjbEFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAzMSxcbiAgICB7ZW51bWRlY2xBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAzMV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVudW1kZWNsQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMzFdID0gcHJvdG8uZ29nb3Byb3RvLmVudW1kZWNsQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvUmVnaXN0cmF0aW9uYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvUmVnaXN0cmF0aW9uID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDMyLFxuICAgIHtnb3Byb3RvUmVnaXN0cmF0aW9uOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMzJdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvUmVnaXN0cmF0aW9uLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMzJdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9SZWdpc3RyYXRpb247XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYG1lc3NhZ2VuYW1lQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5tZXNzYWdlbmFtZUFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAzMyxcbiAgICB7bWVzc2FnZW5hbWVBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAzM10gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLm1lc3NhZ2VuYW1lQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMzNdID0gcHJvdG8uZ29nb3Byb3RvLm1lc3NhZ2VuYW1lQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvU2l6ZWNhY2hlQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvU2l6ZWNhY2hlQWxsID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDYzMDM0LFxuICAgIHtnb3Byb3RvU2l6ZWNhY2hlQWxsOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjMwMzRdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvU2l6ZWNhY2hlQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMzRdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9TaXplY2FjaGVBbGw7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGdvcHJvdG9VbmtleWVkQWxsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvVW5rZXllZEFsbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2MzAzNSxcbiAgICB7Z29wcm90b1Vua2V5ZWRBbGw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmlsZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2MzAzNV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbmtleWVkQWxsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpbGVPcHRpb25zLmV4dGVuc2lvbnNbNjMwMzVdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbmtleWVkQWxsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvR2V0dGVyc2AuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b0dldHRlcnMgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMDEsXG4gICAge2dvcHJvdG9HZXR0ZXJzOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMDFdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvR2V0dGVycyxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDAxXSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvR2V0dGVycztcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b1N0cmluZ2VyYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5nb3Byb3RvU3RyaW5nZXIgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMDMsXG4gICAge2dvcHJvdG9TdHJpbmdlcjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDAzXSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b1N0cmluZ2VyLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMDNdID0gcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9TdHJpbmdlcjtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdmVyYm9zZUVxdWFsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by52ZXJib3NlRXF1YWwgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMDQsXG4gICAge3ZlcmJvc2VFcXVhbDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDA0XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udmVyYm9zZUVxdWFsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMDRdID0gcHJvdG8uZ29nb3Byb3RvLnZlcmJvc2VFcXVhbDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZmFjZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZmFjZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAwNSxcbiAgICB7ZmFjZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDA1XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZmFjZSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDA1XSA9IHByb3RvLmdvZ29wcm90by5mYWNlO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3N0cmluZ2AuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29zdHJpbmcgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMDYsXG4gICAge2dvc3RyaW5nOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMDZdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3N0cmluZyxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDA2XSA9IHByb3RvLmdvZ29wcm90by5nb3N0cmluZztcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgcG9wdWxhdGVgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnBvcHVsYXRlID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDA3LFxuICAgIHtwb3B1bGF0ZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDA3XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ucG9wdWxhdGUsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc1s2NDAwN10gPSBwcm90by5nb2dvcHJvdG8ucG9wdWxhdGU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHN0cmluZ2VyYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5zdHJpbmdlciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NzAwOCxcbiAgICB7c3RyaW5nZXI6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NzAwOF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnN0cmluZ2VyLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjcwMDhdID0gcHJvdG8uZ29nb3Byb3RvLnN0cmluZ2VyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBvbmx5b25lYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5vbmx5b25lID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDA5LFxuICAgIHtvbmx5b25lOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMDldID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5vbmx5b25lLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMDldID0gcHJvdG8uZ29nb3Byb3RvLm9ubHlvbmU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGVxdWFsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5lcXVhbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAxMyxcbiAgICB7ZXF1YWw6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NDAxM10gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVxdWFsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMTNdID0gcHJvdG8uZ29nb3Byb3RvLmVxdWFsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBkZXNjcmlwdGlvbmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZGVzY3JpcHRpb24gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMTQsXG4gICAge2Rlc2NyaXB0aW9uOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMTRdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5kZXNjcmlwdGlvbixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDE0XSA9IHByb3RvLmdvZ29wcm90by5kZXNjcmlwdGlvbjtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdGVzdGdlbmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8udGVzdGdlbiA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAxNSxcbiAgICB7dGVzdGdlbjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDE1XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udGVzdGdlbixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDE1XSA9IHByb3RvLmdvZ29wcm90by50ZXN0Z2VuO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBiZW5jaGdlbmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uYmVuY2hnZW4gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMTYsXG4gICAge2JlbmNoZ2VuOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMTZdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5iZW5jaGdlbixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDE2XSA9IHByb3RvLmdvZ29wcm90by5iZW5jaGdlbjtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgbWFyc2hhbGVyYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5tYXJzaGFsZXIgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMTcsXG4gICAge21hcnNoYWxlcjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDE3XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ubWFyc2hhbGVyLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMTddID0gcHJvdG8uZ29nb3Byb3RvLm1hcnNoYWxlcjtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgdW5tYXJzaGFsZXJgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnVubWFyc2hhbGVyID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDE4LFxuICAgIHt1bm1hcnNoYWxlcjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDE4XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8udW5tYXJzaGFsZXIsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc1s2NDAxOF0gPSBwcm90by5nb2dvcHJvdG8udW5tYXJzaGFsZXI7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHN0YWJsZU1hcnNoYWxlcmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uc3RhYmxlTWFyc2hhbGVyID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDE5LFxuICAgIHtzdGFibGVNYXJzaGFsZXI6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NDAxOV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnN0YWJsZU1hcnNoYWxlcixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDE5XSA9IHByb3RvLmdvZ29wcm90by5zdGFibGVNYXJzaGFsZXI7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHNpemVyYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5zaXplciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAyMCxcbiAgICB7c2l6ZXI6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NDAyMF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnNpemVyLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMjBdID0gcHJvdG8uZ29nb3Byb3RvLnNpemVyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGB1bnNhZmVNYXJzaGFsZXJgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLnVuc2FmZU1hcnNoYWxlciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAyMyxcbiAgICB7dW5zYWZlTWFyc2hhbGVyOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMjNdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by51bnNhZmVNYXJzaGFsZXIsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc1s2NDAyM10gPSBwcm90by5nb2dvcHJvdG8udW5zYWZlTWFyc2hhbGVyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGB1bnNhZmVVbm1hcnNoYWxlcmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8udW5zYWZlVW5tYXJzaGFsZXIgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMjQsXG4gICAge3Vuc2FmZVVubWFyc2hhbGVyOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMjRdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by51bnNhZmVVbm1hcnNoYWxlcixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDI0XSA9IHByb3RvLmdvZ29wcm90by51bnNhZmVVbm1hcnNoYWxlcjtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b0V4dGVuc2lvbnNNYXBgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9FeHRlbnNpb25zTWFwID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDI1LFxuICAgIHtnb3Byb3RvRXh0ZW5zaW9uc01hcDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDI1XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b0V4dGVuc2lvbnNNYXAsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc1s2NDAyNV0gPSBwcm90by5nb2dvcHJvdG8uZ29wcm90b0V4dGVuc2lvbnNNYXA7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGdvcHJvdG9VbnJlY29nbml6ZWRgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbnJlY29nbml6ZWQgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMjYsXG4gICAge2dvcHJvdG9VbnJlY29nbml6ZWQ6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NDAyNl0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmdvcHJvdG9VbnJlY29nbml6ZWQsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc1s2NDAyNl0gPSBwcm90by5nb2dvcHJvdG8uZ29wcm90b1VucmVjb2duaXplZDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgcHJvdG9zaXplcmAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8ucHJvdG9zaXplciA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAyOCxcbiAgICB7cHJvdG9zaXplcjogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDI4XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ucHJvdG9zaXplcixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDI4XSA9IHByb3RvLmdvZ29wcm90by5wcm90b3NpemVyO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBjb21wYXJlYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5jb21wYXJlID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY0MDI5LFxuICAgIHtjb21wYXJlOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMjldID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5jb21wYXJlLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMjldID0gcHJvdG8uZ29nb3Byb3RvLmNvbXBhcmU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHR5cGVkZWNsYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by50eXBlZGVjbCA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAzMCxcbiAgICB7dHlwZWRlY2w6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuTWVzc2FnZU9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NDAzMF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnR5cGVkZWNsLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNbNjQwMzBdID0gcHJvdG8uZ29nb3Byb3RvLnR5cGVkZWNsO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBtZXNzYWdlbmFtZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8ubWVzc2FnZW5hbWUgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMzMsXG4gICAge21lc3NhZ2VuYW1lOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMzNdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5tZXNzYWdlbmFtZSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDMzXSA9IHByb3RvLmdvZ29wcm90by5tZXNzYWdlbmFtZTtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZ29wcm90b1NpemVjYWNoZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b1NpemVjYWNoZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NDAzNCxcbiAgICB7Z29wcm90b1NpemVjYWNoZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY0MDM0XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uZ29wcm90b1NpemVjYWNoZSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDM0XSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvU2l6ZWNhY2hlO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBnb3Byb3RvVW5rZXllZGAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uZ29wcm90b1Vua2V5ZWQgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjQwMzUsXG4gICAge2dvcHJvdG9VbmtleWVkOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLk1lc3NhZ2VPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjQwMzVdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5nb3Byb3RvVW5rZXllZCxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5NZXNzYWdlT3B0aW9ucy5leHRlbnNpb25zWzY0MDM1XSA9IHByb3RvLmdvZ29wcm90by5nb3Byb3RvVW5rZXllZDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgbnVsbGFibGVgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLm51bGxhYmxlID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY1MDAxLFxuICAgIHtudWxsYWJsZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NTAwMV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLm51bGxhYmxlLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDAxXSA9IHByb3RvLmdvZ29wcm90by5udWxsYWJsZTtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgZW1iZWRgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmVtYmVkID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY1MDAyLFxuICAgIHtlbWJlZDogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NTAwMl0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmVtYmVkLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDAyXSA9IHByb3RvLmdvZ29wcm90by5lbWJlZDtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgY3VzdG9tdHlwZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPHN0cmluZz59XG4gKi9cbnByb3RvLmdvZ29wcm90by5jdXN0b210eXBlID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY1MDAzLFxuICAgIHtjdXN0b210eXBlOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY1MDAzXSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uY3VzdG9tdHlwZSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZyxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNbNjUwMDNdID0gcHJvdG8uZ29nb3Byb3RvLmN1c3RvbXR5cGU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGN1c3RvbW5hbWVgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxzdHJpbmc+fVxuICovXG5wcm90by5nb2dvcHJvdG8uY3VzdG9tbmFtZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NTAwNCxcbiAgICB7Y3VzdG9tbmFtZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NTAwNF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmN1c3RvbW5hbWUsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlU3RyaW5nLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDA0XSA9IHByb3RvLmdvZ29wcm90by5jdXN0b21uYW1lO1xuXG5cbi8qKlxuICogQSB0dXBsZSBvZiB7ZmllbGQgbnVtYmVyLCBjbGFzcyBjb25zdHJ1Y3Rvcn0gZm9yIHRoZSBleHRlbnNpb25cbiAqIGZpZWxkIG5hbWVkIGBqc29udGFnYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88c3RyaW5nPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLmpzb250YWcgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjUwMDUsXG4gICAge2pzb250YWc6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjUwMDVdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5qc29udGFnLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZyxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc1s2NTAwNV0gPSBwcm90by5nb2dvcHJvdG8uanNvbnRhZztcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgbW9yZXRhZ3NgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxzdHJpbmc+fVxuICovXG5wcm90by5nb2dvcHJvdG8ubW9yZXRhZ3MgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjUwMDYsXG4gICAge21vcmV0YWdzOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY1MDA2XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8ubW9yZXRhZ3MsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlU3RyaW5nLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDA2XSA9IHByb3RvLmdvZ29wcm90by5tb3JldGFncztcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgY2FzdHR5cGVgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxzdHJpbmc+fVxuICovXG5wcm90by5nb2dvcHJvdG8uY2FzdHR5cGUgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjUwMDcsXG4gICAge2Nhc3R0eXBlOiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY1MDA3XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uY2FzdHR5cGUsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlU3RyaW5nLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDA3XSA9IHByb3RvLmdvZ29wcm90by5jYXN0dHlwZTtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgY2FzdGtleWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPHN0cmluZz59XG4gKi9cbnByb3RvLmdvZ29wcm90by5jYXN0a2V5ID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvKFxuICAgIDY1MDA4LFxuICAgIHtjYXN0a2V5OiAwfSxcbiAgICBudWxsLFxuICAgICAvKiogQHR5cGUgez9mdW5jdGlvbigoYm9vbGVhbnx1bmRlZmluZWQpLCFqc3BiLk1lc3NhZ2U9KTogIU9iamVjdH0gKi8gKFxuICAgICAgICAgbnVsbCksXG4gICAgMCk7XG5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zQmluYXJ5WzY1MDA4XSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbyhcbiAgICBwcm90by5nb2dvcHJvdG8uY2FzdGtleSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZyxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNbNjUwMDhdID0gcHJvdG8uZ29nb3Byb3RvLmNhc3RrZXk7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYGNhc3R2YWx1ZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPHN0cmluZz59XG4gKi9cbnByb3RvLmdvZ29wcm90by5jYXN0dmFsdWUgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjUwMDksXG4gICAge2Nhc3R2YWx1ZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NTAwOV0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLmNhc3R2YWx1ZSxcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZyxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNbNjUwMDldID0gcHJvdG8uZ29nb3Byb3RvLmNhc3R2YWx1ZTtcblxuXG4vKipcbiAqIEEgdHVwbGUgb2Yge2ZpZWxkIG51bWJlciwgY2xhc3MgY29uc3RydWN0b3J9IGZvciB0aGUgZXh0ZW5zaW9uXG4gKiBmaWVsZCBuYW1lZCBgc3RkdGltZWAuXG4gKiBAdHlwZSB7IWpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvPGJvb2xlYW4+fVxuICovXG5wcm90by5nb2dvcHJvdG8uc3RkdGltZSA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NTAxMCxcbiAgICB7c3RkdGltZTogMH0sXG4gICAgbnVsbCxcbiAgICAgLyoqIEB0eXBlIHs/ZnVuY3Rpb24oKGJvb2xlYW58dW5kZWZpbmVkKSwhanNwYi5NZXNzYWdlPSk6ICFPYmplY3R9ICovIChcbiAgICAgICAgIG51bGwpLFxuICAgIDApO1xuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc0JpbmFyeVs2NTAxMF0gPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm8oXG4gICAgcHJvdG8uZ29nb3Byb3RvLnN0ZHRpbWUsXG4gICAganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRCb29sLFxuICAgIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZUJvb2wsXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZCxcbiAgICBmYWxzZSk7XG4vLyBUaGlzIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIGZpZWxkIHdpdGggdGhlIGV4dGVuZGVkIGNsYXNzLCBzbyB0aGF0XG4vLyB0b09iamVjdCgpIHdpbGwgZnVuY3Rpb24gY29ycmVjdGx5LlxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNbNjUwMTBdID0gcHJvdG8uZ29nb3Byb3RvLnN0ZHRpbWU7XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHN0ZGR1cmF0aW9uYC5cbiAqIEB0eXBlIHshanNwYi5FeHRlbnNpb25GaWVsZEluZm88Ym9vbGVhbj59XG4gKi9cbnByb3RvLmdvZ29wcm90by5zdGRkdXJhdGlvbiA9IG5ldyBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbyhcbiAgICA2NTAxMSxcbiAgICB7c3RkZHVyYXRpb246IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjUwMTFdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by5zdGRkdXJhdGlvbixcbiAgICBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZEJvb2wsXG4gICAganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlQm9vbCxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkLFxuICAgIGZhbHNlKTtcbi8vIFRoaXMgcmVnaXN0ZXJzIHRoZSBleHRlbnNpb24gZmllbGQgd2l0aCB0aGUgZXh0ZW5kZWQgY2xhc3MsIHNvIHRoYXRcbi8vIHRvT2JqZWN0KCkgd2lsbCBmdW5jdGlvbiBjb3JyZWN0bHkuXG5nb29nbGVfcHJvdG9idWZfZGVzY3JpcHRvcl9wYi5GaWVsZE9wdGlvbnMuZXh0ZW5zaW9uc1s2NTAxMV0gPSBwcm90by5nb2dvcHJvdG8uc3RkZHVyYXRpb247XG5cblxuLyoqXG4gKiBBIHR1cGxlIG9mIHtmaWVsZCBudW1iZXIsIGNsYXNzIGNvbnN0cnVjdG9yfSBmb3IgdGhlIGV4dGVuc2lvblxuICogZmllbGQgbmFtZWQgYHdrdHBvaW50ZXJgLlxuICogQHR5cGUgeyFqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxib29sZWFuPn1cbiAqL1xucHJvdG8uZ29nb3Byb3RvLndrdHBvaW50ZXIgPSBuZXcganNwYi5FeHRlbnNpb25GaWVsZEluZm8oXG4gICAgNjUwMTIsXG4gICAge3drdHBvaW50ZXI6IDB9LFxuICAgIG51bGwsXG4gICAgIC8qKiBAdHlwZSB7P2Z1bmN0aW9uKChib29sZWFufHVuZGVmaW5lZCksIWpzcGIuTWVzc2FnZT0pOiAhT2JqZWN0fSAqLyAoXG4gICAgICAgICBudWxsKSxcbiAgICAwKTtcblxuZ29vZ2xlX3Byb3RvYnVmX2Rlc2NyaXB0b3JfcGIuRmllbGRPcHRpb25zLmV4dGVuc2lvbnNCaW5hcnlbNjUwMTJdID0gbmV3IGpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvKFxuICAgIHByb3RvLmdvZ29wcm90by53a3Rwb2ludGVyLFxuICAgIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkQm9vbCxcbiAgICBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVCb29sLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgZmFsc2UpO1xuLy8gVGhpcyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBmaWVsZCB3aXRoIHRoZSBleHRlbmRlZCBjbGFzcywgc28gdGhhdFxuLy8gdG9PYmplY3QoKSB3aWxsIGZ1bmN0aW9uIGNvcnJlY3RseS5cbmdvb2dsZV9wcm90b2J1Zl9kZXNjcmlwdG9yX3BiLkZpZWxkT3B0aW9ucy5leHRlbnNpb25zWzY1MDEyXSA9IHByb3RvLmdvZ29wcm90by53a3Rwb2ludGVyO1xuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uZ29nb3Byb3RvKTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ2l0aHViX2NvbV9nb2dvX3Byb3RvYnVmX2dvZ29wcm90b19nb2dvX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90by9nb2dvX3BiLmpzJyk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZHRvLkF1dGgnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5TaWduaW4nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5TdWJzY3JpYmUnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5Ub2tlbicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZHRvLlVuc3Vic2NyaWJlJywgbnVsbCwgZ2xvYmFsKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLmR0by5BdXRoID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmR0by5BdXRoLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmR0by5BdXRoLmRpc3BsYXlOYW1lID0gJ3Byb3RvLmR0by5BdXRoJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmR0by5BdXRoLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmR0by5BdXRoLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uZHRvLkF1dGh9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5BdXRoLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBpZDogbXNnLmdldElkX2FzQjY0KCksXG4gICAgdG9rZW46IG1zZy5nZXRUb2tlbl9hc0I2NCgpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uQXV0aH1cbiAqL1xucHJvdG8uZHRvLkF1dGguZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5kdG8uQXV0aDtcbiAgcmV0dXJuIHByb3RvLmR0by5BdXRoLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5BdXRofSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLmR0by5BdXRofVxuICovXG5wcm90by5kdG8uQXV0aC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKHJlYWRlci5yZWFkQnl0ZXMoKSk7XG4gICAgICBtc2cuc2V0SWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKHJlYWRlci5yZWFkQnl0ZXMoKSk7XG4gICAgICBtc2cuc2V0VG9rZW4odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5kdG8uQXV0aC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZHRvLkF1dGguc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQXV0aH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5kdG8uQXV0aC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0SWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0VG9rZW5fYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBAcmV0dXJuIHshKHN0cmluZ3xVaW50OEFycmF5KX1cbiAqL1xucHJvdG8uZHRvLkF1dGgucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLmR0by5BdXRoLnByb3RvdHlwZS5nZXRJZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0SWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5kdG8uQXV0aC5wcm90b3R5cGUuZ2V0SWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlICovXG5wcm90by5kdG8uQXV0aC5wcm90b3R5cGUuc2V0SWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgVG9rZW4gPSAyO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmR0by5BdXRoLnByb3RvdHlwZS5nZXRUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBUb2tlbiA9IDI7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRUb2tlbigpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uQXV0aC5wcm90b3R5cGUuZ2V0VG9rZW5fYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldFRva2VuKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBUb2tlbiA9IDI7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFRva2VuKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLkF1dGgucHJvdG90eXBlLmdldFRva2VuX2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc1U4KFxuICAgICAgdGhpcy5nZXRUb2tlbigpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkF1dGgucHJvdG90eXBlLnNldFRva2VuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5kdG8uU3Vic2NyaWJlID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmR0by5TdWJzY3JpYmUsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8uZHRvLlN1YnNjcmliZS5kaXNwbGF5TmFtZSA9ICdwcm90by5kdG8uU3Vic2NyaWJlJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmR0by5TdWJzY3JpYmUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZHRvLlN1YnNjcmliZS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5TdWJzY3JpYmV9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5TdWJzY3JpYmUudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGFsaWFzOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIFwiXCIpLFxuICAgIGVtYWlsOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIFwiXCIpLFxuICAgIHBhc3N3b3JkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uU3Vic2NyaWJlfVxuICovXG5wcm90by5kdG8uU3Vic2NyaWJlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZHRvLlN1YnNjcmliZTtcbiAgcmV0dXJuIHByb3RvLmR0by5TdWJzY3JpYmUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlN1YnNjcmliZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uU3Vic2NyaWJlfVxuICovXG5wcm90by5kdG8uU3Vic2NyaWJlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEFsaWFzKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0RW1haWwodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmR0by5TdWJzY3JpYmUucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmR0by5TdWJzY3JpYmUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uU3Vic2NyaWJlfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5TdWJzY3JpYmUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEFsaWFzKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RW1haWwoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRQYXNzd29yZCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIEFsaWFzID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLlN1YnNjcmliZS5wcm90b3R5cGUuZ2V0QWxpYXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by5kdG8uU3Vic2NyaWJlLnByb3RvdHlwZS5zZXRBbGlhcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIEVtYWlsID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLlN1YnNjcmliZS5wcm90b3R5cGUuZ2V0RW1haWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by5kdG8uU3Vic2NyaWJlLnByb3RvdHlwZS5zZXRFbWFpbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIFBhc3N3b3JkID0gMztcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLlN1YnNjcmliZS5wcm90b3R5cGUuZ2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by5kdG8uU3Vic2NyaWJlLnByb3RvdHlwZS5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLmR0by5Ub2tlbiA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5kdG8uVG9rZW4sIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8uZHRvLlRva2VuLmRpc3BsYXlOYW1lID0gJ3Byb3RvLmR0by5Ub2tlbic7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5kdG8uVG9rZW4ucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZHRvLlRva2VuLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uZHRvLlRva2VufSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5kdG8uVG9rZW4udG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHRva2VuOiBtc2cuZ2V0VG9rZW5fYXNCNjQoKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLlRva2VufVxuICovXG5wcm90by5kdG8uVG9rZW4uZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5kdG8uVG9rZW47XG4gIHJldHVybiBwcm90by5kdG8uVG9rZW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlRva2VufSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLmR0by5Ub2tlbn1cbiAqL1xucHJvdG8uZHRvLlRva2VuLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRUb2tlbih2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmR0by5Ub2tlbi5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZHRvLlRva2VuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlRva2VufSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5Ub2tlbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0VG9rZW5fYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBUb2tlbiA9IDE7XG4gKiBAcmV0dXJuIHshKHN0cmluZ3xVaW50OEFycmF5KX1cbiAqL1xucHJvdG8uZHRvLlRva2VuLnByb3RvdHlwZS5nZXRUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBUb2tlbiA9IDE7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRUb2tlbigpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uVG9rZW4ucHJvdG90eXBlLmdldFRva2VuX2FzQjY0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzQjY0KFxuICAgICAgdGhpcy5nZXRUb2tlbigpKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgVG9rZW4gPSAxO1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRUb2tlbigpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmR0by5Ub2tlbi5wcm90b3R5cGUuZ2V0VG9rZW5fYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldFRva2VuKCkpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlICovXG5wcm90by5kdG8uVG9rZW4ucHJvdG90eXBlLnNldFRva2VuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5kdG8uU2lnbmluID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmR0by5TaWduaW4sIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8uZHRvLlNpZ25pbi5kaXNwbGF5TmFtZSA9ICdwcm90by5kdG8uU2lnbmluJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmR0by5TaWduaW4ucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZHRvLlNpZ25pbi50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5TaWduaW59IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5TaWduaW4udG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGVtYWlsOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIFwiXCIpLFxuICAgIHBhc3N3b3JkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uU2lnbmlufVxuICovXG5wcm90by5kdG8uU2lnbmluLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZHRvLlNpZ25pbjtcbiAgcmV0dXJuIHByb3RvLmR0by5TaWduaW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlNpZ25pbn0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uU2lnbmlufVxuICovXG5wcm90by5kdG8uU2lnbmluLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEVtYWlsKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5kdG8uU2lnbmluLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5kdG8uU2lnbmluLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlNpZ25pbn0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5kdG8uU2lnbmluLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRFbWFpbCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFBhc3N3b3JkKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgRW1haWwgPSAxO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uU2lnbmluLnByb3RvdHlwZS5nZXRFbWFpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLmR0by5TaWduaW4ucHJvdG90eXBlLnNldEVtYWlsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgUGFzc3dvcmQgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uU2lnbmluLnByb3RvdHlwZS5nZXRQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLmR0by5TaWduaW4ucHJvdG90eXBlLnNldFBhc3N3b3JkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmR0by5VbnN1YnNjcmliZSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by5kdG8uVW5zdWJzY3JpYmUuZGlzcGxheU5hbWUgPSAncHJvdG8uZHRvLlVuc3Vic2NyaWJlJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmR0by5VbnN1YnNjcmliZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5kdG8uVW5zdWJzY3JpYmUudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5kdG8uVW5zdWJzY3JpYmV9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5VbnN1YnNjcmliZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgZW1haWw6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG4gICAgcGFzc3dvcmQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIilcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLmR0by5VbnN1YnNjcmliZX1cbiAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZHRvLlVuc3Vic2NyaWJlO1xuICByZXR1cm4gcHJvdG8uZHRvLlVuc3Vic2NyaWJlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5VbnN1YnNjcmliZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uVW5zdWJzY3JpYmV9XG4gKi9cbnByb3RvLmR0by5VbnN1YnNjcmliZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRFbWFpbCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5kdG8uVW5zdWJzY3JpYmUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uVW5zdWJzY3JpYmV9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRFbWFpbCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFBhc3N3b3JkKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgRW1haWwgPSAxO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uVW5zdWJzY3JpYmUucHJvdG90eXBlLmdldEVtYWlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlLnByb3RvdHlwZS5zZXRFbWFpbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIFBhc3N3b3JkID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLlVuc3Vic2NyaWJlLnByb3RvdHlwZS5nZXRQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLmR0by5VbnN1YnNjcmliZS5wcm90b3R5cGUuc2V0UGFzc3dvcmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uZHRvKTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ2l0aHViX2NvbV9nb2dvX3Byb3RvYnVmX2dvZ29wcm90b19nb2dvX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90by9nb2dvX3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9nZW9tZXRyeS9nZW9tZXRyeV9wYi5qcycpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmVudGl0eS5DYXN0JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5lbnRpdHkuRScsIG51bGwsIGdsb2JhbCk7XG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5lbnRpdHkuQ2FzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5lbnRpdHkuQ2FzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by5lbnRpdHkuQ2FzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5lbnRpdHkuQ2FzdCc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5lbnRpdHkuQ2FzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5lbnRpdHkuQ2FzdC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmVudGl0eS5DYXN0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5lbnRpdHkuQ2FzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgYWJpbGl0eWlkOiBtc2cuZ2V0QWJpbGl0eWlkX2FzQjY0KCksXG4gICAgdHM6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgMClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLmVudGl0eS5DYXN0fVxuICovXG5wcm90by5lbnRpdHkuQ2FzdC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmVudGl0eS5DYXN0O1xuICByZXR1cm4gcHJvdG8uZW50aXR5LkNhc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uZW50aXR5LkNhc3R9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZW50aXR5LkNhc3R9XG4gKi9cbnByb3RvLmVudGl0eS5DYXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRBYmlsaXR5aWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRUcyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmVudGl0eS5DYXN0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5lbnRpdHkuQ2FzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLmVudGl0eS5DYXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmVudGl0eS5DYXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRBYmlsaXR5aWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0VHMoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBBYmlsaXR5SUQgPSAxO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmVudGl0eS5DYXN0LnByb3RvdHlwZS5nZXRBYmlsaXR5aWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgQWJpbGl0eUlEID0gMTtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldEFiaWxpdHlpZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuQ2FzdC5wcm90b3R5cGUuZ2V0QWJpbGl0eWlkX2FzQjY0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzQjY0KFxuICAgICAgdGhpcy5nZXRBYmlsaXR5aWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIEFiaWxpdHlJRCA9IDE7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldEFiaWxpdHlpZCgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmVudGl0eS5DYXN0LnByb3RvdHlwZS5nZXRBYmlsaXR5aWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldEFiaWxpdHlpZCgpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkNhc3QucHJvdG90eXBlLnNldEFiaWxpdHlpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgVFMgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5lbnRpdHkuQ2FzdC5wcm90b3R5cGUuZ2V0VHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by5lbnRpdHkuQ2FzdC5wcm90b3R5cGUuc2V0VHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5lbnRpdHkuRSA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5lbnRpdHkuRSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by5lbnRpdHkuRS5kaXNwbGF5TmFtZSA9ICdwcm90by5lbnRpdHkuRSc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5lbnRpdHkuRS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmVudGl0eS5FfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5lbnRpdHkuRS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgaWQ6IG1zZy5nZXRJZF9hc0I2NCgpLFxuICAgIHRlbXBsYXRlaWQ6IG1zZy5nZXRUZW1wbGF0ZWlkX2FzQjY0KCksXG4gICAgbmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCBcIlwiKSxcbiAgICBvd25lcmlkOiBtc2cuZ2V0T3duZXJpZF9hc0I2NCgpLFxuICAgIGRlYWQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNSwgZmFsc2UpLFxuICAgIGhwOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDYsIDApLFxuICAgIG1heGhwOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDcsIDApLFxuICAgIG1wOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDgsIDApLFxuICAgIG1heG1wOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDksIDApLFxuICAgIGRpcmVjdGlvbjogKGYgPSBtc2cuZ2V0RGlyZWN0aW9uKCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKSxcbiAgICBwb3NpdGlvbjogKGYgPSBtc2cuZ2V0UG9zaXRpb24oKSkgJiYgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMy50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIGNhc3Q6IChmID0gbXNnLmdldENhc3QoKSkgJiYgcHJvdG8uZW50aXR5LkNhc3QudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKSxcbiAgICBhc3NldGlkOiBtc2cuZ2V0QXNzZXRpZF9hc0I2NCgpLFxuICAgIGludmVudG9yeWlkOiBtc2cuZ2V0SW52ZW50b3J5aWRfYXNCNjQoKSxcbiAgICBzcGF3bmlkOiBtc2cuZ2V0U3Bhd25pZF9hc0I2NCgpLFxuICAgIHRzOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDE2LCAwKSxcbiAgICBzdGF0ZTogbXNnLmdldFN0YXRlX2FzQjY0KClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLmVudGl0eS5FfVxuICovXG5wcm90by5lbnRpdHkuRS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmVudGl0eS5FO1xuICByZXR1cm4gcHJvdG8uZW50aXR5LkUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uZW50aXR5LkV9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZW50aXR5LkV9XG4gKi9cbnByb3RvLmVudGl0eS5FLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRJZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRUZW1wbGF0ZWlkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0TmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRPd25lcmlkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKHJlYWRlci5yZWFkQm9vbCgpKTtcbiAgICAgIG1zZy5zZXREZWFkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0SHAodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3OlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRNYXhocCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldE1wKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0TWF4bXAodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxMDpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXREaXJlY3Rpb24odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDEyOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLmVudGl0eS5DYXN0O1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLmVudGl0eS5DYXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0Q2FzdCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDEzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKHJlYWRlci5yZWFkQnl0ZXMoKSk7XG4gICAgICBtc2cuc2V0QXNzZXRpZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE0OlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKHJlYWRlci5yZWFkQnl0ZXMoKSk7XG4gICAgICBtc2cuc2V0SW52ZW50b3J5aWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxNTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldFNwYXduaWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxNjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0VHModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxNzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldFN0YXRlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmVudGl0eS5FLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZW50aXR5LkV9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZW50aXR5LkUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldElkX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFRlbXBsYXRlaWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldE93bmVyaWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICA0LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RGVhZCgpO1xuICBpZiAoZikge1xuICAgIHdyaXRlci53cml0ZUJvb2woXG4gICAgICA1LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0SHAoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA2LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TWF4aHAoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA3LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TXAoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA4LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TWF4bXAoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA5LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RGlyZWN0aW9uKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgMTAsXG4gICAgICBmLFxuICAgICAgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UG9zaXRpb24oKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAxMSxcbiAgICAgIGYsXG4gICAgICBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRDYXN0KCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgMTIsXG4gICAgICBmLFxuICAgICAgcHJvdG8uZW50aXR5LkNhc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEFzc2V0aWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAxMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEludmVudG9yeWlkX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMTQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTcGF3bmlkX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMTUsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRUcygpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDE2LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdGVfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAxNyxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgSUQgPSAxO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0SWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldElkX2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc1U4KFxuICAgICAgdGhpcy5nZXRJZCgpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIFRlbXBsYXRlSUQgPSAyO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRUZW1wbGF0ZWlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIFRlbXBsYXRlSUQgPSAyO1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0VGVtcGxhdGVpZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0VGVtcGxhdGVpZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVpZCgpKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgVGVtcGxhdGVJRCA9IDI7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFRlbXBsYXRlaWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0VGVtcGxhdGVpZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0VGVtcGxhdGVpZCgpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldFRlbXBsYXRlaWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIE5hbWUgPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBPd25lcklEID0gNDtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0T3duZXJpZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDQsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBPd25lcklEID0gNDtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldE93bmVyaWQoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldE93bmVyaWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldE93bmVyaWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIE93bmVySUQgPSA0O1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRPd25lcmlkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldE93bmVyaWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldE93bmVyaWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5zZXRPd25lcmlkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJvb2wgRGVhZCA9IDU7XG4gKiBOb3RlIHRoYXQgQm9vbGVhbiBmaWVsZHMgbWF5IGJlIHNldCB0byAwLzEgd2hlbiBzZXJpYWxpemVkIGZyb20gYSBKYXZhIHNlcnZlci5cbiAqIFlvdSBzaG91bGQgYXZvaWQgY29tcGFyaXNvbnMgbGlrZSB7QGNvZGUgdmFsID09PSB0cnVlL2ZhbHNlfSBpbiB0aG9zZSBjYXNlcy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXREZWFkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge2Jvb2xlYW59ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA1LCBmYWxzZSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldERlYWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQm9vbGVhbkZpZWxkKHRoaXMsIDUsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgSFAgPSA2O1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0SHAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgNiwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuc2V0SHAgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgNiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBNYXhIUCA9IDc7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRNYXhocCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA3LCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5zZXRNYXhocCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCA3LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgdWludDY0IE1QID0gODtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldE1wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDgsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldE1wID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDgsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgTWF4TVAgPSA5O1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0TWF4bXAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgOSwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuc2V0TWF4bXAgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgOSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGdlb21ldHJ5LlZlYzMgRGlyZWN0aW9uID0gMTA7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZ2VvbWV0cnkuVmVjM31cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5nZW9tZXRyeS5WZWMzfSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLCAxMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8uZ2VvbWV0cnkuVmVjM3x1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuc2V0RGlyZWN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxMCwgdmFsdWUpO1xufTtcblxuXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuY2xlYXJEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREaXJlY3Rpb24odW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmhhc0RpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEwKSAhPSBudWxsO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGdlb21ldHJ5LlZlYzMgUG9zaXRpb24gPSAxMTtcbiAqIEByZXR1cm4gez9wcm90by5nZW9tZXRyeS5WZWMzfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8uZ2VvbWV0cnkuVmVjM30gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMywgMTEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmdlb21ldHJ5LlZlYzN8dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxMSwgdmFsdWUpO1xufTtcblxuXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuY2xlYXJQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldFBvc2l0aW9uKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7IWJvb2xlYW59XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5oYXNQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDExKSAhPSBudWxsO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIENhc3QgQ2FzdCA9IDEyO1xuICogQHJldHVybiB7P3Byb3RvLmVudGl0eS5DYXN0fVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0Q2FzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5lbnRpdHkuQ2FzdH0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8uZW50aXR5LkNhc3QsIDEyKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0gez9wcm90by5lbnRpdHkuQ2FzdHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuc2V0Q2FzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMTIsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmNsZWFyQ2FzdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldENhc3QodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmhhc0Nhc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5nZXRGaWVsZCh0aGlzLCAxMikgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBBc3NldElEID0gMTM7XG4gKiBAcmV0dXJuIHshKHN0cmluZ3xVaW50OEFycmF5KX1cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldEFzc2V0aWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIEFzc2V0SUQgPSAxMztcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldEFzc2V0aWQoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLmdldEFzc2V0aWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldEFzc2V0aWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIEFzc2V0SUQgPSAxMztcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0QXNzZXRpZCgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRBc3NldGlkX2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc1U4KFxuICAgICAgdGhpcy5nZXRBc3NldGlkKCkpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuc2V0QXNzZXRpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDEzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgSW52ZW50b3J5SUQgPSAxNDtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0SW52ZW50b3J5aWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxNCwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIEludmVudG9yeUlEID0gMTQ7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJbnZlbnRvcnlpZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0SW52ZW50b3J5aWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldEludmVudG9yeWlkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJbnZlbnRvcnlJRCA9IDE0O1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJbnZlbnRvcnlpZCgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRJbnZlbnRvcnlpZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0SW52ZW50b3J5aWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5zZXRJbnZlbnRvcnlpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDE0LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgU3Bhd25JRCA9IDE1O1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRTcGF3bmlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMTUsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBTcGF3bklEID0gMTU7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRTcGF3bmlkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRTcGF3bmlkX2FzQjY0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzQjY0KFxuICAgICAgdGhpcy5nZXRTcGF3bmlkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBTcGF3bklEID0gMTU7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFNwYXduaWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0U3Bhd25pZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0U3Bhd25pZCgpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldFNwYXduaWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAxNSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBUUyA9IDE2O1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0VHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMTYsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZW50aXR5LkUucHJvdG90eXBlLnNldFRzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDE2LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgU3RhdGUgPSAxNztcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxNywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIFN0YXRlID0gMTc7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRTdGF0ZSgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5lbnRpdHkuRS5wcm90b3R5cGUuZ2V0U3RhdGVfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldFN0YXRlKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBTdGF0ZSA9IDE3O1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRTdGF0ZSgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5nZXRTdGF0ZV9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0U3RhdGUoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLmVudGl0eS5FLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDE3LCB2YWx1ZSk7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5lbnRpdHkpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBnaXRodWJfY29tX2dvZ29fcHJvdG9idWZfZ29nb3Byb3RvX2dvZ29fcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ29fcGIuanMnKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nZW9tZXRyeS5SZWN0YW5nbGUnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmdlb21ldHJ5LlZlYzMnLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMyA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5nZW9tZXRyeS5WZWMzLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmdlb21ldHJ5LlZlYzMuZGlzcGxheU5hbWUgPSAncHJvdG8uZ2VvbWV0cnkuVmVjMyc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5nZW9tZXRyeS5WZWMzLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmdlb21ldHJ5LlZlYzMudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5nZW9tZXRyeS5WZWMzfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5nZW9tZXRyeS5WZWMzLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICB4OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIDApLFxuICAgIHk6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgMCksXG4gICAgejoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZ2VvbWV0cnkuVmVjM31cbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMy5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmdlb21ldHJ5LlZlYzM7XG4gIHJldHVybiBwcm90by5nZW9tZXRyeS5WZWMzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmdlb21ldHJ5LlZlYzN9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZ2VvbWV0cnkuVmVjM31cbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRYKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0WSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldFoodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5nZW9tZXRyeS5WZWMzLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5nZW9tZXRyeS5WZWMzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZ2VvbWV0cnkuVmVjM30gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5nZW9tZXRyeS5WZWMzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRYKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlVWludDY0KFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFkoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0WigpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBYID0gMTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMy5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLmdlb21ldHJ5LlZlYzMucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBZID0gMjtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMy5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLmdlb21ldHJ5LlZlYzMucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBaID0gMztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZ2VvbWV0cnkuVmVjMy5wcm90b3R5cGUuZ2V0WiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLmdlb21ldHJ5LlZlYzMucHJvdG90eXBlLnNldFogPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMywgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5nZW9tZXRyeS5SZWN0YW5nbGUgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5kaXNwbGF5TmFtZSA9ICdwcm90by5nZW9tZXRyeS5SZWN0YW5nbGUnO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBwb2ludGE6IChmID0gbXNnLmdldFBvaW50YSgpKSAmJiBwcm90by5nZW9tZXRyeS5WZWMzLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgcG9pbnRiOiAoZiA9IG1zZy5nZXRQb2ludGIoKSkgJiYgcHJvdG8uZ2VvbWV0cnkuVmVjMy50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5nZW9tZXRyeS5SZWN0YW5nbGV9XG4gKi9cbnByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZTtcbiAgcmV0dXJuIHByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5nZW9tZXRyeS5SZWN0YW5nbGV9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlfVxuICovXG5wcm90by5nZW9tZXRyeS5SZWN0YW5nbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5nZW9tZXRyeS5WZWMzO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLmdlb21ldHJ5LlZlYzMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRQb2ludGEodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLmdlb21ldHJ5LlZlYzM7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uZ2VvbWV0cnkuVmVjMy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldFBvaW50Yih2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0UG9pbnRhKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgMSxcbiAgICAgIGYsXG4gICAgICBwcm90by5nZW9tZXRyeS5WZWMzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRQb2ludGIoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAyLFxuICAgICAgZixcbiAgICAgIHByb3RvLmdlb21ldHJ5LlZlYzMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgVmVjMyBQb2ludEEgPSAxO1xuICogQHJldHVybiB7P3Byb3RvLmdlb21ldHJ5LlZlYzN9XG4gKi9cbnByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UG9pbnRhID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmdlb21ldHJ5LlZlYzN9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLmdlb21ldHJ5LlZlYzMsIDEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmdlb21ldHJ5LlZlYzN8dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnByb3RvdHlwZS5zZXRQb2ludGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnByb3RvdHlwZS5jbGVhclBvaW50YSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldFBvaW50YSh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5nZW9tZXRyeS5SZWN0YW5nbGUucHJvdG90eXBlLmhhc1BvaW50YSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgVmVjMyBQb2ludEIgPSAyO1xuICogQHJldHVybiB7P3Byb3RvLmdlb21ldHJ5LlZlYzN9XG4gKi9cbnByb3RvLmdlb21ldHJ5LlJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UG9pbnRiID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmdlb21ldHJ5LlZlYzN9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLmdlb21ldHJ5LlZlYzMsIDIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmdlb21ldHJ5LlZlYzN8dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnByb3RvdHlwZS5zZXRQb2ludGIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZ2VvbWV0cnkuUmVjdGFuZ2xlLnByb3RvdHlwZS5jbGVhclBvaW50YiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldFBvaW50Yih1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5nZW9tZXRyeS5SZWN0YW5nbGUucHJvdG90eXBlLmhhc1BvaW50YiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDIpICE9IG51bGw7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5nZW9tZXRyeSk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIGdpdGh1Yl9jb21fZ29nb19wcm90b2J1Zl9nb2dvcHJvdG9fZ29nb19wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9nb2dvcHJvdG8vZ29nb19wYi5qcycpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3Jvb21fcm9vbV9wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL3Jvb20vcm9vbV9wYi5qcycpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmxvYmJ5LkwnLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8ubG9iYnkuTCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5sb2JieS5MLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmxvYmJ5LkwuZGlzcGxheU5hbWUgPSAncHJvdG8ubG9iYnkuTCc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5sb2JieS5MLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmxvYmJ5LkwudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5sb2JieS5MfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5sb2JieS5MLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBpZDogbXNnLmdldElkX2FzQjY0KCksXG4gICAgbmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKSxcbiAgICByb29tc01hcDogKGYgPSBtc2cuZ2V0Um9vbXNNYXAoKSkgPyBmLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgcHJvdG8ucm9vbS5SLnRvT2JqZWN0KSA6IFtdXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5sb2JieS5MfVxuICovXG5wcm90by5sb2JieS5MLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8ubG9iYnkuTDtcbiAgcmV0dXJuIHByb3RvLmxvYmJ5LkwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ubG9iYnkuTH0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5sb2JieS5MfVxuICovXG5wcm90by5sb2JieS5MLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRJZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldE5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gbXNnLmdldFJvb21zTWFwKCk7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsIGZ1bmN0aW9uKG1lc3NhZ2UsIHJlYWRlcikge1xuICAgICAgICBqc3BiLk1hcC5kZXNlcmlhbGl6ZUJpbmFyeShtZXNzYWdlLCByZWFkZXIsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLCBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZE1lc3NhZ2UsIHByb3RvLnJvb20uUi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIsIFwiXCIpO1xuICAgICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmxvYmJ5LkwucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmxvYmJ5Lkwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5sb2JieS5MfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmxvYmJ5Lkwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldElkX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldE5hbWUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRSb29tc01hcCh0cnVlKTtcbiAgaWYgKGYgJiYgZi5nZXRMZW5ndGgoKSA+IDApIHtcbiAgICBmLnNlcmlhbGl6ZUJpbmFyeSgzLCB3cml0ZXIsIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZywganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlTWVzc2FnZSwgcHJvdG8ucm9vbS5SLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5sb2JieS5MLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5sb2JieS5MLnByb3RvdHlwZS5nZXRJZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0SWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5sb2JieS5MLnByb3RvdHlwZS5nZXRJZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLmxvYmJ5LkwucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBOYW1lID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ubG9iYnkuTC5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLmxvYmJ5LkwucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG1hcDxzdHJpbmcsIHJvb20uUj4gUm9vbXMgPSAzO1xuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X25vTGF6eUNyZWF0ZSBEbyBub3QgY3JlYXRlIHRoZSBtYXAgaWZcbiAqIGVtcHR5LCBpbnN0ZWFkIHJldHVybmluZyBgdW5kZWZpbmVkYFxuICogQHJldHVybiB7IWpzcGIuTWFwPHN0cmluZywhcHJvdG8ucm9vbS5SPn1cbiAqL1xucHJvdG8ubG9iYnkuTC5wcm90b3R5cGUuZ2V0Um9vbXNNYXAgPSBmdW5jdGlvbihvcHRfbm9MYXp5Q3JlYXRlKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFqc3BiLk1hcDxzdHJpbmcsIXByb3RvLnJvb20uUj59ICovIChcbiAgICAgIGpzcGIuTWVzc2FnZS5nZXRNYXBGaWVsZCh0aGlzLCAzLCBvcHRfbm9MYXp5Q3JlYXRlLFxuICAgICAgcHJvdG8ucm9vbS5SKSk7XG59O1xuXG5cbnByb3RvLmxvYmJ5LkwucHJvdG90eXBlLmNsZWFyUm9vbXNNYXAgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRSb29tc01hcCgpLmNsZWFyKCk7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5sb2JieSk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIGdpdGh1Yl9jb21fZ29nb19wcm90b2J1Zl9nb2dvcHJvdG9fZ29nb19wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9nb2dvcHJvdG8vZ29nb19wYi5qcycpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2VudGl0eV9lbnRpdHlfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9lbnRpdHkvZW50aXR5X3BiLmpzJyk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8ucGxheWVyLlAnLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8ucGxheWVyLlAgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8ucGxheWVyLlAsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8ucGxheWVyLlAuZGlzcGxheU5hbWUgPSAncHJvdG8ucGxheWVyLlAnO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8ucGxheWVyLlAucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8ucGxheWVyLlAudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5wbGF5ZXIuUH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ucGxheWVyLlAudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGVudGl0eTogKGYgPSBtc2cuZ2V0RW50aXR5KCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2VudGl0eV9lbnRpdHlfcGIuRS50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIGFjY291bnQ6IG1zZy5nZXRBY2NvdW50X2FzQjY0KClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnBsYXllci5QfVxuICovXG5wcm90by5wbGF5ZXIuUC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnBsYXllci5QO1xuICByZXR1cm4gcHJvdG8ucGxheWVyLlAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ucGxheWVyLlB9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8ucGxheWVyLlB9XG4gKi9cbnByb3RvLnBsYXllci5QLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZW50aXR5X2VudGl0eV9wYi5FO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2VudGl0eV9lbnRpdHlfcGIuRS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldEVudGl0eSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRBY2NvdW50KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ucGxheWVyLlAucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnBsYXllci5QLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8ucGxheWVyLlB9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ucGxheWVyLlAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEVudGl0eSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZW50aXR5X2VudGl0eV9wYi5FLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRBY2NvdW50X2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgZW50aXR5LkUgRW50aXR5ID0gMTtcbiAqIEByZXR1cm4gez9wcm90by5lbnRpdHkuRX1cbiAqL1xucHJvdG8ucGxheWVyLlAucHJvdG90eXBlLmdldEVudGl0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5lbnRpdHkuRX0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZW50aXR5X2VudGl0eV9wYi5FLCAxKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0gez9wcm90by5lbnRpdHkuRXx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5wbGF5ZXIuUC5wcm90b3R5cGUuc2V0RW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLnBsYXllci5QLnByb3RvdHlwZS5jbGVhckVudGl0eSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldEVudGl0eSh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5wbGF5ZXIuUC5wcm90b3R5cGUuaGFzRW50aXR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBBY2NvdW50ID0gMjtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5wbGF5ZXIuUC5wcm90b3R5cGUuZ2V0QWNjb3VudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBBY2NvdW50ID0gMjtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldEFjY291bnQoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ucGxheWVyLlAucHJvdG90eXBlLmdldEFjY291bnRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldEFjY291bnQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIEFjY291bnQgPSAyO1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRBY2NvdW50KClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ucGxheWVyLlAucHJvdG90eXBlLmdldEFjY291bnRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldEFjY291bnQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLnBsYXllci5QLnByb3RvdHlwZS5zZXRBY2NvdW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8ucGxheWVyKTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ2l0aHViX2NvbV9nb2dvX3Byb3RvYnVmX2dvZ29wcm90b19nb2dvX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90by9nb2dvX3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfc3BhY2VfZHRvX3RpbGVfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9zcGFjZS9kdG8vdGlsZV9wYi5qcycpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9hY2NvdW50L2R0by9hY2NvdW50X3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9nZW9tZXRyeS9nZW9tZXRyeV9wYi5qcycpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5Db25uZWN0JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5kdG8uQ3JlYXRlJywgbnVsbCwgZ2xvYmFsKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLmR0by5Db25uZWN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmR0by5Db25uZWN0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmR0by5Db25uZWN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLmR0by5Db25uZWN0Jztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmR0by5Db25uZWN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uZHRvLkNvbm5lY3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5Db25uZWN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBhdXRoOiAoZiA9IG1zZy5nZXRBdXRoKCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIGlkOiBtc2cuZ2V0SWRfYXNCNjQoKSxcbiAgICBwYXNzd29yZDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLkNvbm5lY3R9XG4gKi9cbnByb3RvLmR0by5Db25uZWN0LmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZHRvLkNvbm5lY3Q7XG4gIHJldHVybiBwcm90by5kdG8uQ29ubmVjdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQ29ubmVjdH0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uQ29ubmVjdH1cbiAqL1xucHJvdG8uZHRvLkNvbm5lY3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGg7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0QXV0aCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRJZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLkNvbm5lY3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmR0by5Db25uZWN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZHRvLkNvbm5lY3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLkNvbm5lY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEF1dGgoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0SWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UGFzc3dvcmQoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIEF1dGggQXV0aCA9IDE7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZHRvLkF1dGh9XG4gKi9cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS5nZXRBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmR0by5BdXRofSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGgsIDEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmR0by5BdXRofHVuZGVmaW5lZH0gdmFsdWUgKi9cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS5zZXRBdXRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS5jbGVhckF1dGggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRBdXRoKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7IWJvb2xlYW59XG4gKi9cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS5oYXNBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDI7XG4gKiBAcmV0dXJuIHshKHN0cmluZ3xVaW50OEFycmF5KX1cbiAqL1xucHJvdG8uZHRvLkNvbm5lY3QucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMjtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLmR0by5Db25uZWN0LnByb3RvdHlwZS5nZXRJZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMjtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0SWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5kdG8uQ29ubmVjdC5wcm90b3R5cGUuZ2V0SWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlICovXG5wcm90by5kdG8uQ29ubmVjdC5wcm90b3R5cGUuc2V0SWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIFBhc3N3b3JkID0gMztcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLkNvbm5lY3QucHJvdG90eXBlLmdldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNvbm5lY3QucHJvdG90eXBlLnNldFBhc3N3b3JkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uZHRvLkNyZWF0ZSA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5kdG8uQ3JlYXRlLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmR0by5DcmVhdGUuZGlzcGxheU5hbWUgPSAncHJvdG8uZHRvLkNyZWF0ZSc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmR0by5DcmVhdGUudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQ3JlYXRlfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5kdG8uQ3JlYXRlLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBhdXRoOiAoZiA9IG1zZy5nZXRBdXRoKCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgcGFzc3dvcmQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgXCJcIiksXG4gICAgbWFwOiAoZiA9IG1zZy5nZXRNYXAoKSkgJiYgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfc3BhY2VfZHRvX3RpbGVfcGIuQ3JlYXRlTWFwLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgc2VjdG9yZGltZW5zaW9uczogKGYgPSBtc2cuZ2V0U2VjdG9yZGltZW5zaW9ucygpKSAmJiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZilcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLmR0by5DcmVhdGV9XG4gKi9cbnByb3RvLmR0by5DcmVhdGUuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5kdG8uQ3JlYXRlO1xuICByZXR1cm4gcHJvdG8uZHRvLkNyZWF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQ3JlYXRlfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLmR0by5DcmVhdGV9XG4gKi9cbnByb3RvLmR0by5DcmVhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGg7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0QXV0aCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldE5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfc3BhY2VfZHRvX3RpbGVfcGIuQ3JlYXRlTWFwO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3NwYWNlX2R0b190aWxlX3BiLkNyZWF0ZU1hcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldE1hcCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMztcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0U2VjdG9yZGltZW5zaW9ucyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmR0by5DcmVhdGUucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmR0by5DcmVhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQ3JlYXRlfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmR0by5DcmVhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEF1dGgoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFBhc3N3b3JkKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TWFwKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgNCxcbiAgICAgIGYsXG4gICAgICBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19zcGFjZV9kdG9fdGlsZV9wYi5DcmVhdGVNYXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFNlY3RvcmRpbWVuc2lvbnMoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICA1LFxuICAgICAgZixcbiAgICAgIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgQXV0aCBBdXRoID0gMTtcbiAqIEByZXR1cm4gez9wcm90by5kdG8uQXV0aH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuZ2V0QXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5kdG8uQXV0aH0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLCAxKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0gez9wcm90by5kdG8uQXV0aHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS5zZXRBdXRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLmR0by5DcmVhdGUucHJvdG90eXBlLmNsZWFyQXV0aCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldEF1dGgodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuaGFzQXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIE5hbWUgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIFBhc3N3b3JkID0gMztcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuZ2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgQ3JlYXRlTWFwIE1hcCA9IDQ7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZHRvLkNyZWF0ZU1hcH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuZ2V0TWFwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmR0by5DcmVhdGVNYXB9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3NwYWNlX2R0b190aWxlX3BiLkNyZWF0ZU1hcCwgNCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8uZHRvLkNyZWF0ZU1hcHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS5zZXRNYXAgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDQsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuY2xlYXJNYXAgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRNYXAodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuaGFzTWFwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgNCkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBnZW9tZXRyeS5WZWMzIFNlY3RvckRpbWVuc2lvbnMgPSA1O1xuICogQHJldHVybiB7P3Byb3RvLmdlb21ldHJ5LlZlYzN9XG4gKi9cbnByb3RvLmR0by5DcmVhdGUucHJvdG90eXBlLmdldFNlY3RvcmRpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8uZ2VvbWV0cnkuVmVjM30gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMywgNSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8uZ2VvbWV0cnkuVmVjM3x1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlLnByb3RvdHlwZS5zZXRTZWN0b3JkaW1lbnNpb25zID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCA1LCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLmR0by5DcmVhdGUucHJvdG90eXBlLmNsZWFyU2VjdG9yZGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldFNlY3RvcmRpbWVuc2lvbnModW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZS5wcm90b3R5cGUuaGFzU2VjdG9yZGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDUpICE9IG51bGw7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5kdG8pO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBnaXRodWJfY29tX2dvZ29fcHJvdG9idWZfZ29nb3Byb3RvX2dvZ29fcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ29fcGIuanMnKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5yb29tLlInLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8ucm9vbS5SID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnJvb20uUiwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by5yb29tLlIuZGlzcGxheU5hbWUgPSAncHJvdG8ucm9vbS5SJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5yb29tLlIudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5yb29tLlJ9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnJvb20uUi50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgaWQ6IG1zZy5nZXRJZF9hc0I2NCgpLFxuICAgIG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgcGFzc3dvcmQ6IG1zZy5nZXRQYXNzd29yZF9hc0I2NCgpLFxuICAgIG93bmVyOiBtc2cuZ2V0T3duZXJfYXNCNjQoKSxcbiAgICB3b3JsZGlkOiBtc2cuZ2V0V29ybGRpZF9hc0I2NCgpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5yb29tLlJ9XG4gKi9cbnByb3RvLnJvb20uUi5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnJvb20uUjtcbiAgcmV0dXJuIHByb3RvLnJvb20uUi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5yb29tLlJ9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8ucm9vbS5SfVxuICovXG5wcm90by5yb29tLlIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldElkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0TmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRPd25lcih2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRXb3JsZGlkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ucm9vbS5SLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5yb29tLlIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5yb29tLlJ9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ucm9vbS5SLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRJZF9hc1U4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVCeXRlcyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXROYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UGFzc3dvcmRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0T3duZXJfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICA0LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0V29ybGRpZF9hc1U4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVCeXRlcyhcbiAgICAgIDUsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuZ2V0SWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ucm9vbS5SLnByb3RvdHlwZS5nZXRJZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuc2V0SWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIE5hbWUgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIFBhc3N3b3JkID0gMztcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIFBhc3N3b3JkID0gMztcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFBhc3N3b3JkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuZ2V0UGFzc3dvcmRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldFBhc3N3b3JkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBQYXNzd29yZCA9IDM7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFBhc3N3b3JkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ucm9vbS5SLnByb3RvdHlwZS5nZXRQYXNzd29yZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0UGFzc3dvcmQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuc2V0UGFzc3dvcmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQnl0ZXNGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgT3duZXIgPSA0O1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA0LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgT3duZXIgPSA0O1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0T3duZXIoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ucm9vbS5SLnByb3RvdHlwZS5nZXRPd25lcl9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0T3duZXIoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIE93bmVyID0gNDtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0T3duZXIoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldE93bmVyX2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc1U4KFxuICAgICAgdGhpcy5nZXRPd25lcigpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8ucm9vbS5SLnByb3RvdHlwZS5zZXRPd25lciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDQsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBXb3JsZElEID0gNTtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldFdvcmxkaWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA1LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgV29ybGRJRCA9IDU7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRXb3JsZGlkKClgXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuZ2V0V29ybGRpZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0V29ybGRpZCgpKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgV29ybGRJRCA9IDU7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldFdvcmxkaWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5yb29tLlIucHJvdG90eXBlLmdldFdvcmxkaWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldFdvcmxkaWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLnJvb20uUi5wcm90b3R5cGUuc2V0V29ybGRpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDUsIHZhbHVlKTtcbn07XG5cblxuZ29vZy5vYmplY3QuZXh0ZW5kKGV4cG9ydHMsIHByb3RvLnJvb20pO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBnaXRodWJfY29tX2dvZ29fcHJvdG9idWZfZ29nb3Byb3RvX2dvZ29fcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ29fcGIuanMnKTtcbnZhciBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL2dlb21ldHJ5L2dlb21ldHJ5X3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL2FjY291bnQvZHRvL2FjY291bnRfcGIuanMnKTtcbnZhciBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19zcGFjZV90aWxlX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvc3BhY2UvdGlsZV9wYi5qcycpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5DcmVhdGVNYXAnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5DcmVhdGVTZXQnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmR0by5SZWFkU2V0JywgbnVsbCwgZ2xvYmFsKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLmR0by5DcmVhdGVNYXAgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uZHRvLkNyZWF0ZU1hcCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by5kdG8uQ3JlYXRlTWFwLmRpc3BsYXlOYW1lID0gJ3Byb3RvLmR0by5DcmVhdGVNYXAnO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5kdG8uQ3JlYXRlTWFwLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uZHRvLkNyZWF0ZU1hcH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgZGltZW5zaW9uczogKGYgPSBtc2cuZ2V0RGltZW5zaW9ucygpKSAmJiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgbnBsYXRmb3JtczoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCAwKSxcbiAgICBwbGF0Zm9ybXNpemU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgMCksXG4gICAgcGxhdGZvcm12YXJpYW5jZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA0LCAwKSxcbiAgICBucGF0aHM6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNSwgMCksXG4gICAgcGF0aHZhcmlhbmNlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDYsIDApLFxuICAgIHBhdGh3aWR0aDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA3LCAwKSxcbiAgICBwYXRod2lkdGh2YXJpYW5jZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA4LCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLkNyZWF0ZU1hcH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmR0by5DcmVhdGVNYXA7XG4gIHJldHVybiBwcm90by5kdG8uQ3JlYXRlTWFwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5DcmVhdGVNYXB9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLkNyZWF0ZU1hcH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzM7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldERpbWVuc2lvbnModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXROcGxhdGZvcm1zKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0UGxhdGZvcm1zaXplKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0UGxhdGZvcm12YXJpYW5jZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldE5wYXRocyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldFBhdGh2YXJpYW5jZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldFBhdGh3aWR0aCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldFBhdGh3aWR0aHZhcmlhbmNlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZHRvLkNyZWF0ZU1hcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5DcmVhdGVNYXB9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0RGltZW5zaW9ucygpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TnBsYXRmb3JtcygpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRQbGF0Zm9ybXNpemUoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UGxhdGZvcm12YXJpYW5jZSgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXROcGF0aHMoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA1LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UGF0aHZhcmlhbmNlKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlVWludDY0KFxuICAgICAgNixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFBhdGh3aWR0aCgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDcsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRQYXRod2lkdGh2YXJpYW5jZSgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDgsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGdlb21ldHJ5LlZlYzMgRGltZW5zaW9ucyA9IDE7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZ2VvbWV0cnkuVmVjM31cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5nZW9tZXRyeS5WZWMzfSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzLCAxKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0gez9wcm90by5nZW9tZXRyeS5WZWMzfHVuZGVmaW5lZH0gdmFsdWUgKi9cbnByb3RvLmR0by5DcmVhdGVNYXAucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuY2xlYXJEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGltZW5zaW9ucyh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5kdG8uQ3JlYXRlTWFwLnByb3RvdHlwZS5oYXNEaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgTlBsYXRmb3JtcyA9IDI7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLmR0by5DcmVhdGVNYXAucHJvdG90eXBlLmdldE5wbGF0Zm9ybXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlTWFwLnByb3RvdHlwZS5zZXROcGxhdGZvcm1zID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgUGxhdGZvcm1TaXplID0gMztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuZ2V0UGxhdGZvcm1zaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuc2V0UGxhdGZvcm1zaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgUGxhdGZvcm1WYXJpYW5jZSA9IDQ7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLmR0by5DcmVhdGVNYXAucHJvdG90eXBlLmdldFBsYXRmb3JtdmFyaWFuY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgNCwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlTWFwLnByb3RvdHlwZS5zZXRQbGF0Zm9ybXZhcmlhbmNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDQsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgTlBhdGhzID0gNTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuZ2V0TnBhdGhzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDUsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuc2V0TnBhdGhzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDUsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgUGF0aFZhcmlhbmNlID0gNjtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuZ2V0UGF0aHZhcmlhbmNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDYsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuc2V0UGF0aHZhcmlhbmNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDYsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgUGF0aFdpZHRoID0gNztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuZ2V0UGF0aHdpZHRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDcsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8uZHRvLkNyZWF0ZU1hcC5wcm90b3R5cGUuc2V0UGF0aHdpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDcsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50NjQgUGF0aFdpZHRoVmFyaWFuY2UgPSA4O1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5kdG8uQ3JlYXRlTWFwLnByb3RvdHlwZS5nZXRQYXRod2lkdGh2YXJpYW5jZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA4LCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLmR0by5DcmVhdGVNYXAucHJvdG90eXBlLnNldFBhdGh3aWR0aHZhcmlhbmNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDgsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5kdG8uQ3JlYXRlU2V0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLmR0by5DcmVhdGVTZXQuZGlzcGxheU5hbWUgPSAncHJvdG8uZHRvLkNyZWF0ZVNldCc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmR0by5DcmVhdGVTZXQudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5kdG8uQ3JlYXRlU2V0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBhdXRoOiAoZiA9IG1zZy5nZXRBdXRoKCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIGlkOiBtc2cuZ2V0SWRfYXNCNjQoKSxcbiAgICBzZXQ6IChmID0gbXNnLmdldFNldCgpKSAmJiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19zcGFjZV90aWxlX3BiLlRpbGVTZXQudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLkNyZWF0ZVNldH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmR0by5DcmVhdGVTZXQ7XG4gIHJldHVybiBwcm90by5kdG8uQ3JlYXRlU2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5DcmVhdGVTZXR9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZHRvLkNyZWF0ZVNldH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGguZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRBdXRoKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldElkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19zcGFjZV90aWxlX3BiLlRpbGVTZXQ7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfc3BhY2VfdGlsZV9wYi5UaWxlU2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0U2V0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZHRvLkNyZWF0ZVNldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5DcmVhdGVTZXR9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0QXV0aCgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRJZF9hc1U4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVCeXRlcyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTZXQoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAzLFxuICAgICAgZixcbiAgICAgIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3NwYWNlX3RpbGVfcGIuVGlsZVNldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBBdXRoIEF1dGggPSAxO1xuICogQHJldHVybiB7P3Byb3RvLmR0by5BdXRofVxuICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnByb3RvdHlwZS5nZXRBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmR0by5BdXRofSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGgsIDEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmR0by5BdXRofHVuZGVmaW5lZH0gdmFsdWUgKi9cbnByb3RvLmR0by5DcmVhdGVTZXQucHJvdG90eXBlLnNldEF1dGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuY2xlYXJBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0QXV0aCh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnByb3RvdHlwZS5oYXNBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDI7XG4gKiBAcmV0dXJuIHshKHN0cmluZ3xVaW50OEFycmF5KX1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgSUQgPSAyO1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0SWQoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuZ2V0SWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDI7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuZ2V0SWRfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnByb3RvdHlwZS5zZXRJZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzcGFjZS5UaWxlU2V0IFNldCA9IDM7XG4gKiBAcmV0dXJuIHs/cHJvdG8uc3BhY2UuVGlsZVNldH1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuZ2V0U2V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLnNwYWNlLlRpbGVTZXR9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3NwYWNlX3RpbGVfcGIuVGlsZVNldCwgMykpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8uc3BhY2UuVGlsZVNldHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5kdG8uQ3JlYXRlU2V0LnByb3RvdHlwZS5zZXRTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuY2xlYXJTZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRTZXQodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uZHRvLkNyZWF0ZVNldC5wcm90b3R5cGUuaGFzU2V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMykgIT0gbnVsbDtcbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uZHRvLlJlYWRTZXQsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8uZHRvLlJlYWRTZXQuZGlzcGxheU5hbWUgPSAncHJvdG8uZHRvLlJlYWRTZXQnO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZHRvLlJlYWRTZXQudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5kdG8uUmVhZFNldH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGF1dGg6IChmID0gbXNnLmdldEF1dGgoKSkgJiYgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgaWQ6IG1zZy5nZXRJZF9hc0I2NCgpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5kdG8uUmVhZFNldH1cbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5kdG8uUmVhZFNldDtcbiAgcmV0dXJuIHByb3RvLmR0by5SZWFkU2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmR0by5SZWFkU2V0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLmR0by5SZWFkU2V0fVxuICovXG5wcm90by5kdG8uUmVhZFNldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGguZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRBdXRoKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldElkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmR0by5SZWFkU2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZHRvLlJlYWRTZXR9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEF1dGgoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0SWRfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBBdXRoIEF1dGggPSAxO1xuICogQHJldHVybiB7P3Byb3RvLmR0by5BdXRofVxuICovXG5wcm90by5kdG8uUmVhZFNldC5wcm90b3R5cGUuZ2V0QXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5kdG8uQXV0aH0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYi5BdXRoLCAxKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0gez9wcm90by5kdG8uQXV0aHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5kdG8uUmVhZFNldC5wcm90b3R5cGUuc2V0QXV0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG5wcm90by5kdG8uUmVhZFNldC5wcm90b3R5cGUuY2xlYXJBdXRoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0QXV0aCh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4geyFib29sZWFufVxuICovXG5wcm90by5kdG8uUmVhZFNldC5wcm90b3R5cGUuaGFzQXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgSUQgPSAyO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmR0by5SZWFkU2V0LnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDI7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kdG8uUmVhZFNldC5wcm90b3R5cGUuZ2V0SWRfYXNCNjQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNCNjQoXG4gICAgICB0aGlzLmdldElkKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDI7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldElkKClgXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZHRvLlJlYWRTZXQucHJvdG90eXBlLmdldElkX2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc1U4KFxuICAgICAgdGhpcy5nZXRJZCgpKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZSAqL1xucHJvdG8uZHRvLlJlYWRTZXQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uZHRvKTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ2l0aHViX2NvbV9nb2dvX3Byb3RvYnVmX2dvZ29wcm90b19nb2dvX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90by9nb2dvX3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9nZW9tZXRyeS9nZW9tZXRyeV9wYi5qcycpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNwYWNlLlRlcnJhaW4nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNwYWNlLlRpbGVNYXAnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNwYWNlLlRpbGVTZXQnLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc3BhY2UuVGlsZVNldCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5zcGFjZS5UaWxlU2V0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnNwYWNlLlRpbGVTZXQuZGlzcGxheU5hbWUgPSAncHJvdG8uc3BhY2UuVGlsZVNldCc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNwYWNlLlRpbGVTZXQudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zcGFjZS5UaWxlU2V0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBpZDogbXNnLmdldElkX2FzQjY0KCksXG4gICAgbmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKSxcbiAgICBzaXplOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIDApLFxuICAgIHg6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNCwgMCksXG4gICAgeToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA1LCAwKSxcbiAgICB0ZXJyYWluc01hcDogKGYgPSBtc2cuZ2V0VGVycmFpbnNNYXAoKSkgPyBmLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgdW5kZWZpbmVkKSA6IFtdXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zcGFjZS5UaWxlU2V0fVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc3BhY2UuVGlsZVNldDtcbiAgcmV0dXJuIHByb3RvLnNwYWNlLlRpbGVTZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGlsZVNldH0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zcGFjZS5UaWxlU2V0fVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5zZXRJZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldE5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRTaXplKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRVaW50NjQoKSk7XG4gICAgICBtc2cuc2V0WCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkVWludDY0KCkpO1xuICAgICAgbXNnLnNldFkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgdmFyIHZhbHVlID0gbXNnLmdldFRlcnJhaW5zTWFwKCk7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsIGZ1bmN0aW9uKG1lc3NhZ2UsIHJlYWRlcikge1xuICAgICAgICBqc3BiLk1hcC5kZXNlcmlhbGl6ZUJpbmFyeShtZXNzYWdlLCByZWFkZXIsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkSW50MzIsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkVWludDY0LCBudWxsLCAwKTtcbiAgICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zcGFjZS5UaWxlU2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGlsZVNldH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRJZF9hc1U4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVCeXRlcyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXROYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U2l6ZSgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZVVpbnQ2NChcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRYKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlVWludDY0KFxuICAgICAgNCxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFkoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50NjQoXG4gICAgICA1LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0VGVycmFpbnNNYXAodHJ1ZSk7XG4gIGlmIChmICYmIGYuZ2V0TGVuZ3RoKCkgPiAwKSB7XG4gICAgZi5zZXJpYWxpemVCaW5hcnkoNiwgd3JpdGVyLCBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVJbnQzMiwganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlVWludDY0KTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshKHN0cmluZ3xVaW50OEFycmF5KX0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBJRCA9IDE7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRJZCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS5nZXRJZF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIElEID0gMTtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0SWQoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS5nZXRJZF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0SWQoKSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWUgKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBOYW1lID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uc3BhY2UuVGlsZVNldC5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBTaXplID0gMztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZVNldC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMywgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBYID0gNDtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZVNldC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA0LCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHVpbnQ2NCBZID0gNTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZVNldC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA1LCAwKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgNSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG1hcDxpbnQzMiwgdWludDY0PiBUZXJyYWlucyA9IDY7XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfbm9MYXp5Q3JlYXRlIERvIG5vdCBjcmVhdGUgdGhlIG1hcCBpZlxuICogZW1wdHksIGluc3RlYWQgcmV0dXJuaW5nIGB1bmRlZmluZWRgXG4gKiBAcmV0dXJuIHshanNwYi5NYXA8bnVtYmVyLG51bWJlcj59XG4gKi9cbnByb3RvLnNwYWNlLlRpbGVTZXQucHJvdG90eXBlLmdldFRlcnJhaW5zTWFwID0gZnVuY3Rpb24ob3B0X25vTGF6eUNyZWF0ZSkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshanNwYi5NYXA8bnVtYmVyLG51bWJlcj59ICovIChcbiAgICAgIGpzcGIuTWVzc2FnZS5nZXRNYXBGaWVsZCh0aGlzLCA2LCBvcHRfbm9MYXp5Q3JlYXRlLFxuICAgICAgbnVsbCkpO1xufTtcblxuXG5wcm90by5zcGFjZS5UaWxlU2V0LnByb3RvdHlwZS5jbGVhclRlcnJhaW5zTWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0VGVycmFpbnNNYXAoKS5jbGVhcigpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBwcm90by5zcGFjZS5UaWxlTWFwLnJlcGVhdGVkRmllbGRzXywgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5zcGFjZS5UaWxlTWFwLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnNwYWNlLlRpbGVNYXAuZGlzcGxheU5hbWUgPSAncHJvdG8uc3BhY2UuVGlsZU1hcCc7XG59XG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLnJlcGVhdGVkRmllbGRzXyA9IFszXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zcGFjZS5UaWxlTWFwLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGlsZU1hcH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgc2V0OiAoZiA9IG1zZy5nZXRTZXQoKSkgJiYgcHJvdG8uc3BhY2UuVGlsZVNldC50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpLFxuICAgIGRpbTogKGYgPSBtc2cuZ2V0RGltKCkpICYmIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKSxcbiAgICBtYXBMaXN0OiBqc3BiLk1lc3NhZ2UuZ2V0UmVwZWF0ZWRGaWVsZChtc2csIDMpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zcGFjZS5UaWxlTWFwfVxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc3BhY2UuVGlsZU1hcDtcbiAgcmV0dXJuIHByb3RvLnNwYWNlLlRpbGVNYXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGlsZU1hcH0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zcGFjZS5UaWxlTWFwfVxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc3BhY2UuVGlsZVNldDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zcGFjZS5UaWxlU2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0U2V0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19nZW9tZXRyeV9nZW9tZXRyeV9wYi5WZWMzO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXREaW0odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshQXJyYXk8IXByb3RvLnNwYWNlLlRlcnJhaW4+fSAqLyAocmVhZGVyLnJlYWRQYWNrZWRFbnVtKCkpO1xuICAgICAgbXNnLnNldE1hcExpc3QodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zcGFjZS5UaWxlTWFwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGlsZU1hcH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRTZXQoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIHByb3RvLnNwYWNlLlRpbGVTZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldERpbSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDIsXG4gICAgICBmLFxuICAgICAgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfZ2VvbWV0cnlfZ2VvbWV0cnlfcGIuVmVjMy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TWFwTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUGFja2VkRW51bShcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIFRpbGVTZXQgU2V0ID0gMTtcbiAqIEByZXR1cm4gez9wcm90by5zcGFjZS5UaWxlU2V0fVxuICovXG5wcm90by5zcGFjZS5UaWxlTWFwLnByb3RvdHlwZS5nZXRTZXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8uc3BhY2UuVGlsZVNldH0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8uc3BhY2UuVGlsZVNldCwgMSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8uc3BhY2UuVGlsZVNldHx1bmRlZmluZWR9IHZhbHVlICovXG5wcm90by5zcGFjZS5UaWxlTWFwLnByb3RvdHlwZS5zZXRTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuY2xlYXJTZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRTZXQodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuaGFzU2V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBnZW9tZXRyeS5WZWMzIERpbSA9IDI7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZ2VvbWV0cnkuVmVjM31cbiAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuZ2V0RGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmdlb21ldHJ5LlZlYzN9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2dlb21ldHJ5X2dlb21ldHJ5X3BiLlZlYzMsIDIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmdlb21ldHJ5LlZlYzN8dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuc2V0RGltID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLnNwYWNlLlRpbGVNYXAucHJvdG90eXBlLmNsZWFyRGltID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGltKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7IWJvb2xlYW59XG4gKi9cbnByb3RvLnNwYWNlLlRpbGVNYXAucHJvdG90eXBlLmhhc0RpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDIpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgVGVycmFpbiBNYXAgPSAzO1xuICogQHJldHVybiB7IUFycmF5PCFwcm90by5zcGFjZS5UZXJyYWluPn1cbiAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuZ2V0TWFwTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshQXJyYXk8IXByb3RvLnNwYWNlLlRlcnJhaW4+fSAqLyAoanNwYi5NZXNzYWdlLmdldFJlcGVhdGVkRmllbGQodGhpcywgMykpO1xufTtcblxuXG4vKiogQHBhcmFtIHshQXJyYXk8IXByb3RvLnNwYWNlLlRlcnJhaW4+fSB2YWx1ZSAqL1xucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuc2V0TWFwTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRGaWVsZCh0aGlzLCAzLCB2YWx1ZSB8fCBbXSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc3BhY2UuVGVycmFpbn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2luZGV4XG4gKi9cbnByb3RvLnNwYWNlLlRpbGVNYXAucHJvdG90eXBlLmFkZE1hcCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRfaW5kZXgpIHtcbiAganNwYi5NZXNzYWdlLmFkZFRvUmVwZWF0ZWRGaWVsZCh0aGlzLCAzLCB2YWx1ZSwgb3B0X2luZGV4KTtcbn07XG5cblxucHJvdG8uc3BhY2UuVGlsZU1hcC5wcm90b3R5cGUuY2xlYXJNYXBMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0TWFwTGlzdChbXSk7XG59O1xuXG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xucHJvdG8uc3BhY2UuVGVycmFpbiA9IHtcbiAgU0tZOiAwLFxuICBGTE9PUjogMSxcbiAgUElMTEFSOiAyLFxuICBXQUxMOiAzXG59O1xuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uc3BhY2UpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBnaXRodWJfY29tX2dvZ29fcHJvdG9idWZfZ29nb3Byb3RvX2dvZ29fcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ29fcGIuanMnKTtcbnZhciBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL2VtcHR5X3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfbG9iYnlfbG9iYnlfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9sb2JieS9sb2JieV9wYi5qcycpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3BsYXllcl9wbGF5ZXJfcGIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi8uLi9naXRodWIuY29tL2Vsb2phaC9nYW1lXzAyL3BrZy9wbGF5ZXIvcGxheWVyX3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfcm9vbV9yb29tX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvcm9vbS9yb29tX3BiLmpzJyk7XG52YXIgZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfYWNjb3VudF9kdG9fYWNjb3VudF9wYiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL2FjY291bnQvZHRvL2FjY291bnRfcGIuanMnKTtcbnZhciBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19yb29tX2R0b19yb29tX3BiID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvcm9vbS9kdG8vcm9vbV9wYi5qcycpO1xuZ29vZy5vYmplY3QuZXh0ZW5kKGV4cG9ydHMsIHByb3RvLmdycGMpO1xuIiwiLy8gcGFja2FnZTogZ3JwY1xuLy8gZmlsZTogZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9jbWQvYXV0aC9ncnBjL2F1dGgucHJvdG9cblxudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfY21kX2F1dGhfZ3JwY19hdXRoX3BiID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvY21kL2F1dGgvZ3JwYy9hdXRoX3BiXCIpO1xudmFyIGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYiA9IHJlcXVpcmUoXCJnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL2VtcHR5X3BiXCIpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2xvYmJ5X2xvYmJ5X3BiID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL2xvYmJ5L2xvYmJ5X3BiXCIpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3BsYXllcl9wbGF5ZXJfcGIgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvcGxheWVyL3BsYXllcl9wYlwiKTtcbnZhciBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19yb29tX3Jvb21fcGIgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvcm9vbS9yb29tX3BiXCIpO1xudmFyIGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vZ2l0aHViLmNvbS9lbG9qYWgvZ2FtZV8wMi9wa2cvYWNjb3VudC9kdG8vYWNjb3VudF9wYlwiKTtcbnZhciBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19yb29tX2R0b19yb29tX3BiID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi5jb20vZWxvamFoL2dhbWVfMDIvcGtnL3Jvb20vZHRvL3Jvb21fcGJcIik7XG52YXIgZ3JwYyA9IHJlcXVpcmUoXCJAaW1wcm9iYWJsZS1lbmcvZ3JwYy13ZWJcIikuZ3JwYztcblxudmFyIEF1dGggPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdXRoKCkge31cbiAgQXV0aC5zZXJ2aWNlTmFtZSA9IFwiZ3JwYy5BdXRoXCI7XG4gIHJldHVybiBBdXRoO1xufSgpKTtcblxuQXV0aC5TdWJzY3JpYmUgPSB7XG4gIG1ldGhvZE5hbWU6IFwiU3Vic2NyaWJlXCIsXG4gIHNlcnZpY2U6IEF1dGgsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLlN1YnNjcmliZSxcbiAgcmVzcG9uc2VUeXBlOiBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHlcbn07XG5cbkF1dGguVW5zdWJzY3JpYmUgPSB7XG4gIG1ldGhvZE5hbWU6IFwiVW5zdWJzY3JpYmVcIixcbiAgc2VydmljZTogQXV0aCxcbiAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgcmVxdWVzdFR5cGU6IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuVW5zdWJzY3JpYmUsXG4gIHJlc3BvbnNlVHlwZTogZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiLkVtcHR5XG59O1xuXG5BdXRoLlNpZ25pbiA9IHtcbiAgbWV0aG9kTmFtZTogXCJTaWduaW5cIixcbiAgc2VydmljZTogQXV0aCxcbiAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgcmVxdWVzdFR5cGU6IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuU2lnbmluLFxuICByZXNwb25zZVR5cGU6IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuVG9rZW5cbn07XG5cbkF1dGguU2lnbm91dCA9IHtcbiAgbWV0aG9kTmFtZTogXCJTaWdub3V0XCIsXG4gIHNlcnZpY2U6IEF1dGgsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19hY2NvdW50X2R0b19hY2NvdW50X3BiLkF1dGgsXG4gIHJlc3BvbnNlVHlwZTogZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiLkVtcHR5XG59O1xuXG5BdXRoLkxpc3RMb2JiaWVzID0ge1xuICBtZXRob2ROYW1lOiBcIkxpc3RMb2JiaWVzXCIsXG4gIHNlcnZpY2U6IEF1dGgsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogdHJ1ZSxcbiAgcmVxdWVzdFR5cGU6IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX2FjY291bnRfZHRvX2FjY291bnRfcGIuQXV0aCxcbiAgcmVzcG9uc2VUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19sb2JieV9sb2JieV9wYi5MXG59O1xuXG5BdXRoLkNyZWF0ZVJvb20gPSB7XG4gIG1ldGhvZE5hbWU6IFwiQ3JlYXRlUm9vbVwiLFxuICBzZXJ2aWNlOiBBdXRoLFxuICByZXF1ZXN0U3RyZWFtOiBmYWxzZSxcbiAgcmVzcG9uc2VTdHJlYW06IGZhbHNlLFxuICByZXF1ZXN0VHlwZTogZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfcm9vbV9kdG9fcm9vbV9wYi5DcmVhdGUsXG4gIHJlc3BvbnNlVHlwZTogZ2l0aHViX2NvbV9lbG9qYWhfZ2FtZV8wMl9wa2dfcm9vbV9yb29tX3BiLlJcbn07XG5cbkF1dGguQ29ubmVjdFJvb20gPSB7XG4gIG1ldGhvZE5hbWU6IFwiQ29ubmVjdFJvb21cIixcbiAgc2VydmljZTogQXV0aCxcbiAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgcmVxdWVzdFR5cGU6IGdpdGh1Yl9jb21fZWxvamFoX2dhbWVfMDJfcGtnX3Jvb21fZHRvX3Jvb21fcGIuQ29ubmVjdCxcbiAgcmVzcG9uc2VUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19yb29tX3Jvb21fcGIuUlxufTtcblxuQXV0aC5DcmVhdGVQbGF5ZXIgPSB7XG4gIG1ldGhvZE5hbWU6IFwiQ3JlYXRlUGxheWVyXCIsXG4gIHNlcnZpY2U6IEF1dGgsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19yb29tX2R0b19yb29tX3BiLkNyZWF0ZSxcbiAgcmVzcG9uc2VUeXBlOiBnaXRodWJfY29tX2Vsb2phaF9nYW1lXzAyX3BrZ19wbGF5ZXJfcGxheWVyX3BiLlBcbn07XG5cbmV4cG9ydHMuQXV0aCA9IEF1dGg7XG5cbmZ1bmN0aW9uIEF1dGhDbGllbnQoc2VydmljZUhvc3QsIG9wdGlvbnMpIHtcbiAgdGhpcy5zZXJ2aWNlSG9zdCA9IHNlcnZpY2VIb3N0O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xufVxuXG5BdXRoQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUocmVxdWVzdE1lc3NhZ2UsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzFdO1xuICB9XG4gIHZhciBjbGllbnQgPSBncnBjLnVuYXJ5KEF1dGguU3Vic2NyaWJlLCB7XG4gICAgcmVxdWVzdDogcmVxdWVzdE1lc3NhZ2UsXG4gICAgaG9zdDogdGhpcy5zZXJ2aWNlSG9zdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgdHJhbnNwb3J0OiB0aGlzLm9wdGlvbnMudHJhbnNwb3J0LFxuICAgIGRlYnVnOiB0aGlzLm9wdGlvbnMuZGVidWcsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IGdycGMuQ29kZS5PSykge1xuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSk7XG4gICAgICAgICAgZXJyLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgZXJyLm1ldGFkYXRhID0gcmVzcG9uc2UudHJhaWxlcnM7XG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59O1xuXG5BdXRoQ2xpZW50LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTtcbiAgfVxuICB2YXIgY2xpZW50ID0gZ3JwYy51bmFyeShBdXRoLlVuc3Vic2NyaWJlLCB7XG4gICAgcmVxdWVzdDogcmVxdWVzdE1lc3NhZ2UsXG4gICAgaG9zdDogdGhpcy5zZXJ2aWNlSG9zdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgdHJhbnNwb3J0OiB0aGlzLm9wdGlvbnMudHJhbnNwb3J0LFxuICAgIGRlYnVnOiB0aGlzLm9wdGlvbnMuZGVidWcsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IGdycGMuQ29kZS5PSykge1xuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSk7XG4gICAgICAgICAgZXJyLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgZXJyLm1ldGFkYXRhID0gcmVzcG9uc2UudHJhaWxlcnM7XG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59O1xuXG5BdXRoQ2xpZW50LnByb3RvdHlwZS5zaWduaW4gPSBmdW5jdGlvbiBzaWduaW4ocmVxdWVzdE1lc3NhZ2UsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzFdO1xuICB9XG4gIHZhciBjbGllbnQgPSBncnBjLnVuYXJ5KEF1dGguU2lnbmluLCB7XG4gICAgcmVxdWVzdDogcmVxdWVzdE1lc3NhZ2UsXG4gICAgaG9zdDogdGhpcy5zZXJ2aWNlSG9zdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgdHJhbnNwb3J0OiB0aGlzLm9wdGlvbnMudHJhbnNwb3J0LFxuICAgIGRlYnVnOiB0aGlzLm9wdGlvbnMuZGVidWcsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IGdycGMuQ29kZS5PSykge1xuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSk7XG4gICAgICAgICAgZXJyLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgZXJyLm1ldGFkYXRhID0gcmVzcG9uc2UudHJhaWxlcnM7XG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59O1xuXG5BdXRoQ2xpZW50LnByb3RvdHlwZS5zaWdub3V0ID0gZnVuY3Rpb24gc2lnbm91dChyZXF1ZXN0TWVzc2FnZSwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMV07XG4gIH1cbiAgdmFyIGNsaWVudCA9IGdycGMudW5hcnkoQXV0aC5TaWdub3V0LCB7XG4gICAgcmVxdWVzdDogcmVxdWVzdE1lc3NhZ2UsXG4gICAgaG9zdDogdGhpcy5zZXJ2aWNlSG9zdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgdHJhbnNwb3J0OiB0aGlzLm9wdGlvbnMudHJhbnNwb3J0LFxuICAgIGRlYnVnOiB0aGlzLm9wdGlvbnMuZGVidWcsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IGdycGMuQ29kZS5PSykge1xuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSk7XG4gICAgICAgICAgZXJyLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgZXJyLm1ldGFkYXRhID0gcmVzcG9uc2UudHJhaWxlcnM7XG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59O1xuXG5BdXRoQ2xpZW50LnByb3RvdHlwZS5saXN0TG9iYmllcyA9IGZ1bmN0aW9uIGxpc3RMb2JiaWVzKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSkge1xuICB2YXIgbGlzdGVuZXJzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIGVuZDogW10sXG4gICAgc3RhdHVzOiBbXVxuICB9O1xuICB2YXIgY2xpZW50ID0gZ3JwYy5pbnZva2UoQXV0aC5MaXN0TG9iYmllcywge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uTWVzc2FnZTogZnVuY3Rpb24gKHJlc3BvbnNlTWVzc2FnZSkge1xuICAgICAgbGlzdGVuZXJzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyKHJlc3BvbnNlTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uRW5kOiBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNNZXNzYWdlLCB0cmFpbGVycykge1xuICAgICAgbGlzdGVuZXJzLnN0YXR1cy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoeyBjb2RlOiBzdGF0dXMsIGRldGFpbHM6IHN0YXR1c01lc3NhZ2UsIG1ldGFkYXRhOiB0cmFpbGVycyB9KTtcbiAgICAgIH0pO1xuICAgICAgbGlzdGVuZXJzLmVuZC5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoeyBjb2RlOiBzdGF0dXMsIGRldGFpbHM6IHN0YXR1c01lc3NhZ2UsIG1ldGFkYXRhOiB0cmFpbGVycyB9KTtcbiAgICAgIH0pO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdLnB1c2goaGFuZGxlcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbkF1dGhDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJvb20gPSBmdW5jdGlvbiBjcmVhdGVSb29tKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTtcbiAgfVxuICB2YXIgY2xpZW50ID0gZ3JwYy51bmFyeShBdXRoLkNyZWF0ZVJvb20sIHtcbiAgICByZXF1ZXN0OiByZXF1ZXN0TWVzc2FnZSxcbiAgICBob3N0OiB0aGlzLnNlcnZpY2VIb3N0LFxuICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICB0cmFuc3BvcnQ6IHRoaXMub3B0aW9ucy50cmFuc3BvcnQsXG4gICAgZGVidWc6IHRoaXMub3B0aW9ucy5kZWJ1ZyxcbiAgICBvbkVuZDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gZ3JwYy5Db2RlLk9LKSB7XG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNNZXNzYWdlKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBlcnIubWV0YWRhdGEgPSByZXNwb25zZS50cmFpbGVycztcbiAgICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbkF1dGhDbGllbnQucHJvdG90eXBlLmNvbm5lY3RSb29tID0gZnVuY3Rpb24gY29ubmVjdFJvb20ocmVxdWVzdE1lc3NhZ2UsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzFdO1xuICB9XG4gIHZhciBjbGllbnQgPSBncnBjLnVuYXJ5KEF1dGguQ29ubmVjdFJvb20sIHtcbiAgICByZXF1ZXN0OiByZXF1ZXN0TWVzc2FnZSxcbiAgICBob3N0OiB0aGlzLnNlcnZpY2VIb3N0LFxuICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICB0cmFuc3BvcnQ6IHRoaXMub3B0aW9ucy50cmFuc3BvcnQsXG4gICAgZGVidWc6IHRoaXMub3B0aW9ucy5kZWJ1ZyxcbiAgICBvbkVuZDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gZ3JwYy5Db2RlLk9LKSB7XG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNNZXNzYWdlKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBlcnIubWV0YWRhdGEgPSByZXNwb25zZS50cmFpbGVycztcbiAgICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbkF1dGhDbGllbnQucHJvdG90eXBlLmNyZWF0ZVBsYXllciA9IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihyZXF1ZXN0TWVzc2FnZSwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMV07XG4gIH1cbiAgdmFyIGNsaWVudCA9IGdycGMudW5hcnkoQXV0aC5DcmVhdGVQbGF5ZXIsIHtcbiAgICByZXF1ZXN0OiByZXF1ZXN0TWVzc2FnZSxcbiAgICBob3N0OiB0aGlzLnNlcnZpY2VIb3N0LFxuICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICB0cmFuc3BvcnQ6IHRoaXMub3B0aW9ucy50cmFuc3BvcnQsXG4gICAgZGVidWc6IHRoaXMub3B0aW9ucy5kZWJ1ZyxcbiAgICBvbkVuZDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gZ3JwYy5Db2RlLk9LKSB7XG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNNZXNzYWdlKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBlcnIubWV0YWRhdGEgPSByZXNwb25zZS50cmFpbGVycztcbiAgICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQXV0aENsaWVudCA9IEF1dGhDbGllbnQ7XG5cbiIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgcj10KCk7Zm9yKHZhciBuIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbbl09cltuXX19KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz0xMCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigzKTt0Lk1ldGFkYXRhPW4uQnJvd3NlckhlYWRlcnN9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlYnVnPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWVbdF09YXJndW1lbnRzW3RdO2NvbnNvbGUuZGVidWc/Y29uc29sZS5kZWJ1Zy5hcHBseShudWxsLGUpOmNvbnNvbGUubG9nLmFwcGx5KG51bGwsZSl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigwKSxvPXIoOCkscz1yKDkpLGk9cigxKSxhPXIoNCksdT1yKDE0KTt0LmNsaWVudD1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgZChlLHQpfTt2YXIgZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnN0YXJ0ZWQ9ITEsdGhpcy5zZW50Rmlyc3RNZXNzYWdlPSExLHRoaXMuY29tcGxldGVkPSExLHRoaXMuY2xvc2VkPSExLHRoaXMuZmluaXNoZWRTZW5kaW5nPSExLHRoaXMub25IZWFkZXJzQ2FsbGJhY2tzPVtdLHRoaXMub25NZXNzYWdlQ2FsbGJhY2tzPVtdLHRoaXMub25FbmRDYWxsYmFja3M9W10sdGhpcy5wYXJzZXI9bmV3IG8uQ2h1bmtQYXJzZXIsdGhpcy5tZXRob2REZWZpbml0aW9uPWUsdGhpcy5wcm9wcz10LHRoaXMuY3JlYXRlVHJhbnNwb3J0KCl9cmV0dXJuIGUucHJvdG90eXBlLmNyZWF0ZVRyYW5zcG9ydD1mdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMuaG9zdCtcIi9cIit0aGlzLm1ldGhvZERlZmluaXRpb24uc2VydmljZS5zZXJ2aWNlTmFtZStcIi9cIit0aGlzLm1ldGhvZERlZmluaXRpb24ubWV0aG9kTmFtZSx0PXttZXRob2REZWZpbml0aW9uOnRoaXMubWV0aG9kRGVmaW5pdGlvbixkZWJ1Zzp0aGlzLnByb3BzLmRlYnVnfHwhMSx1cmw6ZSxvbkhlYWRlcnM6dGhpcy5vblRyYW5zcG9ydEhlYWRlcnMuYmluZCh0aGlzKSxvbkNodW5rOnRoaXMub25UcmFuc3BvcnRDaHVuay5iaW5kKHRoaXMpLG9uRW5kOnRoaXMub25UcmFuc3BvcnRFbmQuYmluZCh0aGlzKX07dGhpcy5wcm9wcy50cmFuc3BvcnQ/dGhpcy50cmFuc3BvcnQ9dGhpcy5wcm9wcy50cmFuc3BvcnQodCk6dGhpcy50cmFuc3BvcnQ9YS5tYWtlRGVmYXVsdFRyYW5zcG9ydCh0KX0sZS5wcm90b3R5cGUub25UcmFuc3BvcnRIZWFkZXJzPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcIm9uSGVhZGVyc1wiLGUsdCksdGhpcy5jbG9zZWQpdGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcImdycGMub25IZWFkZXJzIHJlY2VpdmVkIGFmdGVyIHJlcXVlc3Qgd2FzIGNsb3NlZCAtIGlnbm9yaW5nXCIpO2Vsc2UgaWYoMD09PXQpO2Vsc2V7dGhpcy5yZXNwb25zZUhlYWRlcnM9ZSx0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwib25IZWFkZXJzLnJlc3BvbnNlSGVhZGVyc1wiLEpTT04uc3RyaW5naWZ5KHRoaXMucmVzcG9uc2VIZWFkZXJzLG51bGwsMikpO3ZhciByPWMoZSk7dGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcIm9uSGVhZGVycy5nUlBDU3RhdHVzXCIscik7dmFyIG49ciYmcj49MD9yOnMuaHR0cFN0YXR1c1RvQ29kZSh0KTt0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwib25IZWFkZXJzLmNvZGVcIixuKTt2YXIgbz1lLmdldChcImdycGMtbWVzc2FnZVwiKXx8W107aWYodGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcIm9uSGVhZGVycy5nUlBDTWVzc2FnZVwiLG8pLHRoaXMucmF3T25IZWFkZXJzKGUpLG4hPT1zLkNvZGUuT0spe3ZhciBhPXRoaXMuZGVjb2RlR1JQQ1N0YXR1cyhvWzBdKTt0aGlzLnJhd09uRXJyb3IobixhLGUpfX19LGUucHJvdG90eXBlLm9uVHJhbnNwb3J0Q2h1bms9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0aGlzLmNsb3NlZCl0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwiZ3JwYy5vbkNodW5rIHJlY2VpdmVkIGFmdGVyIHJlcXVlc3Qgd2FzIGNsb3NlZCAtIGlnbm9yaW5nXCIpO2Vsc2V7dmFyIHI9W107dHJ5e3I9dGhpcy5wYXJzZXIucGFyc2UoZSl9Y2F0Y2goZSl7cmV0dXJuIHRoaXMucHJvcHMuZGVidWcmJmkuZGVidWcoXCJvbkNodW5rLnBhcnNpbmcgZXJyb3JcIixlLGUubWVzc2FnZSksdm9pZCB0aGlzLnJhd09uRXJyb3Iocy5Db2RlLkludGVybmFsLFwicGFyc2luZyBlcnJvcjogXCIrZS5tZXNzYWdlKX1yLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5jaHVua1R5cGU9PT1vLkNodW5rVHlwZS5NRVNTQUdFKXt2YXIgcj10Lm1ldGhvZERlZmluaXRpb24ucmVzcG9uc2VUeXBlLmRlc2VyaWFsaXplQmluYXJ5KGUuZGF0YSk7dC5yYXdPbk1lc3NhZ2Uocil9ZWxzZSBlLmNodW5rVHlwZT09PW8uQ2h1bmtUeXBlLlRSQUlMRVJTJiYodC5yZXNwb25zZUhlYWRlcnM/KHQucmVzcG9uc2VUcmFpbGVycz1uZXcgbi5NZXRhZGF0YShlLnRyYWlsZXJzKSx0LnByb3BzLmRlYnVnJiZpLmRlYnVnKFwib25DaHVuay50cmFpbGVyc1wiLHQucmVzcG9uc2VUcmFpbGVycykpOih0LnJlc3BvbnNlSGVhZGVycz1uZXcgbi5NZXRhZGF0YShlLnRyYWlsZXJzKSx0LnJhd09uSGVhZGVycyh0LnJlc3BvbnNlSGVhZGVycykpKX0pfX0sZS5wcm90b3R5cGUub25UcmFuc3BvcnRFbmQ9ZnVuY3Rpb24oKXtpZih0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwiZ3JwYy5vbkVuZFwiKSx0aGlzLmNsb3NlZCl0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwiZ3JwYy5vbkVuZCByZWNlaXZlZCBhZnRlciByZXF1ZXN0IHdhcyBjbG9zZWQgLSBpZ25vcmluZ1wiKTtlbHNlIGlmKHZvaWQgMCE9PXRoaXMucmVzcG9uc2VUcmFpbGVycyl7dmFyIGU9Yyh0aGlzLnJlc3BvbnNlVHJhaWxlcnMpO2lmKG51bGwhPT1lKXt2YXIgdD10aGlzLnJlc3BvbnNlVHJhaWxlcnMuZ2V0KFwiZ3JwYy1tZXNzYWdlXCIpLHI9dGhpcy5kZWNvZGVHUlBDU3RhdHVzKHRbMF0pO3RoaXMucmF3T25FbmQoZSxyLHRoaXMucmVzcG9uc2VUcmFpbGVycyl9ZWxzZSB0aGlzLnJhd09uRXJyb3Iocy5Db2RlLkludGVybmFsLFwiUmVzcG9uc2UgY2xvc2VkIHdpdGhvdXQgZ3JwYy1zdGF0dXMgKFRyYWlsZXJzIHByb3ZpZGVkKVwiKX1lbHNle2lmKHZvaWQgMD09PXRoaXMucmVzcG9uc2VIZWFkZXJzKXJldHVybiB2b2lkIHRoaXMucmF3T25FcnJvcihzLkNvZGUuVW5rbm93bixcIlJlc3BvbnNlIGNsb3NlZCB3aXRob3V0IGhlYWRlcnNcIik7dmFyIG49Yyh0aGlzLnJlc3BvbnNlSGVhZGVycyksbz10aGlzLnJlc3BvbnNlSGVhZGVycy5nZXQoXCJncnBjLW1lc3NhZ2VcIik7aWYodGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcImdycGMuaGVhZGVycyBvbmx5IHJlc3BvbnNlIFwiLG4sbyksbnVsbD09PW4pcmV0dXJuIHZvaWQgdGhpcy5yYXdPbkVuZChzLkNvZGUuVW5rbm93bixcIlJlc3BvbnNlIGNsb3NlZCB3aXRob3V0IGdycGMtc3RhdHVzIChIZWFkZXJzIG9ubHkpXCIsdGhpcy5yZXNwb25zZUhlYWRlcnMpO3ZhciBhPXRoaXMuZGVjb2RlR1JQQ1N0YXR1cyhvWzBdKTt0aGlzLnJhd09uRW5kKG4sYSx0aGlzLnJlc3BvbnNlSGVhZGVycyl9fSxlLnByb3RvdHlwZS5kZWNvZGVHUlBDU3RhdHVzPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVyblwiXCI7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZSl9Y2F0Y2godCl7cmV0dXJuIGV9fSxlLnByb3RvdHlwZS5yYXdPbkVuZD1mdW5jdGlvbihlLHQscil7dmFyIG49dGhpczt0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwicmF3T25FbmRcIixlLHQsciksdGhpcy5jb21wbGV0ZWR8fCh0aGlzLmNvbXBsZXRlZD0hMCx0aGlzLm9uRW5kQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obyl7aWYoIW4uY2xvc2VkKXRyeXtvKGUsdCxyKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfX0pKX0sZS5wcm90b3R5cGUucmF3T25IZWFkZXJzPWZ1bmN0aW9uKGUpe3RoaXMucHJvcHMuZGVidWcmJmkuZGVidWcoXCJyYXdPbkhlYWRlcnNcIixlKSx0aGlzLmNvbXBsZXRlZHx8dGhpcy5vbkhlYWRlcnNDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbih0KXt0cnl7dChlKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfX0pfSxlLnByb3RvdHlwZS5yYXdPbkVycm9yPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbz10aGlzO3ZvaWQgMD09PXImJihyPW5ldyBuLk1ldGFkYXRhKSx0aGlzLnByb3BzLmRlYnVnJiZpLmRlYnVnKFwicmF3T25FcnJvclwiLGUsdCksdGhpcy5jb21wbGV0ZWR8fCh0aGlzLmNvbXBsZXRlZD0hMCx0aGlzLm9uRW5kQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7aWYoIW8uY2xvc2VkKXRyeXtuKGUsdCxyKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfX0pKX0sZS5wcm90b3R5cGUucmF3T25NZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy5wcm9wcy5kZWJ1ZyYmaS5kZWJ1ZyhcInJhd09uTWVzc2FnZVwiLGUudG9PYmplY3QoKSksdGhpcy5jb21wbGV0ZWR8fHRoaXMuY2xvc2VkfHx0aGlzLm9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe2lmKCF0LmNsb3NlZCl0cnl7cihlKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfX0pfSxlLnByb3RvdHlwZS5vbkhlYWRlcnM9ZnVuY3Rpb24oZSl7dGhpcy5vbkhlYWRlcnNDYWxsYmFja3MucHVzaChlKX0sZS5wcm90b3R5cGUub25NZXNzYWdlPWZ1bmN0aW9uKGUpe3RoaXMub25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goZSl9LGUucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe3RoaXMub25FbmRDYWxsYmFja3MucHVzaChlKX0sZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oZSl7aWYodGhpcy5zdGFydGVkKXRocm93IG5ldyBFcnJvcihcIkNsaWVudCBhbHJlYWR5IHN0YXJ0ZWQgLSBjYW5ub3QgLnN0YXJ0KClcIik7dGhpcy5zdGFydGVkPSEwO3ZhciB0PW5ldyBuLk1ldGFkYXRhKGV8fHt9KTt0LnNldChcImNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24vZ3JwYy13ZWIrcHJvdG9cIiksdC5zZXQoXCJ4LWdycGMtd2ViXCIsXCIxXCIpLHRoaXMudHJhbnNwb3J0LnN0YXJ0KHQpfSxlLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGUpe2lmKCF0aGlzLnN0YXJ0ZWQpdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IG5vdCBzdGFydGVkIC0gLnN0YXJ0KCkgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIC5zZW5kKClcIik7aWYodGhpcy5jbG9zZWQpdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IGFscmVhZHkgY2xvc2VkIC0gY2Fubm90IC5zZW5kKClcIik7aWYodGhpcy5maW5pc2hlZFNlbmRpbmcpdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IGFscmVhZHkgZmluaXNoZWQgc2VuZGluZyAtIGNhbm5vdCAuc2VuZCgpXCIpO2lmKCF0aGlzLm1ldGhvZERlZmluaXRpb24ucmVxdWVzdFN0cmVhbSYmdGhpcy5zZW50Rmlyc3RNZXNzYWdlKXRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgYWxyZWFkeSBzZW50IGZvciBub24tY2xpZW50LXN0cmVhbWluZyBtZXRob2QgLSBjYW5ub3QgLnNlbmQoKVwiKTt0aGlzLnNlbnRGaXJzdE1lc3NhZ2U9ITA7dmFyIHQ9dS5mcmFtZVJlcXVlc3QoZSk7dGhpcy50cmFuc3BvcnQuc2VuZE1lc3NhZ2UodCl9LGUucHJvdG90eXBlLmZpbmlzaFNlbmQ9ZnVuY3Rpb24oKXtpZighdGhpcy5zdGFydGVkKXRocm93IG5ldyBFcnJvcihcIkNsaWVudCBub3Qgc3RhcnRlZCAtIC5maW5pc2hTZW5kKCkgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIC5jbG9zZSgpXCIpO2lmKHRoaXMuY2xvc2VkKXRocm93IG5ldyBFcnJvcihcIkNsaWVudCBhbHJlYWR5IGNsb3NlZCAtIGNhbm5vdCAuc2VuZCgpXCIpO2lmKHRoaXMuZmluaXNoZWRTZW5kaW5nKXRocm93IG5ldyBFcnJvcihcIkNsaWVudCBhbHJlYWR5IGZpbmlzaGVkIHNlbmRpbmcgLSBjYW5ub3QgLmZpbmlzaFNlbmQoKVwiKTt0aGlzLmZpbmlzaGVkU2VuZGluZz0hMCx0aGlzLnRyYW5zcG9ydC5maW5pc2hTZW5kKCl9LGUucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuc3RhcnRlZCl0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgbm90IHN0YXJ0ZWQgLSAuc3RhcnQoKSBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgLmNsb3NlKClcIik7aWYodGhpcy5jbG9zZWQpdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IGFscmVhZHkgY2xvc2VkIC0gY2Fubm90IC5jbG9zZSgpXCIpO3RoaXMuY2xvc2VkPSEwLHRoaXMucHJvcHMuZGVidWcmJmkuZGVidWcoXCJyZXF1ZXN0LmFib3J0IGFib3J0aW5nIHJlcXVlc3RcIiksdGhpcy50cmFuc3BvcnQuY2FuY2VsKCl9LGV9KCk7ZnVuY3Rpb24gYyhlKXt2YXIgdD1lLmdldChcImdycGMtc3RhdHVzXCIpfHxbXTtpZih0Lmxlbmd0aD4wKXRyeXt2YXIgcj10WzBdO3JldHVybiBwYXJzZUludChyLDEwKX1jYXRjaChlKXtyZXR1cm4gbnVsbH1yZXR1cm4gbnVsbH19LGZ1bmN0aW9uKGUsdCxyKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuaT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTEpfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMyk7dmFyIG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dm9pZCAwPT09ZSYmKGU9e30pLHZvaWQgMD09PXQmJih0PXtzcGxpdFZhbHVlczohMX0pO3ZhciByLG89dGhpcztpZih0aGlzLmhlYWRlcnNNYXA9e30sZSlpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgSGVhZGVycyYmZSBpbnN0YW5jZW9mIEhlYWRlcnMpbi5nZXRIZWFkZXJLZXlzKGUpLmZvckVhY2goZnVuY3Rpb24ocil7bi5nZXRIZWFkZXJWYWx1ZXMoZSxyKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Quc3BsaXRWYWx1ZXM/by5hcHBlbmQocixuLnNwbGl0SGVhZGVyVmFsdWUoZSkpOm8uYXBwZW5kKHIsZSl9KX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mKHI9ZSkmJlwib2JqZWN0XCI9PXR5cGVvZiByLmhlYWRlcnNNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIuZm9yRWFjaCllLmZvckVhY2goZnVuY3Rpb24oZSx0KXtvLmFwcGVuZChlLHQpfSk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwJiZlIGluc3RhbmNlb2YgTWFwKXtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtvLmFwcGVuZCh0LGUpfSl9ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBlP3RoaXMuYXBwZW5kRnJvbVN0cmluZyhlKTpcIm9iamVjdFwiPT10eXBlb2YgZSYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj1lW3RdO0FycmF5LmlzQXJyYXkocik/ci5mb3JFYWNoKGZ1bmN0aW9uKGUpe28uYXBwZW5kKHQsZSl9KTpvLmFwcGVuZCh0LHIpfSl9cmV0dXJuIGUucHJvdG90eXBlLmFwcGVuZEZyb21TdHJpbmc9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCJcXHJcXG5cIikscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdLG89bi5pbmRleE9mKFwiOlwiKTtpZihvPjApe3ZhciBzPW4uc3Vic3RyaW5nKDAsbykudHJpbSgpLGk9bi5zdWJzdHJpbmcobysxKS50cmltKCk7dGhpcy5hcHBlbmQocyxpKX19fSxlLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSx0KXt2YXIgcj1uLm5vcm1hbGl6ZU5hbWUoZSk7aWYodm9pZCAwPT09dClkZWxldGUgdGhpcy5oZWFkZXJzTWFwW3JdO2Vsc2V7dmFyIG89dGhpcy5oZWFkZXJzTWFwW3JdO2lmKG8pe3ZhciBzPW8uaW5kZXhPZih0KTtzPj0wJiZvLnNwbGljZShzLDEpLDA9PT1vLmxlbmd0aCYmZGVsZXRlIHRoaXMuaGVhZGVyc01hcFtyXX19fSxlLnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLG89bi5ub3JtYWxpemVOYW1lKGUpO0FycmF5LmlzQXJyYXkodGhpcy5oZWFkZXJzTWFwW29dKXx8KHRoaXMuaGVhZGVyc01hcFtvXT1bXSksQXJyYXkuaXNBcnJheSh0KT90LmZvckVhY2goZnVuY3Rpb24oZSl7ci5oZWFkZXJzTWFwW29dLnB1c2gobi5ub3JtYWxpemVWYWx1ZShlKSl9KTp0aGlzLmhlYWRlcnNNYXBbb10ucHVzaChuLm5vcm1hbGl6ZVZhbHVlKHQpKX0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9bi5ub3JtYWxpemVOYW1lKGUpO2lmKEFycmF5LmlzQXJyYXkodCkpe3ZhciBvPVtdO3QuZm9yRWFjaChmdW5jdGlvbihlKXtvLnB1c2gobi5ub3JtYWxpemVWYWx1ZShlKSl9KSx0aGlzLmhlYWRlcnNNYXBbcl09b31lbHNlIHRoaXMuaGVhZGVyc01hcFtyXT1bbi5ub3JtYWxpemVWYWx1ZSh0KV19LGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuaGVhZGVyc01hcFtuLm5vcm1hbGl6ZU5hbWUoZSldO2lmKCFBcnJheS5pc0FycmF5KHIpKXJldHVybiExO2lmKHZvaWQgMCE9PXQpe3ZhciBvPW4ubm9ybWFsaXplVmFsdWUodCk7cmV0dXJuIHIuaW5kZXhPZihvKT49MH1yZXR1cm4hMH0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaGVhZGVyc01hcFtuLm5vcm1hbGl6ZU5hbWUoZSldO3JldHVybiB2b2lkIDAhPT10P3QuY29uY2F0KCk6W119LGUucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmhlYWRlcnNNYXApLmZvckVhY2goZnVuY3Rpb24ocil7ZShyLHQuaGVhZGVyc01hcFtyXSl9LHRoaXMpfSxlLnByb3RvdHlwZS50b0hlYWRlcnM9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgSGVhZGVycyl7dmFyIGU9bmV3IEhlYWRlcnM7cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbih0LHIpe3IuZm9yRWFjaChmdW5jdGlvbihyKXtlLmFwcGVuZCh0LHIpfSl9KSxlfXRocm93IG5ldyBFcnJvcihcIkhlYWRlcnMgY2xhc3MgaXMgbm90IGRlZmluZWRcIil9LGV9KCk7dC5Ccm93c2VySGVhZGVycz1vfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigwKTt0LkJyb3dzZXJIZWFkZXJzPW4uQnJvd3NlckhlYWRlcnN9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lml0ZXJhdGVIZWFkZXJzPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPWVbU3ltYm9sLml0ZXJhdG9yXSgpLG49ci5uZXh0KCk7IW4uZG9uZTspdChuLnZhbHVlWzBdKSxuPXIubmV4dCgpfSx0Lml0ZXJhdGVIZWFkZXJzS2V5cz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj1lLmtleXMoKSxuPXIubmV4dCgpOyFuLmRvbmU7KXQobi52YWx1ZSksbj1yLm5leHQoKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDIpO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGV9dC5ub3JtYWxpemVOYW1lPWZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYoZT1TdHJpbmcoZSkpLC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZVwiKTtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpfSx0Lm5vcm1hbGl6ZVZhbHVlPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYoZT1TdHJpbmcoZSkpLGV9LHQuZ2V0SGVhZGVyVmFsdWVzPWZ1bmN0aW9uKGUsdCl7dmFyIHI9byhlKTtpZihyIGluc3RhbmNlb2YgSGVhZGVycyYmci5nZXRBbGwpcmV0dXJuIHIuZ2V0QWxsKHQpO3ZhciBuPXIuZ2V0KHQpO3JldHVybiBuJiZcInN0cmluZ1wiPT10eXBlb2Ygbj9bbl06bn0sdC5nZXRIZWFkZXJLZXlzPWZ1bmN0aW9uKGUpe3ZhciB0PW8oZSkscj17fSxzPVtdO3JldHVybiB0LmtleXM/bi5pdGVyYXRlSGVhZGVyc0tleXModCxmdW5jdGlvbihlKXtyW2VdfHwocltlXT0hMCxzLnB1c2goZSkpfSk6dC5mb3JFYWNoP3QuZm9yRWFjaChmdW5jdGlvbihlLHQpe3JbdF18fChyW3RdPSEwLHMucHVzaCh0KSl9KTpuLml0ZXJhdGVIZWFkZXJzKHQsZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXTtyW3RdfHwoclt0XT0hMCxzLnB1c2godCkpfSksc30sdC5zcGxpdEhlYWRlclZhbHVlPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiBlLnNwbGl0KFwiLCBcIikuZm9yRWFjaChmdW5jdGlvbihlKXtlLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QucHVzaChlKX0pfSksdH19XSl9LGUuZXhwb3J0cz1uKCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDUpLG89ZnVuY3Rpb24oZSl7cmV0dXJuIG4uQ3Jvc3NCcm93c2VySHR0cFRyYW5zcG9ydCh7d2l0aENyZWRlbnRpYWxzOiExfSkoZSl9O3Quc2V0RGVmYXVsdFRyYW5zcG9ydEZhY3Rvcnk9ZnVuY3Rpb24oZSl7bz1lfSx0Lm1ha2VEZWZhdWx0VHJhbnNwb3J0PWZ1bmN0aW9uKGUpe3JldHVybiBvKGUpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoNiksbz1yKDcpO3QuQ3Jvc3NCcm93c2VySHR0cFRyYW5zcG9ydD1mdW5jdGlvbihlKXtpZihuLmRldGVjdEZldGNoU3VwcG9ydCgpKXt2YXIgdD17Y3JlZGVudGlhbHM6ZS53aXRoQ3JlZGVudGlhbHM/XCJpbmNsdWRlXCI6XCJzYW1lLW9yaWdpblwifTtyZXR1cm4gbi5GZXRjaFJlYWRhYmxlU3RyZWFtVHJhbnNwb3J0KHQpfXJldHVybiBvLlhoclRyYW5zcG9ydCh7d2l0aENyZWRlbnRpYWxzOmUud2l0aENyZWRlbnRpYWxzfSl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoMCkscz1yKDEpO3QuRmV0Y2hSZWFkYWJsZVN0cmVhbVRyYW5zcG9ydD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZGVidWcmJnMuZGVidWcoXCJmZXRjaFJlcXVlc3RcIixlKSxuZXcgaShlLHQpfSh0LGUpfX07dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5jYW5jZWxsZWQ9ITEsdGhpcy5jb250cm9sbGVyPXNlbGYuQWJvcnRDb250cm9sbGVyJiZuZXcgQWJvcnRDb250cm9sbGVyLHRoaXMub3B0aW9ucz1lLHRoaXMuaW5pdD10fXJldHVybiBlLnByb3RvdHlwZS5wdW1wPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcztpZih0aGlzLnJlYWRlcj1lLHRoaXMuY2FuY2VsbGVkKXJldHVybiB0aGlzLm9wdGlvbnMuZGVidWcmJnMuZGVidWcoXCJGZXRjaC5wdW1wLmNhbmNlbCBhdCBmaXJzdCBwdW1wXCIpLHZvaWQgdGhpcy5yZWFkZXIuY2FuY2VsKCk7dGhpcy5yZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24oZSl7aWYoZS5kb25lKXJldHVybiByLm9wdGlvbnMub25FbmQoKSx0O3Iub3B0aW9ucy5vbkNodW5rKGUudmFsdWUpLHIucHVtcChyLnJlYWRlcix0KX0pLmNhdGNoKGZ1bmN0aW9uKGUpe3IuY2FuY2VsbGVkP3Iub3B0aW9ucy5kZWJ1ZyYmcy5kZWJ1ZyhcIkZldGNoLmNhdGNoIC0gcmVxdWVzdCBjYW5jZWxsZWRcIik6KHIuY2FuY2VsbGVkPSEwLHIub3B0aW9ucy5kZWJ1ZyYmcy5kZWJ1ZyhcIkZldGNoLmNhdGNoXCIsZS5tZXNzYWdlKSxyLm9wdGlvbnMub25FbmQoZSkpfSl9LGUucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztmZXRjaCh0aGlzLm9wdGlvbnMudXJsLG4oe30sdGhpcy5pbml0LHtoZWFkZXJzOnRoaXMubWV0YWRhdGEudG9IZWFkZXJzKCksbWV0aG9kOlwiUE9TVFwiLGJvZHk6ZSxzaWduYWw6dGhpcy5jb250cm9sbGVyJiZ0aGlzLmNvbnRyb2xsZXIuc2lnbmFsfSkpLnRoZW4oZnVuY3Rpb24oZSl7aWYodC5vcHRpb25zLmRlYnVnJiZzLmRlYnVnKFwiRmV0Y2gucmVzcG9uc2VcIixlKSx0Lm9wdGlvbnMub25IZWFkZXJzKG5ldyBvLk1ldGFkYXRhKGUuaGVhZGVycyksZS5zdGF0dXMpLCFlLmJvZHkpcmV0dXJuIGU7dC5wdW1wKGUuYm9keS5nZXRSZWFkZXIoKSxlKX0pLmNhdGNoKGZ1bmN0aW9uKGUpe3QuY2FuY2VsbGVkP3Qub3B0aW9ucy5kZWJ1ZyYmcy5kZWJ1ZyhcIkZldGNoLmNhdGNoIC0gcmVxdWVzdCBjYW5jZWxsZWRcIik6KHQuY2FuY2VsbGVkPSEwLHQub3B0aW9ucy5kZWJ1ZyYmcy5kZWJ1ZyhcIkZldGNoLmNhdGNoXCIsZS5tZXNzYWdlKSx0Lm9wdGlvbnMub25FbmQoZSkpfSl9LGUucHJvdG90eXBlLnNlbmRNZXNzYWdlPWZ1bmN0aW9uKGUpe3RoaXMuc2VuZChlKX0sZS5wcm90b3R5cGUuZmluaXNoU2VuZD1mdW5jdGlvbigpe30sZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oZSl7dGhpcy5tZXRhZGF0YT1lfSxlLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbGxlZD90aGlzLm9wdGlvbnMuZGVidWcmJnMuZGVidWcoXCJGZXRjaC5hYm9ydC5jYW5jZWwgYWxyZWFkeSBjYW5jZWxsZWRcIik6KHRoaXMuY2FuY2VsbGVkPSEwLHRoaXMucmVhZGVyPyh0aGlzLm9wdGlvbnMuZGVidWcmJnMuZGVidWcoXCJGZXRjaC5hYm9ydC5jYW5jZWxcIiksdGhpcy5yZWFkZXIuY2FuY2VsKCkpOnRoaXMub3B0aW9ucy5kZWJ1ZyYmcy5kZWJ1ZyhcIkZldGNoLmFib3J0LmNhbmNlbCBiZWZvcmUgcmVhZGVyXCIpLHRoaXMuY29udHJvbGxlciYmdGhpcy5jb250cm9sbGVyLmFib3J0KCkpfSxlfSgpO3QuZGV0ZWN0RmV0Y2hTdXBwb3J0PWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlc3BvbnNlJiZSZXNwb25zZS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoXCJib2R5XCIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBIZWFkZXJzfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuLG89dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKGVbcl09dFtyXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPWV9bihlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KHIucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyByKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPXIoMCksaT1yKDEpLGE9cigxMSk7dC5YaHJUcmFuc3BvcnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKGEuZGV0ZWN0TW96WEhSU3VwcG9ydCgpKXJldHVybiBuZXcgZCh0LGUpO2lmKGEuZGV0ZWN0WEhST3ZlcnJpZGVNaW1lVHlwZVN1cHBvcnQoKSlyZXR1cm4gbmV3IHUodCxlKTt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50J3MgWEhSIGltcGxlbWVudGF0aW9uIGNhbm5vdCBzdXBwb3J0IGJpbmFyeSB0cmFuc2Zlci5cIil9fTt2YXIgdT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLm9wdGlvbnM9ZSx0aGlzLmluaXQ9dH1yZXR1cm4gZS5wcm90b3R5cGUub25Qcm9ncmVzc0V2ZW50PWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRlYnVnJiZpLmRlYnVnKFwiWEhSLm9uUHJvZ3Jlc3NFdmVudC5sZW5ndGg6IFwiLHRoaXMueGhyLnJlc3BvbnNlLmxlbmd0aCk7dmFyIGU9dGhpcy54aHIucmVzcG9uc2Uuc3Vic3RyKHRoaXMuaW5kZXgpO3RoaXMuaW5kZXg9dGhpcy54aHIucmVzcG9uc2UubGVuZ3RoO3ZhciB0PXAoZSk7dGhpcy5vcHRpb25zLm9uQ2h1bmsodCl9LGUucHJvdG90eXBlLm9uTG9hZEV2ZW50PWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRlYnVnJiZpLmRlYnVnKFwiWEhSLm9uTG9hZEV2ZW50XCIpLHRoaXMub3B0aW9ucy5vbkVuZCgpfSxlLnByb3RvdHlwZS5vblN0YXRlQ2hhbmdlPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRlYnVnJiZpLmRlYnVnKFwiWEhSLm9uU3RhdGVDaGFuZ2VcIix0aGlzLnhoci5yZWFkeVN0YXRlKSx0aGlzLnhoci5yZWFkeVN0YXRlPT09WE1MSHR0cFJlcXVlc3QuSEVBREVSU19SRUNFSVZFRCYmdGhpcy5vcHRpb25zLm9uSGVhZGVycyhuZXcgcy5NZXRhZGF0YSh0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksdGhpcy54aHIuc3RhdHVzKX0sZS5wcm90b3R5cGUuc2VuZE1lc3NhZ2U9ZnVuY3Rpb24oZSl7dGhpcy54aHIuc2VuZChlKX0sZS5wcm90b3R5cGUuZmluaXNoU2VuZD1mdW5jdGlvbigpe30sZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLm1ldGFkYXRhPWU7dmFyIHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3RoaXMueGhyPXIsci5vcGVuKFwiUE9TVFwiLHRoaXMub3B0aW9ucy51cmwpLHRoaXMuY29uZmlndXJlWGhyKCksdGhpcy5tZXRhZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ci5zZXRSZXF1ZXN0SGVhZGVyKGUsdC5qb2luKFwiLCBcIikpfSksci53aXRoQ3JlZGVudGlhbHM9Qm9vbGVhbih0aGlzLmluaXQud2l0aENyZWRlbnRpYWxzKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcykpLHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsdGhpcy5vblByb2dyZXNzRXZlbnQuYmluZCh0aGlzKSksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLHRoaXMub25Mb2FkRXZlbnQuYmluZCh0aGlzKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0Lm9wdGlvbnMuZGVidWcmJmkuZGVidWcoXCJYSFIuZXJyb3JcIixlKSx0Lm9wdGlvbnMub25FbmQoZS5lcnJvcil9KX0sZS5wcm90b3R5cGUuY29uZmlndXJlWGhyPWZ1bmN0aW9uKCl7dGhpcy54aHIucmVzcG9uc2VUeXBlPVwidGV4dFwiLHRoaXMueGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkXCIpfSxlLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZGVidWcmJmkuZGVidWcoXCJYSFIuYWJvcnRcIiksdGhpcy54aHIuYWJvcnQoKX0sZX0oKTt0LlhIUj11O3ZhciBkPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbnVsbCE9PWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfXJldHVybiBvKHQsZSksdC5wcm90b3R5cGUuY29uZmlndXJlWGhyPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRlYnVnJiZpLmRlYnVnKFwiTW96WEhSLmNvbmZpZ3VyZVhocjogc2V0dGluZyByZXNwb25zZVR5cGUgdG8gJ21vei1jaHVua2VkLWFycmF5YnVmZmVyJ1wiKSx0aGlzLnhoci5yZXNwb25zZVR5cGU9XCJtb3otY2h1bmtlZC1hcnJheWJ1ZmZlclwifSx0LnByb3RvdHlwZS5vblByb2dyZXNzRXZlbnQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnhoci5yZXNwb25zZTt0aGlzLm9wdGlvbnMuZGVidWcmJmkuZGVidWcoXCJNb3pYSFIub25Qcm9ncmVzc0V2ZW50OiBcIixuZXcgVWludDhBcnJheShlKSksdGhpcy5vcHRpb25zLm9uQ2h1bmsobmV3IFVpbnQ4QXJyYXkoZSkpfSx0fSh1KTtmdW5jdGlvbiBjKGUsdCl7dmFyIHI9ZS5jaGFyQ29kZUF0KHQpO2lmKHI+PTU1Mjk2JiZyPD01NjMxOSl7dmFyIG49ZS5jaGFyQ29kZUF0KHQrMSk7bj49NTYzMjAmJm48PTU3MzQzJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSl9cmV0dXJuIHJ9ZnVuY3Rpb24gcChlKXtmb3IodmFyIHQ9bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpLHI9MCxuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPVN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQ/ZS5jb2RlUG9pbnRBdChuKTpjKGUsbik7dFtyKytdPTI1NSZvfXJldHVybiB0fXQuTW96Q2h1bmtlZEFycmF5QnVmZmVyWEhSPWQsdC5zdHJpbmdUb0FycmF5QnVmZmVyPXB9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbixvPXIoMCkscz1mdW5jdGlvbihlKXtyZXR1cm4gOT09PWV8fDEwPT09ZXx8MTM9PT1lfTtmdW5jdGlvbiBpKGUpe3JldHVybiBzKGUpfHxlPj0zMiYmZTw9MTI2fWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PTA7dCE9PWUubGVuZ3RoOysrdClpZighaShlW3RdKSl0aHJvdyBuZXcgRXJyb3IoXCJNZXRhZGF0YSBpcyBub3QgdmFsaWQgKHByaW50YWJsZSkgQVNDSUlcIik7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpKX1mdW5jdGlvbiB1KGUpe3JldHVybiAxMjg9PSgxMjgmZS5nZXRVaW50OCgwKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gZS5nZXRVaW50MzIoMSwhMSl9ZnVuY3Rpb24gYyhlLHQscil7cmV0dXJuIGUuYnl0ZUxlbmd0aC10Pj1yfWZ1bmN0aW9uIHAoZSx0LHIpe2lmKGUuc2xpY2UpcmV0dXJuIGUuc2xpY2UodCxyKTt2YXIgbj1lLmxlbmd0aDt2b2lkIDAhPT1yJiYobj1yKTtmb3IodmFyIG89bmV3IFVpbnQ4QXJyYXkobi10KSxzPTAsaT10O2k8bjtpKyspb1tzKytdPWVbaV07cmV0dXJuIG99dC5kZWNvZGVBU0NJST1hLHQuZW5jb2RlQVNDSUk9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSxyPTA7ciE9PWUubGVuZ3RoOysrcil7dmFyIG49ZS5jaGFyQ29kZUF0KHIpO2lmKCFpKG4pKXRocm93IG5ldyBFcnJvcihcIk1ldGFkYXRhIGNvbnRhaW5zIGludmFsaWQgQVNDSUlcIik7dFtyXT1ufXJldHVybiB0fSxmdW5jdGlvbihlKXtlW2UuTUVTU0FHRT0xXT1cIk1FU1NBR0VcIixlW2UuVFJBSUxFUlM9Ml09XCJUUkFJTEVSU1wifShuPXQuQ2h1bmtUeXBlfHwodC5DaHVua1R5cGU9e30pKTt2YXIgaD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLmJ1ZmZlcj1udWxsLHRoaXMucG9zaXRpb249MH1yZXR1cm4gZS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24oZSx0KXtpZigwPT09ZS5sZW5ndGgmJnQpcmV0dXJuW107dmFyIHIscz1bXTtpZihudWxsPT10aGlzLmJ1ZmZlcil0aGlzLmJ1ZmZlcj1lLHRoaXMucG9zaXRpb249MDtlbHNlIGlmKHRoaXMucG9zaXRpb249PT10aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKXRoaXMuYnVmZmVyPWUsdGhpcy5wb3NpdGlvbj0wO2Vsc2V7dmFyIGk9dGhpcy5idWZmZXIuYnl0ZUxlbmd0aC10aGlzLnBvc2l0aW9uLGg9bmV3IFVpbnQ4QXJyYXkoaStlLmJ5dGVMZW5ndGgpLGY9cCh0aGlzLmJ1ZmZlcix0aGlzLnBvc2l0aW9uKTtoLnNldChmLDApO3ZhciBsPW5ldyBVaW50OEFycmF5KGUpO2guc2V0KGwsaSksdGhpcy5idWZmZXI9aCx0aGlzLnBvc2l0aW9uPTB9Zm9yKDs7KXtpZighYyh0aGlzLmJ1ZmZlcix0aGlzLnBvc2l0aW9uLDUpKXJldHVybiBzO3ZhciBnPXAodGhpcy5idWZmZXIsdGhpcy5wb3NpdGlvbix0aGlzLnBvc2l0aW9uKzUpLGI9bmV3IERhdGFWaWV3KGcuYnVmZmVyLGcuYnl0ZU9mZnNldCxnLmJ5dGVMZW5ndGgpLHk9ZChiKTtpZighYyh0aGlzLmJ1ZmZlcix0aGlzLnBvc2l0aW9uLDUreSkpcmV0dXJuIHM7dmFyIHY9cCh0aGlzLmJ1ZmZlcix0aGlzLnBvc2l0aW9uKzUsdGhpcy5wb3NpdGlvbis1K3kpO2lmKHRoaXMucG9zaXRpb24rPTUreSx1KGIpKXJldHVybiBzLnB1c2goe2NodW5rVHlwZTpuLlRSQUlMRVJTLHRyYWlsZXJzOihyPXYsbmV3IG8uTWV0YWRhdGEoYShyKSkpfSkscztzLnB1c2goe2NodW5rVHlwZTpuLk1FU1NBR0UsZGF0YTp2fSl9fSxlfSgpO3QuQ2h1bmtQYXJzZXI9aH0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKGUpe2VbZS5PSz0wXT1cIk9LXCIsZVtlLkNhbmNlbGVkPTFdPVwiQ2FuY2VsZWRcIixlW2UuVW5rbm93bj0yXT1cIlVua25vd25cIixlW2UuSW52YWxpZEFyZ3VtZW50PTNdPVwiSW52YWxpZEFyZ3VtZW50XCIsZVtlLkRlYWRsaW5lRXhjZWVkZWQ9NF09XCJEZWFkbGluZUV4Y2VlZGVkXCIsZVtlLk5vdEZvdW5kPTVdPVwiTm90Rm91bmRcIixlW2UuQWxyZWFkeUV4aXN0cz02XT1cIkFscmVhZHlFeGlzdHNcIixlW2UuUGVybWlzc2lvbkRlbmllZD03XT1cIlBlcm1pc3Npb25EZW5pZWRcIixlW2UuUmVzb3VyY2VFeGhhdXN0ZWQ9OF09XCJSZXNvdXJjZUV4aGF1c3RlZFwiLGVbZS5GYWlsZWRQcmVjb25kaXRpb249OV09XCJGYWlsZWRQcmVjb25kaXRpb25cIixlW2UuQWJvcnRlZD0xMF09XCJBYm9ydGVkXCIsZVtlLk91dE9mUmFuZ2U9MTFdPVwiT3V0T2ZSYW5nZVwiLGVbZS5VbmltcGxlbWVudGVkPTEyXT1cIlVuaW1wbGVtZW50ZWRcIixlW2UuSW50ZXJuYWw9MTNdPVwiSW50ZXJuYWxcIixlW2UuVW5hdmFpbGFibGU9MTRdPVwiVW5hdmFpbGFibGVcIixlW2UuRGF0YUxvc3M9MTVdPVwiRGF0YUxvc3NcIixlW2UuVW5hdXRoZW50aWNhdGVkPTE2XT1cIlVuYXV0aGVudGljYXRlZFwifShuPXQuQ29kZXx8KHQuQ29kZT17fSkpLHQuaHR0cFN0YXR1c1RvQ29kZT1mdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZSAwOnJldHVybiBuLkludGVybmFsO2Nhc2UgMjAwOnJldHVybiBuLk9LO2Nhc2UgNDAwOnJldHVybiBuLkludmFsaWRBcmd1bWVudDtjYXNlIDQwMTpyZXR1cm4gbi5VbmF1dGhlbnRpY2F0ZWQ7Y2FzZSA0MDM6cmV0dXJuIG4uUGVybWlzc2lvbkRlbmllZDtjYXNlIDQwNDpyZXR1cm4gbi5Ob3RGb3VuZDtjYXNlIDQwOTpyZXR1cm4gbi5BYm9ydGVkO2Nhc2UgNDEyOnJldHVybiBuLkZhaWxlZFByZWNvbmRpdGlvbjtjYXNlIDQyOTpyZXR1cm4gbi5SZXNvdXJjZUV4aGF1c3RlZDtjYXNlIDQ5OTpyZXR1cm4gbi5DYW5jZWxlZDtjYXNlIDUwMDpyZXR1cm4gbi5Vbmtub3duO2Nhc2UgNTAxOnJldHVybiBuLlVuaW1wbGVtZW50ZWQ7Y2FzZSA1MDM6cmV0dXJuIG4uVW5hdmFpbGFibGU7Y2FzZSA1MDQ6cmV0dXJuIG4uRGVhZGxpbmVFeGNlZWRlZDtkZWZhdWx0OnJldHVybiBuLlVua25vd259fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMyksbz1yKDQpLHM9cig2KSxpPXIoMTIpLGE9cig3KSx1PXIoNSksZD1yKDkpLGM9cigxMykscD1yKDE1KSxoPXIoMik7IWZ1bmN0aW9uKGUpe2Uuc2V0RGVmYXVsdFRyYW5zcG9ydD1vLnNldERlZmF1bHRUcmFuc3BvcnRGYWN0b3J5LGUuQ3Jvc3NCcm93c2VySHR0cFRyYW5zcG9ydD11LkNyb3NzQnJvd3Nlckh0dHBUcmFuc3BvcnQsZS5GZXRjaFJlYWRhYmxlU3RyZWFtVHJhbnNwb3J0PXMuRmV0Y2hSZWFkYWJsZVN0cmVhbVRyYW5zcG9ydCxlLlhoclRyYW5zcG9ydD1hLlhoclRyYW5zcG9ydCxlLldlYnNvY2tldFRyYW5zcG9ydD1pLldlYnNvY2tldFRyYW5zcG9ydCxlLkNvZGU9ZC5Db2RlLGUuTWV0YWRhdGE9bi5Ccm93c2VySGVhZGVycyxlLmNsaWVudD1mdW5jdGlvbihlLHQpe3JldHVybiBoLmNsaWVudChlLHQpfSxlLmludm9rZT1jLmludm9rZSxlLnVuYXJ5PXAudW5hcnl9KHQuZ3JwY3x8KHQuZ3JwYz17fSkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG47ZnVuY3Rpb24gbygpe2lmKHZvaWQgMCE9PW4pcmV0dXJuIG47aWYoWE1MSHR0cFJlcXVlc3Qpe249bmV3IFhNTEh0dHBSZXF1ZXN0O3RyeXtuLm9wZW4oXCJHRVRcIixcImh0dHBzOi8vbG9jYWxob3N0XCIpfWNhdGNoKGUpe319cmV0dXJuIG59ZnVuY3Rpb24gcyhlKXt2YXIgdD1vKCk7aWYoIXQpcmV0dXJuITE7dHJ5e3JldHVybiB0LnJlc3BvbnNlVHlwZT1lLHQucmVzcG9uc2VUeXBlPT09ZX1jYXRjaChlKXt9cmV0dXJuITF9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC54aHJTdXBwb3J0c1Jlc3BvbnNlVHlwZT1zLHQuZGV0ZWN0TW96WEhSU3VwcG9ydD1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBYTUxIdHRwUmVxdWVzdCYmcyhcIm1vei1jaHVua2VkLWFycmF5YnVmZmVyXCIpfSx0LmRldGVjdFhIUk92ZXJyaWRlTWltZVR5cGVTdXBwb3J0PWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhNTEh0dHBSZXF1ZXN0JiZYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoXCJvdmVycmlkZU1pbWVUeXBlXCIpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuLG89cigxKSxzPXIoOCk7IWZ1bmN0aW9uKGUpe2VbZS5GSU5JU0hfU0VORD0xXT1cIkZJTklTSF9TRU5EXCJ9KG58fChuPXt9KSk7dmFyIGk9bmV3IFVpbnQ4QXJyYXkoWzFdKTt0LldlYnNvY2tldFRyYW5zcG9ydD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZS5kZWJ1ZyYmby5kZWJ1ZyhcIndlYnNvY2tldFJlcXVlc3RcIixlKTt2YXIgdCxyPWZ1bmN0aW9uKGUpe2lmKFwiaHR0cHM6Ly9cIj09PWUuc3Vic3RyKDAsOCkpcmV0dXJuXCJ3c3M6Ly9cIitlLnN1YnN0cig4KTtpZihcImh0dHA6Ly9cIj09PWUuc3Vic3RyKDAsNykpcmV0dXJuXCJ3czovL1wiK2Uuc3Vic3RyKDcpO3Rocm93IG5ldyBFcnJvcihcIldlYnNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0ZWQgd2l0aCBub24taHR0cHM6Ly8gb3IgaHR0cDovLyBob3N0LlwiKX0oZS51cmwpLGE9W107ZnVuY3Rpb24gdShlKXtpZihlPT09bi5GSU5JU0hfU0VORCl0LnNlbmQoaSk7ZWxzZXt2YXIgcj1lLG89bmV3IEludDhBcnJheShyLmJ5dGVMZW5ndGgrMSk7by5zZXQobmV3IFVpbnQ4QXJyYXkoWzBdKSksby5zZXQociwxKSx0LnNlbmQobyl9fXJldHVybntzZW5kTWVzc2FnZTpmdW5jdGlvbihlKXt0JiZ0LnJlYWR5U3RhdGUhPT10LkNPTk5FQ1RJTkc/dShlKTphLnB1c2goZSl9LGZpbmlzaFNlbmQ6ZnVuY3Rpb24oKXt0JiZ0LnJlYWR5U3RhdGUhPT10LkNPTk5FQ1RJTkc/dShuLkZJTklTSF9TRU5EKTphLnB1c2gobi5GSU5JU0hfU0VORCl9LHN0YXJ0OmZ1bmN0aW9uKG4peyh0PW5ldyBXZWJTb2NrZXQocixbXCJncnBjLXdlYnNvY2tldHNcIl0pKS5iaW5hcnlUeXBlPVwiYXJyYXlidWZmZXJcIix0Lm9ub3Blbj1mdW5jdGlvbigpe3ZhciByO2UuZGVidWcmJm8uZGVidWcoXCJ3ZWJzb2NrZXRSZXF1ZXN0Lm9ub3BlblwiKSx0LnNlbmQoKHI9XCJcIixuLmZvckVhY2goZnVuY3Rpb24oZSx0KXtyKz1lK1wiOiBcIit0LmpvaW4oXCIsIFwiKStcIlxcclxcblwifSkscy5lbmNvZGVBU0NJSShyKSkpLGEuZm9yRWFjaChmdW5jdGlvbihlKXt1KGUpfSl9LHQub25jbG9zZT1mdW5jdGlvbih0KXtlLmRlYnVnJiZvLmRlYnVnKFwid2Vic29ja2V0UmVxdWVzdC5vbmNsb3NlXCIsdCksZS5vbkVuZCgpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24odCl7ZS5kZWJ1ZyYmby5kZWJ1ZyhcIndlYnNvY2tldFJlcXVlc3Qub25lcnJvclwiLHQpfSx0Lm9ubWVzc2FnZT1mdW5jdGlvbih0KXtlLm9uQ2h1bmsobmV3IFVpbnQ4QXJyYXkodC5kYXRhKSl9fSxjYW5jZWw6ZnVuY3Rpb24oKXtlLmRlYnVnJiZvLmRlYnVnKFwid2Vic29ja2V0LmFib3J0XCIpLHQuY2xvc2UoKX19fShlKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigyKTt0Lmludm9rZT1mdW5jdGlvbihlLHQpe2lmKGUucmVxdWVzdFN0cmVhbSl0aHJvdyBuZXcgRXJyb3IoXCIuaW52b2tlIGNhbm5vdCBiZSB1c2VkIHdpdGggY2xpZW50LXN0cmVhbWluZyBtZXRob2RzLiBVc2UgLmNsaWVudCBpbnN0ZWFkLlwiKTt2YXIgcj1uLmNsaWVudChlLHtob3N0OnQuaG9zdCx0cmFuc3BvcnQ6dC50cmFuc3BvcnQsZGVidWc6dC5kZWJ1Z30pO3JldHVybiB0Lm9uSGVhZGVycyYmci5vbkhlYWRlcnModC5vbkhlYWRlcnMpLHQub25NZXNzYWdlJiZyLm9uTWVzc2FnZSh0Lm9uTWVzc2FnZSksdC5vbkVuZCYmci5vbkVuZCh0Lm9uRW5kKSxyLnN0YXJ0KHQubWV0YWRhdGEpLHIuc2VuZCh0LnJlcXVlc3QpLHIuZmluaXNoU2VuZCgpLHtjbG9zZTpmdW5jdGlvbigpe3IuY2xvc2UoKX19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZnJhbWVSZXF1ZXN0PWZ1bmN0aW9uKGUpe3ZhciB0PWUuc2VyaWFsaXplQmluYXJ5KCkscj1uZXcgQXJyYXlCdWZmZXIodC5ieXRlTGVuZ3RoKzUpO3JldHVybiBuZXcgRGF0YVZpZXcociwxLDQpLnNldFVpbnQzMigwLHQubGVuZ3RoLCExKSxuZXcgVWludDhBcnJheShyLDUpLnNldCh0KSxuZXcgVWludDhBcnJheShyKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDApLG89cigyKTt0LnVuYXJ5PWZ1bmN0aW9uKGUsdCl7aWYoZS5yZXNwb25zZVN0cmVhbSl0aHJvdyBuZXcgRXJyb3IoXCIudW5hcnkgY2Fubm90IGJlIHVzZWQgd2l0aCBzZXJ2ZXItc3RyZWFtaW5nIG1ldGhvZHMuIFVzZSAuaW52b2tlIG9yIC5jbGllbnQgaW5zdGVhZC5cIik7aWYoZS5yZXF1ZXN0U3RyZWFtKXRocm93IG5ldyBFcnJvcihcIi51bmFyeSBjYW5ub3QgYmUgdXNlZCB3aXRoIGNsaWVudC1zdHJlYW1pbmcgbWV0aG9kcy4gVXNlIC5jbGllbnQgaW5zdGVhZC5cIik7dmFyIHI9bnVsbCxzPW51bGwsaT1vLmNsaWVudChlLHtob3N0OnQuaG9zdCx0cmFuc3BvcnQ6dC50cmFuc3BvcnQsZGVidWc6dC5kZWJ1Z30pO3JldHVybiBpLm9uSGVhZGVycyhmdW5jdGlvbihlKXtyPWV9KSxpLm9uTWVzc2FnZShmdW5jdGlvbihlKXtzPWV9KSxpLm9uRW5kKGZ1bmN0aW9uKGUsbyxpKXt0Lm9uRW5kKHtzdGF0dXM6ZSxzdGF0dXNNZXNzYWdlOm8saGVhZGVyczpyfHxuZXcgbi5NZXRhZGF0YSxtZXNzYWdlOnMsdHJhaWxlcnM6aX0pfSksaS5zdGFydCh0Lm1ldGFkYXRhKSxpLnNlbmQodC5yZXF1ZXN0KSxpLmZpbmlzaFNlbmQoKSx7Y2xvc2U6ZnVuY3Rpb24oKXtpLmNsb3NlKCl9fX19XSl9KTsiLCJpbXBvcnQge2dycGN9IGZyb20gXCJAaW1wcm9iYWJsZS1lbmcvZ3JwYy13ZWJcIjtcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4uLy4uLy4uL2NtZC9hdXRoL2dycGMvYXV0aF9wYl9zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YnNjcmliZX0gZnJvbSBcIi4uLy4uLy4uL3BrZy9hY2NvdW50L2R0by9hY2NvdW50X3BiXCI7XG5cbmZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgY29uc3Qgc3ViID0gbmV3IFN1YnNjcmliZSgpO1xuICBzdWIuc2V0QWxpYXMoXCJ0ZXN0X2dycGN3ZWJcIilcbiAgc3ViLnNldEVtYWlsKFwidGVzdF9ncnBjd2ViQHRlc3QuZ2dcIilcbiAgc3ViLnNldFBhc3N3b3JkKFwicGFzc3dvcmRcIilcbiAgZ3JwYy51bmFyeShBdXRoLlN1YnNjcmliZSwge1xuICAgIHJlcXVlc3Q6IHN1YixcbiAgICBob3N0OiBcImh0dHBzOi8vbG9jYWxob3N0OjgwODBcIixcbiAgICBvbkVuZDogcmVzID0+IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNNZXNzYWdlLCBoZWFkZXJzLCBtZXNzYWdlLCB0cmFpbGVycyB9ID0gcmVzO1xuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUub25FbmQuc3RhdHVzXCIsIHN0YXR1cywgc3RhdHVzTWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmliZS5vbkVuZC5oZWFkZXJzXCIsIGhlYWRlcnMpO1xuICAgICAgaWYgKHN0YXR1cyA9PT0gZ3JwYy5Db2RlLk9LICYmIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUub25FbmQubWVzc2FnZVwiLCBtZXNzYWdlLnRvT2JqZWN0KCkpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUub25FbmQudHJhaWxlcnNcIiwgdHJhaWxlcnMpO1xuICAgIC8vICAgcXVlcnlCb29rcygpO1xuICAgIH1cbiAgfSk7XG59XG5cbnN1YnNjcmliZSgpO1xuXG4vLyBmdW5jdGlvbiBxdWVyeUJvb2tzKCkge1xuLy8gICBjb25zdCBxdWVyeUJvb2tzUmVxdWVzdCA9IG5ldyBRdWVyeUJvb2tzUmVxdWVzdCgpO1xuLy8gICBxdWVyeUJvb2tzUmVxdWVzdC5zZXRBdXRob3JQcmVmaXgoXCJHZW9yXCIpO1xuLy8gICBjb25zdCBjbGllbnQgPSBncnBjLmNsaWVudChCb29rU2VydmljZS5RdWVyeUJvb2tzLCB7XG4vLyAgICAgaG9zdDogaG9zdCxcbi8vICAgfSk7XG4vLyAgIGNsaWVudC5vbkhlYWRlcnMoKGhlYWRlcnM6IGdycGMuTWV0YWRhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5Qm9va3Mub25IZWFkZXJzXCIsIGhlYWRlcnMpO1xuLy8gICB9KTtcbi8vICAgY2xpZW50Lm9uTWVzc2FnZSgobWVzc2FnZTogQm9vaykgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwicXVlcnlCb29rcy5vbk1lc3NhZ2VcIiwgbWVzc2FnZS50b09iamVjdCgpKTtcbi8vICAgfSk7XG4vLyAgIGNsaWVudC5vbkVuZCgoY29kZTogZ3JwYy5Db2RlLCBtc2c6IHN0cmluZywgdHJhaWxlcnM6IGdycGMuTWV0YWRhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5Qm9va3Mub25FbmRcIiwgY29kZSwgbXNnLCB0cmFpbGVycyk7XG4vLyAgIH0pO1xuLy8gICBjbGllbnQuc3RhcnQoKTtcbi8vICAgY2xpZW50LnNlbmQocXVlcnlCb29rc1JlcXVlc3QpO1xuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=