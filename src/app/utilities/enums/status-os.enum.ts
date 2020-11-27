import { getEnumMembers } from '../utils';

export enum StatusOs {
  'pendente',
  'iniciada',
  'concluida',
  // 'cancelada',
}

export const EStatusOsEnum = {
  members: getEnumMembers(StatusOs),
  enum: StatusOs,
};
