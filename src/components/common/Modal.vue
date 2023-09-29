<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const { isOpen, setIsOpen } = defineProps(['isOpen', 'setIsOpen'])
console.log(isOpen)
</script>

<template>
  <TransitionRoot :show="isOpen">
    <Dialog @close="setIsOpen" class="fixed inset-0 p-4 !font-['vazir']">
      <TransitionChild
        enter=" duration-300 ease-out"
        enterFrom="opacity-0 "
        enterTo="opacity-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 "
      >
        <DialogOverlay class="fixed inset-0 bg-gray-500/75"></DialogOverlay>
      </TransitionChild>
      <TransitionChild
        enter=" duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        as="div"
        class="relative mx-auto top-[30%] gird grid-cols-2 max-w-xl h-fit rounded-xl overflow-hidden bg-gray-700 flex flex-col justify-center p-4"
      >
        <slot></slot>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
