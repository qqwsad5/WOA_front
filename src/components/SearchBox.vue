<template>
    <div class="searchbox">
        <el-input 
          v-model="searchText"
          placeholder="请输入搜索内容"
          maxlength="10"
          show-word-limit
          style="max-width:200px"
          @keyup.enter.native="search">
        </el-input>
        <el-button 
          type="primary"
          icon="el-icon-search"
          @click="search"
          style="margin-left: 10px">
          搜索
        </el-button>
    </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data: function () {
    return {
      searchText:""
    }
  },
  methods:{
    search(){
      this.$router.push({
      path:"/search",
      query:{
        search:this.searchText
      }
      });
    },
    check(){
      console.log("获取结果");
    }
  }
}
</script>