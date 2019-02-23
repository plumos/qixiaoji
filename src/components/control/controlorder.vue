<template>
  <div id="father">
    <div id="dd" style=" width: 160px;">
      <p style="color: #9d9d9d">订单管理</p>
      <p v-on:click="CldupdateMc(1)">订货单</p>
      <p v-on:click="CldupdateMc(2)">退货单</p>
    </div>
    <div id="dda" style=" width: 200px;">
      <p style="color: #9d9d9d">订单统计</p>
      <p v-on:click="CldupdateMc(3)">出库/发货记录</p>
      <p v-on:click="CldupdateMc(4)">订单商品统计(明细)</p>
      <p v-on:click="CldupdateMc(5)">订单商品统计(按客户)</p>
      <p v-on:click="CldupdateMc(6)">订单商品统计(按商品)</p>
      <p v-on:click="CldupdateMc(7)">发货统计</p>
    </div>
    <div id="td" style=" width: 160px;">
      <p style="color: #9d9d9d">退单统计</p>
      <p v-on:click="CldupdateMc(8)">退单商品统计</p>
    </div>
  </div>
</template>

<script>

    export default {
        name: "controlorder",
        data(){
          return{
          }
        },
        methods: {
          CldupdateMc: function (index) {
            console.log(index);
            switch (index) {
              case 1:
                this.$emit("CldupdateMc", "order", 1);
                break;
              case 2:
                this.$emit("CldupdateMc", "ordtui", 28);
                break;
              case 3:
                this.$emit("CldupdateMc", "ordsentr", 29);
                break;
              case 4:
                this.$emit("CldupdateMc", "orddetails", 30);
                break;
              case 5:
                this.$emit("CldupdateMc", "ordcus", 31);
                break;
              case 6:
                this.$emit("CldupdateMc", "ordgods", 32);
                break;
              case 7:
                this.$emit("CldupdateMc", "ordsendall", 33);
                break;
              case 8:
                this.$emit("CldupdateMc", "ordtuiall", 34);
                break;
            }
          }
        }
    }

</script>

<style scoped>
  @import "cc.css";
  #father{
    height:250px;
  }

</style>
