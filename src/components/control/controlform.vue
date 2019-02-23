<template>
  <div id="father">
    <div id="sp" style=" width: 160px;">
      <p style="color: #9d9d9d">订货相关</p>
      <p>订单统计报表</p>
      <p>地区统计报表</p>
      <p>商品销售报表</p>
      <p>客户订货报表</p>
    </div>
    <div id="kc" style=" width: 160px;">
      <p style="color: #9d9d9d">利润损耗</p>
      <p>销售毛利统计报表</p>
      <p>损耗统计报表</p>
    </div>
    <div id="cg" style=" width: 160px;">
      <p style="color: #9d9d9d">资金收款</p>
      <p>应收统计报表</p>
    </div>
  </div>
</template>


<script>
    export default {
        name: "controlform"
    }
</script>

<style scoped>
  @import "cc.css";
  #father{
    height:230px;
  }
</style>
