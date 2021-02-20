import Vue from "vue";
import VueRouter from "vue-router";
import Goods from "../views/goods.vue";
import Users from "../views/users.vue";
import Analysis from "../views/analysis.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Users
  },
  {
    path: "/goods",
    name: "goods",
    component: Goods
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/analysis",
    name: "analysis",
    component: Analysis
  }
];

const router = new VueRouter({
  routes
});
export default router;
