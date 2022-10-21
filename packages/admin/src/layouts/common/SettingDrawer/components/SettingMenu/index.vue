<script lang="ts" setup>
defineOptions({ name: 'SettingMenu' })

interface Props {
  /** 文本 */
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex-y-center justify-between">
    <span>{{ label }}</span>
    <slot />
  </div>
</template>

<style scoped></style>
