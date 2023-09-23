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
  <div class="container mx-auto pt-10 h-screen overflow-y-scroll">
    <div class="flex flex-col px-20 space-y-6">
      <div class="w-full gap-3 flex hover:bg-gray-700" v-for="i in 10">
        <div
          class="flex flex-col justify-between text-right items-end text-slate-200"
        >
          <div class="flex flex-col items-end space-y-2">
            <h1
              class="transition-all duration-300 text-xl font-bold hover:text-orange-300 cursor-pointer"
            >
              ورزش باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدید
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند
            </h1>
            <p class="text-sm text-slate-300 line-clamp-2">
              ورزش باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدید
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند ورزش
              باعث سلامتی و تندرستی بدن شما میشود با توجه به تحقیقات جدی
              دانشمندان ورزش باعث تندرستی میشود و بدن ما را تندرست میکند
            </p>
          </div>

          <div class="flex space-x-2 justify-self-end">
            <p class="text-sm">{{ timeAgo }}</p>
            <v-icon name="md-daterange" />
          </div>
        </div>
        <img
          :src="slider"
          alt=""
          class="w-46 h-36 object-cover object-center rounded cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
