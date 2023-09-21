<script setup>
import { rin, mahdi } from '../assets'

const team = [
  {
    name: 'رین',
    color: 'text-orange-400',
    photo: {
      url: rin,
      color: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    },
    social: [
      {
        name: 'تلگرام',
        color: 'hover:bg-blue-600',
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
    ],
  },
  {
    name: 'مهدی',
    color: 'text-purple-400',
    photo: {
      url: mahdi,
      color: 'bg-gradient-to-br from-red-400 to-purple-600',
    },
    social: [
      {
        name: 'تلگرام',
        color: 'hover:bg-blue-600',
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
    ],
  },
]
</script>

<template>
  <div
    class="flex flex-col xl:grid xl:grid-cols-2 justify-center items-center h-screen overflow-y-auto"
  >
    <div
      class="relative p-3 md:h-60 w-60 md:w-[30rem] rounded-2xl gap-4 flex flex-col-reverse md:grid md:grid-cols-3 md:items-center justify-end bg-gray-100 m-3 md:pr-8"
      v-for="item in team"
      :key="item.name"
    >
      <div class="flex flex-col items-end col-span-2">
        <h1 :class="'font-bold text-2xl ' + item.color">{{ item.name }}</h1>

        <h1 class="font-bold text-xl text-gray-600">راه های ارتباطی</h1>
        <div class="flex flex-wrap justify-end items-start mt-1 gap-1 p-3">
          <div v-for="icon in item.social" :key="icon.name">
            <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
          </div>
        </div>
      </div>

      <div
        :class="
          'md:absolute  md:-right-28 md:top-auto w-fit mx-auto p-1 rounded-full ' +
          item.photo.color
        "
      >
        <img
          :src="item.photo.url"
          alt=""
          class="w-20 h-20 md:w-52 md:h-52 rounded-full"
        />
      </div>
    </div>
  </div>
</template>
