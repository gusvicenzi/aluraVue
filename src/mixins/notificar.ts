import { INotificacao } from '@/interfaces/INotificacao'
import { NOTIFICAR } from '@/store/tipo-mutacoes'
import { store } from '@/store'

export const notificacaoMixin = {
  methods: {
    notificar(notificacao: Omit<INotificacao, 'id'>): void {
      store.commit(NOTIFICAR, notificacao)
    }
  }
}
