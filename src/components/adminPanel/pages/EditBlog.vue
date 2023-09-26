<template>
  <div class="p-4 flex flex-col items-center">
    <ImageUploader></ImageUploader>
    <div class="w-3/4">
      <label class="block">
        <span class="input-label">
          نام
        </span>
        <input class="input" />
      </label>

      <div class="col-span-2 mb-10">
        <label class="block">
          <span class="input-label">
            مقدمه
          </span>
          <textarea class="input" />
        </label>
        <button class="sidebar-btn my-2 px-4 hover:bg-emerald-400 w-full">
          ثبت
        </button>
      </div>
    </div>
    <TextEditor></TextEditor>
  </div>
</template>

<script setup>
import TextEditor from '../../common/TextEditor.vue'
import ImageUploader from '../../common/ImageUploader.vue'
</script>
