import { IProjeto } from '@/interfaces/IProjeto'
import { InjectionKey } from 'vue'
import { Store, createStore, useStore as useStoreVuex } from 'vuex'
import {
  ADICIONA_PROJETO,
  ADICIONA_TAREFA,
  ALTERA_PROJETO,
  ALTERA_TAREFA,
  DEFINIR_PROJETOS,
  DEFINIR_TAREFAS,
  EXCLUIR_PROJETO,
  EXCLUIR_TAREFA,
  NOTIFICAR
} from './tipo-mutacoes'
import { ITarefa } from '@/interfaces/ITarefa'
import { INotificacao } from '@/interfaces/INotificacao'
import {
  ALTERAR_PROJETO,
  ALTERAR_TAREFA,
  APAGAR_PROJETO,
  APAGAR_TAREFA,
  CADASTRAR_PROJETO,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  OBTER_TAREFAS
} from './tipo-acoes'
import http from '@/http'

interface Estado {
  projetos: IProjeto[]
  tarefas: ITarefa[]
  notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    notificacoes: [],
    projetos: [],
    tarefas: []
  },
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
    },
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
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = Date.now()
      state.notificacoes.push(novaNotificacao)

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          not => not.id !== novaNotificacao.id
        )
      }, 3000)
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
    },
    async [OBTER_TAREFAS]({ commit }) {
      try {
        const { data: tarefas } = await http.get<ITarefa[]>('tarefas')
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
})

export function useStore(): Store<Estado> {
  return useStoreVuex(key)
}
