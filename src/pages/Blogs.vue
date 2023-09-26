<script setup>
import { slider } from '../assets'
import { parseISO, formatDistanceToNow } from 'date-fns-jalali'

let timeAgo = ''
let timestamp = new Date().toISOString()

if (timestamp) {
  const date = parseISO(timestamp)
  const time = formatDistanceToNow(date)
  timeAgo = `${time} پیش`
}
</script>

<template>
  <div class="container mx-auto pt-14 h-screen">
    <div class="flex flex-col px-2 lg:px-20 space-y-6">
      <div
        class="transition-all duration-300 bg-gray-600 md:bg-transparent rounded p-2 w-full gap-3 flex hover:bg-gray-600"
      >
        <img
          :src="slider"
          alt=""
          class="block lg:hidden w-16 h-16 object-cover object-center rounded cursor-pointer"
        />
        <div
          class="flex flex-col justify-between text-right items-end text-slate-200"
        >
          <div class="flex flex-col items-end space-y-2" dir="rtl">
            <h1
              class="line-clamp-2 mb-3 lg:line-clamp-none transition-all duration-300 text-sm lg:text-xl lg:font-bold hover:text-orange-300 cursor-pointer"
            >
              ورزش باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدید
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند
            </h1>
            <p class="hidden lg:block text-sm text-slate-300 line-clamp-2">
              ورزش باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدید
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند ورزش
              باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدی
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند
            </p>
          </div>

          <div class="flex space-x-2 lg:mt-3 justify-self-end">
            <p class="text-sm">{{ timeAgo }}</p>
            <v-icon name="md-daterange" />
          </div>
        </div>
        <img
          :src="slider"
          alt=""
          class="hidden lg:block w-46 h-36 object-cover object-center rounded cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
