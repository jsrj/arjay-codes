import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Registration from "./views/auth/Registration.vue";
import NotFound from "./views/server/NotFound.vue";
import GeneralError from "./views/server/GeneralError.vue";
import Profile from "./views/auth/UserProfile.vue";
import Callback from "./components/auth/Callback.vue";
import auth from "./service/auth/authService";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // Public Pages
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },

    // Auth Pages
    {
      path: "/register",
      name: "registration",
      component: Registration
    },
    {
      path: "/user",
      name: "user",
      component: Profile
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },

    // Server/Error Pages
    {
      path: "/unknown-error",
      name: "unknown-error",
      component: GeneralError
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});

const authenticatedRoutes = [
  "/user",
  "/admin",
  "/invoice",
  "/dashboard",
  "/scheduling"
];

router.beforeEach((to, from, next) => {
  if (!auth.isAuthenticated() && authenticatedRoutes.includes(to.path)) {
    auth.login({ target: to.path });
  } else {
    return next();
  }
});

export default router;
