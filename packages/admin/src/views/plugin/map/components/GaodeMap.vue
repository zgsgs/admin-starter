<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { GAODE_MAP_SDK_URL } from '~/build'

defineOptions({ name: 'GaodeMap' })

const { load } = useScriptTag(GAODE_MAP_SDK_URL)

const domRef = ref<HTMLDivElement>()

async function renderMap() {
  await load(true)
  if (!domRef.value)
    return
  const map = new AMap.Map(domRef.value, {
    zoom: 11,
    center: [114.05834626586915, 22.546789983033168],
    viewMode: '3D',
  })
  map.getCenter()
}

onMounted(() => {
  renderMap()
})
</script>

<template>
  <div ref="domRef" class="w-full h-full" />
</template>

<style scoped></style>
