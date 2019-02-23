<template>
  <div id="order">

    <div class="tops">
      <div class="sselect">
          <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            全部级别<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部級別</el-dropdown-item>
              <el-dropdown-item>普通</el-dropdown-item>
              <el-dropdown-item>高级</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
      <div class="ssearch">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          size="small"
          v-model="search">
        </el-input>
      </div>
      <div class="newbtn">
        <el-button type="primary" style="color: #ffffff"  size="small" v-on:click="CldupdateMc">新增</el-button>
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
      <el-table-column  prop="cuscode"  sortable label="客户编码"  ></el-table-column>
      <el-table-column  prop="cususer" sortable  label="登录账号"  ></el-table-column>
      <el-table-column  prop="addr"   label="地区"  ></el-table-column>
      <el-table-column  prop="depart"   label="所在部门" ></el-table-column>
      <el-table-column  prop="level" sortable  label="级别"  ></el-table-column>
      <el-table-column  prop="contacts"   label="联系人" ></el-table-column>
      <el-table-column  prop="phone"   label="电话号码" ></el-table-column>
      <el-table-column  prop="createtime"   label="创建时间" ></el-table-column>
      <el-table-column  prop="state"   label="状态" ></el-table-column>
      <el-table-column  prop="from"   label="来源" ></el-table-column>
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
