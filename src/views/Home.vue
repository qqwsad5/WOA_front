<template>
  <div class="home">
    <el-carousel trigger="click" height="600px" indicator-position="outside" :loop="true" :interval="8000">
      <el-carousel-item>
        <div id="c1" @click="carousel('/about')">
          <img src="../assets/woa1.png" style="height:300px; position:absolute; left:50%; top:50%; transform: translate(-50%, -50%);">
          <h3 style="position:absolute; left:50%; transform: translate(-50%, 0); bottom:60px; color:#FFFFFF">
          微博谣言的散播和辟谣数据可视化网站
          </h3>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div id="c2" @click="carousel('/recommend')">
          <img src="../assets/11.png" style="height:200px; position:absolute; left:50%; top:45%; transform: translate(-50%, -50%);">
          <h3 style="position:absolute; left:50%; transform: translate(-50%, 0); bottom:60px; color:#FFFFFF">
          快来看一看我们为您推荐的关键词
          </h3>
        </div>
      </el-carousel-item>
      <!-- <el-carousel-item>
        <h3>3</h3>
        <img alt="Vue logo" src="../assets/11.png" style="max-height: 200px; margin:50px">
      </el-carousel-item>
      <el-carousel-item id="c4" @click="carousel('/about')">
        <h3>4</h3>
        <img alt="Vue logo" src="../assets/11.png" style="max-height: 200px; margin:50px">
      </el-carousel-item> -->

    </el-carousel>
    <!-- <img alt="Vue logo" src="../assets/11.png" style="max-height: 200px; margin:50px">
    <br/>
    <SearchBox/> -->
    <!-- <div id="app">
      {{info}}
    </div>
    <div>
      ???
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',

  data () {
    return {
      info: null
    }
  },
  methods:{
    carousel(dst){
      this.$router.push({
      path: dst,
      });
    }
  },
  // mounted () {
  //   this.axios
  //     .get('api/test/')
  //     .then(response => {
  //       console.log("获取结果");
  //       console.log(response);
  //       this.info = response.data;
  //       // console.log(this.string_from_api);
  //     })
  //     .catch(function (error) { // 请求失败处理
  //       console.log(error);
  //       console.log(error.config);
  //     })
  // }
}
</script>

<style>

.el-carousel {
    min-width:650px;
  }

#c1{
  height:100%;
  width:100%;
  background-color: #409EFF;
  cursor: pointer;
}

#c2{
  height:100%;
  width:100%;
  /* background-color: #5B9BD5; */
  background-color: #4678DC;
  cursor: pointer;
}

</style>