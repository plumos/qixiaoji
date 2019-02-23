<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect" style="display: inline">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部仓库<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部仓库</el-dropdown-item>
              <el-dropdown-item>成品</el-dropdown-item>
              <el-dropdown-item>半成品</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="fselect" style="display: inline">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部状态<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部状态</el-dropdown-item>
              <el-dropdown-item>已启用</el-dropdown-item>
              <el-dropdown-item>已禁用</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
          <el-table-column  prop="name"  label="采购退货单号"  ></el-table-column>
          <el-table-column  prop="spec"   label="供应商"  ></el-table-column>
          <el-table-column  prop="unit"   label="退货仓库"  ></el-table-column>
          <el-table-column  prop="store"   label="退货金额"  ></el-table-column>
          <el-table-column  prop="store"   label="制单人"  ></el-table-column>
          <el-table-column  prop="store"   label="经办人"  ></el-table-column>
          <el-table-column  prop="store"   label="时间"  ></el-table-column>
          <el-table-column  prop="store"   label="状态"  ></el-table-column>
          <el-table-column
            fixed="right"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">详细</el-button>
              <el-button type="text" size="small">退货</el-button>
              <el-button type="text" size="small">打印</el-button>
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
    name: "supertui",
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
