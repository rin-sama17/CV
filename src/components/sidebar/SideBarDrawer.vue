<template>
  <button
    class="md:hidden w-14 h-14 absolute top-2 right-2 sidebar-btn hover:bg-yellow-300 peer"
  >
    <v-icon name="gi-hamburger-menu" class="icon"></v-icon>
  </button>

  <div
    class="fixed z-20 w-52 px-4 py-2 shadow-2xl bg-gray-600 custom-h-screen transition-all ease-in-out duration-700 top-0 -right-full peer-focus:right-0"
  >
    <slot></slot>
  </div>

  <div
    class="hidden peer-focus:block peer-focus:transition-all duration-400 fixed inset-0 bg-gray-600/25 backdrop-blur-sm"
  ></div>
</template>
