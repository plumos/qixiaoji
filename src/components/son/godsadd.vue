<template>
  <div>
      <div class="ads">
      <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">
        <div align="left">
          <label class="warn">基础信息</label>
        </div>
      <el-form-item  style="width: 200px;margin-top: -30px">
        <el-checkbox label="立即上架"  name="type"></el-checkbox>
      </el-form-item>
    <el-row>
      <el-col :span="10">
        <el-form-item  label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item  label="商品分类">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-form-item  label="排序值" width="100px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item  label="计量单位">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-form-item  label="搜索关键字" width="100px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="商品标签"  style="width: 400px" >
      <el-tag>新品上架</el-tag>
      <el-tag>热卖推荐</el-tag>
      <el-tag>清仓优惠</el-tag>
    </el-form-item>
<!--      <el-form-item label="商品图片"></el-form-item>-->
        <div align="left">
          <label class="warn">商品图片</label>
        </div>
    <el-form-item  style="width: 400px">
    <imgin></imgin>
  </el-form-item>

        <div align="left">
          <label class="warn">商品描述</label>
        </div>
    <el-form-item style="margin-top: 15px">
      <editor></editor>
    </el-form-item>

        <div align="left">
          <label class="warn">商品附件</label>
        </div>
    <el-form-item  style="width: 400px">
      <file></file>
    </el-form-item>

        <div align="left">
          <label class="warn">价格设置</label>
        </div>
    <el-row style="margin-top: 15px">
      <el-col :span="10">
        <el-form-item label="市场价">
          <el-input name="type"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-form-item label="成本价">
          <el-input name="type"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item style="width:70%">
      <div align="left">
      <el-checkbox label="按客户级别定价" name="type"></el-checkbox>
      </div>
      <el-table class="stable"
                max-height = 800
                ref="multipleTable"
                :data="tableData3"
                border
                :header-cell-style=this.getRow
                tooltip-effect="dark">
        <el-table-column  prop="userlevel"   label="客户级别"  ></el-table-column>
        <el-table-column  prop="defaultcount"   label="默认折扣"  ></el-table-column>
        <el-table-column  label="允许订货" >
          <template slot-scope="scope">
            <el-checkbox></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column  prop="orderprice"   label="订货价"  >
          <template slot-scope="scope">
            <el-input type="text" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column  prop="ordercount"  label="起订量" >
          <template slot-scope="scope">
            <el-input type="text" size="small"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>

    <el-form-item style="width:70%">
      <div align="left">
        <el-checkbox label="按客户定价" name="type"></el-checkbox>
      </div>
      <el-table class="stable"
                max-height = 800
                ref="multipleTable"
                :data="tableData4"
                border
                :header-cell-style=this.getRow
                tooltip-effect="dark">
        <el-table-column  prop="">
          <template slot-scope="scope">
            <div align="center">
            <el-button-group>
              <el-button @click="handleClick(scope.row)" icon="el-icon-plus">  </el-button>
              <el-button @click="handleClick(scope.row)" icon="el-icon-minus">     </el-button>
            </el-button-group>
            </div>
          </template>
        </el-table-column>
        <el-table-column  prop="userlevel"   label="客户名称"  ></el-table-column>
        <el-table-column  prop="userlevel"   label="客户级别"  ></el-table-column>
        <el-table-column  label="允许订货" >
          <template slot-scope="scope">
            <el-checkbox></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column  prop="orderprice"   label="订货价"  >
          <template slot-scope="scope">
            <el-input type="text" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column  prop="ordercount"  label="起订量" >
          <template slot-scope="scope">
            <el-input type="text" size="small"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <div class="btm">
      <el-button style="margin-top: 20px;" type="primary" @click="submitForm('ruleForm2')">保存</el-button>
      <el-button @click="resetForm('ruleForm2')">取消</el-button>
    </div>
  </el-form>
      </div>


  </div>
</template>

<script>
  import imgin from "../common/imgin"
  import editor from "../common/editor"
  import file from "../common/file"

    export default {
        name: "godsadd",
      components:{
        imgin,
        editor,
        file
      },
        data() {
          return {
            tableData3: [
              { userlevel:"普通",defaultcount:"100%"},
            ],
            tableData4: [
              { },
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
        methods: {
          onSubmit() {
            console.log('submit!');
          }
          },
      computed: {

      }
    }
</script>

<style scoped>
  @import "../../../assets/css/oneui.css";
  @import "son.css";

</style>
