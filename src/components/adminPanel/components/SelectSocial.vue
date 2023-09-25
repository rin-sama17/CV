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
      <input
        class="input"
        :placeholder="item.label"
        :name="item.name"
        v-model="state[item.name]"
      />

      <span class="input-label">
        <v-icon
          :name="item.icon"
          @click="state[item.name] = ''"
          v-bind:class="[
            state[item.name].length > 0 && 'sidebar-btn-hover ' + item.color,
          ]"
          :class="
            'sidebar-btn group-hover:sidebar-btn-hover group-hover:' +
            item.color
          "
        />
      </span>
    </label>
  </Modal>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Modal from '../../common/Modal.vue'

const state = reactive({
  telegram: '',
  email: '',
  phone: '',
})
const social = [
  {
    name: 'telegram',
    label: 'تلگرام',
    color: 'bg-sky-400',
    icon: 'fa-telegram-plane',
  },
  {
    name: 'email',
    label: 'ایمیل',
    color: 'bg-yellow-400',
    icon: 'md-email-outlined',
  },
  {
    name: 'phone',
    label: 'تماس',
    color: 'bg-green-500',
    icon: 'bi-telephone-fill',
  },
]

const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}
</script>
