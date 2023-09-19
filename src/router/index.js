import { Home, Samples } from "../pages";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/samples', component: Samples },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});