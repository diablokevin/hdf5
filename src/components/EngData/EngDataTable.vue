<template>
  <el-table
      :data="tableData"
      border style="width: 100%"
      v-loading="loading">
    <el-table-column v-for="item in columns" :key="item" :prop="item" :label="item"/>

  </el-table>
</template>

<script>
export default {
  name: "EngDataTable",
  props: ['tableData','loading'],
  data() {
    return {

    }
  },
  computed: {
    columns:function (){
      if(this.tableData.length>0)
      {
        let col_list=[];
        for (let prop in this.tableData[0])
        {
          col_list.push(prop)
        }
          return col_list
      }
      else
      {
        return ['请先选择参数']
      }



    }
  },
  methods: {}
}
</script>

<style scoped>

</style>