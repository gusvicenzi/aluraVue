<template>
  <Box>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        <p>
          {{ tarefa.descricao || 'Tarefa sem descrição' }}
        </p>
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import Box from './Box.vue';
import { ITarefa } from '@/interfaces/ITarefa';

export default defineComponent({
  name: 'TarefaComponent',
  components: { Cronometro, Box },
  emits: ['aoTarefaClicada'],
  methods: {

  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  setup(props, { emit }) {
    const tarefaClicada = (): void => {
      emit('aoTarefaClicada', props.tarefa)
    }
    return {
      tarefaClicada
    }
  }
});
</script>

<style>
.clicavel {
  cursor: pointer;
}
</style>