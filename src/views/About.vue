<template>
  <div class="about">
    <h3 id="abstract" >WOA 是一个用于收集并展示微博上的谣言以及辟谣信息的数据可视化网页。
      旨在帮助用户了解当前有哪些事件已经被辟谣了，
      同时还可以让用户以更加清晰的方式了解在当下互联网环境下谣言的传播方式及其辟谣的方法。</h3>
    <el-divider></el-divider>
    <h3 id="contributor">前端搭建：龙行明<br/>
        数据收集：廖远达</h3>
    <!-- <div id="myChart" :style="{width: '100%', height: '50px'}"></div> -->
  </div>
  
    
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>

<style>

.about{
  margin-top: 15%;
  margin-left: 15%;
  margin-right: 15%;
}

#abstract{
  text-align : left
}

#contributor {
  float:right;
  font-size:100%
}
</style>
