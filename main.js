// 从vue包中导入Vue对象
import Vue from "vue";

// 导入App组件对象
import App from "./App.vue";
import router from "./router/index";

// 创建Vue根实例
new Vue({
  el: "#app",
  router,
  components: {
    // 组件名: 组件对象
    App: App,
  },
  template: "<App/>",
});
