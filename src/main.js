import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import dataFixtures from "./data/fixtures";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueKonva from "vue-konva";

Vue.config.productionTip = false;
Vue.prototype.dataFixtures = dataFixtures;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueKonva);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
