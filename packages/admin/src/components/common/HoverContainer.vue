<script lang="ts" setup>
import { computed } from 'vue'
import type { PopoverPlacement } from 'naive-ui'

const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  placement: 'bottom',
  contentClass: '',
  inverted: false,
})

defineOptions({ name: 'HoverContainer' })

interface Props {
  /** tooltip显示文本 */
  tooltipContent?: string
  /** tooltip的位置 */
  placement?: PopoverPlacement
  /** class类 */
  contentClass?: string
  /** 反转模式下 */
  inverted?: boolean
}

const showTooltip = computed(() => Boolean(props.tooltipContent))

const contentClassName = computed(
  () => `${props.contentClass} ${props.inverted ? 'hover:bg-primary' : 'hover:bg-[#f6f6f6]'}`,
)
</script>

<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div class="flex-center h-full cursor-pointer dark:hover:bg-[#333]" :class="contentClassName">
          <slot />
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else class="flex-center cursor-pointer dark:hover:bg-[#333]" :class="contentClassName">
    <slot />
  </div>
</template>

<style scoped></style>
