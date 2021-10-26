
<template>
  <el-row :gutter="20">
    <el-col :span="12">
        <el-button type="primary" @click="getfilelist()">刷新文件列表</el-button>
       <el-table :data="tableData">
    <el-table-column prop="name" label="文件名" width="180"/>
    <el-table-column prop="create_time" label="上传时间" width="180"/>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button @click="handleClick(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card" shadow="always">
        <template #header>
          <div class="card-header">
            <span>{{ filename }}</span>
              <el-button class="button" type="primary" @click="view_hdf5_data(filename)">查看数据</el-button>
          </div>
        </template>
         <el-row>
         机型： {{basicData.ac_type}}
        </el-row>
        <el-row >
          <el-col :span="6">飞机号: {{ basicData.ac_tail }}</el-col>
          <el-col :span="6">航班号: {{ basicData.flight_number }}</el-col>
        </el-row>
        <el-row>
          {{ basicData.departure_airport }} ({{basicData.departure_datetime}})-- {{basicData.arrival_airport}} ({{basicData.arrival_datetime}})
        </el-row>


      </el-card>
    </el-col>
  </el-row>


</template>

<script>
import axios from 'axios'
import api from '/src/api.ts'

export default {
  name: "Hdf5FileSelector",
  data() {
    return {
      tableData: [],
      filename:"请选择文件",
      basicData:{}
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
    },
    handleClick(index, row) {
      this.filename=row['name']
      const path =api.get_hdf5file_basic_data
      axios.get(path+'/'+row['name'])
        .then(response => {
            this.basicData = response.data.basicData
          })
          .catch(error => {
            console.log(error)
          })
      console.log(index, row)
    },
    view_hdf5_data(filename)
    {
      this.$router.push({name:'hdf5data',params:{filename:filename}})
    }
  },

}
</script>

<style scoped>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

</style>