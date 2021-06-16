<template>
  <div class="demo-box">
    <p>text:{{ text }}</p>
    <a-input placeholder="请输入XXX" v-model="text"></a-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AInput from "./index";
export default defineComponent({
  name: "InputDemo",
  components: { AInput },
  setup() {
    const text = ref("");
    return { text };
  },
});
</script>

<style scoped></style>
