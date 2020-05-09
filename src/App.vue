<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item id="logo" index="1" route="/">WOA</el-menu-item>
          <el-menu-item index="2" route="/">主页</el-menu-item>
          <el-menu-item index="3" route="/recommend">推荐</el-menu-item>
          <el-menu-item index="4" route="/about"> 关于</el-menu-item>
          <SearchBox id="menu-search"/>
        </el-menu>
        
      </el-header>
      
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'App',
  components: {
    SearchBox
  },
  data() {
    return {
      // activeIndex: "2"
    };
  },
  computed:{
    activeIndex: function(){ //根据路由进行高亮
      if (this.$route.path=='/about')
        return '4';
      else if (this.$route.path=='/recommend')
        return '3';
      else if (this.$route.path=='/search' || this.$route.path=='/detail')
        return '1';
      else
        return '2';
    }
  },
}
</script>


<style lang="stylus">
#app
  // font-family Avenir, Helvetica, Arial, sans-serif
  // -webkit-font-smoothing antialiased
  // -moz-osx-font-smoothing grayscale
  // text-align center
  // color #2c3e50
  // margin-top 60px
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
</style>

<style>

html, body { margin:0; height:100%; background-color: #E9EEF3}

  .el-header {
    background-color: white;
  }

  .el-menu {
    margin-left: 15%;
    margin-right: 15%;
    min-width:650px;
  }

  .el-menu-item {
    width: 100px;
    text-align: center;
    float: right;
  }

  .el-main {
    color: #333;
    text-align: center;
    height: 100%;
    margin-left: 15%;
    margin-right: 15%;
  }


  #menu-search {
    margin-top: 10px;
    float: right;
  }
  
  #logo {
    width: 120px;
    font-size: 120%;
    font-family: "SWMono";
    font-weight:900;
    color:#000000
  }

  
</style>
