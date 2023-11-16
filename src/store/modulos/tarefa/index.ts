import http from '@/http'
import { ITarefa } from '@/interfaces/ITarefa'
import { Estado } from '@/store'
import {
  OBTER_TAREFAS,
  CADASTRAR_TAREFA,
  ALTERAR_TAREFA,
  APAGAR_TAREFA
} from '@/store/tipo-acoes'
import {
  DEFINIR_TAREFAS,
  ADICIONA_TAREFA,
  ALTERA_TAREFA,
  EXCLUIR_TAREFA
} from '@/store/tipo-mutacoes'
import { Module } from 'vuex'

export interface EstadoTarefa {
  tarefas: ITarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      tarefa.id = Date.now().toString()
      state.tarefas.unshift(tarefa)
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex(tar => tar.id === tarefa.id)

      state.tarefas[index] = tarefa
    },
    [EXCLUIR_TAREFA](state, id: string) {
      state.tarefas = state.tarefas.filter(tar => tar.id !== id)
    }
  },
  actions: {
    async [OBTER_TAREFAS]({ commit }, filtro: string) {
      try {
        let url = 'tarefas'

        if (filtro) url += '?descricao=' + filtro
        const { data: tarefas } = await http.get<ITarefa[]>(url)
        commit(DEFINIR_TAREFAS, tarefas.reverse())
      } catch (e) {
        console.log(e)
      }
    },
    async [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      try {
        const { data: resTarefa } = await http.post('tarefas', tarefa)

        commit(ADICIONA_TAREFA, resTarefa)
        return resTarefa
      } catch (e) {
        console.log(e)
        return
      }
    },
    async [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      try {
        const { data: resTarefa } = await http.put(
          `tarefas/${tarefa.id}`,
          tarefa
        )

        commit(ALTERA_TAREFA, resTarefa)
        return resTarefa
      } catch (e) {
        console.log(e)
        return
      }
    },
    async [APAGAR_TAREFA]({ commit }, id: string) {
      try {
        const { data } = await http.delete(`tarefas/${id}`)

        commit(EXCLUIR_TAREFA, id)

        return data
      } catch (e) {
        console.log(e)
        return
      }
    }
  }
}
