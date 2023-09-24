<template>
  <div class="group flex items-center">
    <v-icon
      @click="setIsOpen(true)"
      name="hi-pencil"
      class="sidebar-btn bg-sky-300 text-gray-900"
    />
  </div>

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-bold text-xl text-purple-400 text-right mb-3">
      ویرایش وبلاگ
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
