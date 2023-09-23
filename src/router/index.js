import { Home, Samples, AboutUs, ContactUs, Blogs, AdminPanel, NewBlog, NewAdmin, NewSample } from "../pages";
import { MainLayout, AdminLayout } from "../layouts";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/", component: MainLayout, children: [
            { path: '/', component: Home },
            { path: '/blogs', component: Blogs },
            { path: '/contact-us', component: ContactUs },
            { path: '/about-us', component: AboutUs },
            { path: '/samples', component: Samples },
        ]
    },
    {
        path: "/admin-panel", component: AdminLayout, children: [

            { path: '/admin-panel', component: AdminPanel },
            { path: '/admin-panel/new-admin', component: NewAdmin },
            { path: '/admin-panel/new-blog', component: NewBlog },
            { path: '/admin-panel/new-sample', component: NewSample },

        ]
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});