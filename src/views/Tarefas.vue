<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro" />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa" />
    <Box v-if="listaEstaVazia">
      Você ainda não criou nenhuma tarefa hoje!
    </Box>
    <Modal :mostrar="tarefaSelecionada != null">
      <template v-slot:header>
        <p class="modal-card-title">Editando uma tarefa</p>
        <button @click="fecharModal" class="delete" aria-label="close"></button>
      </template>
      <template v-slot:body>
        <div class="field">
          <label for="descricaoDaTarefa" class="label">
            Descrição
          </label>
          <input type="text" class="input" v-model="tarefaSelecionada!.descricao" id="descricaoDaTarefa" />
        </div>
      </template>
      <template v-slot:footer>
        <button @click="alterarTarefa" class="button is-success">Salvar alterações</button>
        <button @click="fecharModal" class="button">Cancelar</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import Tarefa from '../components/Tarefa.vue';
import Formulario from '../components/Formulario.vue';
import Box from '../components/Box.vue';
import Modal from '../components/Modal.vue';
import { ITarefa } from '../interfaces/ITarefa';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';

export default defineComponent({
  name: 'TarefasView',
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    fecharModal() {
      this.tarefaSelecionada = null
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
      this.fecharModal()
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas?.length === 0
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)

    const filtro = ref('')

    const tarefas = computed(() => store.state.tarefa.tarefas?.filter(t => !filtro.value || t.descricao.includes(filtro.value)))

    // watchEffect(() => {
    //   store.dispatch(OBTER_TAREFAS, filtro.value);
    // })

    return {
      // tarefas: computed(() => store.state.tarefa.tarefas),
      tarefas,
      store,
      filtro
    }
  },
  components: { Formulario, Box, Tarefa, Modal }
});
</script>
