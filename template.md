import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
name: "AInput",
setup(props, { emit }) {
return () => {
return (
<div class="af-field-wrap">
<input class="af-field" type="text" />
</div>
);
};
},
});
