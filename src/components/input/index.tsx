import { defineComponent } from "vue";
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
        return ["text", "number", "tel", "textarea", "time"].includes(value);
      },
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };

    return () => {
      return (
        <div class="af-field-wrap">
          <input
            class="af-field"
            type="text"
            placeholder={attrs.placeholder as string}
            onInput={handleInput}
          />
        </div>
      );
    };
  },
});