import * as echarts from 'echarts/core'
import type { Ref, ShallowRef } from 'vue'

import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'

import { BarChart, GaugeChart, LineChart, PieChart } from 'echarts/charts'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { ChartType } from './type'

const optionsModules = import.meta.glob<{ default: echarts.EChartsCoreOption }>('./options/**.ts')

interface ChartHookOption {
  type?: Ref<ChartType>
  el: ShallowRef<HTMLElement>
}

type timeIdType = undefined | ReturnType<typeof setTimeout>

/**
 *  视口变化时echart图表自适应调整
 */
class ChartsResize {
  #charts = new Set<echarts.ECharts>() // 缓存已经创建的图表实例
  #timeId: timeIdType = undefined
  constructor() {
    window.addEventListener('resize', this.handleResize.bind(this)) // 视口变化时调整图表
  }

  getCharts() {
    return [...this.#charts]
  }

  handleResize() {
    clearTimeout(this.#timeId)
    this.#timeId = setTimeout(() => {
      this.#charts.forEach((chart) => {
        chart.resize()
      })
    }, 500)
  }

  add(chart: echarts.ECharts) {
    this.#charts.add(chart)
  }

  remove(chart: echarts.ECharts) {
    this.#charts.delete(chart)
  }

  removeListener() {
    window.removeEventListener('resize', this.handleResize)
  }
}

export const chartsResize = new ChartsResize()

export const useCharts = ({ type, el }: ChartHookOption) => {
  echarts.use([
    BarChart,
    LineChart,
    BarChart,
    PieChart,
    GaugeChart,
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ])
  const charts = shallowRef<echarts.ECharts>()

  let options!: echarts.EChartsCoreOption
  const getOptions = async () => {
    const typeName = type?.value || 'bar'
    const moduleKey = `./options/${typeName}.ts`
    const { default: defaultOption } = await optionsModules[moduleKey]()
    return defaultOption
  }

  const setOptions = (opt: echarts.EChartsCoreOption) => {
    if (!charts.value)
      return
    charts.value.setOption(opt)
  }

  /**
   * 初始化事件,按需绑定事件
   */
  const attrs = useAttrs()
  const initEvent = () => {
    Object.keys(attrs).forEach((attrKey) => {
      if (attrKey.startsWith('on')) {
        const cb = attrs[attrKey]
        attrKey = attrKey.replace(/^on(Chart)?/, '').replace(/^\S/, s => s.toLowerCase()) // onClickChart -> ClickChart -> clickChart
        typeof cb === 'function' && charts.value?.on(attrKey, cb as () => void)
      }
    })
  }

  const initChart = async () => {
    charts.value = echarts.init(el.value)
    options = await getOptions()
    charts.value.setOption(options)
    chartsResize.add(charts.value) // 将图表实例添加到缓存中
    initEvent() // 添加事件支持
  }

  onBeforeUnmount(() => {
    if (!charts.value)
      return
    chartsResize.remove(charts.value) // 移除缓存
  })

  return {
    charts,
    setOptions,
    initChart,
    initEvent,
  }
}

export const chartsOptions = <T extends echarts.EChartsCoreOption>(option: T) => shallowReactive<T>(option)

export * from './type.d'
