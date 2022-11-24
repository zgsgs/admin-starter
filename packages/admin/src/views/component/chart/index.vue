<script setup lang="ts">
import { useStaticDeviceByUserObject } from '@/hooks'
const { option: staticDeviceByUserObjectOpts } = useStaticDeviceByUserObject()
</script>

<template>
  <v-charts
    type="bar"
    :option="staticDeviceByUserObjectOpts"
  />
  <!-- @selectchanged="selectchanged" -->
  <!-- @chart-click="handleChartClick" -->
</template>

<style scoped></style>
