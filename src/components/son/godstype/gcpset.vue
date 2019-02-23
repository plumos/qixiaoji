<template>
  <div class="ads" >
    <div class="newbtn">
      <el-button type="primary" style="color: #ffffff" @click="dialogFormVisible = true" >新增</el-button>
    </div>

    <div>
      <!--<addtype id="addpanel" style="width:85%;background-color: white; position:absolute;z-index:10000;margin-top: -45px" @addset="addset" v-if="showset"></addtype>-->
      <el-dialog  :visible.sync="dialogFormVisible">
        <addtype @addset="addset"></addtype >
      </el-dialog>

    </div>

    <div class="tree">
      <el-tree
        :data="data5"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span class="spanbt">
            <el-button type="text" @click.stop="dialogFormVisible = true">新增子类</el-button>
            <el-button type="text" @click.stop="dialogFormVisible = true">修改</el-button>
            <el-button
              type="text"
              @click="() => remove(node, data)">
              置顶
            </el-button>
            <el-button
              type="text"
              @click="() => remove(node, data)">
              删除
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>

  </div>

</template>

<script>
  //商品分类
  import Addtype from "./addtype";
  export default {
        name: "gcpset",
    components: {Addtype},
    data() {
        const data = [{
          id: 1,
          label: '半成品',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '道具',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '成品',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }];
        return {
          dialogFormVisible:false,
          showset:false,
          data5: JSON.parse(JSON.stringify(data))
        }
      },
        methods: {
          handleNodeClick(data) {
            console.log(data);
            this.showset=false;
          },
          append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
              this.$set(data, 'children', []);
            }
            data.children.push(newChild);
          },

          remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
          },
          add(){
            this.dialogFormVisible=true
          },
          addset(){
            this.dialogFormVisible = false;
          },
          ssave(){

          },
          cancel(){

          }
        }

  }
</script>

<style>
  @import "../son.css";

  .tree{
    width:90%;
    z-index: 0;
/*    background-color:white;
    margin-left: 100px;
    font-size: 60px;
    margin-top: 20px;*/
    margin-left: 100px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    padding-right: 50px;
/*    background-color: white;*/
  }
  .custom-tree-node .spanbt{
    display:none;
  }

  .custom-tree-node:hover .spanbt{
    display:block;
  }

  .el-tree {
/*    background-color: #f1faf8;*/
  }
  .el-tree-node{
    margin-top: 10px;
  }
  .el-tree-node__content{
    height: 40px;
  }
  .el-tree-node__label{
    font-size: 30px;
  }
  .el-button{
    color: #0f8496;
  }
</style>
