<template>
  <div class="detailbox"  @click="show = !show">
    <el-card>
        <h4>{{data.weibo_time}}</h4>
        <p>{{data.content}}</p>
        <p v-if="transNum==0">无转发微博</p>
        <p v-else>有{{transNum}}条转发微博</p>
    </el-card>
    <el-collapse-transition>
        <div v-show="show">
            <div class="transition-box"  v-for="(value, index) in transData" v-bind:key="index">
              {{value.trans_time}}<br/>
              {{value.nickname}}<br/>
              {{value.content}}
            </div>
        </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'DetailBox',
  props: {
    data: Object
  },
  data: () => ({
      show: false,
      transData:[],
      transNum:0
    }),
  methods:{

  },

  created() {
    // console.log("共"+str()+"个结果");
    var list = this.data.trans_list
    for (var i=0,len=list.length; i<len; i++){ 
      var id = list[i];
      this.axios
      .get('api/transmit/?id='+id)
      .then(response => {
        console.log("获取结果");
        console.log(response);
        this.transData.push(response.data);
        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        console.log(error.config);
      })
    }
    this.transNum = list.length;
  }
}
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
  }
</style>
