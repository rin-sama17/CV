<script setup>
import { rin } from '../assets'
</script>
<template>
  <div class="grid grid-cols-2 container m-auto h-screen">
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-2xl text-gray-200">
        سایت خود را به ما بسپرید
      </h1>
      <br />
      <p class="text-sm text-gray-400 whitespace-break-spaces">
        در سریعترین زمان و با بهترین کیفیت ممکن
      </p>
    </div>
    <div class="flex justify-center items-center">
      <div
        class="p-2 transition-all duration-700 bg-gradient-to-bl from-indigo-400 to-red-500 rounded-full hover:scale-125 shadow-2xl"
      >
        <img :src="rin" alt="rin" class="rounded-full w-96 h-96" />
      </div>
    </div>
  </div>
</template>
