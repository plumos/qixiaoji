<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="xsselect" style="display: inline">
          <span class="xstore">调出仓:</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部仓库<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部仓库</el-dropdown-item>
              <el-dropdown-item>禁用</el-dropdown-item>
              <el-dropdown-item>1号仓</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="xfselect">
          <span class="xstore">调入仓:</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部仓库<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部仓库</el-dropdown-item>
              <el-dropdown-item>禁用</el-dropdown-item>
              <el-dropdown-item>1号仓</el-dropdown-item>
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
        <div class="newbtn">
          <el-button type="primary" style="color: #ffffff" size="small" v-on:click="CldupdateMc">库存盘点</el-button>
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
          <el-table-column  prop="name"  label="调拨单号"  ></el-table-column>
          <el-table-column  prop="spec"   label="调出仓库"  ></el-table-column>
          <el-table-column  prop="unit"   label="调入仓库"  ></el-table-column>
          <el-table-column  prop="store"   label="调出时间"  ></el-table-column>
          <el-table-column  prop="store"   label="调入时间"  ></el-table-column>
          <el-table-column  prop="store"   label="制单人"  ></el-table-column>\
          <el-table-column  prop="store"   label="状态"  ></el-table-column>
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
    name: "godsalloc",
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
        this.$emit("CldupdateMc","godsalloc",5)
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
