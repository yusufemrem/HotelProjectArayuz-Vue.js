import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { store } from "./store/store";
import Vuelidate from "vuelidate";

Vue.use(VueResource);
Vue.use(Vuelidate);
//Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
// });

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
