import { InjectionKey } from 'vue'
import { Store, createStore, useStore as useStoreVuex } from 'vuex'
import { NOTIFICAR } from './tipo-mutacoes'
import { INotificacao } from '@/interfaces/INotificacao'
import { EstadoProjeto, projeto } from './modulos/projeto'
import { EstadoTarefa, tarefa } from './modulos/tarefa'

export interface Estado {
  tarefa: EstadoTarefa
  notificacoes: INotificacao[]
  projeto: EstadoProjeto
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    notificacoes: [],
    tarefa: {
      tarefas: []
    },
    projeto: {
      projetos: []
    }
  },
  mutations: {
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
  actions: {},
  modules: {
    projeto,
    tarefa
  }
})

export function useStore(): Store<Estado> {
  return useStoreVuex(key)
}
