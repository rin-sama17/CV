<script setup>
import { rin } from '../assets'
const options = [
  {
    name: 'سریع',
    summary: 'طراحی صفر تا صد سایت شما در سریعترین زمان ممکن',
    color: 'bg-red-300',
    icon: 'bi-speedometer2',
  },
  {
    name: 'قیمت مناسب',
    summary: 'ارائه بهترین قیمت بسته به امکانات سایت',
    color: 'bg-yellow-300',
    icon: 'ri-hand-coin-line',
  },
  {
    name: 'کیفیت بالا',
    summary: 'با جدیدترین تکنولوژی های جهان',
    color: 'bg-blue-300',
    icon: 'md-highquality-outlined',
  },
  {
    name: 'پشتیبانی',
    summary: 'رفع مشکل در اسرع وقت',
    color: 'bg-green-300',
    icon: 'md-supportagent',
  },
]
</script>
<template>
  <div class="grid grid-cols-2 container m-auto h-screen content-evenly">
    <div
      class="flex flex-col justify-center items-center col-span-2 md:col-span-1"
    >
      <h1 class="font-bold text-2xl text-gray-200">
        سایت خود را به ما بسپرید
      </h1>
      <br />
      <p class="text-sm text-gray-400 whitespace-break-spaces">
        در سریعترین زمان و با بهترین کیفیت ممکن
      </p>
    </div>
    <div class="hidden md:flex col-span-1 justify-center items-center">
      <div
        class="p-2 transition-all duration-700 bg-gradient-to-bl from-indigo-400 to-red-500 rounded-full shadow-2xl"
      >
        <img :src="rin" alt="rin" class="rounded-full w-96 h-96" />
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-3 col-span-2 items-center justify-items-center"
    >
      <div
        v-for="item in options"
        :key="item.name"
        class="flex flex-col items-center"
      >
        <v-icon
          :name="item.icon"
          :class="
            'sidebar-btn w-12 h-12 md:w-20 md:h-20 text-gray-900 ' + item.color
          "
        />
        <h1 class="text-lg md:text-2xl font-bold mt-2 mb-1 text-gray-100">
          {{ item.name }}
        </h1>
        <h1 class="text-sm my-1 text-slate-300 w-[8rem] text-center">
          {{ item.summary }}
        </h1>
      </div>
    </div>
  </div>
</template>
