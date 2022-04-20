import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import dataFixtures from "./data/fixtures";

Vue.config.productionTip = false;
Vue.prototype.dataFixtures = dataFixtures;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
