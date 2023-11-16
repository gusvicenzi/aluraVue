import http from '@/http'
import { IProjeto } from '@/interfaces/IProjeto'
import { Estado } from '@/store'
import {
  OBTER_PROJETOS,
  CADASTRAR_PROJETO,
  ALTERAR_PROJETO,
  APAGAR_PROJETO
} from '@/store/tipo-acoes'
import {
  DEFINIR_PROJETOS,
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  EXCLUIR_PROJETO
} from '@/store/tipo-mutacoes'
import { Module } from 'vuex'

export interface EstadoProjeto {
  projetos: IProjeto[]
}

export const projeto: Module<EstadoProjeto, Estado> = {
  mutations: {
    [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
      state.projetos = projetos
    },
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: Date.now().toString(),
        nome: nomeDoProjeto
      } as IProjeto

      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id === projeto.id)

      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(proj => proj.id !== id)
    }
  },
  actions: {
    async [OBTER_PROJETOS]({ commit }) {
      try {
        const { data: projetos } = await http.get<IProjeto[]>('projetos')
        commit(DEFINIR_PROJETOS, projetos)
      } catch (e) {
        console.log(e)
      }
    },
    async [CADASTRAR_PROJETO](context, nomeDoProjeto: string) {
      try {
        return (
          await http.post('projetos', {
            nome: nomeDoProjeto
          })
        ).data
      } catch (e) {
        console.log(e)
        return
      }
    },
    async [ALTERAR_PROJETO](context, projeto: IProjeto) {
      try {
        return (await http.put(`projetos/${projeto.id}`, projeto)).data
      } catch (e) {
        console.log(e)
        return
      }
    },
    async [APAGAR_PROJETO]({ commit }, id: number) {
      try {
        const { data } = await http.delete(`projetos/${id}`)

        commit(EXCLUIR_PROJETO, id)

        return data
      } catch (e) {
        console.log(e)
        return
      }
    }
  }
}
