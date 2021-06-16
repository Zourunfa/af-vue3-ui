<template>
  <div id="app" class="app-container text">app</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
@import "/assets/styles/variable";
.text {
  color: $primary-color;
}
</style>
