import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueHeadful from "vue-headful";
import AuthPlugin from "./plugins/auth";
import "./registerServiceWorker";

Vue.use(AuthPlugin);

Vue.config.productionTip = true;

Vue.component("vue-headful", vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
