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
  <div class="container mx-auto flex md:h-full justify-center items-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-16 pb-10 px-3 md:px-10"
    >
      <a
        href="https://labkhand-carpet.ir"
        target="_blank"
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
          <div class="flex flex-wrap justify-end space-x-2">
            <div v-for="icon in langs" :key="icon.name">
              <v-icon :name="icon.icon" :class="'sidebar-btn ' + icon.color" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
