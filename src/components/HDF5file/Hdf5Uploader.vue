<template>
 <el-upload
    class="upload-demo"
    drag
    :action="action_path"
    multiple
    :before-upload="beforeFileUpload">
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      拖拽文件或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        请上传AGS Alpha导出的HDF5文件
      </div>
    </template>
  </el-upload>
</template>

<script>
import api from '/src/api.ts'
export default {
  name: "Hdf5Uploader",
  data(){
    return{
      action_path:api.upload_hdf5file
    }
  },
  methods:{
    beforeFileUpload(file){
       // 文件类型进行判断
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const ishdf5 = fileExtension === "hdf5";
      if (!ishdf5) {
        this.$message.error("只能上传HDF5文件！");
      }
      return ishdf5;
    }
  }
}
</script>

<style scoped>

</style>