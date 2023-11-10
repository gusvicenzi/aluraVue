import { IProjeto } from '@/interfaces/IProjeto'
import { InjectionKey } from 'vue'
import { Store, createStore } from 'vuex'

interface Estado {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [
      {
        id: Date.now().toString(),
        nome: 'TypeScript'
      },
      {
        id: Date.now().toString(),
        nome: 'Vue'
      }
    ]
  }
})
