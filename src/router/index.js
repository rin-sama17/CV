import { Home, Samples, AboutUs, ContactUs } from "../pages";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/contact-us', component: ContactUs },
    { path: '/about-us', component: AboutUs },
    { path: '/samples', component: Samples },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});