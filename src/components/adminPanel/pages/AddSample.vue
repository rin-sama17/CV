<template>
  <div class="flex flex-col p-4 text-white h-screen items-center">
    <ImageUploader />
    <div class="grid grid-cols-2 gap-4 col-span-2 w-3/4">
      <label class="block">
        <span class="input-label">
          لینک
        </span>
        <input class="input" />
      </label>
      <label class="block">
        <span class="input-label">
          نام پروژه
        </span>
        <input class="input" />
      </label>
      <div class="col-span-2">
        <SelectLangs></SelectLangs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SelectLangs } from '../components'
import ImageUploader from '../../common/ImageUploader.vue'
</script>
