import Vue from 'vue'
import Router from 'vue-router'

import sidemenu from '@/components/sidemenu'

import gods from '@/components/table/gods'
import order from '@/components/table/order.vue'
import tb from '@/components/tb.vue'

import gcpset from '@/components/son/depot/houseset'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sidemenu',
      component: sidemenu
    },
    {
      path: '/gods',
      name: 'gods',
      component: gods
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/tb',
      name: 'tb',
      component: tb
    },
    {
      path: '/gcpset',
      name: 'gcpset',
      component: gcpset
    },
 
  ]
})
