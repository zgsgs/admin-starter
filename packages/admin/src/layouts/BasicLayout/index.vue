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
  <AdminLayout
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
      <GlobalHeader v-bind="headerProps" />
    </template>
    <template #tab>
      <GlobalTab />
    </template>
    <template #sider>
      <GlobalSider />
    </template>
    <GlobalContent @hide-main-overflow="setAddMainOverflowHidden" />
    <template #footer>
      <GlobalFooter />
    </template>
  </AdminLayout>
  <GlobalBackTop />
  <SettingDrawer />
</template>

<style scoped></style>
