import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiAncientSword,
  CoHome,
  BiCursor,
  BiCodeSlash,
  FaRegularUser,
  PxBookmark,
  MdJavascriptRound,
  CoReact,
  CoVueJs,
  SiTailwindcss,
  CoNextJs,
  CoLaravel,
  MdPhpRound,
  MdEmailOutlined,
  FaTelegramPlane,
  BiTelephoneFill,
  BiSpeedometer2,
  MdHighqualityOutlined,
  RiHandCoinLine,
  MdSupportagent,
  MdDaterange,
  HiSolidUserGroup,
  BiNewspaper,
  MdBackuptable,
  RiAdminFill,
  HiPencil,
  IoCamera,
  BiPlusSquareFill
} from 'oh-vue-icons/icons';

import { router } from './router';

addIcons(
  GiAncientSword,
  CoHome,
  BiCursor,
  BiCodeSlash,
  FaRegularUser,
  PxBookmark,
  MdJavascriptRound,
  CoReact,
  CoVueJs,
  SiTailwindcss,
  CoNextJs,
  CoLaravel,
  MdPhpRound,
  MdEmailOutlined,
  FaTelegramPlane,
  BiTelephoneFill,
  BiSpeedometer2,
  MdHighqualityOutlined,
  RiHandCoinLine,
  MdSupportagent,
  MdDaterange,
  HiSolidUserGroup,
  BiNewspaper,
  MdBackuptable,
  RiAdminFill,
  HiPencil,
  IoCamera,
  BiPlusSquareFill

);

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);

router.isReady().then(() => app.mount('#app'));