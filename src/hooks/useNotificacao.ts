import { INotificacao } from '@/interfaces/INotificacao'
import { store } from '@/store'
import { NOTIFICAR } from '@/store/tipo-mutacoes'

type Notificador = {
  notificar: (notificacao: Omit<INotificacao, 'id'>) => void
}

export default (): Notificador => {
  const notificar = (notificacao: Omit<INotificacao, 'id'>): void => {
    store.commit(NOTIFICAR, notificacao)
  }
  return { notificar }
}
