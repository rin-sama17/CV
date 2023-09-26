<template>
  <div class="flex flex-col items-center group">
    <h1 class="text-sm md:text-xl md:font-bold mb-3">تکنولوژی ها</h1>
    <div class="flex flex-wrap justify-end gap-1 pb-3">
      <Transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        appear
        v-for="item in selectedLangs"
      >
        <v-icon
          :name="item.icon"
          :class="' sidebar-btn  hover:' + item.color"
        />
      </Transition>
      <div
        class="transition-all delay-100 duration-400 lg:opacity-0 group-hover:opacity-100"
      >
        <v-icon
          name="hi-pencil"
          @click="setIsOpen(true)"
          class="sidebar-btn bg-sky-300 text-gray-900"
        />
      </div>
    </div>
  </div>

  <Modal :isOpen="isOpen" :setIsOpen="setIsOpen">
    <h1 class="text-xl font-bold text-purple-400 text-right mb-2">
      تکنولوژی ها
    </h1>
    <div class="flex flex-wrap gap-3 my-3">
      <v-icon
        :name="item.icon"
        v-for="item in langs"
        @click="handleLangsChange(item)"
        v-bind:class="[
          selectedLangs.includes(item) && 'sidebar-btn-hover ' + item.color,
        ]"
        :class="'sidebar-btn  hover:' + item.color"
      />
    </div>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../common/Modal.vue'

const isOpen = ref(false)

const selectedLangs = ref([])

const handleLangsChange = (icon) => {
  const iconIndex = selectedLangs.value.findIndex((p) => p.id == icon.id)

  if (iconIndex != -1) {
    selectedLangs.value.splice(iconIndex, 1)
  } else {
    selectedLangs.value.push(icon)
  }
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

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
