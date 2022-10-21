<script setup lang="ts">
defineProps<Props>()

defineOptions({ name: 'WebSiteLink' })

interface Props {
  /** 网址名称 */
  label: string
  /** 网址链接 */
  link: string
}
</script>

<template>
  <p>
    <span>{{ label }}</span>
    <a class="text-blue-500" :href="link" target="_blank">
      {{ link }}
    </a>
  </p>
</template>

<style scoped></style>
