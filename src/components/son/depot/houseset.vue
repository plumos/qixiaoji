<template>
  <div class="ads">
    <div class="newbtn">
      <el-button type="primary" style="color: #ffffff" v-on:click="add">新增</el-button>
    </div>

    <div>
      <!--<addtype id="addpanel" style="width:85%;background-color: white; position:absolute;z-index:10000;margin-top: -45px" @addset="addset" v-if="showset"></addtype>-->
      <el-dialog  :visible.sync="dialogFormVisible">
        <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">
          <div align="left">
            <label class="warn">新增仓库</label>

            <el-form-item  label="仓库名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item  label="仓库编码" prop="code">
              <el-input v-model="form.code"></el-input>
            </el-form-item>

            <el-form-item  label="仓库地址" prop="address">
              <el-input v-model="form.address" sthle="height:100px"></el-input>
            </el-form-item>

            <el-form-item  >
              <div style="margin-left: 40%">
                <el-button type="primary" @click="ssave">保存</el-button>
                <el-button @click="cancel">取消</el-button>
              </div>
            </el-form-item>

          </div>
        </el-form>
      </el-dialog>
    </div>

    <div>
      <el-table class="ttable"
                max-height = 800
                ref="multipleTable"
                :data="tableData3"
                border
                :header-cell-style=this.getRow
                :row-style="rowClass"
                tooltip-effect="dark">
        <el-table-column  prop="name"   label="仓库名称"  ></el-table-column>
        <el-table-column  prop="code"   label="仓库编码"  ></el-table-column>
        <el-table-column  prop="address"   label="仓库地址"  ></el-table-column>
        <el-table-column  prop="state"   label="状态"  >
        </el-table-column>
        <el-table-column
          fixed="right"
          width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="change(scope.$index)">修改</el-button>
            <el-button type="text" size="small" @click="stop(scope.$index)">禁用</el-button>
            <el-button type="text" size="small" @click="sdelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  //仓库设置
    export default {
        name: "houseset",
      data(){
        return{
          dialogFormVisible:false,
          tableData3:[{name:"1号仓",code:1,address:"坂田街道",state:"已启用"}],
          form: {
            name: '',
            code:0,
            address:'',
          },
          rules: {
            name: [
              {required: true, message: '请输入单位名称'},
            ],
            decount:[
              {required: true, message: '请输入折扣'},
            ],
          }
        }
      },
      methods:{
        stop:function(index){
          this.tableData3[index].state="已禁止";
        },
        sdelete:function(index){
          this.tableData3.splice(index,1);
        },
        change:function(index){
          this.caindex=index;
          this.form.name=this.tableData3[index].name;
          this.form.code=this.tableData3[index].code;
          this.form.address=this.tableData3[index].address;
          this.dialogFormVisible = true;
        },
        add:function () {
          this.caindex=-1;
          this.form.name='';
          this.form.decount=0;
          this.dialogFormVisible = true;
        },
        ssave:function () {
          if (this.form.name!==''){
            if(this.caindex === -1){
              this.tableData3.push({name:this.form.name,code:this.form.code,address:this.form.address,state:"已启用"});
            }else{
              this.tableData3[this.caindex].name=this.form.name;
              this.tableData3[this.caindex].code =this.form.code;
              this.tableData3[this.caindex].address =this.form.address;
              this.tableData3[this.caindex].state="已启用";
            }
          }
          this.form.name='';
          this.form.code=0;
          this.form.address='';
          this.dialogFormVisible=false;
        },
        cancel:function () {
          this.dialogFormVisible=false;
        },
/*        rowClass: function (row, index) {/!*          if(this.tableData3[index].state==="已禁止"){
            return { "color": "red" }
          }*!/

        },*/
      }
    }
</script>

<style scoped>
  @import "../son.css";
</style>
