// source: options.proto
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
var common_data_pb = require('./common_data_pb.js');
goog.object.extend(proto, common_data_pb);
goog.exportSymbol('proto.squareup.connect.v2.common.AuthenticationMethod', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.AuthenticationMethods', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.ExternalDoc', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.Features', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.HTTPMultiPartSettings', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.HttpMethod', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.OAuthPermissions', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.ProtoVisibility', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.ReleaseStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.authenticationMethods', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.catalogAttributeExternalName', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.containsPii', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.entity', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.entityName', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumOwnedBy', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumValueNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumValueSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumValueStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumValueVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.enumVisibility', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.exampleScenariosPath', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.externalDocs', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.featureFlag', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.features', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fieldNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fieldSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fieldStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fieldVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fileNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fileOwnedBy', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fileSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fileStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.fileVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.headerParam', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.httpMethod', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.httpMultiPartSettings', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.isSparseUpdate', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.jsonExamplePath', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.jsonExampleType', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.jsonIgnore', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageOauthPermissions', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageOwnedBy', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.messageVisibility', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodNamespace', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodOwnedBy', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodStatus', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodVersion', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.methodVisibility', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.notSupportedInSandbox', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.oauthPermissions', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.oauthScopeRequired', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.path', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.pathParam', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.queryParam', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.readOnly', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.rejectUnrecognizedFieldsStartingOn', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.rfc3339DateTime', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.rfc3339Duration', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.sdkSampleDirectory', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.serviceOwnedBy', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.serviceSkipLintChecksList', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.sparseUpdatePayload', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.timeoutSeconds', null, global);
goog.exportSymbol('proto.squareup.connect.v2.common.xClearNullDefault', null, global);
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
proto.squareup.connect.v2.common.AuthenticationMethods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.connect.v2.common.AuthenticationMethods.repeatedFields_, null);
};
goog.inherits(proto.squareup.connect.v2.common.AuthenticationMethods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.connect.v2.common.AuthenticationMethods.displayName = 'proto.squareup.connect.v2.common.AuthenticationMethods';
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
proto.squareup.connect.v2.common.OAuthPermissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.connect.v2.common.OAuthPermissions.repeatedFields_, null);
};
goog.inherits(proto.squareup.connect.v2.common.OAuthPermissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.connect.v2.common.OAuthPermissions.displayName = 'proto.squareup.connect.v2.common.OAuthPermissions';
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
proto.squareup.connect.v2.common.HTTPMultiPartSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.connect.v2.common.HTTPMultiPartSettings.repeatedFields_, null);
};
goog.inherits(proto.squareup.connect.v2.common.HTTPMultiPartSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.connect.v2.common.HTTPMultiPartSettings.displayName = 'proto.squareup.connect.v2.common.HTTPMultiPartSettings';
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
proto.squareup.connect.v2.common.Features = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.squareup.connect.v2.common.Features.repeatedFields_, null);
};
goog.inherits(proto.squareup.connect.v2.common.Features, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.connect.v2.common.Features.displayName = 'proto.squareup.connect.v2.common.Features';
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
proto.squareup.connect.v2.common.ExternalDoc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.squareup.connect.v2.common.ExternalDoc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.squareup.connect.v2.common.ExternalDoc.displayName = 'proto.squareup.connect.v2.common.ExternalDoc';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.connect.v2.common.AuthenticationMethods.repeatedFields_ = [1];



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
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.connect.v2.common.AuthenticationMethods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.connect.v2.common.AuthenticationMethods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.AuthenticationMethods.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.squareup.connect.v2.common.AuthenticationMethods}
 */
proto.squareup.connect.v2.common.AuthenticationMethods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.connect.v2.common.AuthenticationMethods;
  return proto.squareup.connect.v2.common.AuthenticationMethods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.connect.v2.common.AuthenticationMethods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.connect.v2.common.AuthenticationMethods}
 */
proto.squareup.connect.v2.common.AuthenticationMethods.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.squareup.connect.v2.common.AuthenticationMethod>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValue(values[i]);
      }
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
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.connect.v2.common.AuthenticationMethods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.connect.v2.common.AuthenticationMethods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.AuthenticationMethods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      1,
      f
    );
  }
};


/**
 * repeated AuthenticationMethod value = 1;
 * @return {!Array<!proto.squareup.connect.v2.common.AuthenticationMethod>}
 */
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.getValueList = function() {
  return /** @type {!Array<!proto.squareup.connect.v2.common.AuthenticationMethod>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.squareup.connect.v2.common.AuthenticationMethod>} value
 * @return {!proto.squareup.connect.v2.common.AuthenticationMethods} returns this
 */
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.squareup.connect.v2.common.AuthenticationMethod} value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.common.AuthenticationMethods} returns this
 */
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.connect.v2.common.AuthenticationMethods} returns this
 */
proto.squareup.connect.v2.common.AuthenticationMethods.prototype.clearValueList = function() {
  return this.setValueList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.connect.v2.common.OAuthPermissions.repeatedFields_ = [1];



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
proto.squareup.connect.v2.common.OAuthPermissions.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.connect.v2.common.OAuthPermissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.connect.v2.common.OAuthPermissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.OAuthPermissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.squareup.connect.v2.common.OAuthPermissions}
 */
proto.squareup.connect.v2.common.OAuthPermissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.connect.v2.common.OAuthPermissions;
  return proto.squareup.connect.v2.common.OAuthPermissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.connect.v2.common.OAuthPermissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.connect.v2.common.OAuthPermissions}
 */
proto.squareup.connect.v2.common.OAuthPermissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.squareup.xp.oauth.datatypes.Scope>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValue(values[i]);
      }
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
proto.squareup.connect.v2.common.OAuthPermissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.connect.v2.common.OAuthPermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.connect.v2.common.OAuthPermissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.OAuthPermissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      1,
      f
    );
  }
};


/**
 * repeated squareup.xp.oauth.datatypes.Scope value = 1;
 * @return {!Array<!proto.squareup.xp.oauth.datatypes.Scope>}
 */
proto.squareup.connect.v2.common.OAuthPermissions.prototype.getValueList = function() {
  return /** @type {!Array<!proto.squareup.xp.oauth.datatypes.Scope>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.squareup.xp.oauth.datatypes.Scope>} value
 * @return {!proto.squareup.connect.v2.common.OAuthPermissions} returns this
 */
proto.squareup.connect.v2.common.OAuthPermissions.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.squareup.xp.oauth.datatypes.Scope} value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.common.OAuthPermissions} returns this
 */
proto.squareup.connect.v2.common.OAuthPermissions.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.connect.v2.common.OAuthPermissions} returns this
 */
proto.squareup.connect.v2.common.OAuthPermissions.prototype.clearValueList = function() {
  return this.setValueList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.repeatedFields_ = [1];



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
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.connect.v2.common.HTTPMultiPartSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    mimeTypesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.squareup.connect.v2.common.HTTPMultiPartSettings}
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.connect.v2.common.HTTPMultiPartSettings;
  return proto.squareup.connect.v2.common.HTTPMultiPartSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.connect.v2.common.HTTPMultiPartSettings}
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMimeTypes(value);
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
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.connect.v2.common.HTTPMultiPartSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMimeTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string mime_types = 1;
 * @return {!Array<string>}
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.getMimeTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} returns this
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.setMimeTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} returns this
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.addMimeTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.connect.v2.common.HTTPMultiPartSettings} returns this
 */
proto.squareup.connect.v2.common.HTTPMultiPartSettings.prototype.clearMimeTypesList = function() {
  return this.setMimeTypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.squareup.connect.v2.common.Features.repeatedFields_ = [1];



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
proto.squareup.connect.v2.common.Features.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.connect.v2.common.Features.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.connect.v2.common.Features} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.Features.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.squareup.connect.v2.common.Features}
 */
proto.squareup.connect.v2.common.Features.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.connect.v2.common.Features;
  return proto.squareup.connect.v2.common.Features.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.connect.v2.common.Features} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.connect.v2.common.Features}
 */
proto.squareup.connect.v2.common.Features.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFlags(value);
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
proto.squareup.connect.v2.common.Features.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.connect.v2.common.Features.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.connect.v2.common.Features} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.Features.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string flags = 1;
 * @return {!Array<string>}
 */
proto.squareup.connect.v2.common.Features.prototype.getFlagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.squareup.connect.v2.common.Features} returns this
 */
proto.squareup.connect.v2.common.Features.prototype.setFlagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.squareup.connect.v2.common.Features} returns this
 */
proto.squareup.connect.v2.common.Features.prototype.addFlags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.squareup.connect.v2.common.Features} returns this
 */
proto.squareup.connect.v2.common.Features.prototype.clearFlagsList = function() {
  return this.setFlagsList([]);
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
proto.squareup.connect.v2.common.ExternalDoc.prototype.toObject = function(opt_includeInstance) {
  return proto.squareup.connect.v2.common.ExternalDoc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.squareup.connect.v2.common.ExternalDoc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.ExternalDoc.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.squareup.connect.v2.common.ExternalDoc}
 */
proto.squareup.connect.v2.common.ExternalDoc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.squareup.connect.v2.common.ExternalDoc;
  return proto.squareup.connect.v2.common.ExternalDoc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.squareup.connect.v2.common.ExternalDoc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.squareup.connect.v2.common.ExternalDoc}
 */
proto.squareup.connect.v2.common.ExternalDoc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.squareup.connect.v2.common.ExternalDoc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.squareup.connect.v2.common.ExternalDoc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.squareup.connect.v2.common.ExternalDoc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.squareup.connect.v2.common.ExternalDoc.serializeBinaryToWriter = function(message, writer) {
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
 * optional string description = 1;
 * @return {string}
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.connect.v2.common.ExternalDoc} returns this
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.connect.v2.common.ExternalDoc} returns this
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.squareup.connect.v2.common.ExternalDoc} returns this
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.squareup.connect.v2.common.ExternalDoc} returns this
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.squareup.connect.v2.common.ExternalDoc.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.squareup.connect.v2.common.HttpMethod = {
  GET: 1,
  POST: 2,
  PUT: 3,
  DELETE: 4
};

/**
 * @enum {number}
 */
proto.squareup.connect.v2.common.ReleaseStatus = {
  PUBLIC: 1,
  BETA: 2,
  UPCOMING: 3,
  INTERNAL: 4,
  EXCLUDED: 5,
  ALPHA: 6,
  DEPRECATED: 7,
  RETIRED: 8
};

/**
 * @enum {number}
 */
proto.squareup.connect.v2.common.AuthenticationMethod = {
  OAUTH2_ACCESS_TOKEN: 2,
  OAUTH2_CLIENT_SECRET: 3,
  MULTIPASS: 4
};

/**
 * @enum {number}
 */
proto.squareup.connect.v2.common.ProtoVisibility = {
  NORMAL: 1,
  DOC_ONLY: 2,
  SDK_ONLY: 3
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.fileStatus = new jspb.ExtensionFieldInfo(
    60000,
    {fileStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fileStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[60000] = proto.squareup.connect.v2.common.fileStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.fileVersion = new jspb.ExtensionFieldInfo(
    60001,
    {fileVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fileVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[60001] = proto.squareup.connect.v2.common.fileVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.fileNamespace = new jspb.ExtensionFieldInfo(
    60002,
    {fileNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fileNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[60002] = proto.squareup.connect.v2.common.fileNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileOwnedBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.fileOwnedBy = new jspb.ExtensionFieldInfo(
    60003,
    {fileOwnedBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fileOwnedBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[60003] = proto.squareup.connect.v2.common.fileOwnedBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fileSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.fileSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60004,
    {fileSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[60004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fileSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[60004] = proto.squareup.connect.v2.common.fileSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceOwnedBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.serviceOwnedBy = new jspb.ExtensionFieldInfo(
    60000,
    {serviceOwnedBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.serviceOwnedBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[60000] = proto.squareup.connect.v2.common.serviceOwnedBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serviceSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.serviceSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60001,
    {serviceSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.serviceSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[60001] = proto.squareup.connect.v2.common.serviceSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.messageStatus = new jspb.ExtensionFieldInfo(
    60000,
    {messageStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60000] = proto.squareup.connect.v2.common.messageStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `jsonExamplePath`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.jsonExamplePath = new jspb.ExtensionFieldInfo(
    60001,
    {jsonExamplePath: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.jsonExamplePath,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60001] = proto.squareup.connect.v2.common.jsonExamplePath;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `jsonExampleType`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.jsonExampleType = new jspb.ExtensionFieldInfo(
    60003,
    {jsonExampleType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.jsonExampleType,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60003] = proto.squareup.connect.v2.common.jsonExampleType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sdkSampleDirectory`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.sdkSampleDirectory = new jspb.ExtensionFieldInfo(
    60002,
    {sdkSampleDirectory: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.sdkSampleDirectory,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60002] = proto.squareup.connect.v2.common.sdkSampleDirectory;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.messageVersion = new jspb.ExtensionFieldInfo(
    60004,
    {messageVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60004] = proto.squareup.connect.v2.common.messageVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.messageNamespace = new jspb.ExtensionFieldInfo(
    60005,
    {messageNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60005] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60005] = proto.squareup.connect.v2.common.messageNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ProtoVisibility>}
 */
proto.squareup.connect.v2.common.messageVisibility = new jspb.ExtensionFieldInfo(
    60006,
    {messageVisibility: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60006] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageVisibility,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60006] = proto.squareup.connect.v2.common.messageVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageOwnedBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.messageOwnedBy = new jspb.ExtensionFieldInfo(
    60007,
    {messageOwnedBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60007] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageOwnedBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60007] = proto.squareup.connect.v2.common.messageOwnedBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.messageSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60008,
    {messageSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60008] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60008] = proto.squareup.connect.v2.common.messageSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `featureFlag`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.featureFlag = new jspb.ExtensionFieldInfo(
    60009,
    {featureFlag: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60009] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.featureFlag,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60009] = proto.squareup.connect.v2.common.featureFlag;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `entityName`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.entityName = new jspb.ExtensionFieldInfo(
    60010,
    {entityName: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60010] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.entityName,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60010] = proto.squareup.connect.v2.common.entityName;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageOauthPermissions`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.OAuthPermissions>}
 */
proto.squareup.connect.v2.common.messageOauthPermissions = new jspb.ExtensionFieldInfo(
    60011,
    {messageOauthPermissions: 0},
    proto.squareup.connect.v2.common.OAuthPermissions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.OAuthPermissions.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[60011] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.messageOauthPermissions,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.OAuthPermissions.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.OAuthPermissions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[60011] = proto.squareup.connect.v2.common.messageOauthPermissions;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `containsPii`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.containsPii = new jspb.ExtensionFieldInfo(
    70003,
    {containsPii: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[70003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.containsPii,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[70003] = proto.squareup.connect.v2.common.containsPii;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.fieldStatus = new jspb.ExtensionFieldInfo(
    60000,
    {fieldStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fieldStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60000] = proto.squareup.connect.v2.common.fieldStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `pathParam`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.pathParam = new jspb.ExtensionFieldInfo(
    60001,
    {pathParam: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.pathParam,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60001] = proto.squareup.connect.v2.common.pathParam;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `queryParam`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.queryParam = new jspb.ExtensionFieldInfo(
    60003,
    {queryParam: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.queryParam,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60003] = proto.squareup.connect.v2.common.queryParam;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `catalogAttributeExternalName`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.catalogAttributeExternalName = new jspb.ExtensionFieldInfo(
    60002,
    {catalogAttributeExternalName: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.catalogAttributeExternalName,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60002] = proto.squareup.connect.v2.common.catalogAttributeExternalName;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `jsonIgnore`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.jsonIgnore = new jspb.ExtensionFieldInfo(
    60004,
    {jsonIgnore: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.jsonIgnore,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60004] = proto.squareup.connect.v2.common.jsonIgnore;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `headerParam`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.headerParam = new jspb.ExtensionFieldInfo(
    60005,
    {headerParam: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60005] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.headerParam,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60005] = proto.squareup.connect.v2.common.headerParam;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.fieldVersion = new jspb.ExtensionFieldInfo(
    60006,
    {fieldVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60006] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fieldVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60006] = proto.squareup.connect.v2.common.fieldVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.fieldNamespace = new jspb.ExtensionFieldInfo(
    60007,
    {fieldNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60007] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fieldNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60007] = proto.squareup.connect.v2.common.fieldNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sparseUpdatePayload`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.sparseUpdatePayload = new jspb.ExtensionFieldInfo(
    60008,
    {sparseUpdatePayload: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60008] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.sparseUpdatePayload,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60008] = proto.squareup.connect.v2.common.sparseUpdatePayload;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `readOnly`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.readOnly = new jspb.ExtensionFieldInfo(
    60009,
    {readOnly: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60009] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.readOnly,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60009] = proto.squareup.connect.v2.common.readOnly;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `features`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.Features>}
 */
proto.squareup.connect.v2.common.features = new jspb.ExtensionFieldInfo(
    60010,
    {features: 0},
    proto.squareup.connect.v2.common.Features,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.Features.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60010] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.features,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.Features.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.Features.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60010] = proto.squareup.connect.v2.common.features;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.fieldSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60011,
    {fieldSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60011] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.fieldSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60011] = proto.squareup.connect.v2.common.fieldSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `rfc3339DateTime`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.rfc3339DateTime = new jspb.ExtensionFieldInfo(
    60012,
    {rfc3339DateTime: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60012] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.rfc3339DateTime,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60012] = proto.squareup.connect.v2.common.rfc3339DateTime;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `rfc3339Duration`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.rfc3339Duration = new jspb.ExtensionFieldInfo(
    60013,
    {rfc3339Duration: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[60013] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.rfc3339Duration,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[60013] = proto.squareup.connect.v2.common.rfc3339Duration;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.methodStatus = new jspb.ExtensionFieldInfo(
    60000,
    {methodStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60000] = proto.squareup.connect.v2.common.methodStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `entity`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.entity = new jspb.ExtensionFieldInfo(
    60001,
    {entity: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.entity,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60001] = proto.squareup.connect.v2.common.entity;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `path`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.path = new jspb.ExtensionFieldInfo(
    60002,
    {path: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.path,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60002] = proto.squareup.connect.v2.common.path;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `httpMethod`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.HttpMethod>}
 */
proto.squareup.connect.v2.common.httpMethod = new jspb.ExtensionFieldInfo(
    60003,
    {httpMethod: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.httpMethod,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60003] = proto.squareup.connect.v2.common.httpMethod;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oauthPermissions`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.OAuthPermissions>}
 */
proto.squareup.connect.v2.common.oauthPermissions = new jspb.ExtensionFieldInfo(
    60004,
    {oauthPermissions: 0},
    proto.squareup.connect.v2.common.OAuthPermissions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.OAuthPermissions.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.oauthPermissions,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.OAuthPermissions.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.OAuthPermissions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60004] = proto.squareup.connect.v2.common.oauthPermissions;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oauthScopeRequired`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.oauthScopeRequired = new jspb.ExtensionFieldInfo(
    60006,
    {oauthScopeRequired: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60006] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.oauthScopeRequired,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60006] = proto.squareup.connect.v2.common.oauthScopeRequired;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `authenticationMethods`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.AuthenticationMethods>}
 */
proto.squareup.connect.v2.common.authenticationMethods = new jspb.ExtensionFieldInfo(
    60008,
    {authenticationMethods: 0},
    proto.squareup.connect.v2.common.AuthenticationMethods,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.AuthenticationMethods.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60008] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.authenticationMethods,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.AuthenticationMethods.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.AuthenticationMethods.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60008] = proto.squareup.connect.v2.common.authenticationMethods;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.methodVersion = new jspb.ExtensionFieldInfo(
    60009,
    {methodVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60009] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60009] = proto.squareup.connect.v2.common.methodVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.methodNamespace = new jspb.ExtensionFieldInfo(
    60010,
    {methodNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60010] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60010] = proto.squareup.connect.v2.common.methodNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `timeoutSeconds`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.squareup.connect.v2.common.timeoutSeconds = new jspb.ExtensionFieldInfo(
    60011,
    {timeoutSeconds: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60011] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.timeoutSeconds,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60011] = proto.squareup.connect.v2.common.timeoutSeconds;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `isSparseUpdate`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.isSparseUpdate = new jspb.ExtensionFieldInfo(
    60012,
    {isSparseUpdate: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60012] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.isSparseUpdate,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60012] = proto.squareup.connect.v2.common.isSparseUpdate;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `httpMultiPartSettings`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.HTTPMultiPartSettings>}
 */
proto.squareup.connect.v2.common.httpMultiPartSettings = new jspb.ExtensionFieldInfo(
    60013,
    {httpMultiPartSettings: 0},
    proto.squareup.connect.v2.common.HTTPMultiPartSettings,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.HTTPMultiPartSettings.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60013] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.httpMultiPartSettings,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.HTTPMultiPartSettings.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.HTTPMultiPartSettings.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60013] = proto.squareup.connect.v2.common.httpMultiPartSettings;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ProtoVisibility>}
 */
proto.squareup.connect.v2.common.methodVisibility = new jspb.ExtensionFieldInfo(
    60014,
    {methodVisibility: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60014] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodVisibility,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60014] = proto.squareup.connect.v2.common.methodVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `xClearNullDefault`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.xClearNullDefault = new jspb.ExtensionFieldInfo(
    60015,
    {xClearNullDefault: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60015] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.xClearNullDefault,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60015] = proto.squareup.connect.v2.common.xClearNullDefault;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `rejectUnrecognizedFieldsStartingOn`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.rejectUnrecognizedFieldsStartingOn = new jspb.ExtensionFieldInfo(
    60017,
    {rejectUnrecognizedFieldsStartingOn: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60017] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.rejectUnrecognizedFieldsStartingOn,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60017] = proto.squareup.connect.v2.common.rejectUnrecognizedFieldsStartingOn;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodOwnedBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.methodOwnedBy = new jspb.ExtensionFieldInfo(
    60018,
    {methodOwnedBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60018] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodOwnedBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60018] = proto.squareup.connect.v2.common.methodOwnedBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.methodSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60019,
    {methodSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60019] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.methodSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60019] = proto.squareup.connect.v2.common.methodSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `exampleScenariosPath`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.exampleScenariosPath = new jspb.ExtensionFieldInfo(
    60020,
    {exampleScenariosPath: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60020] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.exampleScenariosPath,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60020] = proto.squareup.connect.v2.common.exampleScenariosPath;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `externalDocs`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ExternalDoc>}
 */
proto.squareup.connect.v2.common.externalDocs = new jspb.ExtensionFieldInfo(
    60021,
    {externalDocs: 0},
    proto.squareup.connect.v2.common.ExternalDoc,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.squareup.connect.v2.common.ExternalDoc.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60021] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.externalDocs,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.squareup.connect.v2.common.ExternalDoc.serializeBinaryToWriter,
    proto.squareup.connect.v2.common.ExternalDoc.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60021] = proto.squareup.connect.v2.common.externalDocs;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `notSupportedInSandbox`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.squareup.connect.v2.common.notSupportedInSandbox = new jspb.ExtensionFieldInfo(
    60022,
    {notSupportedInSandbox: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[60022] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.notSupportedInSandbox,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[60022] = proto.squareup.connect.v2.common.notSupportedInSandbox;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.enumStatus = new jspb.ExtensionFieldInfo(
    60000,
    {enumStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60000] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60000] = proto.squareup.connect.v2.common.enumStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.enumVersion = new jspb.ExtensionFieldInfo(
    60001,
    {enumVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60001] = proto.squareup.connect.v2.common.enumVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.enumNamespace = new jspb.ExtensionFieldInfo(
    60002,
    {enumNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60002] = proto.squareup.connect.v2.common.enumNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ProtoVisibility>}
 */
proto.squareup.connect.v2.common.enumVisibility = new jspb.ExtensionFieldInfo(
    60003,
    {enumVisibility: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumVisibility,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60003] = proto.squareup.connect.v2.common.enumVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumOwnedBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.enumOwnedBy = new jspb.ExtensionFieldInfo(
    60004,
    {enumOwnedBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60004] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumOwnedBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60004] = proto.squareup.connect.v2.common.enumOwnedBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.enumSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60005,
    {enumSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[60005] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[60005] = proto.squareup.connect.v2.common.enumSkipLintChecksList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValueStatus`.
 * @type {!jspb.ExtensionFieldInfo<!proto.squareup.connect.v2.common.ReleaseStatus>}
 */
proto.squareup.connect.v2.common.enumValueStatus = new jspb.ExtensionFieldInfo(
    60001,
    {enumValueStatus: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[60001] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumValueStatus,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[60001] = proto.squareup.connect.v2.common.enumValueStatus;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValueVersion`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.enumValueVersion = new jspb.ExtensionFieldInfo(
    60002,
    {enumValueVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[60002] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumValueVersion,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[60002] = proto.squareup.connect.v2.common.enumValueVersion;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValueNamespace`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.squareup.connect.v2.common.enumValueNamespace = new jspb.ExtensionFieldInfo(
    60003,
    {enumValueNamespace: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[60003] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumValueNamespace,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[60003] = proto.squareup.connect.v2.common.enumValueNamespace;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValueSkipLintChecksList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.squareup.connect.v2.common.enumValueSkipLintChecksList = new jspb.ExtensionFieldInfo(
    60005,
    {enumValueSkipLintChecksList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[60005] = new jspb.ExtensionFieldBinaryInfo(
    proto.squareup.connect.v2.common.enumValueSkipLintChecksList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[60005] = proto.squareup.connect.v2.common.enumValueSkipLintChecksList;

goog.object.extend(exports, proto.squareup.connect.v2.common);
