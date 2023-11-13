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
import { computed, defineComponent } from 'vue'
import Temporizador from './Temporizador.vue'
import { useStore } from '@/store'
import { TipoDeNotificacao } from '@/interfaces/INotificacao'
import useNotificador from '@/hooks/useNotificacao'

export default defineComponent({
  name: 'FormularioComponent',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador },
  data() {
    return {
      descricao: '',
      idProjeto: '',
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciarTemporizador() {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    salvarTarefa(tempoDecorrido: number): void {
      if (!this.idProjeto) {
        this.notificar({
          titulo: 'Ops!!',
          texto: 'Selecione um projeto antes de finalizar a tarefa!',
          tipo: TipoDeNotificacao.FALHA
        })
        return
      }
      console.log(`tempo da tarefa ${this.descricao}: `, tempoDecorrido);
      this.$emit('aoSalvarTarefa', { duracaoEmSegundos: tempoDecorrido, descricao: this.descricao, projeto: this.projetos.find(proj => proj.id === this.idProjeto) })

      this.descricao = ''

      // para e zera temporizador
      this.cronometroRodando = false
      clearInterval(this.cronometro);
      this.tempoEmSegundos = 0

    }
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      projetos: computed(() => store.state.projetos),
      notificar
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