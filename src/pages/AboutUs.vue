<script setup>
import { rin, mahdi } from '../assets'

const team = [
  {
    name: 'رین',
    summary: 'برنامه نویس فرانت اند',
    photo: rin,
    langs: [
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
        color: 'hover:bg-indigo-400',
        icon: 'co-react',
      },
      {
        name: 'نکست جی اس',
        color: 'hover:bg-slate-400',
        icon: 'co-next-js',
      },
    ],
  },
  {
    name: 'مهدی',
    summary: 'برنامه نویس بکند',
    photo: mahdi,
    langs: [
      {
        name: 'لاراول',
        color: 'hover:bg-red-400',
        icon: 'co-laravel',
      },
      {
        name: 'پی اچ پی',
        icon: 'md-php-round',
        color: 'hover:bg-purple-400',
      },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div
      class="relative p-3 h-60 w-[39rem] rounded-2xl flex gap-4 items-center justify-end bg-gray-100 m-3 pr-36"
      v-for="item in team"
      :key="item.name"
    >
      <div class="flex flex-col items-end">
        <h1 class="font-bold text-xl text-gray-600">تکنولوژی ها</h1>
        <div class="flex flex-wrap justify-end items-start mt-1 gap-1 p-3">
          <div v-for="icon in item.langs" :key="icon.name">
            <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <h1 class="text-red-400 font-bold text-2xl">{{ item.name }}</h1>
        <p class="text-slate-400 font-bold text-sm text-end mt-1">
          {{ item.summary }}
        </p>
      </div>

      <div
        class="absolute -right-28 p-1 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full"
      >
        <img :src="item.photo" alt="" class="w-56 h-56 rounded-full" />
      </div>
    </div>
  </div>
</template>
