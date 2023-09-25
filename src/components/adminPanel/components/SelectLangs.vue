<template>
  <v-icon
    name="bi-plus-square-fill"
    @click="setIsOpen(true)"
    class="sidebar-btn hover:bg-emerald-400"
  />

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-xl font-bold text-purple-400 text-right mb-2">
      تکنولوژی ها
    </h1>
    <div class="flex flex-wrap gap-3 my-3">
      <v-icon
        :name="item.icon"
        v-for="item in langs"
        @click="handleLangsChange(item.id)"
        v-bind:class="[
          selectedLangs.includes(item.id) && 'sidebar-btn-hover ' + item.color,
        ]"
        :class="'sidebar-btn  hover:' + item.color"
      />
    </div>
    <button class="sidebar-btn my-2 px-4 w-auto hover:bg-blue-400">
      ثبت
    </button>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../common/Modal.vue'

const isOpen = ref(false)

const selectedLangs = ref([])
const addClass = (color) => {
  return 'sidebar-btn-hover ' + color
}

const handleLangsChange = (id) => {
  const idIndex = selectedLangs.value.findIndex((p) => p == id)
  console.log(id)

  if (idIndex != -1) {
    selectedLangs.value.splice(idIndex, 1)
  } else {
    selectedLangs.value.push(id)
  }
  console.log(selectedLangs.value)
}

const setIsOpen = (value) => {
  isOpen.value = value
}
const langs = [
  {
    id: 1,
    name: 'لاراول',
    color: 'bg-red-400',
    icon: 'co-laravel',
  },
  {
    id: 2,
    name: 'پی اچ پی',
    icon: 'md-php-round',
    color: 'bg-purple-400',
  },
  {
    id: 3,
    name: 'جاوااسکریپت',
    color: 'bg-yellow-400',
    icon: 'md-javascript-round',
  },
  {
    id: 4,
    name: 'ویو جی اس',
    color: 'bg-green-400',
    icon: 'co-vue-js',
  },
  {
    id: 5,
    name: 'تیلویند',
    color: 'bg-blue-400',
    icon: 'si-tailwindcss',
  },
  {
    id: 6,
    name: 'ریکت',
    color: 'bg-sky-400',
    icon: 'co-react',
  },
  {
    id: 7,
    name: 'نکست جی اس',
    color: 'bg-slate-300',
    icon: 'co-next-js',
  },
  {
    id: 8,
    name: 'متریال یو ای',
    color: 'bg-sky-300',
    icon: 'si-mui',
  },
]
</script>
