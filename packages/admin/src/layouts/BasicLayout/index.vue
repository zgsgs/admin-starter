<script setup lang="ts">
import AdminLayout from '@soybeanjs/vue-admin-layout'
import {
  GlobalBackTop,
  GlobalContent,
  GlobalFooter,
  GlobalHeader,
  GlobalSider,
  GlobalTab,
  SettingDrawer,
} from '../common'
import { useAppStore, useThemeStore } from '@/store'
import { useBasicLayout, useBoolean } from '@/hooks'

defineOptions({ name: 'BasicLayout' })

const app = useAppStore()
const theme = useThemeStore()

const { mode, isMobile, headerProps, siderVisible, siderWidth, siderCollapsedWidth } = useBasicLayout()

const { bool: addMainOverflowHidden, setBool: setAddMainOverflowHidden } = useBoolean()
</script>

<template>
  <admin-layout
    :mode="mode"
    :is-mobile="isMobile"
    :fixed-header-and-tab="theme.fixedHeaderAndTab"
    :header-height="theme.header.height"
    :tab-visible="theme.tab.visible"
    :tab-height="theme.tab.height"
    :sider-visible="siderVisible"
    :sider-width="siderWidth"
    :sider-collapsed-width="siderCollapsedWidth"
    :sider-collapse="app.siderCollapse"
    :add-main-overflow-hidden="addMainOverflowHidden"
    :fixed-footer="theme.footer.fixed"
    @update:sider-collapse="app.setSiderCollapse"
  >
    <template #header>
      <global-header v-bind="headerProps" />
    </template>
    <template #tab>
      <global-tab />
    </template>
    <template #sider>
      <global-sider />
    </template>
    <global-content @hide-main-overflow="setAddMainOverflowHidden" />
    <template #footer>
      <global-footer />
    </template>
  </admin-layout>
  <global-back-top />
  <setting-drawer />
</template>

<style scoped></style>
