<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia">
      Você ainda não criou nenhuma tarefa hoje!
    </Box>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Tarefa from '../components/Tarefa.vue';
import Formulario from '../components/Formulario.vue';
import Box from '../components/Box.vue';
import { ITarefa } from '../interfaces/ITarefa';
import { useStore } from '@/store';
import { CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';

export default defineComponent({
  name: 'TarefasView',
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
    },
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.store.state.tarefas.length === 0
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)
    return {
      tarefas: computed(() => store.state.tarefas),
      store
    }
  },
  components: { Formulario, Box, Tarefa }
});
</script>
