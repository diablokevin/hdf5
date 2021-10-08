<template>
  <hdf5-uploader></hdf5-uploader>
  <el-divider></el-divider>
<hdf5-file-selector></hdf5-file-selector>

</template>

<script>

import Hdf5FileSelector from "../components/HDF5file/Hdf5FileSelector";
import Hdf5Uploader from "../components/HDF5file/Hdf5Uploader";
export default {
  name: "FileChose",
  components: {Hdf5Uploader, Hdf5FileSelector},
}
</script>

<style scoped>

</style>