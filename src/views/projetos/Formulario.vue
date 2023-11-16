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
import { defineComponent, ref } from 'vue';
import { useStore } from '../../store/index'
import { TipoDeNotificacao } from '@/interfaces/INotificacao';
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';
import useNotificador from '@/hooks/useNotificacao'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'FormularioView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const store = useStore()
    const { notificar } = useNotificador()
    const nomeDoProjeto = ref('')

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(proj => proj.id == props.id)
      nomeDoProjeto.value = projeto?.nome || ''
    }

    const lidarComSucesso = (titulo: string, texto: string) => {
      nomeDoProjeto.value = ''
      notificar({
        titulo,
        texto,
        tipo: TipoDeNotificacao.SUCESSO
      })
      router.push('/projetos')
    }

    const lidarComErro = (texto: string) => {
      notificar({
        titulo: 'Ops!',
        texto,
        tipo: TipoDeNotificacao.FALHA
      })
    }

    const salvar = async () => {
      if (props.id) {
        const proj = await store.dispatch(ALTERAR_PROJETO, { id: props.id, nome: nomeDoProjeto.value })
        if (!proj) {
          lidarComErro('Houve um problema ao editar o projeto :(')
          return
        }
      } else {
        const proj = await store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)

        if (!proj) {
          lidarComErro('Houve um problema ao cadastrar um novo projeto :(')
          return
        }
      }
      lidarComSucesso('Novo projeto criado!', 'Prontinho! Seu projeto já está disponível.')
    }

    return {
      nomeDoProjeto,
      salvar
    }
  }
});
</script>