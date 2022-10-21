<script setup lang="ts">
import { computed } from 'vue'
import { VerticalMenu } from './components'
import { useAppStore, useThemeStore } from '@/store'
import { GlobalLogo } from '@/layouts/common'

defineOptions({ name: 'VerticalSider' })

const app = useAppStore()
const theme = useThemeStore()

const isHorizontalMix = computed(() => theme.layout.mode === 'horizontal-mix')
const showTitle = computed(() => !app.siderCollapse && theme.layout.mode !== 'vertical-mix')
</script>

<template>
  <dark-mode-container class="flex-col-stretch h-full" :inverted="theme.sider.inverted">
    <GlobalLogo v-if="!isHorizontalMix" :show-title="showTitle" :style="{ height: `${theme.header.height}px` }" />
    <VerticalMenu />
  </dark-mode-container>
</template>

<style scoped></style>
