<script setup lang="ts">
import { useAppStore, useRouteStore, useThemeStore } from '@/store'

withDefaults(defineProps<Props>(), {
  showPadding: true,
})

const emit = defineEmits<Emits>()

defineOptions({ name: 'GlobalContent' })

interface Props {
  /** 显示padding */
  showPadding?: boolean
}

interface Emits {
  /** 禁止主体溢出 */
  (e: 'hideMainOverflow', hidden: boolean): void
}

const app = useAppStore()
const theme = useThemeStore()
const routeStore = useRouteStore()

function handleBeforeLeave() {
  emit('hideMainOverflow', true)
}
function handleAfterEnter() {
  emit('hideMainOverflow', false)
}
</script>

<template>
  <div
    :class="{ 'p-16px': showPadding }"
    class="h-full bg-[#f6f9f8] transition ease-in-out duration-300 dark:bg-[#101014]"
  >
    <router-view v-slot="{ Component, route }">
      <transition
        :name="theme.pageAnimateMode"
        mode="out-in"
        :appear="true"
        @before-leave="handleBeforeLeave"
        @after-enter="handleAfterEnter"
      >
        <keep-alive :include="routeStore.cacheRoutes">
          <component :is="Component" v-if="app.reloadFlag" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style scoped></style>
