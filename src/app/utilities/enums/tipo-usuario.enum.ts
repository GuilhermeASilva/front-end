import { getEnumMembers } from '../utils';

export enum TipoUsuario {
  'admin',
  'employee',
}

export const ETipoUsuarioEnum = {
  members: getEnumMembers(TipoUsuario),
  enum: TipoUsuario,
};
