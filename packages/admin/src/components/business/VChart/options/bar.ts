import type { BarECOption } from '../type'
const options: BarECOption = {
  legend: {},
  tooltip: {},
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        // type: "dashed",
        color: '#C8D0D7',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#7D8292',
    },
  },
  yAxis: {
    type: 'value',
    min: 'dataMin',
    alignTicks: true,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#C8D0D7',
        type: 'dashed',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#7D8292',
      },
    },
  },
  grid: {
    left: 60,
    bottom: '8%',
    top: '20%',
  },
  series: [
    {
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 0,
          y: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#62A5FF', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#3365FF', // 100% 处的颜色
            },
          ],
        },
      },
      // label: {
      //   show: true,
      //   position: "top"
      // }
    },
  ],
}
export default options
