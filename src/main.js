import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueHeadful from "vue-headful";
import "./registerServiceWorker";

Vue.config.productionTip = true;
Vue.component("vue-headful", vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
