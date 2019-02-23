<template>
  <div class="ads">
    <div class="newbtn">
      <el-button type="primary" style="color: #ffffff" @click="dialogFormVisible = true">新增</el-button>
    </div>


    <div>
      <!--<addtype id="addpanel" style="width:85%;background-color: white; position:absolute;z-index:10000;margin-top: -45px" @addset="addset" v-if="showset"></addtype>-->
      <el-dialog  :visible.sync="dialogFormVisible">
        <addunit @addset="addset"></addunit>
      </el-dialog>

    </div>

    <div class="tree">
      <el-tree
        :data="data"
        accordion>

        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span class="spanbt">
            <el-button
              type="text"
              @click="() => remove(node,data)">
              删除
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>

  </div>
</template>

<script>
  import Addunit from "./addunit"
  //单位设置
    export default {
        name: "unitset",
      components:{Addunit},
      data() {
        return {
          data : [{
            label: '米',
          }, {
            label: '包',
          }, {
            label: '箱',
          }],
/*          data5: JSON.parse(JSON.stringify(data)),*/
          dialogFormVisible:false
        }
      },
      methods: {

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.label === data.label);
          children.splice(index, 1);
        },
        addset(unit){
          if(unit){
            this.data.push({label:unit});
          }
          this.dialogFormVisible = false;
        },
      }
    }
</script>

<style >
  @import "../son.css";

  .tree{
    background-color:#f1faf8;
    width:80%;
    margin-left: 100px;
    font-size: 60px;
    margin-top: 20px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 50px;
  }
  .custom-tree-node .spanbt{
    display:none;
  }

  .custom-tree-node:hover .spanbt{
    display:block;
  }

  .el-tree {
 /*   background-color: #f1faf8;*/
  }
  .el-tree-node{
    margin-top: 10px;
  }
  .el-tree-node__content{
    height: 40px;
  }
  .el-tree-node__label{
    font-size: 14px;
  }
  .el-button{
    color: #0f8496;
  }
</style>
