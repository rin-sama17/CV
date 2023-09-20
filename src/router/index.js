import { Home, Samples, AboutUs } from "../pages";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/samples', component: Samples },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});