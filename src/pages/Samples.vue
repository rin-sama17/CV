<script setup>
import { bg01, project01 } from '../assets'
</script>
<template>
  <div
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
  </div>

  <div class="contaiber flex justify-center items-center h-full">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2"
    >
      <div class="relative group">
        <img
          :src="project01"
          alt=""
          class="rounded-xl object-cover object-center"
        />
        <div
          class="absolute bottom-0 transition-all ease-in-out duration-400 h-full opacity-0 hover:bg-gradient-to-t from-gray-900 from-0% group-hover:opacity-100 w-full rounded-xl"
        >
          <div class="h-full flex flex-col justify-end items-center pb-3">
            <h1 class="font-bold text-lg text-yellow-400">فرش لبخند</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
