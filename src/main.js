// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import { Button, Select,Table ,Tooltip ,Popover,Breadcrumb,Input,Dropdown,Col,Form,Radio,Checkbox,Tag,Upload,Dialog,DatePicker,TimePicker,Tree,Tabs,Menu} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import common from './common/common'

import BootstrapVue from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueAreaLinkage from 'vue-area-linkage';
import { pca, pcaa } from 'area-data'; // v5 or higher
import 'vue-area-linkage/dist/index.css'; // v2 or higher

Vue.use(VueAreaLinkage);
Vue.use(BootstrapVue);
Vue.use(common);

Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Table.name, Table);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Popover.name, Popover);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Col.name, Col);
Vue.component(Form.name, Form);
Vue.component(Radio.name, Radio);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Tag.name, Tag);
Vue.component(Upload.name, Upload);
Vue.component(Dialog.name, Dialog);
Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Input.name, Input);
Vue.component(Tree.name, Tree);
Vue.component(Tabs.name, Tabs);
Vue.component(Menu.name, Menu);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
