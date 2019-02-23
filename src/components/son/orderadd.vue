<template>
  <div class="ads">
    <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">
      <el-row>
        <el-col :span="10">
          <el-form-item  label="客户">
            <el-input
              placeholder="请选择客户"
              v-model="input22">
              <i slot="suffix" class="el-input__icon  el-icon-close " style="cursor:pointer" @click="counter"></i>
              <i slot="suffix" class="el-input__icon  el-icon-more " style="cursor:pointer" @click="counter"></i>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item >
        <el-table class="stable"
                  max-height = 800
                  ref="multipleTable"
                  :data="tableData"
                  border
                  :header-cell-style=this.getRow
                  tooltip-effect="dark">
          <el-table-column  prop="no"   label=""  ></el-table-column>
          <el-table-column  prop="" width="200px">
            <template slot-scope="scope">
              <div align="center">
                <el-button-group>
                  <el-button @click="handleClick(scope.row)" icon="el-icon-plus">  </el-button>
                  <el-button @click="handleClick(scope.row)" icon="el-icon-minus">     </el-button>
                </el-button-group>
              </div>
            </template>
          </el-table-column>
          <el-table-column  prop="mainpic"   label="主图"></el-table-column>
          <el-table-column  prop="code"   label="商品编码"></el-table-column>
          <el-table-column  prop="name"   label="商品名称"></el-table-column>
          <el-table-column  prop="size"   label="商品规格"></el-table-column>
          <el-table-column  prop="count"   label="数量">
            <template slot-scope="scope">
              <el-input type="text" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column  prop="unit"   label="单位"></el-table-column>
          <el-table-column  prop="price"   label="单价"></el-table-column>
          <el-table-column  prop="allmoney"   label="小计"></el-table-column>
          <el-table-column  prop="spec"   label="备注">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" icon="el-icon-edit" ></el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-form-item>


      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <el-label>收货信息</el-label>
        </el-col>
        <el-col :span="10">
        </el-col>
      </el-row>

      <el-form-item style="margin-top: 20px" label="交货日期" required>
        <el-col :span="5">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="5">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-row>
        <el-col :span="2">
          <el-label>备注说明</el-label>
        </el-col>
        <el-col :span="15">
          <input type="text" class="specinput"></input>
        </el-col>
      </el-row>

      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <el-label>附件信息</el-label>
        </el-col>
        <el-col :span="10">
          <file></file>
        </el-col>
      </el-row>
<!--      <el-form-item  style="width: 400px">
        <file></file>
      </el-form-item>-->
      <div class="btm">
        <el-button style="margin-top: 20px;" type="primary" @click="submitForm('ruleForm2')">保存</el-button>
        <el-button @click="resetForm('ruleForm2')">取消</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>

  import file from "../common/file"
    export default {
        name: "orderadd",
      components:{
        file
      },
      data(){
          return{
            tableData:[
              {no:1},
              {no:"合计"}
            ],
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
              ],
              resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        counter:function () {
/*          alert("hello")*/
        }
      }
    }
</script>

<style scoped>
  @import "son.css";
  .specinput{
    border: none;
    border-bottom: 1px solid #2db2aa;
    outline: none;
    width: 100%;
  }

</style>
