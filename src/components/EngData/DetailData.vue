<template>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    参数选择
  </el-button>

  <el-tabs type="card">
    <el-tab-pane label="数据">
      <eng-data-table
        :tableData="tableData"
        :loading=loading
      ></eng-data-table>
    </el-tab-pane>
    <el-tab-pane label="图表">
      <eng-chart :data="tableData"></eng-chart>
    </el-tab-pane>
  </el-tabs>
  <el-drawer
    v-model="drawer"
    title="参数选择"
    direction="rtl"
    size="80%"

  >
    <el-button type="primary" @click="submitParameterSelection">确认</el-button>
    <el-button @click="clearParameterSelection">清除</el-button>
    <parameter-table

      @selectionChange="getSelectionFromTable"
      ref="paremeterTable"
    ></parameter-table>
  </el-drawer>
</template>

<script>
import ParameterTable from '../Parameter/ParameterTable'
import EngDataTable from './EngDataTable'

import axios from 'axios'
// eslint-disable-next-line import/no-absolute-path
import api from '/src/api.ts'
import EngChart from './EngChart'

export default {
  name: 'DetailData',
  components: {EngChart, EngDataTable, ParameterTable},

  data() {
    return {
      drawer: false,
      parameter_selections: [],
      tableData: [],
      loading: false
    }
  },
  mounted() {

  },
  created() {
    // for (let i = 0; i < 5001; i++) {
    //   this.tableData.push({ index: i });
    // }

  },
  methods: {
    getSelectionFromTable(selection) {
      this.parameter_selections = selection
    },
    submitParameterSelection() {
      let parameters = ''
      for (let i = 0; i < this.parameter_selections.length; i++) {
        parameters += this.parameter_selections[i].name + '-'
      }
      this.get_hdf5file_detail_data(this.$route.params.filename, parameters)
    },
    clearParameterSelection() {
      this.$refs.paremeterTable.clearSelection()
    },
    get_hdf5file_detail_data(filename, parameters) {
      const path = api.get_hdf5file_detail_data
      this.loading = true
      console.log('begin get data')
      axios.get(path + '/' + filename + '/' + parameters)
        .then(response => {
          this.tableData = response.data.data
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
