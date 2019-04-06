import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Registration from "./views/auth/Registration.vue";
import NotFound from "./views/server/NotFound.vue";
import GeneralError from "./views/server/GeneralError.vue";
import Profile from "./views/auth/UserProfile.vue";
import Callback from "./components/auth/Callback.vue";
import auth from "./auth/authService";

Vue.use(Router);

const ROUTER = new Router({
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
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },

    // Auth Pages
    {
      path: "/register",
      name: "registration",
      component: Registration
    },
    {
      path: "/user",
      name: "profile",
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

ROUTER.beforeEach((to, from, next) => {
  if (
    to.path === "" ||
    to.path === "/" ||
    to.path === "/about" ||
    to.path === "/callback" ||
    auth.isAuthenticated()
  ) {
    return next();
  }

  auth.login({ target: to.path });
});

export default ROUTER;
