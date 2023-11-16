<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option v-for="projeto in projetos" :value="projeto.id" :key="projeto.id">{{ projeto.nome }}</option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="salvarTarefa" @aoTemporizadorIniciar="iniciarTemporizador"
          :tempoEmSegundos="tempoEmSegundos" :cronometroRodando="cronometroRodando" :cronometro="cronometro" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Temporizador from './Temporizador.vue'
import { useStore } from '@/store'
import { TipoDeNotificacao } from '@/interfaces/INotificacao'
import useNotificador from '@/hooks/useNotificacao'

export default defineComponent({
  name: 'FormularioComponent',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador },
  setup(props, { emit }) {
    const store = useStore()
    const { notificar } = useNotificador()

    const descricao = ref('')
    const idProjeto = ref('')
    const tempoEmSegundos = ref(0)
    const cronometro = ref(0)
    const cronometroRodando = ref(false)

    const projetos = computed(() => store.state.projeto.projetos)

    const salvarTarefa = (tempoDecorrido: number): void => {
      if (!idProjeto.value) {
        notificar({
          titulo: 'Ops!!',
          texto: 'Selecione um projeto antes de finalizar a tarefa!',
          tipo: TipoDeNotificacao.FALHA
        })
        return
      }
      console.log(`tempo da tarefa ${descricao.value}: `, tempoDecorrido);
      emit('aoSalvarTarefa', { duracaoEmSegundos: tempoDecorrido, descricao: descricao.value, projeto: projetos.value.find(proj => proj.id === idProjeto.value) })

      descricao.value = ''

      // para e zera temporizador
      cronometroRodando.value = false
      clearInterval(cronometro.value);
      tempoEmSegundos.value = 0
    }

    const iniciarTemporizador = () => {
      cronometroRodando.value = true
      cronometro.value = setInterval(() => {
        tempoEmSegundos.value += 1;
      }, 1000);
    }

    return {
      projetos,
      notificar,
      descricao,
      idProjeto,
      tempoEmSegundos,
      cronometro,
      cronometroRodando,
      salvarTarefa,
      iniciarTemporizador
    }
  }
})
</script>

<style>
.formulario {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>