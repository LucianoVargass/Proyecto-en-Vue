import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  MenuIcon,
  render: h => h(App)
}).$mount('#app')
