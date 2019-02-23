<template>
  <div style="height:100%">
    <div class="side">
      <img class="logo" src="../assets/logo.png">
      <ul class="nav-main">
        <li>
          <a  id="dd" href="javascript:void(0)" @click="tabChange(order,1)" @mouseenter="enter(1)" @mouseleave="leave(1)"><i class="si si-book-open" style="color: #0f1315"></i>订单</a>
          <div class="hello" @mouseenter="enter(1)" @mouseleave="leave(1)" v-if="seen[1]">
            <controlorder @CldupdateMc="CldupdateMc"></controlorder>
          </div>
        </li>
        <li>
          <a  id="sp"  href="javascript:void(0)" @click="tabChange(gods,0)" @mouseenter="enter(0)" @mouseleave="leave(0)" ><i class="si si-badge" style="color: #0f1315"></i>商品</a>
          <div class="hello" @mouseenter="enter(0)" @mouseleave="leave(0)" v-if="seen[0]">
            <controlgods @CldupdateMc="CldupdateMc"></controlgods>
          </div>
        </li>
        <li>
          <a id="kh" href="javascript:void(0)" @click="tabChange(customer,2)" @mouseenter="enter(2)" @mouseleave="leave(2)" ><i class="fa fa-user" style="color: #0f1315"></i>客户</a>
          <div class="hello" @mouseenter="enter(2)" @mouseleave="leave(2)" v-if="seen[2]">
            <controlcustomer @CldupdateMc="CldupdateMc"></controlcustomer>
          </div>
        </li>
    <!--    <li>
          <a id="zj" href="javascript:void(0)" @click="tabChange(money,3)" @mouseenter="enter(3)" @mouseleave="leave(3)"  v-on:click="leave(3)"><i class="fa fa-yen" style="color: #0f1315"></i>资金</a>
          <div class="hello" @mouseenter="enter(3)" @mouseleave="leave(3)" v-if="seen[3]">
            <controlmoney ></controlmoney>
          </div>
        </li>
        <li>
          <a  id="bb" @mouseenter="enter(4)" @mouseleave="leave(4)" v-on:click="leave(4)"><i class="fa fa-line-chart" style="color: #0f1315"></i>报表</a>
          <div class="hello" @mouseenter="enter(4)" @mouseleave="leave(4)" v-if="seen[4]">
            <controlform ></controlform>
          </div>
        </li>-->
      </ul>
    </div>
    <sideline id="sid" @CldupdateMc="CldupdateMc"></sideline>
    <sidebar id="sidebbs" :index="menucount" ></sidebar>

    <div class="element">
      <div :is="currentView" @CldupdateMc="CldupdateMc"></div>
    </div>
  </div>
</template>

<script>
  import controlorder from '@/components/control/controlorder'
  import controlgods from '@/components/control/controlgods'
  import controlcustomer from '@/components/control/controlcustomer'
  import controlmoney from '@/components/control/controlmoney'
  import controlform from '@/components/control/controlform'

  import order from '@/components/table/order'
  import gods from '@/components/table/gods'
  import customer from '@/components/table/customer'
  import money from '@/components/table/money'

  import godsadd from '@/components/son/godsadd'
  import orderadd from '@/components/son/orderadd'
  import cusadd from '@/components/son/cusadd'
  import compadd from '@/components/son/compadd'
  import gcpset from '@/components/son/godstype/gcpset'
  import unitset from '@/components/son/unit/unitset'
  import cuslevel from '@/components/son/level/cuslevel'
  import houseset from '@/components/son/depot/houseset'

  //gods
  import godsstore from '@/components/gods/godsstore'
  import godsin from '@/components/gods/godsin'
  import godsout from '@/components/gods/godsout'
  import godsalloc from '@/components/gods/godsalloc'
  import godsinout from '@/components/gods/godsinout'
  import godsgetsent from '@/components/gods/godsgetsent'
  import godschan from '@/components/gods/godschan'
  import supman from '@/components/gods/supman'
  import supai from '@/components/gods/supai'
  import suporder from '@/components/gods/suporder'
  import supertui from '@/components/gods/supertui'
  import supall from '@/components/gods/supall'

  //order
  import ordtui from '@/components/order/ordtui'
  import ordsentr from '@/components/order/ordsentr'
  import orddetails from '@/components/order/orddetails'
  import ordcus from '@/components/order/ordcus'
  import ordgods from '@/components/order/ordgods'
  import ordsendall from '@/components/order/ordsendall'
  import ordtuiall from '@/components/order/ordtuiall'

  //customer
  import cusshj from '@/components/customer/cusshj'
  import cusfankui from '@/components/customer/cusfankui'


  import sidebar from '@/components/sidebar'
  import sideline from '@/components/sideline'

  import Vue from 'vue'
    export default {
        name: "sidemenu",
        components:{
          controlorder,
          controlgods,
          controlcustomer,
          controlmoney,
          controlform,
          order,
          gods,
          customer,
          money,

          godsadd,
          orderadd,
          cusadd,
          compadd,
          gcpset,
          unitset,
          cuslevel,
          houseset,

          //gods
          godsstore,
          godsin,
          godsout,
          godsalloc,
          godsinout,
          godsgetsent,
          godschan,
          supman,
          supai,
          suporder,
          supertui,
          supall,

          //order
          ordtui,
          ordsentr,
          orddetails,
          ordcus,
          ordgods,
          ordsendall,
          ordtuiall,

          //customer
          cusshj,
          cusfankui,


          sidebar,
          sideline,

          Vue
        },
        data(){
          return{
            seen:[false,false,false,false,false],
            order: 'order',
            gods:'gods',
            customer:'customer',
            money:'money',

            godsadd:'godsadd',
            orderadd:'orderadd',
            cusadd:'cusadd',
            compadd:"compadd",
            gcpset:"gcpset",
            unitset:"unitset",
            cuslevel:"cuslevel",
            houseset:"houseset",

            //gods:
            godsstore:"godsstore",
            godsin:"godsin",
            godsout:"godsout",
            godsalloc:"godsalloc",
            godsinout:"godsinout",
            godsgetsent:"godsgetsent",
            godschan:"godschan",
            supman:"supman",
            supai:'supai',
            suporder:"suporder",
            supertui:"supertui",
            supall:"supall",

            //order
            ordtui:"ordtui",
            ordsentr:"ordsentr",
            orddetails:"orddetails",
            ordcus:"ordcus",
            ordgods:"ordgods",
            ordsendall:"ordsendall",
            ordtuiall:"ordtuiall",

            //customer:
            cusshj:"cusshj",
            cusfankui:"cusfankui",


            currentView: '', // 默认选中第一项
            menucount:0
          }
        },
        methods:{
          enter(index){
            Vue.set(this.seen,index,true)
          },
          leave(index){
            Vue.set(this.seen,index,false)
          },
          tabChange(tabItem,index) {
            this.leave(index);
            this.currentView = tabItem;
            this.menucount=index
          },
          CldupdateMc(tabItem,index){
            this.currentView = tabItem;
            this.menucount=index
          }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/oneui.css";
  .side{
/*    position:absolute;*/
    position: fixed;
    z-index: 11;
    width:200px;
    height: 100%;
    background-color: #ffffff;
  }
  .nav-main{
    width:220px;
    margin-top: 30px;
  }
  #sp,#dd,#kh,#zj,#bb{
    color: #0f1315
  }
  .hello{
    margin-top: -40px;
    position: absolute;/*这里一定要设置*/
/*    z-index: 11;*/
    margin-left: 220px;
    -webkit-transition: .5s ease-in-out;/* css的transition允许css的属性值在一定的时间内从一个状态平滑的过渡到另一个状态 */
    -moz-transition: .5s ease-in-out;/*这里为了兼容其他浏览器*/
    -o-transition: .5s ease-in-out;
    background-color: #ffffff;
  }
  #bb:hover .element{
    display: block;
  }

  .logo{
    width:200px;
  }
  #sidebbs{
    margin-left: 230px;
    margin-top: 40px;
    padding-top: 50px;
    position: fixed;
    z-index: 9;
    height: 80px;
    width: 80%;
    background-color: #f1faf8;
  }
  #sid{
    margin-left: 230px;
    padding-top: 10px;
    position: fixed;
    z-index: 10;
    width: 80%;
    height: 40px;
    background-color: #f1faf8;
  }

  .element{
    width:75%;
    padding-top: 140px;
    background-color: white;
    margin-left: 240px;
    position: absolute;
    height:100%;
/*    z-index: 998;*/
  }


</style>
