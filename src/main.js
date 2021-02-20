import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import elementUI from "element-ui";
import "./mock";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  // 请求超时时间
  timeout: 3000
});
Vue.use(elementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
