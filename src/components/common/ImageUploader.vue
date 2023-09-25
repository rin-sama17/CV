<template>
  <div
    class="relative w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-900 to-zinc-400 my-10 p-3"
  >
    <div class="h-full w-full rounded-full overflow-hidden" v-if="previewImage">
      <img
        :src="previewImage"
        alt=""
        class="h-full w-full object-cover object-left"
      />
    </div>
    <label
      class="transition duration-300 group absolute inset-0 h-full rounded-full hover:bg-zinc-400/60 hover:backdrop-blur-sm flex justify-center items-end p-4"
    >
      <input
        type="file"
        hidden
        accept="image/*"
        ref="file"
        @change="selectImage"
      />
      <v-icon
        name="bi-plus-square-fill"
        class="!hidden group-hover:!block w-14 h-14 text-amber-400"
      />
    </label>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { rin } from '../../assets'
const file = ref(null)

const currentImage = ref(undefined)
const previewImage = ref(undefined)

const selectImage = () => {
  currentImage.value = file.value.files.item(0)
  previewImage.value = URL.createObjectURL(currentImage.value)
}
</script>
