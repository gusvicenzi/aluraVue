<template>
  <section>
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
        <div class="field">
          <button class="button" type="submit">
            Salvar
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../../store/index'
import { TipoDeNotificacao } from '@/interfaces/INotificacao';
import { notificacaoMixin } from '@/mixins/notificar';
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';

export default defineComponent({
  name: 'FormularioView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mixins: [
    notificacaoMixin
  ],
  data() {
    return {
      nomeDoProjeto: '',
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id === this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  methods: {
    async salvar() {
      if (this.id) {
        const proj = await this.store.dispatch(ALTERAR_PROJETO, { id: this.id, nome: this.nomeDoProjeto })
        if (!proj) {
          this.lidarComErro('Houve um problema ao editar o projeto :(')
          return
        }
      } else {
        const proj = await this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)

        if (!proj) {
          this.lidarComErro('Houve um problema ao cadastrar um novo projeto :(')
          return
        }
      }
      this.lidarComSucesso('Novo projeto criado!', 'Prontinho! Seu projeto já está disponível.')
    },
    lidarComSucesso(titulo: string, texto: string) {
      this.nomeDoProjeto = ''
      this.$router.push('/projetos')
      this.notificar({
        titulo,
        texto,
        tipo: TipoDeNotificacao.SUCESSO
      })
    },
    lidarComErro(texto: string) {
      this.notificar({
        titulo: 'Ops!',
        texto,
        tipo: TipoDeNotificacao.FALHA
      })
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  }
});
</script>