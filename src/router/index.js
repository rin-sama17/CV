import { Home, Samples, AboutUs, ContactUs, Blogs, AdminPanel, NewBlog, NewAdmin, NewSample } from "../pages";
import { MainLayout, AdminLayout } from "../layouts";
import { createRouter, createWebHistory } from "vue-router";
import {
    UserManagement,
    BlogManagement,
    SampleManagement,
    AddAdmin,
    AddBlog,
    AddSample,
    EditAdmin,
    EditBlog,
    EditSample
} from "../components/adminPanel/pages";

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
            { path: '/admin-panel/admin-management', component: UserManagement },
            { path: '/admin-panel/blog-management', component: BlogManagement },
            { path: '/admin-panel/sample-management', component: SampleManagement },
            { path: '/admin-panel/add-admin', component: AddAdmin },
            { path: '/admin-panel/edit-admin', component: EditAdmin },
            { path: '/admin-panel/add-blog', component: AddBlog },
            { path: '/admin-panel/edit-blog', component: EditBlog },
            { path: '/admin-panel/add-sample', component: AddSample },
            { path: '/admin-panel/edit-sample', component: EditSample },
        ]
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});