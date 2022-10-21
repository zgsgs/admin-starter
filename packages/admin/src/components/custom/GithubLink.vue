<script setup lang="ts">
import WebSiteLink from './WebSiteLink.vue'

defineProps<Props>()

defineOptions({ name: 'GithubLink' })

interface Props {
  /** github链接 */
  link: string
}
</script>

<template>
  <WebSiteLink label="github地址：" :link="link" />
</template>

<style scoped></style>
