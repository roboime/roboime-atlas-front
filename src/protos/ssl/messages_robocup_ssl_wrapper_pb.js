/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var messages_robocup_ssl_detection_pb = require('./messages_robocup_ssl_detection_pb.js');
var messages_robocup_ssl_geometry_pb = require('./messages_robocup_ssl_geometry_pb.js');
var referee_pb = require('./referee_pb.js');
goog.exportSymbol('proto.ActiveMatchesRequest', null, global);
goog.exportSymbol('proto.FrameRequest', null, global);
goog.exportSymbol('proto.MatchData', null, global);
goog.exportSymbol('proto.MatchInfoRequest', null, global);
goog.exportSymbol('proto.MatchesPacket', null, global);
goog.exportSymbol('proto.SSL_WrapperPacket', null, global);

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
proto.FrameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FrameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FrameRequest.displayName = 'proto.FrameRequest';
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
proto.FrameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.FrameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FrameRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.FrameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: msg.getMatchId()
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
 * @return {!proto.FrameRequest}
 */
proto.FrameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FrameRequest;
  return proto.FrameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FrameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FrameRequest}
 */
proto.FrameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.FrameRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.FrameRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FrameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.FrameRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.FrameRequest} The clone.
 */
proto.FrameRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.FrameRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 match_id = 1;
 * @return {number}
 */
proto.FrameRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.FrameRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 1, value);
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
proto.ActiveMatchesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActiveMatchesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ActiveMatchesRequest.displayName = 'proto.ActiveMatchesRequest';
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
proto.ActiveMatchesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ActiveMatchesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActiveMatchesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ActiveMatchesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ActiveMatchesRequest}
 */
proto.ActiveMatchesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActiveMatchesRequest;
  return proto.ActiveMatchesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActiveMatchesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActiveMatchesRequest}
 */
proto.ActiveMatchesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ActiveMatchesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ActiveMatchesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActiveMatchesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ActiveMatchesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ActiveMatchesRequest} The clone.
 */
proto.ActiveMatchesRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ActiveMatchesRequest} */ (jspb.Message.cloneMessage(this));
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
proto.MatchInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MatchInfoRequest.displayName = 'proto.MatchInfoRequest';
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
proto.MatchInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MatchInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: msg.getMatchId()
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
 * @return {!proto.MatchInfoRequest}
 */
proto.MatchInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchInfoRequest;
  return proto.MatchInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchInfoRequest}
 */
proto.MatchInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.MatchInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.MatchInfoRequest} The clone.
 */
proto.MatchInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.MatchInfoRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 match_id = 1;
 * @return {number}
 */
proto.MatchInfoRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.MatchInfoRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 1, value);
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
proto.MatchesPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MatchesPacket.repeatedFields_, null);
};
goog.inherits(proto.MatchesPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MatchesPacket.displayName = 'proto.MatchesPacket';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MatchesPacket.repeatedFields_ = [1];



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
proto.MatchesPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchesPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchesPacket} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MatchesPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchList: jspb.Message.toObjectList(msg.getMatchList(),
    proto.MatchData.toObject, includeInstance)
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
 * @return {!proto.MatchesPacket}
 */
proto.MatchesPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchesPacket;
  return proto.MatchesPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchesPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchesPacket}
 */
proto.MatchesPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MatchData;
      reader.readMessage(value,proto.MatchData.deserializeBinaryFromReader);
      msg.getMatchList().push(value);
      msg.setMatchList(msg.getMatchList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.MatchesPacket} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchesPacket.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchesPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchesPacket.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.MatchData.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.MatchesPacket} The clone.
 */
proto.MatchesPacket.prototype.cloneMessage = function() {
  return /** @type {!proto.MatchesPacket} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated MatchData match = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.MatchData>}
 */
proto.MatchesPacket.prototype.getMatchList = function() {
  return /** @type{!Array.<!proto.MatchData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MatchData, 1));
};


/** @param {Array.<!proto.MatchData>} value  */
proto.MatchesPacket.prototype.setMatchList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.MatchesPacket.prototype.clearMatchList = function() {
  this.setMatchList([]);
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
proto.MatchData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MatchData.displayName = 'proto.MatchData';
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
proto.MatchData.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MatchData.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: msg.getMatchId(),
    matchName: msg.getMatchName()
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
 * @return {!proto.MatchData}
 */
proto.MatchData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchData;
  return proto.MatchData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchData}
 */
proto.MatchData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.MatchData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.MatchData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMatchName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.MatchData} The clone.
 */
proto.MatchData.prototype.cloneMessage = function() {
  return /** @type {!proto.MatchData} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 match_id = 1;
 * @return {number}
 */
proto.MatchData.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.MatchData.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string match_name = 2;
 * @return {string}
 */
proto.MatchData.prototype.getMatchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.MatchData.prototype.setMatchName = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.SSL_WrapperPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SSL_WrapperPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SSL_WrapperPacket.displayName = 'proto.SSL_WrapperPacket';
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
proto.SSL_WrapperPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.SSL_WrapperPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SSL_WrapperPacket} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SSL_WrapperPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    detection: (f = msg.getDetection()) && messages_robocup_ssl_detection_pb.SSL_DetectionFrame.toObject(includeInstance, f),
    geometry: (f = msg.getGeometry()) && messages_robocup_ssl_geometry_pb.SSL_GeometryData.toObject(includeInstance, f)
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
 * @return {!proto.SSL_WrapperPacket}
 */
proto.SSL_WrapperPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SSL_WrapperPacket;
  return proto.SSL_WrapperPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SSL_WrapperPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SSL_WrapperPacket}
 */
proto.SSL_WrapperPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new messages_robocup_ssl_detection_pb.SSL_DetectionFrame;
      reader.readMessage(value,messages_robocup_ssl_detection_pb.SSL_DetectionFrame.deserializeBinaryFromReader);
      msg.setDetection(value);
      break;
    case 2:
      var value = new messages_robocup_ssl_geometry_pb.SSL_GeometryData;
      reader.readMessage(value,messages_robocup_ssl_geometry_pb.SSL_GeometryData.deserializeBinaryFromReader);
      msg.setGeometry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SSL_WrapperPacket} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_WrapperPacket.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SSL_WrapperPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_WrapperPacket.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDetection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      messages_robocup_ssl_detection_pb.SSL_DetectionFrame.serializeBinaryToWriter
    );
  }
  f = this.getGeometry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      messages_robocup_ssl_geometry_pb.SSL_GeometryData.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SSL_WrapperPacket} The clone.
 */
proto.SSL_WrapperPacket.prototype.cloneMessage = function() {
  return /** @type {!proto.SSL_WrapperPacket} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional SSL_DetectionFrame detection = 1;
 * @return {proto.SSL_DetectionFrame}
 */
proto.SSL_WrapperPacket.prototype.getDetection = function() {
  return /** @type{proto.SSL_DetectionFrame} */ (
    jspb.Message.getWrapperField(this, messages_robocup_ssl_detection_pb.SSL_DetectionFrame, 1));
};


/** @param {proto.SSL_DetectionFrame|undefined} value  */
proto.SSL_WrapperPacket.prototype.setDetection = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SSL_WrapperPacket.prototype.clearDetection = function() {
  this.setDetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_WrapperPacket.prototype.hasDetection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SSL_GeometryData geometry = 2;
 * @return {proto.SSL_GeometryData}
 */
proto.SSL_WrapperPacket.prototype.getGeometry = function() {
  return /** @type{proto.SSL_GeometryData} */ (
    jspb.Message.getWrapperField(this, messages_robocup_ssl_geometry_pb.SSL_GeometryData, 2));
};


/** @param {proto.SSL_GeometryData|undefined} value  */
proto.SSL_WrapperPacket.prototype.setGeometry = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SSL_WrapperPacket.prototype.clearGeometry = function() {
  this.setGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_WrapperPacket.prototype.hasGeometry = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);
