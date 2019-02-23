<template>
  <div id="sidebar">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{list[index].a}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{list[index].b}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="list[index].c">{{list[index].c}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    props: ['index'],
    data(){
      return{
        list: [
          //0-10
          {a: '商品', b: '商品列表'},
          {a: '订单', b: '订单列表'},
          {a: '客户', b: '客户列表'},
          {a: '资金', b: '资金列表'},
          {a: '报表', b: '订单统计报表'},
          {a: '商品', b: '商品列表',c:'商品新增'},
          {a: '订单', b: '订单列表',c:'订单新增'},
          {a: '客户', b: '客户列表',c:'客户新增'},
          {a: '设置', b: '公司信息'},
          {a: '设置', b: '商品分类'},
          {a: '设置', b: '单位设置'},
          //11-20
          {a: '设置', b: '客户级别'},
          {a: '设置', b: '仓库'},

          {a: '商品', b: '商品库存'},
          {a: '商品', b: '商品入库'},
          {a: '商品', b: '商品出库'},
          {a: '商品', b: '商品调拨'},
          {a: '商品', b: '库存盘点'},
          {a: '商品', b: '出入库明细'},
          {a: '商品', b: '商品收发汇总'},
          {a: '商品', b: '成本调整'},

          //21-30
          {a: '商品', b: '期末结转'},

          {a: '商品', b: '供应商管理'},
          {a: '商品', b: '智能采购'},
          {a: '商品', b: '采购订单'},
          {a: '商品', b: '采购订货'},
          {a: '商品', b: '采购汇总'},

          {a: '订单', b: '订货单'},
          {a: '订单', b: '退货单'},
          {a: '订单', b: '出库/发货记录'},
          {a: '订单', b: '订单商品统计(明细)'},

          //31-40
          {a: '订单', b: '订单商品统计(按客户)'},
          {a: '订单', b: '订单商品统计(按商品)'},
          {a: '订单', b: '发货统计'},
          {a: '订单', b: '退单商品统计'},

          {a: '客户', b: '商机管理'},
          {a: '客户', b: '客户反馈'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
