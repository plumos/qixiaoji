<template>
  <div id="father">
    <div id="sp" style=" width: 160px;">
      <p style="color: #9d9d9d">商品管理</p>
      <p>商品列表</p>
    </div>
    <div id="kc" style=" width: 160px;">
      <p style="color: #9d9d9d">库存管理</p>
      <p v-on:click="CldupdateMc(1)">商品库存</p>
      <p v-on:click="CldupdateMc(2)">商品入库</p>
      <p v-on:click="CldupdateMc(3)">商品出库</p>
      <p v-on:click="CldupdateMc(4)">库存调拨</p>
      <p>库存盘点</p>
      <p v-on:click="CldupdateMc(6)">出入库明细</p>
      <p v-on:click="CldupdateMc(7)">商品收发汇总</p>
      <p v-on:click="CldupdateMc(8)">成本调整</p>
      <p v-on:click="CldupdateMc(9)">期末结转</p>
    </div>
    <div id="cg" style=" width: 160px;">
      <p style="color: #9d9d9d">采购管理</p>
      <p v-on:click="CldupdateMc(10)">供应商管理</p>
      <p v-on:click="CldupdateMc(11)">智能采购</p>
      <p v-on:click="CldupdateMc(12)">采购订单</p>
      <p v-on:click="CldupdateMc(13)">采购退货</p>
      <p v-on:click="CldupdateMc(14)">采购汇总</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "controlgods",
      methods:{
        CldupdateMc:function(index) {
          console.log(index);
          switch (index) {
            case 1:
              console.log(123);
              this.$emit("CldupdateMc","godsstore",13);
              break;
            case 2:
              this.$emit("CldupdateMc","godsin",14);
              break;
            case 3:
              this.$emit("CldupdateMc","godsout",15);
              break;
            case 4:
              this.$emit("CldupdateMc","godsalloc",16);
              break;
            case 6:
              this.$emit("CldupdateMc","godsinout",18);
              break;
            case 7:
              this.$emit("CldupdateMc","godsgetsent",19);
              break;
            case 8:
              this.$emit("CldupdateMc","godschan",20);
              break;
            case 10:
              this.$emit("CldupdateMc","supman",22);
              break;
            case 11:
              this.$emit("CldupdateMc","supai",23);
              break;
            case 12:
              this.$emit("CldupdateMc","suporder",24);
              break;
            case 13:
              this.$emit("CldupdateMc","supertui",25);
              break;
            case 14:
              this.$emit("CldupdateMc","supall",26);
              break;
            default:
              break;
          }
        }
      }
    }
</script>

<style scoped>
  @import "cc.css";
  #father{
    height:375px;
  }
</style>
