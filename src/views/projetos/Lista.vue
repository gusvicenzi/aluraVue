<template>
  <section>
    <RouterLink to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </RouterLink>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <RouterLink :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>
            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../../store/index'
import { TipoDeNotificacao } from '@/interfaces/INotificacao';
import { APAGAR_PROJETO, OBTER_PROJETOS } from '@/store/tipo-acoes';
import useNotificador from '@/hooks/useNotificacao'

export default defineComponent({
  name: 'ListaView',
  methods: {
    async excluir(id: string) {
      const proj = await this.store.dispatch(APAGAR_PROJETO, id)

      if (!proj) {
        this.notificar({
          titulo: 'Ops!',
          texto: 'Houve um problema ao apagar o projeto :(',
          tipo: TipoDeNotificacao.FALHA
        })
        return
      }

      this.notificar({
        titulo: 'Projeto excluído!',
        texto: 'Seu projeto foi de base.',
        tipo: TipoDeNotificacao.ATENCAO
      })
    }
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    store.dispatch(OBTER_PROJETOS)
    return {
      projetos: computed(() => store.state.projeto.projetos),
      store,
      notificar
    }
  }
});
</script>