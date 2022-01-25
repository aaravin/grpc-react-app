// source: objc.proto
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
goog.exportSymbol('proto.squareup.objc.ClassOptions', null, global);
goog.exportSymbol('proto.squareup.objc.PropertyOptions', null, global);
goog.exportSymbol('proto.squareup.objc.classOptions', null, global);
goog.exportSymbol('proto.squareup.objc.enumName', null, global);
goog.exportSymbol('proto.squareup.objc.filePrefix', null, global);
goog.exportSymbol('proto.squareup.objc.propertyOptions', null, global);
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
proto.squareup.objc.ClassOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.objc.ClassOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.objc.ClassOptions.displayName = 'proto.squareup.objc.ClassOptions';
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
proto.squareup.objc.PropertyOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.objc.PropertyOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.objc.PropertyOptions.displayName = 'proto.squareup.objc.PropertyOptions';
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
proto.squareup.objc.ClassOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.objc.ClassOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.objc.ClassOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.objc.ClassOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nameMutable: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.squareup.objc.ClassOptions}
 */
proto.squareup.objc.ClassOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.objc.ClassOptions;
  return proto.squareup.objc.ClassOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.objc.ClassOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.objc.ClassOptions}
 */
proto.squareup.objc.ClassOptions.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNameMutable(value);
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
proto.squareup.objc.ClassOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.objc.ClassOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.objc.ClassOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.objc.ClassOptions.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.squareup.objc.ClassOptions.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.objc.ClassOptions} returns this
 */
proto.squareup.objc.ClassOptions.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.objc.ClassOptions} returns this
 */
proto.squareup.objc.ClassOptions.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.objc.ClassOptions.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name_mutable = 2;
 * @return {string}
 */
proto.squareup.objc.ClassOptions.prototype.getNameMutable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.objc.ClassOptions} returns this
 */
proto.squareup.objc.ClassOptions.prototype.setNameMutable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.objc.ClassOptions} returns this
 */
proto.squareup.objc.ClassOptions.prototype.clearNameMutable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.objc.ClassOptions.prototype.hasNameMutable = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.squareup.objc.PropertyOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.objc.PropertyOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.objc.PropertyOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.objc.PropertyOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    asPrimitive: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.squareup.objc.PropertyOptions}
 */
proto.squareup.objc.PropertyOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.objc.PropertyOptions;
  return proto.squareup.objc.PropertyOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.objc.PropertyOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.objc.PropertyOptions}
 */
proto.squareup.objc.PropertyOptions.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAsPrimitive(value);
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
proto.squareup.objc.PropertyOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.objc.PropertyOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.objc.PropertyOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.objc.PropertyOptions.serializeBinaryToWriter = function(message, writer) {
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
 * optional string name = 1;
 * @return {string}
 */
proto.squareup.objc.PropertyOptions.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.objc.PropertyOptions} returns this
 */
proto.squareup.objc.PropertyOptions.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.objc.PropertyOptions} returns this
 */
proto.squareup.objc.PropertyOptions.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.objc.PropertyOptions.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool as_primitive = 2;
 * @return {boolean}
 */
proto.squareup.objc.PropertyOptions.prototype.getAsPrimitive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.squareup.objc.PropertyOptions} returns this
 */
proto.squareup.objc.PropertyOptions.prototype.setAsPrimitive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.objc.PropertyOptions} returns this
 */
proto.squareup.objc.PropertyOptions.prototype.clearAsPrimitive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.objc.PropertyOptions.prototype.hasAsPrimitive = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `filePrefix`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.objc.filePrefix = new jspb.ExtensionFieldInfo(
    6584,
    {filePrefix: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[6584] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.objc.filePrefix,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[6584] = proto.squareup.objc.filePrefix;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `classOptions`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.objc.ClassOptions>}
 */
proto.squareup.objc.classOptions = new jspb.ExtensionFieldInfo(
    6584,
    {classOptions: 0},
    proto.squareup.objc.ClassOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.objc.ClassOptions.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[6584] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.objc.classOptions,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.objc.ClassOptions.serializeBinaryToWriter,
    proto.squareup.objc.ClassOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[6584] = proto.squareup.objc.classOptions;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `propertyOptions`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.objc.PropertyOptions>}
 */
proto.squareup.objc.propertyOptions = new jspb.ExtensionFieldInfo(
    6584,
    {propertyOptions: 0},
    proto.squareup.objc.PropertyOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.objc.PropertyOptions.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[6584] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.objc.propertyOptions,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.objc.PropertyOptions.serializeBinaryToWriter,
    proto.squareup.objc.PropertyOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[6584] = proto.squareup.objc.propertyOptions;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumName`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.objc.enumName = new jspb.ExtensionFieldInfo(
    6584,
    {enumName: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[6584] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.objc.enumName,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[6584] = proto.squareup.objc.enumName;

goog.object.extend(exports, proto.squareup.objc);