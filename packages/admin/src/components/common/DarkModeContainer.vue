<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  inverted: false,
})

defineOptions({ name: 'DarkModeContainer' })

interface Props {
  inverted?: boolean
}
</script>

<template>
  <div
    class="dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out"
    :class="inverted ? 'bg-[#001428] text-white' : 'bg-white text-[#333639]'"
  >
    <slot />
  </div>
</template>

<style scoped></style>
