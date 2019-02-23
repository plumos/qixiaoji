<template>
  <div class="ads">
    <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">
      <div align="left">
        <label class="warn">公司信息</label>

        <el-row>
          <el-col :span="10">
            <el-form-item  label="客户名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="客户级别">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="客户编码" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="默认发货仓库">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="所在部门" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="业务员">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="签约时间" prop="date1">
              <el-date-picker  v-model="value6"   type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="邮编">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="传真">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="区域" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="详细地址">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="物流编码" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="备用信息">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div align="left">
        <label class="warn">个人信息</label>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="手机">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="电话">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="职位" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="Email">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item  label="QQ">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div align="left">
        <label class="warn">财务信息</label>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="发票抬头">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="纳税人识别号">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="地址" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="电话">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item  label="开户名称" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="开户银行">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item  label="银行账号" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="账期类型">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item  label="上次对账日期" width="100px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item  label="对账初始化">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div class="btm">
        <el-button style="margin-top: 20px;" type="primary" @click="submitForm('ruleForm2')">保存</el-button>
        <el-button @click="resetForm('ruleForm2')">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "cusadd",
      data(){
          return{
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
      }
    }
</script>

<style scoped>
  @import "son.css";
</style>
