<template>
  <div class="box has-text-weight-bold">
    <slot></slot> <!-- equivalent to children in React-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoxComponent',
  // props: {
  //   tarefa: {
  //     type: Object as PropType<ITarefa>,
  //     required: true
  //   }
  // }
});
</script>

<style scoped>
.box {
  background-color: #FAF0CA;
}
</style>