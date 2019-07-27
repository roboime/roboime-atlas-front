// package: 
// file: messages_robocup_ssl_geometry.proto

import * as jspb from "google-protobuf";

export class SSL_GeometryFieldSize extends jspb.Message {
  hasLineWidth(): boolean;
  clearLineWidth(): void;
  getLineWidth(): number | undefined;
  setLineWidth(value: number): void;

  hasFieldLength(): boolean;
  clearFieldLength(): void;
  getFieldLength(): number | undefined;
  setFieldLength(value: number): void;

  hasFieldWidth(): boolean;
  clearFieldWidth(): void;
  getFieldWidth(): number | undefined;
  setFieldWidth(value: number): void;

  hasBoundaryWidth(): boolean;
  clearBoundaryWidth(): void;
  getBoundaryWidth(): number | undefined;
  setBoundaryWidth(value: number): void;

  hasRefereeWidth(): boolean;
  clearRefereeWidth(): void;
  getRefereeWidth(): number | undefined;
  setRefereeWidth(value: number): void;

  hasGoalWidth(): boolean;
  clearGoalWidth(): void;
  getGoalWidth(): number | undefined;
  setGoalWidth(value: number): void;

  hasGoalDepth(): boolean;
  clearGoalDepth(): void;
  getGoalDepth(): number | undefined;
  setGoalDepth(value: number): void;

  hasGoalWallWidth(): boolean;
  clearGoalWallWidth(): void;
  getGoalWallWidth(): number | undefined;
  setGoalWallWidth(value: number): void;

  hasCenterCircleRadius(): boolean;
  clearCenterCircleRadius(): void;
  getCenterCircleRadius(): number | undefined;
  setCenterCircleRadius(value: number): void;

  hasDefenseRadius(): boolean;
  clearDefenseRadius(): void;
  getDefenseRadius(): number | undefined;
  setDefenseRadius(value: number): void;

  hasDefenseStretch(): boolean;
  clearDefenseStretch(): void;
  getDefenseStretch(): number | undefined;
  setDefenseStretch(value: number): void;

  hasFreeKickFromDefenseDist(): boolean;
  clearFreeKickFromDefenseDist(): void;
  getFreeKickFromDefenseDist(): number | undefined;
  setFreeKickFromDefenseDist(value: number): void;

  hasPenaltySpotFromFieldLineDist(): boolean;
  clearPenaltySpotFromFieldLineDist(): void;
  getPenaltySpotFromFieldLineDist(): number | undefined;
  setPenaltySpotFromFieldLineDist(value: number): void;

  hasPenaltyLineFromSpotDist(): boolean;
  clearPenaltyLineFromSpotDist(): void;
  getPenaltyLineFromSpotDist(): number | undefined;
  setPenaltyLineFromSpotDist(value: number): void;

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
    lineWidth?: number,
    fieldLength?: number,
    fieldWidth?: number,
    boundaryWidth?: number,
    refereeWidth?: number,
    goalWidth?: number,
    goalDepth?: number,
    goalWallWidth?: number,
    centerCircleRadius?: number,
    defenseRadius?: number,
    defenseStretch?: number,
    freeKickFromDefenseDist?: number,
    penaltySpotFromFieldLineDist?: number,
    penaltyLineFromSpotDist?: number,
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

