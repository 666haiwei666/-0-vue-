<!--  -->
<template>
  <div class>
    <router-link to="/">首页11</router-link>
    <router-link to="/Page1">页面1</router-link>
    <router-link to="Page2">页面2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { square } from '../math'
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    console.log(square(3))
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>
