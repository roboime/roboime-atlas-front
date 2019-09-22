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

goog.exportSymbol('proto.SSL_Referee', null, global);
goog.exportSymbol('proto.SSL_Referee.Command', null, global);
goog.exportSymbol('proto.SSL_Referee.Stage', null, global);
goog.exportSymbol('proto.SSL_Referee.TeamInfo', null, global);

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
proto.SSL_Referee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SSL_Referee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SSL_Referee.displayName = 'proto.SSL_Referee';
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
proto.SSL_Referee.prototype.toObject = function(opt_includeInstance) {
  return proto.SSL_Referee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SSL_Referee} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SSL_Referee.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetTimestamp: jspb.Message.getField(msg, 1),
    stage: jspb.Message.getField(msg, 2),
    stageTimeLeft: jspb.Message.getField(msg, 3),
    command: jspb.Message.getField(msg, 4),
    commandCounter: jspb.Message.getField(msg, 5),
    commandTimestamp: jspb.Message.getField(msg, 6),
    yellow: (f = msg.getYellow()) && proto.SSL_Referee.TeamInfo.toObject(includeInstance, f),
    blue: (f = msg.getBlue()) && proto.SSL_Referee.TeamInfo.toObject(includeInstance, f)
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
 * @return {!proto.SSL_Referee}
 */
proto.SSL_Referee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SSL_Referee;
  return proto.SSL_Referee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SSL_Referee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SSL_Referee}
 */
proto.SSL_Referee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPacketTimestamp(value);
      break;
    case 2:
      var value = /** @type {!proto.SSL_Referee.Stage} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setStageTimeLeft(value);
      break;
    case 4:
      var value = /** @type {!proto.SSL_Referee.Command} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandCounter(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommandTimestamp(value);
      break;
    case 7:
      var value = new proto.SSL_Referee.TeamInfo;
      reader.readMessage(value,proto.SSL_Referee.TeamInfo.deserializeBinaryFromReader);
      msg.setYellow(value);
      break;
    case 8:
      var value = new proto.SSL_Referee.TeamInfo;
      reader.readMessage(value,proto.SSL_Referee.TeamInfo.deserializeBinaryFromReader);
      msg.setBlue(value);
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
 * @param {!proto.SSL_Referee} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_Referee.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SSL_Referee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_Referee.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeSint32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = this.getYellow();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SSL_Referee.TeamInfo.serializeBinaryToWriter
    );
  }
  f = this.getBlue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.SSL_Referee.TeamInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SSL_Referee} The clone.
 */
proto.SSL_Referee.prototype.cloneMessage = function() {
  return /** @type {!proto.SSL_Referee} */ (jspb.Message.cloneMessage(this));
};


/**
 * required uint64 packet_timestamp = 1;
 * @return {number}
 */
proto.SSL_Referee.prototype.getPacketTimestamp = function() {
  return /** @type {number} */ (!this.hasPacketTimestamp() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.prototype.setPacketTimestamp = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SSL_Referee.prototype.clearPacketTimestamp = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasPacketTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Stage stage = 2;
 * @return {!proto.SSL_Referee.Stage}
 */
proto.SSL_Referee.prototype.getStage = function() {
  return /** @type {!proto.SSL_Referee.Stage} */ (!this.hasStage() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {proto.SSL_Referee.Stage|undefined} value  */
proto.SSL_Referee.prototype.setStage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SSL_Referee.prototype.clearStage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasStage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sint32 stage_time_left = 3;
 * @return {number}
 */
proto.SSL_Referee.prototype.getStageTimeLeft = function() {
  return /** @type {number} */ (!this.hasStageTimeLeft() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.SSL_Referee.prototype.setStageTimeLeft = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SSL_Referee.prototype.clearStageTimeLeft = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasStageTimeLeft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required Command command = 4;
 * @return {!proto.SSL_Referee.Command}
 */
proto.SSL_Referee.prototype.getCommand = function() {
  return /** @type {!proto.SSL_Referee.Command} */ (!this.hasCommand() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {proto.SSL_Referee.Command|undefined} value  */
proto.SSL_Referee.prototype.setCommand = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SSL_Referee.prototype.clearCommand = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required uint32 command_counter = 5;
 * @return {number}
 */
proto.SSL_Referee.prototype.getCommandCounter = function() {
  return /** @type {number} */ (!this.hasCommandCounter() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.prototype.setCommandCounter = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SSL_Referee.prototype.clearCommandCounter = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasCommandCounter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required uint64 command_timestamp = 6;
 * @return {number}
 */
proto.SSL_Referee.prototype.getCommandTimestamp = function() {
  return /** @type {number} */ (!this.hasCommandTimestamp() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.prototype.setCommandTimestamp = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SSL_Referee.prototype.clearCommandTimestamp = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasCommandTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required TeamInfo yellow = 7;
 * @return {!proto.SSL_Referee.TeamInfo}
 */
proto.SSL_Referee.prototype.getYellow = function() {
  return /** @type{!proto.SSL_Referee.TeamInfo} */ (
    jspb.Message.getWrapperField(this, proto.SSL_Referee.TeamInfo, 7, 1));
};


/** @param {proto.SSL_Referee.TeamInfo|undefined} value  */
proto.SSL_Referee.prototype.setYellow = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.SSL_Referee.prototype.clearYellow = function() {
  this.setYellow(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasYellow = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * required TeamInfo blue = 8;
 * @return {!proto.SSL_Referee.TeamInfo}
 */
proto.SSL_Referee.prototype.getBlue = function() {
  return /** @type{!proto.SSL_Referee.TeamInfo} */ (
    jspb.Message.getWrapperField(this, proto.SSL_Referee.TeamInfo, 8, 1));
};


/** @param {proto.SSL_Referee.TeamInfo|undefined} value  */
proto.SSL_Referee.prototype.setBlue = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.SSL_Referee.prototype.clearBlue = function() {
  this.setBlue(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.prototype.hasBlue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * @enum {number}
 */
proto.SSL_Referee.Stage = {
  NORMAL_FIRST_HALF_PRE: 0,
  NORMAL_FIRST_HALF: 1,
  NORMAL_HALF_TIME: 2,
  NORMAL_SECOND_HALF_PRE: 3,
  NORMAL_SECOND_HALF: 4,
  EXTRA_TIME_BREAK: 5,
  EXTRA_FIRST_HALF_PRE: 6,
  EXTRA_FIRST_HALF: 7,
  EXTRA_HALF_TIME: 8,
  EXTRA_SECOND_HALF_PRE: 9,
  EXTRA_SECOND_HALF: 10,
  PENALTY_SHOOTOUT_BREAK: 11,
  PENALTY_SHOOTOUT: 12,
  POST_GAME: 13
};

/**
 * @enum {number}
 */
proto.SSL_Referee.Command = {
  HALT: 0,
  STOP: 1,
  NORMAL_START: 2,
  FORCE_START: 3,
  PREPARE_KICKOFF_YELLOW: 4,
  PREPARE_KICKOFF_BLUE: 5,
  PREPARE_PENALTY_YELLOW: 6,
  PREPARE_PENALTY_BLUE: 7,
  DIRECT_FREE_YELLOW: 8,
  DIRECT_FREE_BLUE: 9,
  INDIRECT_FREE_YELLOW: 10,
  INDIRECT_FREE_BLUE: 11,
  TIMEOUT_YELLOW: 12,
  TIMEOUT_BLUE: 13,
  GOAL_YELLOW: 14,
  GOAL_BLUE: 15
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
proto.SSL_Referee.TeamInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SSL_Referee.TeamInfo.repeatedFields_, null);
};
goog.inherits(proto.SSL_Referee.TeamInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SSL_Referee.TeamInfo.displayName = 'proto.SSL_Referee.TeamInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SSL_Referee.TeamInfo.repeatedFields_ = [4];



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
proto.SSL_Referee.TeamInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SSL_Referee.TeamInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SSL_Referee.TeamInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SSL_Referee.TeamInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    score: jspb.Message.getField(msg, 2),
    redCards: jspb.Message.getField(msg, 3),
    yellowCardTimesList: jspb.Message.getField(msg, 4),
    yellowCards: jspb.Message.getField(msg, 5),
    timeouts: jspb.Message.getField(msg, 6),
    timeoutTime: jspb.Message.getField(msg, 7),
    goalie: jspb.Message.getField(msg, 8)
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
 * @return {!proto.SSL_Referee.TeamInfo}
 */
proto.SSL_Referee.TeamInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SSL_Referee.TeamInfo;
  return proto.SSL_Referee.TeamInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SSL_Referee.TeamInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SSL_Referee.TeamInfo}
 */
proto.SSL_Referee.TeamInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRedCards(value);
      break;
    case 4:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setYellowCardTimesList(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setYellowCards(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeouts(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoutTime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGoalie(value);
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
 * @param {!proto.SSL_Referee.TeamInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_Referee.TeamInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SSL_Referee.TeamInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SSL_Referee.TeamInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getYellowCardTimesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SSL_Referee.TeamInfo} The clone.
 */
proto.SSL_Referee.TeamInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.SSL_Referee.TeamInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * required string name = 1;
 * @return {string}
 */
proto.SSL_Referee.TeamInfo.prototype.getName = function() {
  return /** @type {string} */ (!this.hasName() ? "" : jspb.Message.getField(this, 1));
};


/** @param {string|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 score = 2;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getScore = function() {
  return /** @type {number} */ (!this.hasScore() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setScore = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearScore = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 red_cards = 3;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getRedCards = function() {
  return /** @type {number} */ (!this.hasRedCards() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setRedCards = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearRedCards = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasRedCards = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated uint32 yellow_card_times = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.SSL_Referee.TeamInfo.prototype.getYellowCardTimesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 4));
};


/** @param {Array.<number>} value  */
proto.SSL_Referee.TeamInfo.prototype.setYellowCardTimesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


proto.SSL_Referee.TeamInfo.prototype.clearYellowCardTimesList = function() {
  jspb.Message.setField(this, 4, []);
};


/**
 * required uint32 yellow_cards = 5;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getYellowCards = function() {
  return /** @type {number} */ (!this.hasYellowCards() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setYellowCards = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearYellowCards = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasYellowCards = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required uint32 timeouts = 6;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getTimeouts = function() {
  return /** @type {number} */ (!this.hasTimeouts() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setTimeouts = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearTimeouts = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasTimeouts = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required uint32 timeout_time = 7;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getTimeoutTime = function() {
  return /** @type {number} */ (!this.hasTimeoutTime() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setTimeoutTime = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearTimeoutTime = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasTimeoutTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * required uint32 goalie = 8;
 * @return {number}
 */
proto.SSL_Referee.TeamInfo.prototype.getGoalie = function() {
  return /** @type {number} */ (!this.hasGoalie() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number|undefined} value  */
proto.SSL_Referee.TeamInfo.prototype.setGoalie = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SSL_Referee.TeamInfo.prototype.clearGoalie = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SSL_Referee.TeamInfo.prototype.hasGoalie = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto);
