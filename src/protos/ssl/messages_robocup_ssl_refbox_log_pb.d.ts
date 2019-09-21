// package: 
// file: messages_robocup_ssl_refbox_log.proto

import * as jspb from "google-protobuf";
import * as messages_robocup_ssl_detection_pb from "./messages_robocup_ssl_detection_pb";

export class Log_Frame extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): messages_robocup_ssl_detection_pb.SSL_DetectionFrame;
  setFrame(value?: messages_robocup_ssl_detection_pb.SSL_DetectionFrame): void;

  hasRefboxCmd(): boolean;
  clearRefboxCmd(): void;
  getRefboxCmd(): string | undefined;
  setRefboxCmd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log_Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Log_Frame): Log_Frame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Log_Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log_Frame;
  static deserializeBinaryFromReader(message: Log_Frame, reader: jspb.BinaryReader): Log_Frame;
}

export namespace Log_Frame {
  export type AsObject = {
    frame: messages_robocup_ssl_detection_pb.SSL_DetectionFrame.AsObject,
    refboxCmd?: string,
  }
}

export class Refbox_Log extends jspb.Message {
  clearLogList(): void;
  getLogList(): Array<Log_Frame>;
  setLogList(value: Array<Log_Frame>): void;
  addLog(value?: Log_Frame, index?: number): Log_Frame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Refbox_Log.AsObject;
  static toObject(includeInstance: boolean, msg: Refbox_Log): Refbox_Log.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Refbox_Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Refbox_Log;
  static deserializeBinaryFromReader(message: Refbox_Log, reader: jspb.BinaryReader): Refbox_Log;
}

export namespace Refbox_Log {
  export type AsObject = {
    logList: Array<Log_Frame.AsObject>,
  }
}

