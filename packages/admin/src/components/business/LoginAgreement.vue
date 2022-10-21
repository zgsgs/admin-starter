<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  value: true,
})

const emit = defineEmits<Emits>()

defineOptions({ name: 'LoginAgreement' })

interface Props {
  /** 是否勾选 */
  value?: boolean
}

interface Emits {
  (e: 'update:value', value: boolean): void
  /** 点击协议 */
  (e: 'clickProtocol'): void
  /** 点击隐私政策 */
  (e: 'clickPolicy'): void
}

const checked = computed({
  get() {
    return props.value
  },
  set(newValue: boolean) {
    emit('update:value', newValue)
  },
})

function handleClickProtocol() {
  emit('clickProtocol')
}
function handleClickPolicy() {
  emit('clickPolicy')
}
</script>

<template>
  <div class="w-full text-14px">
    <n-checkbox v-model:checked="checked">
      我已经仔细阅读并接受
    </n-checkbox>
    <n-button :text="true" type="primary" @click="handleClickProtocol">
      《用户协议》
    </n-button>
    <n-button :text="true" type="primary" @click="handleClickPolicy">
      《隐私权政策》
    </n-button>
  </div>
</template>

<style scoped></style>
