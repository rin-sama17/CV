<script setup>
import { bg01, project01 } from '../assets'
const langs = [
  {
    name: 'جاوااسکریپت',
    color: 'hover:bg-yellow-400',
    icon: 'md-javascript-round',
  },
  {
    name: 'ریکت',
    color: 'hover:bg-sky-400',
    icon: 'co-react',
  },
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
]
</script>
<template>
  <!-- <div
    class="flex justify-center items-center p-1 absolute h-28 w-96 shadow-2xl left-[14rem] top-0 bg-yellow-400 rounded-br-full"
  >
    <h1 class="text-3xl font-bold text-gray-800">
      جدیدترین پروژه ها
    </h1>
  </div>
  <div
    class="p-1 absolute shadow-2xl -left-16 -top-16 bg-gradient-to-tr from-yellow-400 to-red-400 rounded-full"
  >
    <img
      :src="bg01"
      alt=""
      class="h-80 w-80 object-cover rounded-full object-center border-4 border-gray-600"
    />
  </div> -->

  <div class="container mx-auto flex justify-center items-center h-full">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2"
    >
      <div
        class="relative flex flex-col bg-gray-100 space-y-3 rounded-xl hover:rounded-lg transition-all dutation-300 overflow-hidden"
      >
        <img
          :src="project01"
          alt=""
          class="object-cover object-center cursor-pointer"
        />
        <div class="p-4 flex flex-col items-end space-y-2">
          <h1
            class="transition-all text-xl font-bold hover:text-sky-600 cursor-pointer"
          >
            فروشگاه لبخند
          </h1>
          <h1 class="font-bold text-xl text-gray-600">تکنولوژی ها</h1>
          <div class="flex space-x-2">
            <div v-for="icon in langs" :key="icon.name">
              <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
