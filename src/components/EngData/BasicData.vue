<template>
  <el-descriptions
      :column="3"
      border>
    <el-descriptions-item>
      <template #label>飞机号</template>
      {{ basicData.ac_tail }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>机型</template>
      {{ basicData.ac_type }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>公司</template>
      {{ basicData.company }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>航班号</template>
      {{ basicData.flight_number }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>出发机场</template>
      {{ basicData.departure_airport }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>到达机场</template>
      {{ basicData.arrival_airport }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import axios from 'axios'
import api from '/src/api.ts'
export default {
  name: "BasicData",
  data() {
    return {
      basicData:{},
    }
  },
  mounted() {
    this.get_hdf5file_basic_data(this.$route.params.filename)
  },
  methods: {
    get_hdf5file_basic_data(filename) {
      const path = api.get_hdf5file_basic_data
      axios.get(path + '/' + filename)
          .then(response => {
            this.basicData = response.data.basicData
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