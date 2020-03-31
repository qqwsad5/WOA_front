<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item index="/">搜索</el-menu-item>
          <el-menu-item index="/about"> 关于</el-menu-item>
        </el-menu>
      </el-header>
      
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

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
    background-color: white
  }

  .el-main {
    color: #333;
    text-align: center;
    height: 100%;
  }
  
</style>
