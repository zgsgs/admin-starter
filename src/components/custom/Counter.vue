<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

defineOptions({ name: 'Counter' })

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    <button class="inc" @click="inc()">
      +
    </button>
    <span>
      {{ count }}
    </span>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>
