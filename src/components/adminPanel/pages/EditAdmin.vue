<template>
  <div class="flex flex-col p-4 text-white custom-h-screen items-center">
    <ImageUploader></ImageUploader>
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
      <div class="col-span-1">
        <SelectLangs></SelectLangs>
      </div>

      <div class="col-span-1">
        <SelectSocial></SelectSocial>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SelectSocial, SelectLangs } from '../components'
import ImageUploader from '../../common/ImageUploader.vue'
</script>
