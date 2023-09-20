import { createApp } from 'vue';
import './style.css';
import App from './App.vue';



import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiAncientSword, CoHome, BiCursor, BiCodeSlash, FaRegularUser, PxBookmark, MdJavascriptRound, CoReact, CoVueJs, SiTailwindcss, CoNextJs, CoLaravel, MdPhpRound } from "oh-vue-icons/icons";

import { router } from "./router";

addIcons(GiAncientSword, CoHome, BiCursor, BiCodeSlash, FaRegularUser, PxBookmark, MdJavascriptRound, CoReact, CoVueJs, SiTailwindcss, CoNextJs, CoLaravel, MdPhpRound);



const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);

router.isReady().then(() => app.mount('#app'));