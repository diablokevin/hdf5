<template>
  <el-menu
      default-active="$router.currentRoute.name"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
     <el-menu-item index="flightselect">
      <i class="el-icon-s-flag"></i>
      <template #title>航班数据</template>
    </el-menu-item>
    <el-menu-item index="filechoose">
      <i class="el-icon-document"></i>
      <template #title>选择文件</template>
    </el-menu-item>
    <el-menu-item index="hdf5data">
      <i class="el-icon-menu"></i>
      <template #title>数据分析</template>
    </el-menu-item>
    <el-menu-item index="parameter">
      <i class="el-icon-video-play"></i>
      <template #title>译码参数</template>
    </el-menu-item>
    <el-menu-item index="4" >
      <i class="el-icon-edit"></i>
      <template #title>代码编辑</template>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <template #title>账户设置</template>
    </el-menu-item>

    <el-menu-item index="6" disabled>
      <i class="el-icon-box"></i>
      <template #title>其他功能</template>
    </el-menu-item>

  </el-menu>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleSelect= (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      handleSelect
    }
  },
  methods:{
    filechoose(){
      this.$router.push({path:'/filechoose'})
    }
  }
})
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;

}
</style>
