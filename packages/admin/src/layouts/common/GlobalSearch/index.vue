<script lang="ts" setup>
import { SearchModal } from './components'
import { useThemeStore } from '@/store'
import { useBoolean } from '@/hooks'

defineOptions({ name: 'GlobalSearch' })

const { bool: show, toggle } = useBoolean()
const theme = useThemeStore()

function handleSearch() {
  toggle()
}
</script>

<template>
  <div>
    <hover-container
      class="w-40px h-full"
      tooltip-content="搜索"
      :inverted="theme.header.inverted"
      @click="handleSearch"
    >
      <icon-uil-search class="text-20px" />
    </hover-container>
    <SearchModal v-model:value="show" />
  </div>
</template>

<style lang="scss" scoped></style>
