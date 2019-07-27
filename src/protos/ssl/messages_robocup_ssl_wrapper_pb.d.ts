// package: 
// file: messages_robocup_ssl_wrapper.proto

import * as jspb from "google-protobuf";
import * as messages_robocup_ssl_detection_pb from "./messages_robocup_ssl_detection_pb";
import * as messages_robocup_ssl_geometry_pb from "./messages_robocup_ssl_geometry_pb";

export class Timestamp extends jspb.Message {
  getUnixTimestamp(): number;
  setUnixTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    unixTimestamp: number,
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

