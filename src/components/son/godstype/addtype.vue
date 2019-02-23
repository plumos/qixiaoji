<template>
  <div class="newgods">
    <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">

      <div align="left">
        <label class="warn">新增商品分类</label>
        <el-form-item  label="分类名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item  label="上级分类" prop="industry">
          <el-input v-model="form.parent"></el-input>
        </el-form-item>

        <el-form-item  >
          <div style="margin-left: 40%">
            <el-button type="primary" @click="ssave">保存</el-button>
            <el-button @click="cancel">取消</el-button>
          </div>
        </el-form-item>

      </div>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "addtype",
        data(){
          return{
            form: {
              name: '',
              parent: '',
            },
            rules: {
              name: [
                {required: true, message: '请输入分类名称', trigger: 'change'},
              ],
              parent: [
                {required: true, message: '请选择上级分类', trigger: 'change'},
              ],
            }
          }
        },
        methods:{
          ssave:function () {
            this.$emit("addset")
          },
          cancel:function () {
            this.$emit("addset")
          }
        }
    }
</script>

<style scoped>

</style>
