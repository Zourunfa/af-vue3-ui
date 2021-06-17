import Input from "./components/input/index";
import { App } from "vue";
import FormItem from "./components/Form/index";

const components = [Input, FormItem];

export default function (app: App) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
