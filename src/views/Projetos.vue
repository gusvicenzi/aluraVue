<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <RouterView />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjetosView',
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>