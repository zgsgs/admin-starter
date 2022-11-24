<script lang="ts" setup>
import type { PropType } from 'vue'
import type * as echarts from 'echarts/core'
import type { ChartType, ChartsEvents } from './useCharts'
import { useCharts } from './useCharts'

/**
 * echarts事件类型
 * 截至目前，vue3类型声明参数必须是以下内容之一，暂不支持外部引入类型参数
 * 1. 类型字面量
 * 2. 在同一文件中的接口或类型字面量的引用
 * 文档中有说明：https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features
 */
interface EventEmitsType {
  <T extends ChartsEvents.EventType>(e: `${T}`, event: ChartsEvents.Events[Uncapitalize<T>]): void
}

const props = defineProps({
  type: {
    type: String as PropType<ChartType>,
    default: 'bar',
  },
  option: {
    type: Object as PropType<echarts.EChartsCoreOption>,
    default: () => ({}),
  },
})

// 定义事件，提供ts支持，在组件使用时可获得友好提示
defineEmits<EventEmitsType>()

defineOptions({
  name: 'VCharts',
})

const { type, option } = toRefs(props)
const chartRef = shallowRef()
const { charts, setOptions, initChart } = useCharts({ type, el: chartRef })

onMounted(async () => {
  await initChart()
  setOptions(option.value)
})
watch(
  option,
  () => {
    setOptions(option.value)
  },
  {
    deep: true,
  },
)
defineExpose({
  $charts: charts,
})
</script>

<template>
  <div ref="chartRef" class="v-charts" />
</template>

<style lang="scss" scoped>
.v-charts {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>
