// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import { store } from "./store";
import router from "./router";
import firebase from "firebase";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;
firebase.initializeApp({
  apiKey: "AIzaSyDsuX5TZByhNJrqYkGdkfZo_Ze1yZZ_GwE",
  authDomain: "teady-f47e4.firebaseapp.com",
  databaseURL: "https://teady-f47e4.firebaseio.com",
  projectId: "teady-f47e4",
  storageBucket: "",
  messagingSenderId: "91918690716"
});
/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    }
  });
  unsubscribe();
});
