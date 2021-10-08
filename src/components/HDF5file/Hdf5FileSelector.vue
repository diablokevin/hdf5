
<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="文件名" width="180"/>
    <el-table-column prop="create_time" label="上传时间" width="180"/>
  </el-table>
  <el-button type="primary" @click="getfilelist()">刷新</el-button>
</template>

<script>
import axios from 'axios'
import api from '/src/api.ts'

export default {
  name: "Hdf5FileSelector",
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.getfilelist()
  },
  methods: {
    getfilelist() {
      const path =api.get_hd5_file_list
      axios.get(path)
          .then(response => {
            this.tableData = response.data.fileList
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

}
</script>

<style scoped>

</style>