// package: 
// file: messages_robocup_ssl_wrapper.proto
/* eslint-disable */

var messages_robocup_ssl_wrapper_pb = require("./messages_robocup_ssl_wrapper_pb");
var referee_pb = require("./referee_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RoboIMEAtlas = (function () {
  function RoboIMEAtlas() {}
  RoboIMEAtlas.serviceName = "RoboIMEAtlas";
  return RoboIMEAtlas;
}());

RoboIMEAtlas.GetFrame = {
  methodName: "GetFrame",
  service: RoboIMEAtlas,
  requestStream: false,
  responseStream: true,
  requestType: messages_robocup_ssl_wrapper_pb.FrameRequest,
  responseType: messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket
};

RoboIMEAtlas.GetActiveMatches = {
  methodName: "GetActiveMatches",
  service: RoboIMEAtlas,
  requestStream: false,
  responseStream: false,
  requestType: messages_robocup_ssl_wrapper_pb.ActiveMatchesRequest,
  responseType: messages_robocup_ssl_wrapper_pb.MatchesPacket
};

RoboIMEAtlas.GetMatchInfo = {
  methodName: "GetMatchInfo",
  service: RoboIMEAtlas,
  requestStream: false,
  responseStream: false,
  requestType: messages_robocup_ssl_wrapper_pb.MatchInfoRequest,
  responseType: referee_pb.SSL_Referee
};

exports.RoboIMEAtlas = RoboIMEAtlas;

function RoboIMEAtlasClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RoboIMEAtlasClient.prototype.getFrame = function getFrame(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(RoboIMEAtlas.GetFrame, {
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

RoboIMEAtlasClient.prototype.getActiveMatches = function getActiveMatches(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoboIMEAtlas.GetActiveMatches, {
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

RoboIMEAtlasClient.prototype.getMatchInfo = function getMatchInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoboIMEAtlas.GetMatchInfo, {
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

exports.RoboIMEAtlasClient = RoboIMEAtlasClient;

