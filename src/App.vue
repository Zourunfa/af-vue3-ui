<template>
  <div id="app" class="app-container">
    <input-demo></input-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputDemo from "./components/input/demo.vue";
export default defineComponent({
  name: "App",
  components: {
    InputDemo,
  },
});
</script>

<style lang="scss">
.app-container {
  width: 300px;
  margin: 0 auto;
}
</style>
