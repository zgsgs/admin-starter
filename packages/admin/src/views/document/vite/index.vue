<script setup lang="ts">
import { ref } from 'vue'

const src = ref('https://cn.vitejs.dev/')
</script>

<template>
  <div class="h-full">
    <iframe class="wh-full" :src="src" />
  </div>
</template>

<style scoped></style>
