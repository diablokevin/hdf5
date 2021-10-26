<template>
  <basic-data></basic-data>
  <el-divider>
  </el-divider>
  <detail-data></detail-data>
</template>

<script>
import BasicData from "../components/EngData/BasicData";
import DetailData from "../components/EngData/DetailData";
export default {
  name: "Hdf5Data",
  components: {DetailData, BasicData},
}
</script>

<style scoped>

</style>