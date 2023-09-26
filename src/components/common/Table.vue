<template>
  <div class="flex flex-col bg-white w-full rounded-xl" dir="rtl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-right text-sm font-light">
            <thead class="border-b font-medium divide-x-2">
              <slot name="headers"></slot>
            </thead>
            <tbody>
              <slot name="items"></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
