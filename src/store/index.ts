import { IProjeto } from '@/interfaces/IProjeto'
import { InjectionKey } from 'vue'
import { Store, createStore, useStore as useStoreVuex } from 'vuex'
import {
  ADICIONA_PROJETO,
  ADICIONA_TAREFA,
  ALTERA_PROJETO,
  ALTERA_TAREFA,
  EXCLUIR_PROJETO,
  EXCLUIR_TAREFA
} from './tipo-mutacoes'
import { ITarefa } from '@/interfaces/ITarefa'

interface Estado {
  projetos: IProjeto[]
  tarefas: ITarefa[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [{ id: Date.now().toString(), nome: 'teste' }],
    tarefas: []
  },
  mutations: {
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
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      tarefa.id = Date.now().toString()
      state.tarefas.push(tarefa)
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex(tar => tar.id === tarefa.id)

      state.tarefas[index] = tarefa
    },
    [EXCLUIR_TAREFA](state, id: string) {
      state.tarefas = state.tarefas.filter(tar => tar.id !== id)
    }
  }
})

export function useStore(): Store<Estado> {
  return useStoreVuex(key)
}
