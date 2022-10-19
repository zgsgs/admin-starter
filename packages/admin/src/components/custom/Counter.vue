<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

defineOptions({ name: 'Counter' })

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    <button class="dec" btn m-3 text-sm @click="dec()">
      -
    </button>
    <span border="~ rounded gray-200 dark:gray-700" w="100px" display="inline-block">
      {{ count }}
    </span>
    <button class="inc" btn m-3 text-sm @click="inc()">
      +
    </button>
  </div>
</template>
