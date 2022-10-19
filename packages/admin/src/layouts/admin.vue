<script setup lang="ts">
import { AdminLayout } from '@/layouts/AdminLayout'

type Mode = 'vertical' | 'horizontal'
const mode = ref<Mode>('vertical')
const modeList: Mode[] = ['vertical', 'horizontal']
function setMode(value: Mode) {
  mode.value = value
}

const fixedHeaderAndTab = ref(true)
function setFixedHeaderAndTab() {
  fixedHeaderAndTab.value = !fixedHeaderAndTab.value
}

const fixedFooter = ref(false)
function setFixedFooter() {
  fixedFooter.value = !fixedFooter.value
}

const siderCollapse = ref(false)
function setSiderCollapse() {
  siderCollapse.value = !siderCollapse.value
}
</script>

<template>
  <AdminLayout
    :mode="mode"
    :fixed-header-and-tab="fixedHeaderAndTab"
    :fixed-footer="fixedFooter"
    :sider-collapse="siderCollapse"
  >
    <template #header>
      <div class="flex-center h-full bg-#e6e6e6">
        Header
      </div>
    </template>
    <template #tab>
      <div class="flex-center h-full bg-#cccccc">
        Tab
      </div>
    </template>
    <template #sider>
      <div class="h-full px-12px bg-#d9d9d9 whitespace-nowrap">
        <div class="flex-center h-56px">
          Sider
        </div>
        <div>
          <h4>layout mode:</h4>
          <div v-for="item in modeList" :key="item">
            <span class="pr-8px">{{ item }}</span>
            <input
              type="radio"
              name="mode"
              :value="item"
              :checked="item === mode"
              class="cursor-pointer"
              @change="setMode(item)"
            >
          </div>
        </div>
        <div class="pt-24px">
          <span class="pr-8px">fixedHeaderAndTab</span>
          <input type="checkbox" :checked="fixedHeaderAndTab" @change="setFixedHeaderAndTab">
        </div>
        <div class="pt-24px">
          <span class="pr-8px">fixedFooter</span>
          <input type="checkbox" :checked="fixedFooter" @change="setFixedFooter">
        </div>
        <div class="pt-24px">
          <span class="pr-8px">siderCollapse</span>
          <input type="checkbox" :checked="siderCollapse" @change="setSiderCollapse">
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-#e6e6e6">
        Footer
      </div>
    </template>
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <RouterView />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">
        [Admin Layout]
      </div>
    </main>
  </AdminLayout>
</template>
