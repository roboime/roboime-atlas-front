// package: 
// file: messages_robocup_ssl_wrapper.proto

import * as messages_robocup_ssl_wrapper_pb from "./messages_robocup_ssl_wrapper_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RoboIMEAtlasGetFrame = {
  readonly methodName: string;
  readonly service: typeof RoboIMEAtlas;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof messages_robocup_ssl_wrapper_pb.Timestamp;
  readonly responseType: typeof messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket;
};

export class RoboIMEAtlas {
  static readonly serviceName: string;
  static readonly GetFrame: RoboIMEAtlasGetFrame;
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
  getFrame(requestMessage: messages_robocup_ssl_wrapper_pb.Timestamp, metadata?: grpc.Metadata): ResponseStream<messages_robocup_ssl_wrapper_pb.SSL_WrapperPacket>;
}

