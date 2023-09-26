import { Home, Samples, AboutUs, ContactUs, Blogs, } from "../pages";
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
    EditSample,
    AdminHome
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
            { path: '', component: AdminHome },
            { path: 'admin-management', component: UserManagement },
            { path: 'blog-management', component: BlogManagement },
            { path: 'sample-management', component: SampleManagement },
            { path: 'add-admin', component: AddAdmin },
            { path: 'edit-admin', component: EditAdmin },
            { path: 'add-blog', component: AddBlog },
            { path: 'edit-blog', component: EditBlog },
            { path: 'add-sample', component: AddSample },
            { path: 'edit-sample', component: EditSample },
        ]
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});