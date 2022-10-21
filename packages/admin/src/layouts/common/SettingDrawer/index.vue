<script setup lang="ts">
import { DarkMode, DrawerButton, LayoutMode, PageFunc, PageView, ThemeColorSelect, ThemeConfig } from './components'
import { useAppStore } from '@/store'

defineOptions({ name: 'SettingDrawer' })

const app = useAppStore()

const showButton = import.meta.env.DEV || import.meta.env.VITE_VERCEL === 'Y'
</script>

<template>
  <n-drawer :show="app.settingDrawerVisible" display-directive="show" :width="330" @mask-click="app.closeSettingDrawer">
    <n-drawer-content title="主题配置" :native-scrollbar="false">
      <DarkMode />
      <LayoutMode />
      <ThemeColorSelect />
      <PageFunc />
      <PageView />
      <ThemeConfig />
    </n-drawer-content>
  </n-drawer>
  <DrawerButton v-if="showButton" />
</template>

<style scoped></style>
