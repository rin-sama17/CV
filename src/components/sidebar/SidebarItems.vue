<script setup>
import Login from '../Login.vue'

const sidebarItems = [
  {
    to: '/',
    name: 'خانه',
    color: { color: 'bg-indigo-400', hover: 'hover:bg-indigo-400' },
    icon: 'co-home',
  },
  {
    name: 'درباره ما',
    to: '/about-us',
    color: { color: 'bg-red-400', hover: 'hover:bg-red-400' },
    icon: 'gi-ancient-sword',
  },

  {
    to: '/samples',
    name: 'نمونه کار',
    color: { color: 'bg-yellow-400', hover: 'hover:bg-yellow-400' },
    icon: 'bi-code-slash',
  },
  {
    to: '/contact-us',
    name: 'تماس با ما',
    color: { color: 'bg-green-400', hover: 'hover:bg-green-400' },
    icon: 'bi-cursor',
  },
  {
    to: '/blogs',
    name: 'وبلاگ',
    color: { color: 'bg-orange-400', hover: 'hover:bg-orange-400' },
    icon: 'px-bookmark',
  },
]
</script>

<template>
  <div>
    <div
      class="flex items-center justify-end"
      v-for="item in sidebarItems"
      :key="item"
    >
      <router-link :to="item.to">
        <div class="flex items-center space-x-2">
          <h4 class="text-gray-200 text-lg font-bold">
            {{ item.name }}
          </h4>
          <router-link
            :to="item.to"
            :exact-active-class="'sidebar-btn-hover my-2  ' + item.color.color"
            :class="'sidebar-btn my-2 ' + item.color.hover"
          >
            <v-icon :name="item.icon" class="icon" />
          </router-link>
        </div>
      </router-link>
    </div>
    <Login></Login>
  </div>
</template>
