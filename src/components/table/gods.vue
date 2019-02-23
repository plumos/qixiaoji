<template>
  <div>
    <div id="gods">
      <div class="tops">
        <div class="sselect">
 <!--         <el-col :span="12">-->
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部状态<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部状态</el-dropdown-item>
                <el-dropdown-item>上架</el-dropdown-item>
                <el-dropdown-item>下架</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
<!--          </el-col>-->
        </div>
        <div class="fselect">
          <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          全部分类<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部分类</el-dropdown-item>
              <el-dropdown-item>道具</el-dropdown-item>
              <el-dropdown-item>成品</el-dropdown-item>
              <el-dropdown-item>半成品</el-dropdown-item>
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
        <el-table-column  prop="code"   label="编码"  ></el-table-column>
        <el-table-column  prop="name" sortable  label="名称"  ></el-table-column>
        <el-table-column  prop="spec"   label="规格"  ></el-table-column>
        <el-table-column  prop="unit"   label="单位"  ></el-table-column>
        <el-table-column  prop="price" sortable  label="价格" ></el-table-column>
        <el-table-column  prop="cost"   label="成本"  ></el-table-column>
        <el-table-column  prop="stock"   label="库存" ></el-table-column>
        <el-table-column  prop="state"   label="状态" ></el-table-column>
        <el-table-column  prop="create"  sortable label="新增时间" width="150"> ></el-table-column>
        <el-table-column  prop="modify"  sortable label="修改时间" width="150"> ></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
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
/*  import sidemenu from '@/components/sidemenu'*/
  import sidebar from '../sidebar'
  import godsadd from '../son/godsadd'
    export default {
        name: "gods",
        components:{
/*          sidemenu,*/
          sidebar,
          godsadd
        },
      props: [],
        data(){
          return{
            tableData3: [
              { selected:true,code: 1, name: "马克杯", spec: '20', unit: '箱' ,price:18,cost:15,stock:9999,state:"在售",create:"2019-1-31 18:00:00",modify:"2019-2-1 18:00:00"},
              { selected:false,code: 2, name: "磁盘", spec: '39', unit: '个' ,price:19,cost:12,stock:2999,state:"在售",create:"2019-1-30 18:00:00",modify:"2019-2-1 18:00:00"},
              { selected:true,code: 3, name: "桌子", spec: '40', unit: '个' ,price:100,cost:75,stock:100,state:"在售",create:"2019-1-29 18:00:00",modify:"2019-2-1 18:00:00"},
              { selected:false,code: 4, name: "尺子", spec: '100', unit: '米' ,price:20,cost:10,stock:1000,state:"在售",create:"2019-1-28 18:00:00",modify:"2019-2-1 18:00:00"},
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
