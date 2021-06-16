import Input from "./components/input/index";
import { App } from "vue";

const components = [Input];

export default function (app: App) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
