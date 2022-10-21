<script setup lang="ts">
import { computed } from 'vue'
import { VerticalMixSider, VerticalSider } from './components'
import { useThemeStore } from '@/store'

defineOptions({ name: 'GlobalSider' })

const theme = useThemeStore()

const isVerticalMix = computed(() => theme.layout.mode === 'vertical-mix')
</script>

<template>
  <vertical-mix-sider v-if="isVerticalMix" class="global-sider" />
  <vertical-sider v-else class="global-sider" />
</template>

<style scoped>
.global-sider {
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}
</style>
