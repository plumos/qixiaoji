<template>
  <div id="stateline">

    <el-dropdown class="bdd"  @command="handleCommand" :hide-on-click="false">
      <span class="el-dropdown-link">
        <i class="fa fa-cog fb"></i>
      </span>

      <el-dropdown-menu slot="dropdown">

        <el-dropdown-item  class="abc" command="1">
          <i class="fa fa-exclamation-circle"></i>
          基础资料
          <i class="el-icon-arrow-down el-icon--right" v-if="!showmsg"></i>
          <i class="el-icon-arrow-up el-icon--right" v-if="showmsg"></i>
        </el-dropdown-item>
        <div v-if="showmsg" style="padding-left: 10px">
          <el-dropdown-item command="4">公司信息</el-dropdown-item>
          <el-dropdown-item href="#">部门员工</el-dropdown-item>
        </div>
        <el-dropdown-item command="2">
          <i class="fa fa-area-chart"></i>
          辅助资料
          <i class="el-icon-arrow-down el-icon--right" v-if="!showhelp"></i>
          <i class="el-icon-arrow-up el-icon--right" v-if="showhelp"></i>
        </el-dropdown-item>
        <div v-if="showhelp" style="padding-left: 10px">
          <el-dropdown-item command="5">商品分类</el-dropdown-item>
          <el-dropdown-item command="6">计量单位</el-dropdown-item>
          <el-dropdown-item command="7">客户级别</el-dropdown-item>
          <el-dropdown-item command="8">仓库</el-dropdown-item>
        </div>
        <el-dropdown-item command="3">
          <i class="fa fa-cog"></i>
          系统设置
          <i class="el-icon-arrow-down el-icon--right" v-if="!showset"></i>
          <i class="el-icon-arrow-up el-icon--right" v-if="showset"></i>
        </el-dropdown-item>
        <div v-if="showset" style="padding-left: 10px">
          <el-dropdown-item href="#">系统参数设置</el-dropdown-item>
          <el-dropdown-item href="#">订单处理流程设置</el-dropdown-item>
          <el-dropdown-item href="#">订单审核部门变更</el-dropdown-item>
        </div>
        <el-dropdown-item href="#">
          <i class="fa fa-book"></i>
          操作日志
        </el-dropdown-item>
        <el-dropdown-item href="#">
          <i class="fa fa-bug"></i>探索七小记</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown class="bdd" >
      <span class="el-dropdown-link">
        <i class="fa fa-headphones fb"></i>
      </span>
      <el-dropdown-menu class= "bdm" slot="dropdown">
        <el-dropdown-item href="#">意见反馈</el-dropdown-item>
        <el-dropdown-item href="#">在线客服</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown class="bdd">
      <span class="el-dropdown-link">
        <i class="fa fa-user fb"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item href="#">切换账号</el-dropdown-item>
        <el-dropdown-item href="#">账号信息</el-dropdown-item>
        <el-dropdown-item href="#">服务购买</el-dropdown-item>
        <el-dropdown-item href="#">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>


  </div>
</template>

<script>

  export default {
    name: "sideline",
    data(){
      return{
        showmsg:false,
        showhelp:false,
        showset:false,
      }
    },
    methods: {
      handleCommand(index) {
        switch (index) {
          case "1":
            this.showmsg=!this.showmsg;
            break;
          case "2":
            this.showhelp=!this.showhelp;
            break;
          case "3":
            this.showset=!this.showset;
            break;
          case "4":
            this.$emit("CldupdateMc","compadd",8);
            break;
          case "5":
            this.$emit("CldupdateMc","gcpset",9);
            break;
          case "6":
            this.$emit("CldupdateMc","unitset",10);
            break;
          case "7":
            this.$emit("CldupdateMc","cuslevel",11);
            break;
          case "8":
            this.$emit("CldupdateMc","houseset",12);
            break;
          default:
            break;
        }
      },
    }
  }
</script>

<style>

</style>
<style scoped>
  @import "../../assets/css/oneui.css";

  #stateline{
    display:inline;
    text-align:right;
    z-index: 11;
  }
  .bdd{
    margin-left: 60px;
    z-index: 11;
    float: right;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #100f27;
  }
  .fb {
    font-size: 25px;
  }
</style>
