<!--  -->
<template>
  <div class="">
    <h1>hello world 热加载543222</h1>
    <img src="../assets/images/1.png" alt="">
    <!-- // TODO 图片路径显示问题 -->
    <input type="text" v-model="content" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="item of todoData" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import img from "../assets/images/1.png";
import "../assets/styles/global.styl";
// import '../assets/styles/test.css'
export default {
  components: {},
  data() {
    return {
      todoData: ["todo1", "todo2", "todo3"],
      content: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    addTodo() {
      if (this.content === "") return;

      this.todoData.push(this.content);
      this.content = "";
    }
  },
  created() {
    console.log(1111111111111111);
    console.log(img)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
h1
  color: red;
  transform: translate(10px,10px);
</style>
