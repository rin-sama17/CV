<template>
  <div class="max-w-3xl m-auto bg-white mb-20 rounded-lg">
    <QuillEditor
      theme="snow"
      toolbar="full"
      class="!font-[vazir] rounded-lg"
      v-model:content="content"
    />
    <!-- :read-only="true" -->
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const content = ref('')
</script>
