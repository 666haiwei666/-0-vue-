import Vue from "vue";
import VueRouter from "vue-router";
import Test from '../src/components/test.vue'
import Page1 from '../src/components/Page1.vue'
import Page2 from '../src/components/Page2.vue'
import Home from '../src/components/Home.vue'
Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
    children: [{
      path: '/Page1',
      component: Page1
    }]
  },
  {
    path: '/Page2',
    component: Page2
  }
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
router.beforeEach((to, from, next) => {
  next()
})
export default router;