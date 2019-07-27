// package: 
// file: messages_robocup_ssl_detection.proto

import * as jspb from "google-protobuf";

export class SSL_DetectionBall extends jspb.Message {
  hasConfidence(): boolean;
  clearConfidence(): void;
  getConfidence(): number | undefined;
  setConfidence(value: number): void;

  hasArea(): boolean;
  clearArea(): void;
  getArea(): number | undefined;
  setArea(value: number): void;

  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  hasZ(): boolean;
  clearZ(): void;
  getZ(): number | undefined;
  setZ(value: number): void;

  hasPixelX(): boolean;
  clearPixelX(): void;
  getPixelX(): number | undefined;
  setPixelX(value: number): void;

  hasPixelY(): boolean;
  clearPixelY(): void;
  getPixelY(): number | undefined;
  setPixelY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_DetectionBall.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_DetectionBall): SSL_DetectionBall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_DetectionBall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_DetectionBall;
  static deserializeBinaryFromReader(message: SSL_DetectionBall, reader: jspb.BinaryReader): SSL_DetectionBall;
}

export namespace SSL_DetectionBall {
  export type AsObject = {
    confidence?: number,
    area?: number,
    x?: number,
    y?: number,
    z?: number,
    pixelX?: number,
    pixelY?: number,
  }
}

export class SSL_DetectionRobot extends jspb.Message {
  hasConfidence(): boolean;
  clearConfidence(): void;
  getConfidence(): number | undefined;
  setConfidence(value: number): void;

  hasRobotId(): boolean;
  clearRobotId(): void;
  getRobotId(): number | undefined;
  setRobotId(value: number): void;

  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  hasOrientation(): boolean;
  clearOrientation(): void;
  getOrientation(): number | undefined;
  setOrientation(value: number): void;

  hasPixelX(): boolean;
  clearPixelX(): void;
  getPixelX(): number | undefined;
  setPixelX(value: number): void;

  hasPixelY(): boolean;
  clearPixelY(): void;
  getPixelY(): number | undefined;
  setPixelY(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_DetectionRobot.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_DetectionRobot): SSL_DetectionRobot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_DetectionRobot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_DetectionRobot;
  static deserializeBinaryFromReader(message: SSL_DetectionRobot, reader: jspb.BinaryReader): SSL_DetectionRobot;
}

export namespace SSL_DetectionRobot {
  export type AsObject = {
    confidence?: number,
    robotId?: number,
    x?: number,
    y?: number,
    orientation?: number,
    pixelX?: number,
    pixelY?: number,
    height?: number,
  }
}

export class SSL_DetectionFrame extends jspb.Message {
  hasFrameNumber(): boolean;
  clearFrameNumber(): void;
  getFrameNumber(): number | undefined;
  setFrameNumber(value: number): void;

  hasTCapture(): boolean;
  clearTCapture(): void;
  getTCapture(): number | undefined;
  setTCapture(value: number): void;

  hasTSent(): boolean;
  clearTSent(): void;
  getTSent(): number | undefined;
  setTSent(value: number): void;

  hasCameraId(): boolean;
  clearCameraId(): void;
  getCameraId(): number | undefined;
  setCameraId(value: number): void;

  clearBallsList(): void;
  getBallsList(): Array<SSL_DetectionBall>;
  setBallsList(value: Array<SSL_DetectionBall>): void;
  addBalls(value?: SSL_DetectionBall, index?: number): SSL_DetectionBall;

  clearRobotsYellowList(): void;
  getRobotsYellowList(): Array<SSL_DetectionRobot>;
  setRobotsYellowList(value: Array<SSL_DetectionRobot>): void;
  addRobotsYellow(value?: SSL_DetectionRobot, index?: number): SSL_DetectionRobot;

  clearRobotsBlueList(): void;
  getRobotsBlueList(): Array<SSL_DetectionRobot>;
  setRobotsBlueList(value: Array<SSL_DetectionRobot>): void;
  addRobotsBlue(value?: SSL_DetectionRobot, index?: number): SSL_DetectionRobot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_DetectionFrame.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_DetectionFrame): SSL_DetectionFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_DetectionFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_DetectionFrame;
  static deserializeBinaryFromReader(message: SSL_DetectionFrame, reader: jspb.BinaryReader): SSL_DetectionFrame;
}

export namespace SSL_DetectionFrame {
  export type AsObject = {
    frameNumber?: number,
    tCapture?: number,
    tSent?: number,
    cameraId?: number,
    ballsList: Array<SSL_DetectionBall.AsObject>,
    robotsYellowList: Array<SSL_DetectionRobot.AsObject>,
    robotsBlueList: Array<SSL_DetectionRobot.AsObject>,
  }
}

