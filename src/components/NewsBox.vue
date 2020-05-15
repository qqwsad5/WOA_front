<template>
  <div class="newsbox" @click="detail()">
    <div v-if="Object.keys(abstract[0]).length != 0">
      人物关键词：
      <a v-for="(value,index) in abstract[0]" v-bind:key="index">
        {{value}}；
      </a>
    </div>
    <div v-if="Object.keys(abstract[1]).length != 0">
      地点关键词：
      <a v-for="(value,index) in abstract[1]" v-bind:key="index">
        {{value}}；
      </a>
    </div>
    <div v-if="Object.keys(abstract[2]).length != 0">
      来源关键词：
      <a v-for="(value,index) in abstract[2]" v-bind:key="index">
        {{value}}；
      </a>
    </div>
    <!-- <div>谣言id：{{id}},简介：{{abstract}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'NewsBox',
  props: {
    id: String,
    abstract: Object
  },
  methods:{
    detail(){
      this.$router.push({
      path:"/detail",
      query:{
        id:this.id
      }
      });
    }
  }
}
</script>

<style>
  .newsbox {
    max-width :1080px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid;
    border-color: #409EFF;
    background-color: #ffffff;
    text-align: left;
    color: #000000;
    padding: 40px 20px;
    box-sizing: border-box;
    cursor: pointer;
    padding:25px 50px;
  }
</style>