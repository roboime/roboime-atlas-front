// package: 
// file: messages_robocup_ssl_wrapper.proto

import * as messages_robocup_ssl_wrapper_pb from "./messages_robocup_ssl_wrapper_pb";
import * as messages_robocup_ssl_geometry_pb from "./messages_robocup_ssl_geometry_pb";
import * as referee_pb from "./referee_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RoboIMEAtlasGetFrame = {
  readonly methodName: string;
  readonly service: typeof RoboIMEAtlas;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof messages_robocup_ssl_wrapper_pb.FrameRequest;
  readonly responseType: typeof messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket;
};

type RoboIMEAtlasGetGeometry = {
  readonly methodName: string;
  readonly service: typeof RoboIMEAtlas;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_robocup_ssl_wrapper_pb.FrameRequest;
  readonly responseType: typeof messages_robocup_ssl_geometry_pb.SSL_GeometryData;
};

type RoboIMEAtlasGetActiveMatches = {
  readonly methodName: string;
  readonly service: typeof RoboIMEAtlas;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_robocup_ssl_wrapper_pb.ActiveMatchesRequest;
  readonly responseType: typeof messages_robocup_ssl_wrapper_pb.MatchesPacket;
};

type RoboIMEAtlasGetMatchInfo = {
  readonly methodName: string;
  readonly service: typeof RoboIMEAtlas;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_robocup_ssl_wrapper_pb.MatchInfoRequest;
  readonly responseType: typeof referee_pb.SSL_Referee;
};

export class RoboIMEAtlas {
  static readonly serviceName: string;
  static readonly GetFrame: RoboIMEAtlasGetFrame;
  static readonly GetGeometry: RoboIMEAtlasGetGeometry;
  static readonly GetActiveMatches: RoboIMEAtlasGetActiveMatches;
  static readonly GetMatchInfo: RoboIMEAtlasGetMatchInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class RoboIMEAtlasClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getFrame(requestMessage: messages_robocup_ssl_wrapper_pb.FrameRequest, metadata?: grpc.Metadata): ResponseStream<messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket>;
  getGeometry(
    requestMessage: messages_robocup_ssl_wrapper_pb.FrameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_robocup_ssl_geometry_pb.SSL_GeometryData|null) => void
  ): UnaryResponse;
  getGeometry(
    requestMessage: messages_robocup_ssl_wrapper_pb.FrameRequest,
    callback: (error: ServiceError|null, responseMessage: messages_robocup_ssl_geometry_pb.SSL_GeometryData|null) => void
  ): UnaryResponse;
  getActiveMatches(
    requestMessage: messages_robocup_ssl_wrapper_pb.ActiveMatchesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_robocup_ssl_wrapper_pb.MatchesPacket|null) => void
  ): UnaryResponse;
  getActiveMatches(
    requestMessage: messages_robocup_ssl_wrapper_pb.ActiveMatchesRequest,
    callback: (error: ServiceError|null, responseMessage: messages_robocup_ssl_wrapper_pb.MatchesPacket|null) => void
  ): UnaryResponse;
  getMatchInfo(
    requestMessage: messages_robocup_ssl_wrapper_pb.MatchInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: referee_pb.SSL_Referee|null) => void
  ): UnaryResponse;
  getMatchInfo(
    requestMessage: messages_robocup_ssl_wrapper_pb.MatchInfoRequest,
    callback: (error: ServiceError|null, responseMessage: referee_pb.SSL_Referee|null) => void
  ): UnaryResponse;
}

