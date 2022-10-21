<script setup lang="ts">
import { DevDependency, ProDependency, ProjectInfo, ProjectIntroduction } from './components'
</script>

<template>
  <n-space :vertical="true" :size="16">
    <ProjectIntroduction />
    <ProjectInfo />
    <ProDependency />
    <DevDependency />
  </n-space>
</template>

<style scoped></style>
