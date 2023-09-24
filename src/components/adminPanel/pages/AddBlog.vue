<template>
  <div class="group flex items-center">
    <button
      @click="setIsOpen(true)"
      class="sidebar-btn my-2 w-auto hover:bg-purple-400 peer"
    >
      ساخت وبلاک جدید
    </button>
  </div>

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-bold text-xl text-purple-400 text-right mb-3">
      ساخت وبلاک جدید
    </h1>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../common/Modal.vue'
const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}
</script>
