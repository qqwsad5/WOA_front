<template>
  <div class="search">
    <!-- <SearchBox/> -->
    <h1 style="text-align : left">
      关键词：
      <a v-if="this.params.search == null">无输入</a>
      <a v-else-if="this.params.search == ''">无输入</a>
      <a v-else>{{this.params.search}}</a>
    </h1>
    <div style="text-align : left">
      <h3 v-if="Object.keys(this.searchData).length == 0">对不起，我们未能在数据库中发现相关谣言，您可以尝试更换其他关键词搜索</h3>
      <h2 v-else>发现了 {{Object.keys(this.searchData).length}} 条相关谣言</h2>
    </div>


    <!-- 简单列表显示搜到的谣言 -->
    <div v-for="(value, id, index) in searchData" v-bind:key="index">
      <NewsBox v-bind:id="id" v-bind:abstract="value"/>
    </div>

    <!-- <h1>{{currentTime}}</h1> -->
  </div>
</template>

<script>

import NewsBox from '@/components/NewsBox.vue'

export default {
  name: 'Search',
  components: {
    NewsBox,
  },
  data: function () {
    return {
      searchData:Object,
      timer: "",//定义一个定时器的变量
      currentTime: "" // 获取当前时间
    }
  },
  methods:{
    getData(){
      
      this.axios
      .get('api/search/?keyword='+this.params.search)
      .then(response => {
        console.log("获取结果");
        console.log(response);
        this.searchData = response.data;
        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        console.log(error.config);
      })

    }
  },

  computed:{
    params: function(){ //传入的搜索参数
      return this.$route.query;  //传入搜索参数
    },
  },

  watch:{
    params: function(){ //参数变化时重新获取数据
      this.getData();
    }
  },

  created() {
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    _this.getData();  //更新数据
    this.timer = setInterval(function() {

      _this.currentTime = //修改数据date
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();

      
    }, 1000);

  },
beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>