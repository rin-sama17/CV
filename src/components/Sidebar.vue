<script setup>
import { ref } from 'vue'
const sidebarItems = [
  {
    to: '/',
    name: 'خانه',
    color: 'hover:bg-indigo-400',
    icon: 'co-home',
  },
  {
    name: 'درباره ما',
    to: '/about-us',
    color: 'hover:bg-red-400',
    icon: 'gi-ancient-sword',
  },

  {
    to: '/samples',
    name: 'نمونه کار',
    color: 'hover:bg-yellow-400',
    icon: 'bi-code-slash',
  },
  {
    to: '/contact-us',
    name: 'تماس با ما',
    color: 'hover:bg-green-400',
    icon: 'bi-cursor',
  },
]
</script>

<template>
  <div class="sidebar">
    <div class="flex items-center" v-for="item in sidebarItems" :key="item">
      <div class="group flex items-center">
        <div class="sidebar-btn-tooltip group-hover:scale-100">
          <h4>
            {{ item.name }}
          </h4>
        </div>
        <router-link :to="item.to">
          <button :class="'sidebar-btn ' + item.color">
            <v-icon :name="item.icon" class="w-8 h-8" />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
