<template>
  <div class="detailbox"  @click="show = !show" style="cursor: pointer;">
    <el-card>
      <div class="news">
        <div v-if="Object.keys(data.nickname).length != 0">
          <h3>
            <a v-for="(value,index) in data.nickname" v-bind:key="index">
              {{value}}
            </a>
            <a v-if="data.piyao">
              （辟谣微博）
            </a>
          </h3>
        </div>
        <p style="font-size: 12px">{{data.weibo_time}}</p>
        <p style="font-size: 15px">{{data.content}}</p>
        <p v-if="transNum==0">无转发微博</p>
        <p v-else>有{{transNum}}条转发微博</p>
      </div>
    </el-card>
    <el-collapse-transition>
        <div v-show="show">
            <div class="transition-box"  v-for="(value, index) in transData" v-bind:key="index">
              <p style="font-size: 14px;font-weight:700">{{value.nickname}}</p>
              <p style="font-size: 12px">{{value.trans_time}}</p>
              <p style="font-size: 14px">{{value.content}}</p>
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
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid;
    border-color: #DCDFE6;
    background-color: #F2F6FC;
    text-align : left;
    padding:15px 70px;
    box-sizing: border-box;
  }

  .news {
    text-align : left;
    padding:0px 50px;
  }
</style>
