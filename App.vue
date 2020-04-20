<!--<template>
  <div>
     <h1>hahhha11111</h1>
    <h1>TodoList</h1>
    <input type="text" v-model="content" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="item of todoData" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import data from './assets/data/test.xml'
export default {
  name: 'App',
  data() {
    return {
      todoData: ['todo1', 'todo2', 'todo3'],
      content: ''
    }
  },
  mounted(){
   console.log(1111111)
   this.test()
  },
  methods: {
    test(){
     let resset=111
     let arr = [1,2,34,4]
     console.log(...arr)
    //  console.log(data)
    },
    addTodo() {
      if (this.content === '') return

      this.todoData.push(this.content)
      this.content = ''
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>-->

<template>
  <div>
    <!-- this is App
    <h1>hahhahahha</h1>
    <img src="./src/assets/images/2.png" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import img from "./src/assets/images/2.png";
import data from "./src/assets/data/test.xml";
import "./src/assets/styles/resset.css";
import { cube } from "./src/math.js";
import "./src/first.js";
import "./src/seconds.js";
export default {
  name: "App",
  mounted() {
    console.log(1111111);
    this.test();
    console.log(cube(27));
  },
  methods: {
    test() {
      let resset = 111;
      let arr = [1, 2, 34, 4];
      console.log(...arr);
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
