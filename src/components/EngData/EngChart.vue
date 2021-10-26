<template>
  <div id="engchart" :style="{width: '1000px', height: '550px'}"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "EngChart",
  props: ['data'],
  mounted() {
    let engchart = echarts.init(
        document.getElementById("engchart"));
    engchart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
dataset: {
dimensions: ['GMT', 'ALT_QNH'],
    source: this.data
  },
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [{ type: 'line' }]
    });
  }
}
</script>

<style scoped>

</style>