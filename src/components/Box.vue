<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot> <!-- equivalent to children in React-->
  </div>
</template>

<script lang="ts">
import { StyleValue, defineComponent } from 'vue';

export default defineComponent({
  name: 'BoxComponent',
  data() {
    return {
      estilos: {
        "background-color": '#FAF0CA'
      } as StyleValue
    }
  }
});
</script>

<!-- <style scoped>
.box {
  background-color: #FAF0CA;
}
</style> -->