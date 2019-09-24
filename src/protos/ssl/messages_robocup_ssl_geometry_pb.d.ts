// package: 
// file: messages_robocup_ssl_geometry.proto

import * as jspb from "google-protobuf";

export class Vector2f extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vector2f.AsObject;
  static toObject(includeInstance: boolean, msg: Vector2f): Vector2f.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vector2f, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vector2f;
  static deserializeBinaryFromReader(message: Vector2f, reader: jspb.BinaryReader): Vector2f;
}

export namespace Vector2f {
  export type AsObject = {
    x?: number,
    y?: number,
  }
}

export class SSL_FieldLineSegment extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasP1(): boolean;
  clearP1(): void;
  getP1(): Vector2f;
  setP1(value?: Vector2f): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Vector2f;
  setP2(value?: Vector2f): void;

  hasThickness(): boolean;
  clearThickness(): void;
  getThickness(): number | undefined;
  setThickness(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_FieldLineSegment.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_FieldLineSegment): SSL_FieldLineSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_FieldLineSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_FieldLineSegment;
  static deserializeBinaryFromReader(message: SSL_FieldLineSegment, reader: jspb.BinaryReader): SSL_FieldLineSegment;
}

export namespace SSL_FieldLineSegment {
  export type AsObject = {
    name?: string,
    p1: Vector2f.AsObject,
    p2: Vector2f.AsObject,
    thickness?: number,
  }
}

export class SSL_FieldCicularArc extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasCenter(): boolean;
  clearCenter(): void;
  getCenter(): Vector2f;
  setCenter(value?: Vector2f): void;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): number | undefined;
  setRadius(value: number): void;

  hasA1(): boolean;
  clearA1(): void;
  getA1(): number | undefined;
  setA1(value: number): void;

  hasA2(): boolean;
  clearA2(): void;
  getA2(): number | undefined;
  setA2(value: number): void;

  hasThickness(): boolean;
  clearThickness(): void;
  getThickness(): number | undefined;
  setThickness(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_FieldCicularArc.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_FieldCicularArc): SSL_FieldCicularArc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_FieldCicularArc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_FieldCicularArc;
  static deserializeBinaryFromReader(message: SSL_FieldCicularArc, reader: jspb.BinaryReader): SSL_FieldCicularArc;
}

export namespace SSL_FieldCicularArc {
  export type AsObject = {
    name?: string,
    center: Vector2f.AsObject,
    radius?: number,
    a1?: number,
    a2?: number,
    thickness?: number,
  }
}

export class SSL_GeometryFieldSize extends jspb.Message {
  hasFieldLength(): boolean;
  clearFieldLength(): void;
  getFieldLength(): number | undefined;
  setFieldLength(value: number): void;

  hasFieldWidth(): boolean;
  clearFieldWidth(): void;
  getFieldWidth(): number | undefined;
  setFieldWidth(value: number): void;

  hasGoalWidth(): boolean;
  clearGoalWidth(): void;
  getGoalWidth(): number | undefined;
  setGoalWidth(value: number): void;

  hasGoalDepth(): boolean;
  clearGoalDepth(): void;
  getGoalDepth(): number | undefined;
  setGoalDepth(value: number): void;

  hasBoundaryWidth(): boolean;
  clearBoundaryWidth(): void;
  getBoundaryWidth(): number | undefined;
  setBoundaryWidth(value: number): void;

  clearFieldLinesList(): void;
  getFieldLinesList(): Array<SSL_FieldLineSegment>;
  setFieldLinesList(value: Array<SSL_FieldLineSegment>): void;
  addFieldLines(value?: SSL_FieldLineSegment, index?: number): SSL_FieldLineSegment;

  clearFieldArcsList(): void;
  getFieldArcsList(): Array<SSL_FieldCicularArc>;
  setFieldArcsList(value: Array<SSL_FieldCicularArc>): void;
  addFieldArcs(value?: SSL_FieldCicularArc, index?: number): SSL_FieldCicularArc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_GeometryFieldSize.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_GeometryFieldSize): SSL_GeometryFieldSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_GeometryFieldSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_GeometryFieldSize;
  static deserializeBinaryFromReader(message: SSL_GeometryFieldSize, reader: jspb.BinaryReader): SSL_GeometryFieldSize;
}

export namespace SSL_GeometryFieldSize {
  export type AsObject = {
    fieldLength?: number,
    fieldWidth?: number,
    goalWidth?: number,
    goalDepth?: number,
    boundaryWidth?: number,
    fieldLinesList: Array<SSL_FieldLineSegment.AsObject>,
    fieldArcsList: Array<SSL_FieldCicularArc.AsObject>,
  }
}

export class SSL_GeometryCameraCalibration extends jspb.Message {
  hasCameraId(): boolean;
  clearCameraId(): void;
  getCameraId(): number | undefined;
  setCameraId(value: number): void;

  hasFocalLength(): boolean;
  clearFocalLength(): void;
  getFocalLength(): number | undefined;
  setFocalLength(value: number): void;

  hasPrincipalPointX(): boolean;
  clearPrincipalPointX(): void;
  getPrincipalPointX(): number | undefined;
  setPrincipalPointX(value: number): void;

  hasPrincipalPointY(): boolean;
  clearPrincipalPointY(): void;
  getPrincipalPointY(): number | undefined;
  setPrincipalPointY(value: number): void;

  hasDistortion(): boolean;
  clearDistortion(): void;
  getDistortion(): number | undefined;
  setDistortion(value: number): void;

  hasQ0(): boolean;
  clearQ0(): void;
  getQ0(): number | undefined;
  setQ0(value: number): void;

  hasQ1(): boolean;
  clearQ1(): void;
  getQ1(): number | undefined;
  setQ1(value: number): void;

  hasQ2(): boolean;
  clearQ2(): void;
  getQ2(): number | undefined;
  setQ2(value: number): void;

  hasQ3(): boolean;
  clearQ3(): void;
  getQ3(): number | undefined;
  setQ3(value: number): void;

  hasTx(): boolean;
  clearTx(): void;
  getTx(): number | undefined;
  setTx(value: number): void;

  hasTy(): boolean;
  clearTy(): void;
  getTy(): number | undefined;
  setTy(value: number): void;

  hasTz(): boolean;
  clearTz(): void;
  getTz(): number | undefined;
  setTz(value: number): void;

  hasDerivedCameraWorldTx(): boolean;
  clearDerivedCameraWorldTx(): void;
  getDerivedCameraWorldTx(): number | undefined;
  setDerivedCameraWorldTx(value: number): void;

  hasDerivedCameraWorldTy(): boolean;
  clearDerivedCameraWorldTy(): void;
  getDerivedCameraWorldTy(): number | undefined;
  setDerivedCameraWorldTy(value: number): void;

  hasDerivedCameraWorldTz(): boolean;
  clearDerivedCameraWorldTz(): void;
  getDerivedCameraWorldTz(): number | undefined;
  setDerivedCameraWorldTz(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_GeometryCameraCalibration.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_GeometryCameraCalibration): SSL_GeometryCameraCalibration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_GeometryCameraCalibration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_GeometryCameraCalibration;
  static deserializeBinaryFromReader(message: SSL_GeometryCameraCalibration, reader: jspb.BinaryReader): SSL_GeometryCameraCalibration;
}

export namespace SSL_GeometryCameraCalibration {
  export type AsObject = {
    cameraId?: number,
    focalLength?: number,
    principalPointX?: number,
    principalPointY?: number,
    distortion?: number,
    q0?: number,
    q1?: number,
    q2?: number,
    q3?: number,
    tx?: number,
    ty?: number,
    tz?: number,
    derivedCameraWorldTx?: number,
    derivedCameraWorldTy?: number,
    derivedCameraWorldTz?: number,
  }
}

export class SSL_GeometryData extends jspb.Message {
  hasField(): boolean;
  clearField(): void;
  getField(): SSL_GeometryFieldSize;
  setField(value?: SSL_GeometryFieldSize): void;

  clearCalibList(): void;
  getCalibList(): Array<SSL_GeometryCameraCalibration>;
  setCalibList(value: Array<SSL_GeometryCameraCalibration>): void;
  addCalib(value?: SSL_GeometryCameraCalibration, index?: number): SSL_GeometryCameraCalibration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_GeometryData.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_GeometryData): SSL_GeometryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_GeometryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_GeometryData;
  static deserializeBinaryFromReader(message: SSL_GeometryData, reader: jspb.BinaryReader): SSL_GeometryData;
}

export namespace SSL_GeometryData {
  export type AsObject = {
    field: SSL_GeometryFieldSize.AsObject,
    calibList: Array<SSL_GeometryCameraCalibration.AsObject>,
  }
}

