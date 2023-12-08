import './bootstrap';
import "../css/app.css"
import {createApp} from "vue";
import App from "./App.vue"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./routing/router.js";
import CKEditor from "@ckeditor/ckeditor5-vue";
library.add(fas,fab);

const app=createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon).use(router).use(CKEditor).mount("#app");
