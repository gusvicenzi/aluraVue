import { IProjeto } from './IProjeto'

export interface ITarefa {
  id: string
  duracaoEmSegundos: number
  descricao: string
  projeto?: IProjeto
}
