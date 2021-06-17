import { defineComponent, inject } from "vue";
import { FormItemContext, FormItemKey } from "../Form/types";
import "./index.scss";

export default defineComponent({
  name: "AInput",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      validator: (value: string) => {
        return [
          "text",
          "number",
          "tel",
          "textarea",
          "time",
          "button",
          "password",
        ].includes(value);
      },
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    const formItemCtx = inject<FormItemContext>(FormItemKey);
    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
        formItemCtx?.handleValueChange(value);
      }
    };

    const handleBlur = (e: Event) => {
      formItemCtx?.handleBlurChange(props.modelValue);
    };

    return () => {
      // console.log(props.type);

      return (
        <div class="af-field-wrap">
          <input
            class="af-field"
            type={props.type}
            onBlur={handleBlur}
            placeholder={attrs.placeholder as string}
            onInput={handleInput}
          />
        </div>
      );
    };
  },
});
