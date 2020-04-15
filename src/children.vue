<template>
  <div></div>
</template>

<script>
  import $ from 'jquery'
  export default {
    components: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
      console.log($)
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
</style>