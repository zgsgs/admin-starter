<script setup lang="ts">
import { watch } from 'vue'
import { useImageVerify } from '@/hooks'

const props = withDefaults(defineProps<Props>(), {
  code: '',
})

const emit = defineEmits<Emits>()

defineOptions({ name: 'ImageVerify' })

interface Props {
  code?: string
}

interface Emits {
  (e: 'update:code', code: string): void
}

const { domRef, imgCode, setImgCode, getImgCode } = useImageVerify()

watch(
  () => props.code,
  (newValue) => {
    setImgCode(newValue)
  },
)
watch(imgCode, (newValue) => {
  emit('update:code', newValue)
})

defineExpose({ getImgCode })
</script>

<template>
  <div>
    <canvas ref="domRef" width="152" height="40" class="cursor-pointer" @click="getImgCode" />
  </div>
</template>

<style scoped></style>
