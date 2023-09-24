<template>
  <div class="group flex items-center">
    <div class="sidebar-btn-tooltip group-hover:scale-100">
      <h4>
        ورود
      </h4>
    </div>
    <router-link to="/admin-panel">
      <button
        @click="setIsOpen(true)"
        class="sidebar-btn my-2 hover:bg-purple-400 peer"
      >
        <v-icon name="fa-regular-user" class="w-8 h-8" />
      </button>
    </router-link>
  </div>

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-bold text-xl text-purple-400 text-right mb-3">
      ورود
    </h1>
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
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './common/Modal.vue'
const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}
</script>
