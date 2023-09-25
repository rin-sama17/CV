<template>
  <v-icon
    name="bi-plus-square-fill"
    @click="setIsOpen(true)"
    class="sidebar-btn hover:bg-emerald-400"
  />

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-xl font-bold text-purple-400 text-right mb-2">
      راه های ارتباطی
    </h1>

    <label class="flex items-center space-x-4 group" v-for="item in social">
      <input class="input" :placeholder="item.name" />
      <span class="input-label">
        <v-icon
          :name="item.icon"
          :class="'sidebar-btn group-hover:sidebar-btn-hover ' + item.color"
        />
      </span>
    </label>
    <button class="sidebar-btn my-2 px-4 w-auto hover:bg-blue-400">
      ثبت
    </button>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../common/Modal.vue'

const social = [
  {
    name: 'تلگرام',
    color: 'group-hover:bg-sky-400',
    icon: 'fa-telegram-plane',
  },
  {
    name: 'ایمیل',
    color: 'group-hover:bg-yellow-400',
    icon: 'md-email-outlined',
  },
  {
    name: 'تماس',
    color: 'group-hover:bg-green-500',
    icon: 'bi-telephone-fill',
  },
]

const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}
</script>
