/* eslint-disable no-console */
import type { BarECOption, ChartsEvents } from '~/src/components/business/VChart'
import { chartsOptions } from '~/src/components/business/VChart/useCharts'

export const useStaticDeviceByUserObject = () => {
  // 使用chartsOptions确保所有传入v-charts组件的options数据都是## shallowReactive浅层作用形式，避免大量数据导致性能问题
  const option = chartsOptions<BarECOption>({
    yAxis: {},
    xAxis: {},
    series: [],
  })
  const init = async () => {
    const xData: number[] = [1, 2, 3, 4, 5]
    const sData: number[] = [22, 33, 44, 55, 66]
    const sData2: number[] = [22, 33, 44, 23, 66]
    option.xAxis = { data: xData }
    option.series = [{ data: sData }]
    option.series = [{ data: sData2 }]
    option.series = [{ data: sData }]
    option.series = [{ data: sData2 }]
  }

  // 事件
  const selectchanged = (params: ChartsEvents.Events['selectchanged']) => {
    console.log(params, '选中图例了')
  }

  const handleChartClick = (params: ChartsEvents.Events['chartClick']) => {
    console.log(params, '点击了图表')
  }

  onMounted(() => {
    init()
  })
  return {
    option,
    selectchanged,
    handleChartClick,
  }
}
