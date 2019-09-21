// package: 
// file: messages_robocup_ssl_wrapper.proto

import * as jspb from "google-protobuf";
import * as messages_robocup_ssl_detection_pb from "./messages_robocup_ssl_detection_pb";
import * as messages_robocup_ssl_geometry_pb from "./messages_robocup_ssl_geometry_pb";

export class FrameRequest extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FrameRequest): FrameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameRequest;
  static deserializeBinaryFromReader(message: FrameRequest, reader: jspb.BinaryReader): FrameRequest;
}

export namespace FrameRequest {
  export type AsObject = {
    matchId: number,
  }
}

export class ActiveMatchesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveMatchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveMatchesRequest): ActiveMatchesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveMatchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveMatchesRequest;
  static deserializeBinaryFromReader(message: ActiveMatchesRequest, reader: jspb.BinaryReader): ActiveMatchesRequest;
}

export namespace ActiveMatchesRequest {
  export type AsObject = {
  }
}

export class MatchesPacket extends jspb.Message {
  clearMatchList(): void;
  getMatchList(): Array<MatchData>;
  setMatchList(value: Array<MatchData>): void;
  addMatch(value?: MatchData, index?: number): MatchData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchesPacket.AsObject;
  static toObject(includeInstance: boolean, msg: MatchesPacket): MatchesPacket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchesPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchesPacket;
  static deserializeBinaryFromReader(message: MatchesPacket, reader: jspb.BinaryReader): MatchesPacket;
}

export namespace MatchesPacket {
  export type AsObject = {
    matchList: Array<MatchData.AsObject>,
  }
}

export class MatchData extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getMatchName(): string;
  setMatchName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchData.AsObject;
  static toObject(includeInstance: boolean, msg: MatchData): MatchData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchData;
  static deserializeBinaryFromReader(message: MatchData, reader: jspb.BinaryReader): MatchData;
}

export namespace MatchData {
  export type AsObject = {
    matchId: number,
    matchName: string,
  }
}

export class SSL_WrapperPacket extends jspb.Message {
  hasDetection(): boolean;
  clearDetection(): void;
  getDetection(): messages_robocup_ssl_detection_pb.SSL_DetectionFrame | undefined;
  setDetection(value?: messages_robocup_ssl_detection_pb.SSL_DetectionFrame): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): messages_robocup_ssl_geometry_pb.SSL_GeometryData | undefined;
  setGeometry(value?: messages_robocup_ssl_geometry_pb.SSL_GeometryData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_WrapperPacket.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_WrapperPacket): SSL_WrapperPacket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_WrapperPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_WrapperPacket;
  static deserializeBinaryFromReader(message: SSL_WrapperPacket, reader: jspb.BinaryReader): SSL_WrapperPacket;
}

export namespace SSL_WrapperPacket {
  export type AsObject = {
    detection?: messages_robocup_ssl_detection_pb.SSL_DetectionFrame.AsObject,
    geometry?: messages_robocup_ssl_geometry_pb.SSL_GeometryData.AsObject,
  }
}

