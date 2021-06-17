<template>
  <div class="demo-box">
    <a-input placeholder="请输入XXX" v-model="text" type="text"></a-input>
    <p class="af-text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import "./index.scss";
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

<style lang="scss">
.af-text {
  color: rgb(111, 0, 255);
  font-size: $font-size-mid;
}
</style>
