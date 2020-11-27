import { getEnumMembers } from '../utils';

export enum CategoriaServico {
  'Ajuste',
  'Lavagem',
  'Montagem',
  'Pintura',
  'Revisão',
}

export const ECategoriaServicoEnum = {
  members: getEnumMembers(CategoriaServico),
  enum: CategoriaServico,
};
