<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              出库时间<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>出库时间</el-dropdown-item>
              <el-dropdown-item>发货时间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="fselect">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部物流<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>无物流</el-dropdown-item>
              <el-dropdown-item>有物流</el-dropdown-item>
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
            prefix-icon="el-icon-search"
            size="small"
            v-model="search">
          </el-input>
        </div>

      </div>
      <br>

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
          <el-table-column  prop="name"  label="编号"  ></el-table-column>
          <el-table-column  prop="spec"   label="客户名称"  ></el-table-column>
          <el-table-column  prop="unit"  label="物流单状态"  ></el-table-column>
          <el-table-column  prop="store"   label="关联订单"  ></el-table-column>
          <el-table-column  prop="store"   label="出库时间"  ></el-table-column>
          <el-table-column  prop="store"   label="发货时间"  ></el-table-column>
          <el-table-column
            fixed="right"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">明细</el-button>
            </template>
          </el-table-column>
          <!--      <el-table-column  prop="address"  label="地址"  show-overflow-tooltip></el-table-column>-->
        </el-table>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "ordsentr",
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
