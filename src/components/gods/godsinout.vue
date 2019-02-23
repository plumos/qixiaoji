<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部分类<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部分类</el-dropdown-item>
              <el-dropdown-item>道具</el-dropdown-item>
              <el-dropdown-item>成品</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="fselect">

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
          <el-table-column  prop="store"   label="所属仓库"  ></el-table-column>
          <el-table-column  prop="cstoreup" label="类型"  ></el-table-column>
          <el-table-column  prop="cstoredown"   label="单号" ></el-table-column>
          <el-table-column  prop="store"   label="出入库日期"  ></el-table-column>
          <el-table-column  prop="cstoreup"  label="出入库数量"  ></el-table-column>
          <el-table-column  prop="cstoredown"   label="库存量" ></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">审核</el-button>
              <el-button type="text" size="small">订单详情</el-button>
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
    name: "godsinout",
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
