<template>
  <div class="flex justify-end" v-for="item in sidebarItems" :key="item">
    <router-link :to="item.to">
      <div class="flex items-center space-x-4">
        <h4 class="text-lg md:font-bold text-gray-200 text-right">
          {{ item.name }}
        </h4>

        <router-link
          :to="item.to"
          :exact-active-class="'sidebar-btn-hover my-2  ' + item.color"
          :class="'sidebar-btn my-2 hover:' + item.color"
        >
          <v-icon :name="item.icon" class="icon" />
        </router-link>
      </div>
    </router-link>
  </div>

  <div class="md:h-full flex justify-end items-end">
    <router-link to="/">
      <div class="flex justify-end border-t-2 border-slate-400 pt-1">
        <div class="flex items-center space-x-4">
          <h4 class="text-lg lg:text-lg md:text-sm text-right text-gray-200">
            برگشت به خانه
          </h4>
          <button
            class="sidebar-btn my-2 bg-indigo-600 hover:!text-gray-100 text-gray-100"
          >
            <v-icon name="co-home" class="icon" />
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
const sidebarItems = [
  {
    to: '/admin-panel',
    name: 'خانه',
    color: 'bg-yellow-400',
    icon: 'ri-admin-fill',
  },
  {
    to: '/admin-panel/admin-management',
    name: 'ادمین ها',
    color: 'bg-sky-400',
    icon: 'hi-solid-user-group',
  },

  {
    to: '/admin-panel/blog-management',
    name: 'مقاله ها',
    color: 'bg-emerald-400',
    icon: 'bi-newspaper',
  },
  {
    to: '/admin-panel/sample-management',
    name: 'نمونه کار ها',
    color: 'bg-orange-400',
    icon: 'md-backuptable',
  },
]
</script>
