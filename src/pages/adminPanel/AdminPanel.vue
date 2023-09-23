<script setup>
import { rin } from '../../assets'
import { ref } from 'vue'
const langs = [
  {
    name: 'جاوااسکریپت',
    color: 'hover:bg-yellow-400',
    icon: 'md-javascript-round',
  },
  {
    name: 'ویو جی اس',
    color: 'hover:bg-green-400',
    icon: 'co-vue-js',
  },
  {
    name: 'تیلویند',
    color: 'hover:bg-blue-400',
    icon: 'si-tailwindcss',
  },
  {
    name: 'ریکت',
    color: 'hover:bg-sky-400',
    icon: 'co-react',
  },
  {
    name: 'نکست جی اس',
    color: 'hover:bg-slate-300',
    icon: 'co-next-js',
  },
]
const social = [
  {
    name: 'تلگرام',
    color: 'hover:bg-sky-400',
    icon: 'fa-telegram-plane',
  },
  {
    name: 'ایمیل',
    color: 'hover:bg-yellow-400',
    icon: 'md-email-outlined',
  },
  {
    name: 'تماس',
    color: 'hover:bg-green-500',
    icon: 'bi-telephone-fill',
  },
]
</script>

<template>
  <div class="flex flex-col p-4 text-white h-screen items-center container">
    <div
      class="relative group mx-auto my-10 p-2 transition-all w-fit duration-700 bg-gradient-to-bl from-indigo-400 to-red-500 rounded-full shadow-2xl"
    >
      <img :src="rin" alt="rin" class="rounded-full w-96 h-96" />
      <div
        class="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full p-2"
      >
        <div
          class="bg-gray-400/50 backdrop-blur-sm h-full w-full rounded-full flex justify-center pb-4 items-end"
        >
          <v-icon name="io-camera" class="text-gray-900 w-14 h-14"></v-icon>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 col-span-2 w-3/4">
      <label class="block">
        <span class="input-label">
          حوزه فعالیت
        </span>
        <input class="input" />
      </label>
      <label class="block">
        <span class="input-label">
          نام
        </span>
        <input type="text" class="input" />
      </label>
      <div class="flex flex-col items-center group">
        <h1 class="text-xl font-bold mb-3">تکنولوژی ها</h1>
        <div class="flex space-x-3 p-3">
          <div
            class="transition-all delay-100 duration-400 opacity-0 group-hover:opacity-100"
          >
            <v-icon
              name="hi-pencil"
              class="sidebar-btn bg-sky-300 text-gray-900"
            />
          </div>
          <div v-for="icon in langs" :key="icon.name">
            <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center group">
        <h1 class="text-xl font-bold mb-3">راه های ارتباطی</h1>
        <div class="flex flex-wrap justify-end items-start gap-2 p-3">
          <div
            class="transition-all delay-100 duration-400 opacity-0 group-hover:opacity-100"
          >
            <v-icon
              name="hi-pencil"
              class="sidebar-btn bg-sky-300 text-gray-900"
            />
          </div>
          <div v-for="icon in social" :key="icon.name">
            <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
