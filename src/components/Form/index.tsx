import { defineComponent, provide, ref, PropType } from "vue";
import "./index.scss";
import { FormItemKey, AfRuleItem, judgeTrigger } from "./types";
import Schema from "async-validator";

export default defineComponent({
  name: "AFormItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    prop: {
      type: String,
    },
    rules: {
      type: [Object, Array] as PropType<AfRuleItem | AfRuleItem[]>,
      default: () => ({}),
    },
  },
  setup(props, { emit, slots }) {
    const getRules = (trigger: judgeTrigger): AfRuleItem[] => {
      const rules = props.rules;

      const midRules = Array.isArray(rules) ? rules : [rules];
      const trueRules = midRules.filter((item) => item.trigger === trigger);

      return trueRules;
    };
    const handleValueChange = (value: string) => {
      const changeRules = getRules("change");

      if (changeRules.length) {
        validate(changeRules, value);
      }
    };
    const handleBlurChange = (value: string) => {
      const changeRules = getRules("blur");

      if (changeRules.length) {
        validate(changeRules, value);
      }
    };

    const validate = (
      rules: AfRuleItem | AfRuleItem[] | undefined,
      value: string,
    ): Promise<any> => {
      // console.log(rules, value, props.prop);

      if (rules && props.prop) {
        // const value = value
        const schema = new Schema({ [props.prop]: rules });
        return schema
          .validate({ [props.prop]: value })
          .then(() => {
            // 如果验证通过
            errMsg.value = "";
            return true;
          })
          .catch(({ errors }) => {
            errMsg.value = errors[0].message;
            return errors;
          });
      }
      return Promise.resolve(true);
    };

    provide(FormItemKey, {
      handleValueChange,
      handleBlurChange,
    });

    const errMsg = ref("");
    const renderLabel = () => {
      return slots.label ? (
        slots.label()
      ) : (
        <label class="item-label">{props.label}:</label>
      );
    };
    return () => {
      return (
        <div class="af-form-item">
          {renderLabel()}

          <div class="item-content">
            <div class="item-control-wrap">
              {/* 感叹号的作用是表明它一定有slot */}
              {slots.default!()}
            </div>
            <p class="item-error" v-show={errMsg.value}>
              {errMsg.value}
            </p>
          </div>
        </div>
      );
    };
  },
});
