<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect" style="display: inline">
            <span>按订单采购</span>
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
        <div class="newbtn">
          <el-button type="primary" style="color: #ffffff" size="small" v-on:click="CldupdateMc">新增</el-button>
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
          <el-table-column  prop="name"  label="商品编码"  ></el-table-column>
          <el-table-column  prop="spec"   label="商品名称"  ></el-table-column>
          <el-table-column  prop="unit"   label="商品规格"  ></el-table-column>
          <el-table-column  prop="store"   label="单位"  ></el-table-column>
          <el-table-column  prop="store"   label="订购量"  ></el-table-column>
          <el-table-column  prop="store"   label="状态"  ></el-table-column>
          <el-table-column  prop="spec"   label="库存量"  ></el-table-column>
          <el-table-column  prop="unit"   label="采购数"  ></el-table-column>
          <el-table-column  prop="store"   label="供应商"  ></el-table-column>
          <el-table-column  prop="store"   label="采购单价"  ></el-table-column>
          <el-table-column  prop="store"   label="小计"  ></el-table-column>
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
    name: "supai",
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
      CldupdateMc:function() {
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
  .el-dropdown-link{
    margin-left: 10px;
  }
</style>
