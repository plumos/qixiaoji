<template>
  <div>

    <div class="tops">

      <div class="sselect" style="display: inline">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部(0)<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>全部(0)</el-dropdown-item>
            <el-dropdown-item>已回复(0)</el-dropdown-item>
            <el-dropdown-item>未回复(0)</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="spicker">
        <!--          <span class="demonstration"></span>-->
        <el-date-picker
          v-model="value4"
          size="small"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>

      <div class="ssearch">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          size="small"
          v-model="search">
        </el-input>
      </div>
    </div>

    <el-table class="ttable"
              ref="multipleTable"
              :data="tableData3"
              border stripe
              :header-cell-style=this.getRow
              tooltip-effect="dark">
      <el-table-column  type="selection" width="55"></el-table-column>
      <el-table-column  prop="cusname"   label="客户名称"  ></el-table-column>
      <el-table-column  prop="cuscode"  sortable label="反馈内容"  ></el-table-column>
      <el-table-column  prop="cususer" sortable  label="日期"  ></el-table-column>
    </el-table>

  </div>
</template>

<script>

  export default {
    name: "cusfankui",
    data(){
      return{
        tableData3: [
          { cusname: "飞翔国际", cuscode: "1231321", cususer: 'plumos', addr: "广东省深圳市龙岗区" ,depart:"生产部",level:"普通",contacts:"张小马",phone:"13131313131",createtime:"2019-02-01 23:43",state:"已开通",from:"手工创建"},
        ],
      }
    },
    methods:{
      CldupdateMc:function() {
        this.$emit("CldupdateMc","cusadd",7)
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/oneui.css";
  @import "table.css";

</style>
