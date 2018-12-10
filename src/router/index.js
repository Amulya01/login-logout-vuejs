import Vue from "vue";
import Router from "vue-router";
import Landing from "../components/Landing.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/signin", component: "Signin" },
  { path: "/signup", component: "Signup" },
  { path: "/home", component: "Home" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
