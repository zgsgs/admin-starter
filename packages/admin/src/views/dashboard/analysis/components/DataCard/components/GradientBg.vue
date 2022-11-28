<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 渐变开始的颜色 */
  startColor?: string
  /** 渐变结束的颜色 */
  endColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  startColor: '#56cdf3',
  endColor: '#719de3',
})

const gradientStyle = computed(() => `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`)
</script>

<template>
  <div class="rounded-16px text-white p-16px" :style="{ backgroundImage: gradientStyle }">
    <slot />
  </div>
</template>

<style scoped></style>
