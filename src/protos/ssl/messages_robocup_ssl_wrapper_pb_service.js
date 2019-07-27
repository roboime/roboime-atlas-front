// package: 
// file: messages_robocup_ssl_wrapper.proto
/* eslint-disable */

var messages_robocup_ssl_wrapper_pb = require("./messages_robocup_ssl_wrapper_pb");
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
  requestType: messages_robocup_ssl_wrapper_pb.Timestamp,
  responseType: messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket
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

exports.RoboIMEAtlasClient = RoboIMEAtlasClient;

