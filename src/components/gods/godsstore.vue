<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect">
          <!--         <el-col :span="12">-->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部分类<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部分类</el-dropdown-item>
              <el-dropdown-item>成品</el-dropdown-item>
              <el-dropdown-item>半成品</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--          </el-col>-->
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

        <div class="scheck">
          <el-checkbox v-model="checked">按商品合并</el-checkbox>
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
          <el-table-column  prop="name" sortable  label="商品名称"  ></el-table-column>
          <el-table-column  prop="spec"   label="规格"  ></el-table-column>
          <el-table-column  prop="unit"   label="单位"  ></el-table-column>
          <el-table-column  prop="store"   label="所属仓库"  ></el-table-column>
          <el-table-column  prop="cstoreup"   label="库存上限"  ></el-table-column>
          <el-table-column  prop="cstoredown"   label="库存下限" ></el-table-column>
          <el-table-column  prop="prego"   label="预购量" ></el-table-column>
          <el-table-column  prop="ongo"   label="在途量"  ></el-table-column>
          <el-table-column  prop="instore"   label="库存量" ></el-table-column>
          <el-table-column  prop="avlstore"   label="可用库存量" ></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
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
    name: "godsstore",
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
