// source: validation.proto
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
goog.exportSymbol('proto.squareup.validation.Range', null, global);
goog.exportSymbol('proto.squareup.validation.collectionSize', null, global);
goog.exportSymbol('proto.squareup.validation.fieldValidators', null, global);
goog.exportSymbol('proto.squareup.validation.length', null, global);
goog.exportSymbol('proto.squareup.validation.mapKeyLength', null, global);
goog.exportSymbol('proto.squareup.validation.mapMaxSize', null, global);
goog.exportSymbol('proto.squareup.validation.matchesPattern', null, global);
goog.exportSymbol('proto.squareup.validation.messageValidators', null, global);
goog.exportSymbol('proto.squareup.validation.nonNegativeMoney', null, global);
goog.exportSymbol('proto.squareup.validation.notEmpty', null, global);
goog.exportSymbol('proto.squareup.validation.range', null, global);
goog.exportSymbol('proto.squareup.validation.required', null, global);
goog.exportSymbol('proto.squareup.validation.required2', null, global);
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
proto.squareup.validation.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.validation.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.validation.Range.displayName = 'proto.squareup.validation.Range';
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
proto.squareup.validation.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.validation.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.validation.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.validation.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    max: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.squareup.validation.Range}
 */
proto.squareup.validation.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.validation.Range;
  return proto.squareup.validation.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.validation.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.validation.Range}
 */
proto.squareup.validation.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
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
proto.squareup.validation.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.validation.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.validation.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.validation.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double min = 1;
 * @return {number}
 */
proto.squareup.validation.Range.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.validation.Range} returns this
 */
proto.squareup.validation.Range.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.validation.Range} returns this
 */
proto.squareup.validation.Range.prototype.clearMin = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.validation.Range.prototype.hasMin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double max = 2;
 * @return {number}
 */
proto.squareup.validation.Range.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.squareup.validation.Range} returns this
 */
proto.squareup.validation.Range.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.validation.Range} returns this
 */
proto.squareup.validation.Range.prototype.clearMax = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.validation.Range.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldValidators`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.validation.fieldValidators = new jspb.ExtensionFieldInfo(
    22300,
    {fieldValidators: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22300] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.fieldValidators,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22300] = proto.squareup.validation.fieldValidators;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `range`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.validation.Range>}
 */
proto.squareup.validation.range = new jspb.ExtensionFieldInfo(
    22301,
    {range: 0},
    proto.squareup.validation.Range,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.validation.Range.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22301] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.range,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.validation.Range.serializeBinaryToWriter,
    proto.squareup.validation.Range.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22301] = proto.squareup.validation.range;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `required`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.validation.required = new jspb.ExtensionFieldInfo(
    22302,
    {required: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22302] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.required,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22302] = proto.squareup.validation.required;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `required2`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.validation.required2 = new jspb.ExtensionFieldInfo(
    22308,
    {required2: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22308] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.required2,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22308] = proto.squareup.validation.required2;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `notEmpty`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.validation.notEmpty = new jspb.ExtensionFieldInfo(
    22303,
    {notEmpty: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22303] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.notEmpty,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22303] = proto.squareup.validation.notEmpty;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `matchesPattern`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.validation.matchesPattern = new jspb.ExtensionFieldInfo(
    22304,
    {matchesPattern: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22304] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.matchesPattern,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22304] = proto.squareup.validation.matchesPattern;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `length`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.validation.Range>}
 */
proto.squareup.validation.length = new jspb.ExtensionFieldInfo(
    22305,
    {length: 0},
    proto.squareup.validation.Range,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.validation.Range.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22305] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.length,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.validation.Range.serializeBinaryToWriter,
    proto.squareup.validation.Range.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22305] = proto.squareup.validation.length;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `collectionSize`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.validation.Range>}
 */
proto.squareup.validation.collectionSize = new jspb.ExtensionFieldInfo(
    22306,
    {collectionSize: 0},
    proto.squareup.validation.Range,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.validation.Range.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22306] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.collectionSize,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.validation.Range.serializeBinaryToWriter,
    proto.squareup.validation.Range.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22306] = proto.squareup.validation.collectionSize;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nonNegativeMoney`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.validation.nonNegativeMoney = new jspb.ExtensionFieldInfo(
    22307,
    {nonNegativeMoney: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22307] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.nonNegativeMoney,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22307] = proto.squareup.validation.nonNegativeMoney;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `mapMaxSize`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.validation.mapMaxSize = new jspb.ExtensionFieldInfo(
    22309,
    {mapMaxSize: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22309] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.mapMaxSize,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22309] = proto.squareup.validation.mapMaxSize;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `mapKeyLength`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.validation.Range>}
 */
proto.squareup.validation.mapKeyLength = new jspb.ExtensionFieldInfo(
    22310,
    {mapKeyLength: 0},
    proto.squareup.validation.Range,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.validation.Range.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[22310] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.mapKeyLength,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.validation.Range.serializeBinaryToWriter,
    proto.squareup.validation.Range.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[22310] = proto.squareup.validation.mapKeyLength;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageValidators`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.validation.messageValidators = new jspb.ExtensionFieldInfo(
    22300,
    {messageValidators: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[22300] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.validation.messageValidators,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[22300] = proto.squareup.validation.messageValidators;

goog.object.extend(exports, proto.squareup.validation);
