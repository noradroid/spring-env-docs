import { Version } from "../../shared/models/version.type";
import { ConfigFileType } from "../../utils/file/types/file.type";
import { Command } from "./command.type";

export type CommandArgs =
  | ParseCommandArgs
  | GenCommandArgs
  | ParseGenCommandArgs;

export type ParseCommandArgs = {
  command: Command.PARSE;
} & ConfigFile &
  JsonFile & {
    update: boolean;
    version?: Version;
  };

export type GenCommandArgs = {
  command: Command.GEN;
} & JsonFile &
  MdFile;

export type ParseGenCommandArgs = {
  command: Command.PARSE_GEN;
} & ConfigFile &
  JsonFile &
  MdFile & {
    update: boolean;
    version?: Version;
  };

export type ConfigFile = {
  configFile: string;
  configFileType: ConfigFileType;
};

export type JsonFile = {
  jsonFile: string;
};

export type MdFile = {
  mdFile: string;
};
