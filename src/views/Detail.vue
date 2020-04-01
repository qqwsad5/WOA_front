<template>
  <div class="detail">
    <h1>谣言id为：{{this.params.id}}</h1>
    <div class="timeline">
        <el-timeline>
            <el-timeline-item placement="top" v-for="(value, index) in detailData" v-bind:key="index">
                <DetailBox v-bind:data="value"/>
            </el-timeline-item>
        </el-timeline>
    </div>
  </div>
</template>


<script>

import DetailBox from '@/components/DetailBox.vue'

export default {
  name: 'Detail',
  components: {
    DetailBox
  },
  data() {
      return {
        detailData:Object,
      };
    },

  computed:{
      params:function(){
          return this.$route.query;  //传入搜索参数
      }
  },

  created() {
    this.axios
      .get('api/show/?id='+this.params.id)
      .then(response => {
        console.log("获取结果");
        console.log(response);
        this.detailData = response.data;
        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        console.log(error.config);
      })

  }
}
</script>

<style>

div.timeline
{
    margin: auto;
    margin-top: 5%;
    max-width :1080px;
}

</style>