<template>
  <div class="newsbox" @click="detail()">
    <div>谣言id：{{id}},简介：{{abstract}}</div>
  </div>
</template>

<script>
export default {
  name: 'NewsBox',
  props: {
    id: String,
    abstract: String
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
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 4px;
    background-color: gray;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
  }
</style>