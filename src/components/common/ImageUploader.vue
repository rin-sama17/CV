<template>
  <div
    class="relative w-52 h-52 sm:w-80 sm:h-80 rounded-full my-10 p-1.5"
    v-bind:class="[
      imgRing ? imgRing : 'bg-gradient-to-tr from-cyan-900 to-zinc-400',
    ]"
  >
    <div class="h-full w-full rounded-full overflow-hidden" v-if="src">
      <img :src="src" alt="" class="h-full w-full object-cover object-left" />
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
const file = ref(null)
const { imgRing, img } = defineProps(['imgRing', 'img'])
const currentImage = ref(undefined)
const previewImage = ref(undefined)
const src = img ? img : previewImage ?? null

const selectImage = () => {
  currentImage.value = file.value.files.item(0)
  previewImage.value = URL.createObjectURL(currentImage.value)
}
</script>
