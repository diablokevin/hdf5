<template>

  <el-container>
    <el-header>
      <el-row justify="center" >
        <el-col :span="2">
          <i style="font-size:40px" class="el-icon-s-promotion"></i>
        </el-col>
        <el-col :span="20" >
          <h1 >
            LOGO or/and 菜单 or/and 标题
          </h1>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <menu-left></menu-left>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuLeft from "@/components/MenuLeft";

export default {
  name: 'App',
  components: {
    MenuLeft,

  }
}
</script>

<style>
body {
  /*margin-bottom: 40px;*/
  margin:0px;

}

.el-header {
  text-align: center;
  position: relative;
  /*color: var(--el-text-color-primary);*/
  width: 100%;
  color:#fff;
  height: 60px;
  background-color: #545c64;
  text-color: #fff;

}

.el-footer {
}

.el-aside {
  background-color: #545c64;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  background-color: #ffffff;
  position: absolute;
  left: 150px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  color: var(--el-text-color-primary);
  text-align: center;
}

.my-menu {

}



/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
</style>

