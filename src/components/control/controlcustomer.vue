<template>
  <div id="father">
    <div id="kh" style=" width: 160px;">
      <p style="color: #9d9d9d">客户管理</p>
      <p v-on:click="CldupdateMc(1)">客户列表</p>
      <p v-on:click="CldupdateMc(2)">商机管理</p>
      <p v-on:click="CldupdateMc(3)">客户反馈</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "controlcustomer",
      methods:{
        CldupdateMc:function(index) {
          console.log(index);
          switch (index) {
            case 1:
              this.$emit("CldupdateMc", "customer", 35);
              break;
            case 2:
              this.$emit("CldupdateMc", "cusshj", 36);
              break;
            case 3:
              this.$emit("CldupdateMc", "cusfankui", 37);
              break;
          }
        }
      }
    }
</script>

<style scoped>
  @import "cc.css";
  #father{
    height:182px;
  }
</style>
