import { App } from 'vue';
import FormItem from './components/FormItem';
// 注意这里虽然叫做Input但是全局引入的时候必须使用注册的name引入
import Input from './components/Input/index';
import Form from './components/Form/index';
import Button from './components/Button';

const components = [
  Input,
  FormItem,
  Form,
  Button
]


export default function (app: App) {
  components.forEach(item => {
    app.component(item.name, item)
  })
}