<template>
  <div id="father">
    <div id="sp" style=" width: 160px;">
      <p style="color: #9d9d9d">资金管理</p>
      <p>收款单</p>
      <p>付款单</p>
      <p>收款确认</p>
      <p>退款确认</p>
      <p>资金账户</p>
      <p>收款账户</p>
    </div>
    <div id="kc" style=" width: 160px;">
      <p style="color: #9d9d9d">对账管理</p>
      <p>客户对账</p>
      <p>客户对账单</p>
      <p>核销记录</p>
    </div>
    <div id="cg" style=" width: 160px;">
      <p style="color: #9d9d9d">资金统计</p>
      <p>收支明细</p>
      <p>订单收款统计</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "controlmoney"
    }
</script>

<style scoped>
  @import "cc.css";
  #father{
    height:280px;
  }
</style>
