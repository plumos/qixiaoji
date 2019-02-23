<template>
  <div class="ads">
    <div class="newbtn">
      <el-button type="primary" style="color: #ffffff" @click="add">新增</el-button>
    </div>
  <div>

    <div>
      <!--<addtype id="addpanel" style="width:85%;background-color: white; position:absolute;z-index:10000;margin-top: -45px" @addset="addset" v-if="showset"></addtype>-->
      <el-dialog  :visible.sync="dialogFormVisible">
        <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">
          <div align="left">
            <label class="warn">新增客户级别</label>

            <el-form-item  label="级别名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item  label="折扣" prop="decount">
              <el-input v-model="form.decount"></el-input>
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

    <el-table class="ttable"
              max-height = 800
              ref="multipleTable"
              :data="tableData3"
              border
              :header-cell-style=this.getRow
              tooltip-effect="dark">
      <el-table-column  prop="userlevel"   label="级别名称"  ></el-table-column>
      <el-table-column  prop="defaultcount"   label="订货折扣"  ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="change(scope.$index)">修改</el-button>
          <el-button type="text" size="small" v-on:click="toFirst(scope.$index)">置顶</el-button>
          <el-button type="text" size="small" @click="sdelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script>
    export default {
        name: "cuslevel",
        data(){
            return{
              tableData3:[{userlevel:"普通",defaultcount:9.5}],
              dialogFormVisible:false,
              caindex:-1,
              usl:"",
              dft:0,
              form: {
                name: '',
                decount:0,
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
          toFirst:function(index) {
            if(index!==0){
              this.tableData3.unshift(this.tableData3.splice(index , 1)[0]);
            }
          },
          sdelete:function(index){
            this.tableData3.splice(index,1);
          },
          change:function(index){
            this.caindex=index;
            this.form.name=this.tableData3[index].userlevel;
            this.form.decount=this.tableData3[index].defaultcount;
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
                this.tableData3.push({userlevel:this.form.name,defaultcount:this.form.decount});
              }else{
                this.tableData3[this.caindex].userlevel=this.form.name;
                this.tableData3[this.caindex].defaultcount =this.form.decount;
              }
            }
            this.form.name='';
            this.form.decount=0;
            this.dialogFormVisible=false;
          },
        cancel:function () {
          this.dialogFormVisible=false;
        }
      }
    }
</script>

<style scoped>
  @import "../son.css";
</style>
