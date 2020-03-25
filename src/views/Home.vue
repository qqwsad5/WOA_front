<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br/>
    <SearchBox/>
    <div id="app">
      {{info}}
    </div>
    <div>
      ???
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'


export default {
  name: 'Home',
  components: {
    SearchBox
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    // this.axios
    //   .get('/search')
    //   .then(response => (this.info = response))
    //   .catch(function (error) { // 请求失败处理
    //     console.log(error);
    //   });
    this.axios
      .get('api/detail/')
      .then(response => {
        console.log("获取结果");
        console.log(response);
        this.info = response.data;
        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      })
  }
}
</script>
