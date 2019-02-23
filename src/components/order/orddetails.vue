<template>
  <div>
    <div id="gods">
      <div class="tops">

        <div class="spicker" style="margin-left: 30px">
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
      </div>
      <br>
      <div class="mybox">
        <div>
          <el-card class="box-card" style="width: 26%;">
            <span>订单总数</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #0f8496;width: 26%;">
            <span>商品总数</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #ff7248;width: 26%;">
            <span>总金额</span>
          </el-card>
        </div>

      </div>

      <div class="dvtable">
        <el-table class="ttable"
                  max-height = 800
                  ref="multipleTable"
                  :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                  border
                  :header-cell-style=this.getRow
                  tooltip-effect="dark">
          <el-table-column  type="selection" width="55"></el-table-column>
          <!--     <el-table-column  label="日期"  width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>-->
          <el-table-column  prop="name"  label="客户名称"  ></el-table-column>
          <el-table-column  prop="spec"   label="订单号"  ></el-table-column>
          <el-table-column  prop="unit"  label="状态"  ></el-table-column>
          <el-table-column  prop="store"   label="下单日期"  ></el-table-column>
          <el-table-column  prop="store"   label="商品编码"  ></el-table-column>
          <el-table-column  prop="store"   label="商品名称"  ></el-table-column>
          <el-table-column  prop="store"   label="商品规格"  ></el-table-column>
          <el-table-column  prop="store"   label="数量(副单位)"  ></el-table-column>
          <el-table-column  prop="store"   label="数量"  ></el-table-column>
          <el-table-column  prop="store"   label="单位"  ></el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "orddetails",
    components:{
    },
    props: [],
    data(){
      return{
        tableData3: [
        ],
        multipleSelection: [],
        search:'',
        /*            father:this.myfather*/
      }
    },
    methods:{
      chanadd:function () {
        /*          this.father=false;*/
        this.CldupdateMc()
      },
      CldupdateMc:function() {
        this.$emit("CldupdateMc","godsadd",5)
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/oneui.css";
  @import "table.css";
  #gods{
    margin-left: auto;
  }
</style>
