<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <Botao icone="fas fa-play" texto="start" @clicado="iniciar" :desabilitado="cronometroRodando" />
    <Botao icone="fas fa-stop" texto="stop" @clicado="finalizar" :desabilitado="!cronometroRodando" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
import Botao from './Botao.vue';

export default defineComponent({
  name: 'TemporizadorComponent',
  emits: [
    'aoTemporizadorFinalizado',
    'aoTemporizadorIniciar'
  ],
  props: {
    tempoEmSegundos: { type: Number, required: true },
    cronometro: { type: Number, required: true },
    cronometroRodando: { type: Boolean, required: true }
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toLocaleTimeString()
    }
  },
  methods: {
    iniciar() {
      this.$emit('aoTemporizadorIniciar')
    },
    finalizar() {
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
    }
  },
  components: { Cronometro, Botao }
})
</script>