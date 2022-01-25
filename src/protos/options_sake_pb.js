// source: options_sake.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.squareup.sake.idempotent', null, global);
goog.exportSymbol('proto.squareup.sake.maximumRequestSize', null, global);
goog.exportSymbol('proto.squareup.sake.maximumResponseSize', null, global);
goog.exportSymbol('proto.squareup.sake.minimumDeadlineMillis', null, global);
goog.exportSymbol('proto.squareup.sake.retryTimeoutMillis', null, global);
goog.exportSymbol('proto.squareup.sake.timeout', null, global);
goog.exportSymbol('proto.squareup.sake.timeoutMillis', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `timeout`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.timeout = new jspb.ExtensionFieldInfo(
    22000,
    {timeout: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.timeout,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22000] = proto.squareup.sake.timeout;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `idempotent`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.sake.idempotent = new jspb.ExtensionFieldInfo(
    22001,
    {idempotent: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.idempotent,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22001] = proto.squareup.sake.idempotent;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `retryTimeoutMillis`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.retryTimeoutMillis = new jspb.ExtensionFieldInfo(
    22002,
    {retryTimeoutMillis: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.retryTimeoutMillis,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22002] = proto.squareup.sake.retryTimeoutMillis;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `maximumRequestSize`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.maximumRequestSize = new jspb.ExtensionFieldInfo(
    22003,
    {maximumRequestSize: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.maximumRequestSize,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22003] = proto.squareup.sake.maximumRequestSize;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `maximumResponseSize`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.maximumResponseSize = new jspb.ExtensionFieldInfo(
    22004,
    {maximumResponseSize: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.maximumResponseSize,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22004] = proto.squareup.sake.maximumResponseSize;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `minimumDeadlineMillis`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.minimumDeadlineMillis = new jspb.ExtensionFieldInfo(
    22005,
    {minimumDeadlineMillis: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22005] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.minimumDeadlineMillis,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22005] = proto.squareup.sake.minimumDeadlineMillis;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `timeoutMillis`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.sake.timeoutMillis = new jspb.ExtensionFieldInfo(
    22006,
    {timeoutMillis: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[22006] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.sake.timeoutMillis,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[22006] = proto.squareup.sake.timeoutMillis;

goog.object.extend(exports, proto.squareup.sake);
