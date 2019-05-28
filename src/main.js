import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import vueHeadful from "vue-headful";
import VTooltip from "v-tooltip";
import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";
import Icon from "vue-awesome/components/Icon";
import { dom } from "@fortawesome/fontawesome-svg-core";

import "vue-awesome/icons";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

dom.watch();
Vue.config.productionTip = true;

// Vue Use declarations
Vue.use(Vuetify, {
  iconfont: "mdi"
});
Vue.use(VTooltip);
Vue.use(AuthPlugin);

// Vue Directive declarations
Vue.directive("highlightjs", HighlightJs);

// Vue Global Component declarations
Vue.component("v-icon", Icon);
Vue.component("vue-headful", vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
