import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import vueHeadful from "vue-headful";
import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";

dom.watch();
Vue.config.productionTip = true;

// Library additions
library.add(faCoffee);

// Vue Use declarations
Vue.use(Vuetify);
Vue.use(AuthPlugin);

// Vue Directive declarations
Vue.directive("highlightjs", HighlightJs);

// Vue Global Component declarations
Vue.component("vue-headful", vueHeadful);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
