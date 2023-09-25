<template>
  <div class="flex flex-col p-4 text-white h-screen items-center">
    <div
      class="relative group mx-auto my-10 p-2 w-96 h-96 transition-all duration-700 bg-slate-400 rounded-full shadow-2xl"
    >
      <div
        class="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full p-2"
      >
        <div
          class="bg-gray-400/50 backdrop-blur-sm h-full w-full rounded-full flex justify-center pb-4 items-end"
        >
          <v-icon
            name="bi-plus-square-fill"
            class="w-14 h-14 text-emerald-600"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 col-span-2 w-3/4">
      <label class="block">
        <span class="input-label">
          پسورد
        </span>
        <input class="input" />
      </label>
      <label class="block">
        <span class="input-label">
          نام کاربری
        </span>
        <input class="input" />
      </label>
      <label class="block">
        <span class="input-label">
          حوزه فعالیت
        </span>
        <input class="input" />
      </label>
      <label class="block">
        <span class="input-label">
          نام
        </span>
        <input type="text" class="input" />
      </label>
      <div class="flex flex-col items-center group">
        <h1 class="text-xl font-bold mb-3">تکنولوژی ها</h1>
        <div class="flex space-x-3 p-3">
          <div class="transition-all delay-100 duration-400">
            <SelectLangs></SelectLangs>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center group">
        <h1 class="text-xl font-bold mb-3">راه های ارتباطی</h1>
        <div class="flex flex-wrap justify-end items-start gap-2 p-3">
          <div class="flex space-x-3">
            <div class="transition-all delay-100 duration-400">
              <SelectSocial></SelectSocial>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SelectSocial, SelectLangs } from '../components'
</script>
