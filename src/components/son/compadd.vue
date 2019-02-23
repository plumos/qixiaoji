<template>
<!--  公司信息设置-->
  <div class="ads">
    <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">

    <div align="left">
      <label class="warn">基础信息</label>

      <el-row>
        <el-col :span="10">
          <el-form-item  label="公司名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item  label="行业类别" prop="industry">
            <el-input v-model="form.industry"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <span >
            <el-form-item  style="float: left;" prop="area" label="区域">
            </el-form-item>
            <area-cascader style="float: left;" :level="1" type="text" placeholder="请选择地区" v-model="form.area" :data="pcaa" size="large"></area-cascader>
          </span>
        </el-col>

        <el-col :span="10">
          <el-form-item  prop="address" label="详细地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item  label="邮编"  prop="mailcode" width="100px">
            <el-input v-model="form.mailcode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item  label="电话"  prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item  label="传真"  prop="fax">
            <el-input v-model="form.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="5">
          <el-form-item  label="联系人" prop="contact">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item  label="职位" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item  label="公司网址" prop="www">
            <el-input v-model="form.www"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="5">
          <el-form-item  label="手机" prop="mobile">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item  label="QQ" prop="qq">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item  label="公司介绍" prop="desc">
            <el-input v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item  label="邮箱" prop="mail">
            <el-input v-model="form.mail"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <div align="left">
          <label class="warn">公司logo</label>
        </div>
        <el-col :span="10">
          <el-form-item  style="width: 400px">
            <imgin></imgin>
          </el-form-item>
        </el-col>
      </el-row>

    </div>

    <div align="left">
      <label class="warn">财务信息</label>
      <el-row>
        <el-col :span="10">
          <el-form-item  label="纳税人识别号" prop="nsrcode">
            <el-input v-model="form.nsrcode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item  label="发票抬头"  prop="fptitle" width="100px">
            <el-input v-model="form.fptitle"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </div>

    <div align="left">
      <label class="warn">服务支持设置</label>
      <el-row>
        <el-col :span="10">
          <el-form-item  label="服务热线" prop="serverno">
            <el-input v-model="form.serverno"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item  label="对外联系人">
            <el-table class="stable" style="margin-left: 16px; "
                      max-height = 800
                      ref="multipleTable"
                      :data="contacttable"
                      border
                      :header-cell-style=this.getRow
                      tooltip-effect="dark">

              <el-table-column v-for="item in items" :key="item.prop" :prop="item.prop" :label="item.label">
                <template slot-scope="scope">
                  <el-input type="text" size="small" v-model="form.coll[scope.$index][item.prop]"></el-input>
                </template>
              </el-table-column>

              <el-table-column>
                <template slot-scope="scope">
                  <el-button  size="small" icon="el-icon-delete" v-on:click="delcollect(scope.$index)"></el-button>
                </template>
              </el-table-column>

            </el-table>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button  icon="el-icon-plus" style="margin-left: 250px;" v-on:click="addcollect">增加对外联系人</el-button>
    </div>

    <div class="btm">
      <el-button style="margin-top: 20px;" type="primary" @click="submitForm('ruleForm2')">保存</el-button>
      <el-button @click="resetForm('ruleForm2')">取消</el-button>
    </div>
  </el-form>

  </div>
</template>

<script>
  import imgin from "../common/imgin"
  import { pca, pcaa } from 'area-data';

    export default {
        name: "compadd",
        components:{
          imgin
        },
        data(){
            return{
              selected:[],
              pca:pca,
              pcaa:pcaa,
              items:[
                {prop:"name",label:"姓名"},
                {prop:"phone",label:"手机"},
                {prop:"qq",label:"QQ"},
                {prop:"mail",label:"邮箱"}
              ],
              input:"",
              form: {
                name: '',
                area:[] ,
                industry:'',
                address:'',
                mailcode:"",
                phone:'',
                fax:'',
                contact:'',
                title:'',
                www:'',
                mobile:'',
                qq:'',
                desc: '',
                mail:'',
                nsrcode:'',
                fptitle:'',
                serverno:'',
                coll:[
                  {}
                ],
              },
              rules: {
                name: [
                  { required: true, message: '请输入活动名称', trigger: 'blur' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                area: [
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                address: [
                  { required: true, message: '请填写地址', trigger: 'change' }
                ],
                contact: [
                  { required: true, message: '请填写联系人', trigger: 'change' }
                ],
                mobile: [
                  { required: true, message: '请填写手机号', trigger: 'change' }
                ],

                serverno: [
                  { required: true, message: '请填写服务热线', trigger: 'change' }
                ],
              },
              contacttable: [
                {},
              ],
            }
        },
        methods:{
          addcollect:function () {
            this.contacttable.push({});
            this.form.coll.push({name:'',phone:'',qq:'',mail:''});
          },
          delcollect:function (index) {
            this.contacttable.splice(index,1);
            this.form.coll.splice(index,1);
          }

        }
    }
</script>

<style scoped>
  @import "son.css";
</style>
