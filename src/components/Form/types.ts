import { RuleItem } from "async-validator";

const FormItemKey = "fromItemkey";

interface FormItemContext {
  handleValueChange(value: string): void;
  handleBlurChange(value: string): void;
}

type judgeTrigger = "change" | "blur";

interface AfRuleItem extends RuleItem {
  trigger?: judgeTrigger;
}
export { FormItemKey, FormItemContext, AfRuleItem, judgeTrigger };
