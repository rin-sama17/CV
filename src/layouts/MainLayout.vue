<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div class="flex font-['vazir']">
    <div
      class="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 w-full"
    >
      <Transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        appear
      >
        <router-view></router-view>
      </Transition>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>
