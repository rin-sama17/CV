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
        color: 'hover:bg-sky-400',
        icon: 'fa-telegram-plane',
        to: 'https://t.me/rin_sama',
      },
      {
        name: 'ایمیل',
        color: 'hover:bg-yellow-400',
        icon: 'md-email-outlined',
        to: 'mailto:okumura.rin.samaa@gmail.com',
      },
      // {
      //   name: 'تماس',
      //   color: 'hover:bg-green-500',
      //   icon: 'bi-telephone-fill',
      //   to:''
      // },
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
        color: 'hover:bg-sky-400',
        icon: 'fa-telegram-plane',
        to: 'https://t.me/Msala1214',
      },
      // {
      //   name: 'ایمیل',
      //   color: 'hover:bg-yellow-400',
      //   icon: 'md-email-outlined',
      //   to: '',
      // },
      // {
      //   name: 'تماس',
      //   color: 'hover:bg-green-500',
      //   icon: 'bi-telephone-fill',
      //   to: '',
      // },
    ],
  },
]
</script>

<template>
  <div
    class="flex flex-col xl:grid xl:grid-cols-2 md:h-full justify-center items-center overflow-y-auto"
  >
    <div class="w-full" v-for="item in team" :key="item.name">
      <div
        class="mx-auto md:h-60 w-60 md:w-[30rem] rounded-2xl gap-4 flex flex-col-reverse md:grid md:grid-cols-3 md:items-center justify-end bg-gray-100 m-3"
      >
        <div class="flex flex-col items-end col-span-2 px-2 md:px-0">
          <h1 :class="'font-bold text-2xl ' + item.color">{{ item.name }}</h1>

          <h1 class="font-bold text-xl text-gray-600">راه های ارتباطی</h1>
          <div class="flex flex-wrap justify-end items-start mt-1 gap-2 p-3">
            <div v-for="icon in item.social" :key="icon.name">
              <a :href="icon.to" target="_blank">
                <v-icon
                  :name="icon.icon"
                  :class="'sidebar-btn cursor-pointer ' + icon.color"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          :class="
            ' w-fit h-full  mx-auto  rounded rounded-r-2xl ' + item.photo.color
          "
        >
          <img
            :src="item.photo.url"
            alt=""
            class="w-60 h-28 md:w-64 md:h-full rounded md:rounded-r-2xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>
