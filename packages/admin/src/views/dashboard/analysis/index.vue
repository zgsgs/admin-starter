<script lang="ts" setup>
import { BottomPart, DataCard, TopChart } from './components'
</script>

<template>
  <n-space :vertical="true" :size="16">
    <TopChart />
    <DataCard />
    <BottomPart />
  </n-space>
</template>

<style scoped></style>
