<template>
  <div class="demo-box af-text">
    <a-form-item label="username" :rules="nameRules" prop="username">
      <a-input placeholder="请输入姓名" v-model="formValues.username"></a-input>
    </a-form-item>
    <a-form-item label="password" prop="password">
      <a-input
        placeholder="请输入密码"
        v-model="formValues.password"
        type="password"
      ></a-input>
    </a-form-item>

    <a-form-item label="xxx">
      <button>提交</button>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import "./index.scss";
import { defineComponent, reactive, ref } from "vue";
import AFormItem from "./index";
import { AfRuleItem } from "./types";
// import

export default defineComponent({
  name: "FormDemo",
  components: { AFormItem },
  setup() {
    const text = ref("");
    const nameRules = ref<AfRuleItem | AfRuleItem[]>([
      {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
      },
      {
        message: "输入不超过6位",
        max: 6,
        trigger: "change",
      },
    ]);
    const formValues = reactive({
      username: "",
      password: "",
    });
    return { text, formValues, nameRules };
  },
});
</script>

<style lang="scss">
.af-text {
  color: rgb(111, 0, 255);
  font-weight: 10px;
  font-size: $font-size-mid;
}
</style>
