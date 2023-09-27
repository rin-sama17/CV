import { Home, Samples, AboutUs, ContactUs, Blogs } from '../pages'
import { MainLayout, AdminLayout } from '../layouts'
import { createRouter, createWebHistory } from 'vue-router'
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
  AdminHome,
} from '../components/adminPanel/pages'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'خانه',
        path: '/',
        component: Home,
      },
      { name: 'مقاله ها', path: '/blogs', component: Blogs },
      { name: 'ارتباط با ما', path: '/contact-us', component: ContactUs },
      { name: 'درباره ما', path: '/about-us', component: AboutUs },
      { name: 'نمونه کار ها', path: '/samples', component: Samples },
    ],
  },
  {
    name: 'پنل ادمین',
    path: '/admin-panel',
    component: AdminLayout,
    children: [
      { name: 'اطلاعات شما', path: '', component: AdminHome },
      {
        name: 'مدیریت ادمین',
        path: 'admin-management',
        component: UserManagement,
      },
      {
        name: 'مدیریت مقاله',
        path: 'blog-management',
        component: BlogManagement,
      },
      {
        name: 'مدیریت نمونه کار',
        path: 'sample-management',
        component: SampleManagement,
      },
      { name: 'افزودن ادمین', path: 'add-admin', component: AddAdmin },
      { name: 'ویرایش ادمین', path: 'edit-admin', component: EditAdmin },
      { name: 'افزودن مقاله', path: 'add-blog', component: AddBlog },
      { name: 'ویرایش مقاله', path: 'edit-blog', component: EditBlog },
      { name: 'افزودن نمونه کار', path: 'add-sample', component: AddSample },
      { name: 'ویرایش نمونه کار', path: 'edit-sample', component: EditSample },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
