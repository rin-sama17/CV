<template>
  <div class="flex flex-col items-center">
    <h1 class="text-sm md:text-xl md:font-bold mb-3">راه های ارتباطی</h1>
    <div class="flex flex-wrap justify-end items-start gap-2 pb-3">
      <Transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        appear
        v-for="item in social"
      >
        <v-icon
          v-if="state[item.name].length > 0"
          :name="item.icon"
          :class="'sidebar-btn cursor-pointer hover:' + item.color.color"
        />
      </Transition>
      <div class="transition-all delay-100 duration-400">
        <v-icon
          name="hi-pencil"
          @click="setIsOpen(true)"
          class="sidebar-btn bg-sky-300 text-gray-900"
        />
      </div>
    </div>
  </div>

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
            state[item.name].length > 0 &&
              'sidebar-btn-hover ' + item.color.color,
          ]"
          :class="
            'sidebar-btn group-hover:sidebar-btn-hover ' + item.color.group
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

    color: { color: 'bg-sky-400', group: 'group-hover:bg-sky-400' },
    icon: 'fa-telegram-plane',
  },
  {
    name: 'email',
    label: 'ایمیل',

    color: { color: 'bg-yellow-400', group: 'group-hover:bg-yellow-400' },
    icon: 'md-email-outlined',
  },
  {
    name: 'phone',
    label: 'تماس',

    color: { color: 'bg-green-500', group: 'group-hover:bg-green-500' },
    icon: 'bi-telephone-fill',
  },
]

const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}
</script>
