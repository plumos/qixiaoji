<template>
  <div id="order">
    <div class="tops">
      <div class="sselect">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          全部订单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>全部订单</el-dropdown-item>
            <el-dropdown-item>待处理订单</el-dropdown-item>
            <el-dropdown-item>未完成订单</el-dropdown-item>
            <el-dropdown-item>已完成订单</el-dropdown-item>
            <el-dropdown-item>已作废订单</el-dropdown-item>
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
          size="small"
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
      </div>
      <div class="newbtn">
        <el-button type="primary" style="color: #ffffff"  size="small" v-on:click="CldupdateMc">新增</el-button>
      </div>
    </div>

    <el-table class="ttable"
              ref="multipleTable"
              :data="tableData3.filter(data => !search || data.customer.toLowerCase().includes(search.toLowerCase()))"
              border stripe
              :header-cell-style=this.getRow
              tooltip-effect="dark">
      <el-table-column  type="selection" width="55"></el-table-column>
      <!--     <el-table-column  label="日期"  width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>-->
      <el-table-column  prop="ordno"   label="退单号"  ></el-table-column>
      <el-table-column  prop="ordtime"  sortable label="下单时间"  ></el-table-column>
      <el-table-column  prop="customer" sortable  label="客户名称"  ></el-table-column>
      <el-table-column  prop="money"   label="金额"  ></el-table-column>
      <el-table-column  prop="store"   label="状态" ></el-table-column>
      <el-table-column  prop="moneystate"   label="退款状态" ></el-table-column>
      <el-table-column
        fixed="right"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small">退单详情</el-button>
          <el-button type="text" size="small">审核</el-button>
          <el-button type="text" size="small">作废</el-button>
        </template>
      </el-table-column>
      <!--      <el-table-column  prop="address"  label="地址"  show-overflow-tooltip></el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  /*  import sidemenu from '@/components/sidemenu'*/
  /*  import sidebar from 'src/components/sidebar'*/

  export default {
    name: "ordtui",
    components:{
      /*      sidemenu,*/
      /*      sidebar,*/
    },
    data(){
      return{
        tableData3: [
          { ordno: 1, ordtime: "2019-2-1 18:00:00", customer: '马老板', money: '19' ,store:"备货中/待发货",state:"待财务审核",moneystate:"未收款"},
        ],
      }
    },
    methods:{
      chanadd:function () {
        /*          this.father=false;*/
        this.CldupdateMc()
      },
      CldupdateMc:function() {
        this.$emit("CldupdateMc","orderadd",6)
      }
    },
  }
</script>

<style scoped>
  @import "../../../assets/css/oneui.css";
  @import "table.css";

</style>
