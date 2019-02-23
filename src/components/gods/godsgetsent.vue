<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect">
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

      </div>
      <br>

      <div class="mybox">
        <div>
          <el-card class="box-card">
            <span>期初成本金额</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #0f8496">
            <span>入库成本金额</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #ff7248">
            <span>出库成本金额</span>
          </el-card>
        </div>
        <div>
          <el-card class="box-card1" style="background-color: #cfd23c">
            <span>期末成本金额</span>
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
          <el-table-column  prop="name"  label="商品编码"  ></el-table-column>
          <el-table-column  prop="spec"   label="商品名称"  ></el-table-column>
          <el-table-column  prop="unit"  label="商品规格"  ></el-table-column>
          <el-table-column  prop="store"   label="所属仓库"  ></el-table-column>
          <el-table-column  prop="store"   label="单位"  ></el-table-column>

          <el-table-column label="期初" style="text-align: center">
            <el-table-column  prop="cstoreup"  label="数量"  ></el-table-column>
            <el-table-column  prop="cstoredown"   label="成本金额" ></el-table-column>
          </el-table-column>

          <el-table-column label="入库" style="text-align: center">
            <el-table-column  prop="cstoreup"  label="数量"  ></el-table-column>
            <el-table-column  prop="cstoredown"   label="成本金额" ></el-table-column>
          </el-table-column>

          <el-table-column label="出库" style="text-align: center">
            <el-table-column  prop="cstoreup"  label="数量"  ></el-table-column>
            <el-table-column  prop="cstoredown"   label="成本金额" ></el-table-column>
          </el-table-column>

          <el-table-column label="期末" style="text-align: center">
            <el-table-column  prop="cstoreup"  label="数量"  ></el-table-column>
            <el-table-column  prop="cstoredown"   label="成本金额" ></el-table-column>
          </el-table-column>

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
    name: "godsgetsent",
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
