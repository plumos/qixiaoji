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
        <div class="sspan">
          <span>数据查看</span>
        </div>

        <div class="fselect">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              按退单+商品合并<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>按退单+商品合并</el-dropdown-item>
              <el-dropdown-item>按客户+商品合并</el-dropdown-item>
              <el-dropdown-item>按商品合并</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>


      </div>
      <br>
      <div class="mybox">
        <div>
          <el-card class="box-card" style="background-color: #c9c9c9;width: 26%;">
            <span>发货单数</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #c9c9c9;width: 26%;">
            <span>发货商品数</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #c9c9c9;width: 26%;">
            <span>发货金额</span>
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
          <el-table-column  prop="spec"   label="退单号"  ></el-table-column>
          <el-table-column  prop="unit"  label="客户名称"  ></el-table-column>
          <el-table-column  prop="store"   label="下单时间"  ></el-table-column>
          <el-table-column  prop="store"   label="商品编码"  ></el-table-column>
          <el-table-column  prop="store"   label="商品名称"  ></el-table-column>
          <el-table-column  prop="store"   label="商品规格"  ></el-table-column>
          <el-table-column  prop="store"   label="单位"  ></el-table-column>
          <el-table-column  prop="store"   label="数量"  ></el-table-column>
          <el-table-column  prop="store"   label="退货单价"  ></el-table-column>
          <el-table-column  prop="store"   label="退货金额"  ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ordtuiall",
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
