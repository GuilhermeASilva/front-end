import { getEnumMembers } from '../utils';

export enum EstadosEnum {
  AC,
  AL,
  AM,
  AP,
  BA,
  CE,
  DF,
  ES,
  GO,
  MA,
  MG,
  MS,
  MT,
  PA,
  PB,
  PE,
  PI,
  PR,
  RJ,
  RN,
  RO,
  RR,
  RS,
  SC,
  SP,
  SE,
  TO,
}

export const EEstadosEnum = {
  members: getEnumMembers(EstadosEnum),
  enum: EstadosEnum,
};
