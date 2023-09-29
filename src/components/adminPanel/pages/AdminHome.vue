<script setup>
import { rin } from '../../../assets'
import ImageUploader from '../../common/ImageUploader.vue'
import SelectLangs from '../components/SelectLangs.vue'
import SelectSocial from '../components/SelectSocial.vue'
</script>

<template>
  <div
    class="flex flex-col md:p-4 text-white custom-h-screen items-center md:container mx-auto"
  >
    <ImageUploader
      :img="rin"
      imgRing="bg-gradient-to-bl from-indigo-400 to-red-500"
    />

    <div class="grid grid-cols-2 gap-4 col-span-2 w-3/4">
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
        <SelectLangs />
      </div>
      <div class="col-span-1">
        <SelectSocial />
      </div>
    </div>
  </div>
</template>
