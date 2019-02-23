<template>
  <div>

    <div class="tops">
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
      <el-table-column  prop="cuscode"  sortable label="联系人"  ></el-table-column>
      <el-table-column  prop="cususer" sortable  label="联系方式"  ></el-table-column>
      <el-table-column  prop="addr"   label="地址"  ></el-table-column>
      <el-table-column  prop="depart"   label="申请时间" ></el-table-column>
      <el-table-column  prop="level" sortable  label="推荐人"  ></el-table-column>
      <el-table-column  prop="contacts"   label="加盟原因" ></el-table-column>
      <el-table-column  prop="phone"   label="状态" ></el-table-column>
    </el-table>

  </div>
</template>

<script>

  export default {
    name: "customer",
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
