<template>
  <div id="order">

    <el-table class="ttable"
              ref="multipleTable"
              :data="tableData3"
              border stripe
              :header-cell-style=this.getRow
              tooltip-effect="dark">
      <el-table-column  type="selection" width="55"></el-table-column>
      <el-table-column  prop="serial"   label="流水号"  ></el-table-column>
      <el-table-column  prop="costtime"   label="支付时间"  ></el-table-column>
      <el-table-column  prop="cusname"   label="客户名称"  ></el-table-column>
      <el-table-column  prop="postway"   label="支付方式"  ></el-table-column>
      <el-table-column  prop="sum"   label="金额"  ></el-table-column>
      <el-table-column  prop="colaccount"   label="收款账户"  ></el-table-column>
      <el-table-column  prop="abstract"   label="摘要"  ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>

  export default {
    name: "money",
    data(){
      return{
        tableData3: [
          { serial:"1223123",costtime:"2019-02-01 23:43",cusname: "飞翔国际", postway: "银行转账", sum: 192221, colaccount: "12312442134221" ,abstract:""},
        ],
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/oneui.css";
  @import "table.css";

</style>
