<template>
  <div class="detail">
    <h1>This is a detail page</h1>
    <h1>谣言标题为：{{this.params.title}}</h1>
    <div class="timeline">
        <el-timeline>
            <el-timeline-item placement="top" v-for="(item, index) in list" :key="index">
                <DetailBox v-bind:title="item.update_time" v-bind:abstract="item.content" v-bind:trans="tans"/>
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
        list:[{"mid": 4483532472318011, "uid": 1686546714, "content": "\u6b66\u6c49\u75c5\u6bd2\u6240\u8f9f\u8c23\u77f3\u6b63\u4e3d\u201c\u868a\u866b\u6216\u6210\u7b2c\u4e09\u5bbf\u4e3b\u201d\u8a00\u8bba\uff1a\u4ece\u672a\u53d1\u5e03\u8fc7\u3002", "update_time": "2020-03-17 18:28:00", "nickname": ["\u73af\u7403\u7f51"]}],
        tans:{"uid": 7307216655, "content": "\u5d14\u5929\u51ef\u5e94\u8be5\u8f9e\u804c\u3002", "trans_time": "2020-03-23 23:11:50", "nickname": "\u6211\u8ddf\u4f60\u68ad\u54c8"}
      };
    },
  computed:{
      params:function(){
          return this.$route.query;  //传入搜索参数
      }
  },
  created() {

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