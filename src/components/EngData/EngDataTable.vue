<template>
  <div class="virtual"  always @scroll="scroll">
    <div class="table-container" :style="{height:(tableData.length+2) *itemHeight+'px'}">
      <el-table
        :data="tableData.slice(start, end)"
        :style="{'margin-top':`${position}px`}"
        height="500"
        id="myTable"
        class="virtual-table"
        ref="myTable"
        border style="width: 100%"
        v-loading="loading"
      >
        <el-table-column v-for="item in columns" :key="item" :prop="item" :label="item"/>
      </el-table>
    </div>
  </div>
</template>

<script >
export default {
  name: 'EngDataTable',
  props: ['tableData', 'loading'],
  data () {
    return {
      itemHeight: 48,
      position: 0,
      start: 0,
      end: 9,
      itemCount: 9
    }
  },
  computed: {
    columns: function () {
      console.log(this.tableData.length)
      if (this.tableData.length > 0) {
        const col_list = []
        for (const prop in this.tableData[0]) {
          col_list.push(prop)
        }
        console.log(col_list)
        return col_list
      } else {
        return ['请先选择参数']
      }
    }
  },
  methods: {
    // scrollListener () {
    //
    //   // 开始的数组索引
    //   this.start = Math.floor(scrollTop / this.rowHeight)
    //   // 结束索引
    //   this.end = this.start + this.rowNum
    //   //绝对定位对相对定位的偏移量
    //   //this.$refs.showTable.style.top = this.start * this.rowHeight + 'px';
    //
    //
    // },
    scroll (e) {
      // this.value = scrollTop
      this.position = e.target.scrollTop
      this.start = Math.floor(this.position / this.itemHeight)
      this.end = this.start + this.itemCount

      console.log(this.position)
    }
  },
  mounted () {


  },

}
</script>

<style scoped>
.virtual {
  margin-top: 10px;
  height: 481px;
  overflow: auto;
}
.table-container {
  overflow: hidden;
}
.virtual-table{
  overflow: hidden;
}

</style>
