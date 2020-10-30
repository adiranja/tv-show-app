import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {BootstrapVue ,  IconsPlugin} from 'bootstrap-vue'
import VueContentPlaceholders from 'vue-content-placeholders'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use( IconsPlugin)
Vue.use(VueContentPlaceholders)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
