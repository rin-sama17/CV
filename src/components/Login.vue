<script setup>
import { ref } from 'vue'
const showLogin = ref(false)
</script>

<template>
  <div class="group flex items-center">
    <div class="sidebar-btn-tooltip group-hover:scale-100">
      <h4>
        ورود
      </h4>
    </div>
    <router-link to="/admin-panel">
      <button class="sidebar-btn my-2 hover:bg-purple-400 peer">
        <v-icon name="fa-regular-user" class="w-8 h-8" />
      </button>
    </router-link>
    <div
      class="peer-focus:transition duration-1000 hidden peer-focus:flex opacity-0 fixed top-0 peer-focus:opacity-100 justify-center items-center right-0 h-screen w-screen z-20 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
    >
      <div class="p-5 w-1/2 gap-4 rounded-md z-30 bg-white shadow-2xl">
        <h1 class="text-bold text-xl text-purple-400 text-right mb-3">ورود</h1>
        <div class="grid grid-cols-2 gap-4">
          <label class="block">
            <span class="input-label">رمز عبور</span>
            <input type="text" value="bruh" class="input" />
          </label>
          <label class="block">
            <span class="input-label">نام کاربری</span>
            <input type="text" value="1234" class="input" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
