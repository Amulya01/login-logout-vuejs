import Vue from "vue";
import Router from "vue-router";
import Landing from "../components/Landing.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";
import firebase from "firebase";
import NotFound from "../components/NotFound.vue";
const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/signin", component: "Signin" },
  { path: "/signup", component: "Signup" },
  { path: "/home", component: "Home", meta: { requiresAuth: true } },
  { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  };
});

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/signin");
  } else {
    next();
  }
});
export default router;
