<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo alura tracker">
    </h1>
    <Botao :icone="'fas fa-' + iconeBotao" texto="" @clicado="alterarTema" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Botao from './Botao.vue'

export default defineComponent({
  name: 'App',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    };
  },
  computed: {
    iconeBotao(): string {
      if (this.modoEscuroAtivo)
        return 'sun';
      return 'moon';
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
    }
  },
  components: { Botao }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>