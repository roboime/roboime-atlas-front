// package: 
// file: referee.proto

import * as jspb from "google-protobuf";

export class SSL_Referee extends jspb.Message {
  hasPacketTimestamp(): boolean;
  clearPacketTimestamp(): void;
  getPacketTimestamp(): number | undefined;
  setPacketTimestamp(value: number): void;

  hasStage(): boolean;
  clearStage(): void;
  getStage(): SSL_Referee.StageMap[keyof SSL_Referee.StageMap] | undefined;
  setStage(value: SSL_Referee.StageMap[keyof SSL_Referee.StageMap]): void;

  hasStageTimeLeft(): boolean;
  clearStageTimeLeft(): void;
  getStageTimeLeft(): number | undefined;
  setStageTimeLeft(value: number): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): SSL_Referee.CommandMap[keyof SSL_Referee.CommandMap] | undefined;
  setCommand(value: SSL_Referee.CommandMap[keyof SSL_Referee.CommandMap]): void;

  hasCommandCounter(): boolean;
  clearCommandCounter(): void;
  getCommandCounter(): number | undefined;
  setCommandCounter(value: number): void;

  hasCommandTimestamp(): boolean;
  clearCommandTimestamp(): void;
  getCommandTimestamp(): number | undefined;
  setCommandTimestamp(value: number): void;

  hasYellow(): boolean;
  clearYellow(): void;
  getYellow(): SSL_Referee.TeamInfo;
  setYellow(value?: SSL_Referee.TeamInfo): void;

  hasBlue(): boolean;
  clearBlue(): void;
  getBlue(): SSL_Referee.TeamInfo;
  setBlue(value?: SSL_Referee.TeamInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSL_Referee.AsObject;
  static toObject(includeInstance: boolean, msg: SSL_Referee): SSL_Referee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSL_Referee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSL_Referee;
  static deserializeBinaryFromReader(message: SSL_Referee, reader: jspb.BinaryReader): SSL_Referee;
}

export namespace SSL_Referee {
  export type AsObject = {
    packetTimestamp?: number,
    stage?: SSL_Referee.StageMap[keyof SSL_Referee.StageMap],
    stageTimeLeft?: number,
    command?: SSL_Referee.CommandMap[keyof SSL_Referee.CommandMap],
    commandCounter?: number,
    commandTimestamp?: number,
    yellow: SSL_Referee.TeamInfo.AsObject,
    blue: SSL_Referee.TeamInfo.AsObject,
  }

  export class TeamInfo extends jspb.Message {
    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): void;

    hasScore(): boolean;
    clearScore(): void;
    getScore(): number | undefined;
    setScore(value: number): void;

    hasRedCards(): boolean;
    clearRedCards(): void;
    getRedCards(): number | undefined;
    setRedCards(value: number): void;

    clearYellowCardTimesList(): void;
    getYellowCardTimesList(): Array<number>;
    setYellowCardTimesList(value: Array<number>): void;
    addYellowCardTimes(value: number, index?: number): number;

    hasYellowCards(): boolean;
    clearYellowCards(): void;
    getYellowCards(): number | undefined;
    setYellowCards(value: number): void;

    hasTimeouts(): boolean;
    clearTimeouts(): void;
    getTimeouts(): number | undefined;
    setTimeouts(value: number): void;

    hasTimeoutTime(): boolean;
    clearTimeoutTime(): void;
    getTimeoutTime(): number | undefined;
    setTimeoutTime(value: number): void;

    hasGoalie(): boolean;
    clearGoalie(): void;
    getGoalie(): number | undefined;
    setGoalie(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TeamInfo): TeamInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamInfo;
    static deserializeBinaryFromReader(message: TeamInfo, reader: jspb.BinaryReader): TeamInfo;
  }

  export namespace TeamInfo {
    export type AsObject = {
      name?: string,
      score?: number,
      redCards?: number,
      yellowCardTimesList: Array<number>,
      yellowCards?: number,
      timeouts?: number,
      timeoutTime?: number,
      goalie?: number,
    }
  }

  export interface StageMap {
    NORMAL_FIRST_HALF_PRE: 0;
    NORMAL_FIRST_HALF: 1;
    NORMAL_HALF_TIME: 2;
    NORMAL_SECOND_HALF_PRE: 3;
    NORMAL_SECOND_HALF: 4;
    EXTRA_TIME_BREAK: 5;
    EXTRA_FIRST_HALF_PRE: 6;
    EXTRA_FIRST_HALF: 7;
    EXTRA_HALF_TIME: 8;
    EXTRA_SECOND_HALF_PRE: 9;
    EXTRA_SECOND_HALF: 10;
    PENALTY_SHOOTOUT_BREAK: 11;
    PENALTY_SHOOTOUT: 12;
    POST_GAME: 13;
  }

  export const Stage: StageMap;

  export interface CommandMap {
    HALT: 0;
    STOP: 1;
    NORMAL_START: 2;
    FORCE_START: 3;
    PREPARE_KICKOFF_YELLOW: 4;
    PREPARE_KICKOFF_BLUE: 5;
    PREPARE_PENALTY_YELLOW: 6;
    PREPARE_PENALTY_BLUE: 7;
    DIRECT_FREE_YELLOW: 8;
    DIRECT_FREE_BLUE: 9;
    INDIRECT_FREE_YELLOW: 10;
    INDIRECT_FREE_BLUE: 11;
    TIMEOUT_YELLOW: 12;
    TIMEOUT_BLUE: 13;
    GOAL_YELLOW: 14;
    GOAL_BLUE: 15;
  }

  export const Command: CommandMap;
}

