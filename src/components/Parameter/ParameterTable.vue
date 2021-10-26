<template>
<!--  <el-button @click="toggleSelection()">清除</el-button>-->
  <el-table v-loading="loading"
            ref="parameterTable"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            :data="tableData.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
            border
            height="90%"
            style="width: 100%"
            @selection-change="handleSelectionChange">
    <el-table-column type="selection"></el-table-column>
    <!--    <el-table-column prop="id" label="序号" width="60"/>-->
    <el-table-column prop="name" label="名称"/>
    <el-table-column prop="description" label="description"/>
    <el-table-column prop="fieldlength" label="fieldlength"/>
    <el-table-column prop="fractionalpart" label="fractionalpart"/>
    <el-table-column prop="paratype" label="paratype"/>
    <el-table-column prop="rate" filters="[c,r]" label="rate"/>
    <el-table-column prop="indexunique" label="indexunique"/>
    <el-table-column prop="readfactor" label="readfactor"/>
  </el-table>
  <el-pagination
      v-model:currentPage="currentPage"
      :page-sizes="[50,100, 200, 300, 400]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
  >
  </el-pagination>
</template>

<script>
import axios from 'axios'
import api from '/src/api.ts'

export default {
  name: "ParameterTable",
  data() {
    return {
      tableData: [],
      loading: true,
      currentPage: 1,
      pageSize: 50,

    }
  },
  mounted() {
    this.get_parameter_list()
  },
  methods: {
    get_parameter_list() {
      const path = api.get_parameter_list
      axios.get(path)
          .then(response => {
            this.tableData = response.data.data
            this.loading = false
          })
          .catch(error => {
            console.log(error)
          })
    },
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    clearSelection(rows) {
        this.$refs.parameterTable.clearSelection()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
       this.$emit('selectionChange',this.multipleSelection)
    },
    handleConfirm() {
      this.multipleSelection.forEach(function (element) {
        console.log(element.name);
      });

    }
  }
}
</script>

<style scoped>

</style>