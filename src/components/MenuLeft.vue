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


  <el-icon :size='20'><Flag /></el-icon>
      <template #title>  航班数据</template>
    </el-menu-item>
    <el-menu-item index="filechoose">
      <el-icon :size='20'><Document /></el-icon>
      <template #title>选择文件</template>
    </el-menu-item>
    <el-menu-item index="hdf5data">
      <el-icon :size='20'><Menu /></el-icon>
      <template #title>数据分析</template>
    </el-menu-item>
    <el-menu-item index="parameter">
      <el-icon :size='20'><video-play /></el-icon>
      <template #title>译码参数</template>
    </el-menu-item>
    <el-menu-item index="4" >
      <el-icon :size='20'><edit /></el-icon>
      <template #title>代码编辑</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon :size='20'><setting /></el-icon>
      <template #title>账户设置</template>
    </el-menu-item>

    <el-menu-item index="6" disabled>
      <el-icon :size='20'><box /></el-icon>
      <template #title>其他功能</template>
    </el-menu-item>

  </el-menu>
       <el-icon><edit /></el-icon>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Edit} from  '@element-plus/icons'


export default defineComponent({
  component:{
    Edit
},
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
