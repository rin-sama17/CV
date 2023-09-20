<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex font-['vazir']">
    <div
      class="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 w-full"
    >
      <router-view></router-view>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>
