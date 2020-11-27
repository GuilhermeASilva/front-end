import { getEnumMembers } from '../utils';

export enum Genero {
  'M',
  'F',
  'NB',
}

export const EGeneroEnum = {
  members: getEnumMembers(Genero),
  enum: Genero
}
