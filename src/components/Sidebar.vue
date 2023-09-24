<script setup>
import Login from './Login.vue'
const sidebarItems = [
  {
    to: '/',
    name: 'خانه',
    color: 'bg-indigo-400',
    icon: 'co-home',
  },
  {
    name: 'درباره ما',
    to: '/about-us',
    color: 'bg-red-400',
    icon: 'gi-ancient-sword',
  },

  {
    to: '/samples',
    name: 'نمونه کار',
    color: 'bg-yellow-400',
    icon: 'bi-code-slash',
  },
  {
    to: '/contact-us',
    name: 'تماس با ما',
    color: 'bg-green-400',
    icon: 'bi-cursor',
  },
  {
    to: '/blogs',
    name: 'وبلاگ',
    color: 'bg-orange-400',
    icon: 'px-bookmark',
  },
]
</script>

<template>
  <div class="hidden md:sidebar">
    <div class="flex items-center" v-for="item in sidebarItems" :key="item">
      <div class="group flex items-center">
        <div class="sidebar-btn-tooltip group-hover:scale-100">
          <h4>
            {{ item.name }}
          </h4>
        </div>
        <router-link
          :to="item.to"
          :exact-active-class="'sidebar-btn-hover my-2  ' + item.color"
          :class="'sidebar-btn my-2 hover:' + item.color"
        >
          <v-icon :name="item.icon" class="w-8 h-8" />
        </router-link>
      </div>
    </div>
    <Login></Login>
  </div>
</template>
