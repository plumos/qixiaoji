<template>
  <div class="newgods">
    <el-form ref="form"  :rules="rules" :model="form" label-width="100px" style="margin-top: 20px">

      <div align="left">
        <label class="warn">新增计量单位</label>

        <el-form-item  label="单位名称" prop="name">
          <el-input v-model="form.name"></el-input>
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
        name: "addunit",
        data(){
            return{
              form: {
                name: '',
              },
              rules: {
                name: [
                  {required: true, message: '请输入单位名称'},
                ],
              }
            }
        },
        methods:{
          ssave:function () {
            this.$emit("addset",this.form.name);
            this.form.name="";
          },
          cancel:function () {
            this.$emit("addset");
          }
        }
    }
</script>

<style scoped>

</style>
