<template>
  <div class="detail">
    <!-- <h1>谣言id为：{{this.params.id}}</h1> -->
    <el-row style="margin-top: 20px">
      <el-col :span="12"><div>谣言id：{{this.params.id}}</div></el-col>
      <el-col :span="12">
        <div>
          <el-radio-group v-model="radio" size="medium">
            <el-radio-button label="统计情况" ></el-radio-button>
            <el-radio-button label="微博详情"></el-radio-button>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    
    <div class="timeline" v-if="radio=='微博详情'">
        <el-timeline>
            <el-timeline-item placement="top" v-for="(value, index) in detailData" v-bind:key="index">
                <DetailBox v-bind:data="value"/>
            </el-timeline-item>
        </el-timeline>
    </div>
    <div id="myChart" v-show="radio=='统计情况'" v-bind:style="{width: '100%', height: '500px'}" style="margin-top: 40px"></div>
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
        radio: '统计情况',
        data: [],
        dataSize:0
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
        this.detailData = response.data[1];
        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        console.log(error.config);
      });

    var i;
    for (i = 0; i < 60; i++) { 
        this.data.push([i,-(i-30)*(i-30)+900,i*i]);
    }
    this.dataSize = this.data.length;
  },

  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.echarts.init(document.getElementById('myChart'))
        // 绘制图表
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'none',        // 默认为直线，可选为：'line' | 'shadow'
                },
                // formatter: '{a0}---{b0}---{c1}'
            },
            legend: {
                // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '50px',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                show:false
            },
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false
                },
                // min:20
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                // data: ['24', '25', '26', '27', '28', '29', '30']
            },
            dataset: {
                source: this.data
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    // xAxisIndex: [0],
                    startValue: this.dataSize - 20,
                    minValueSpan: 20,
                    // bottom:-100
                },
                {
                    type: 'inside',
                    startValue: this.dataSize - 20
                    // endValue: this.dataSize
                }
            ],
            series: [
                {
                    name: '谣言微博转发总量',
                    type: 'bar',
                    // barWidth: 100,
                    // barGap: 30,
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'inside'
                    },
                    encode:{x:0,y:1}
                },
                {
                    name: '辟谣微博转发总量',
                    type: 'bar',
                    barWidth: '60%',
                    stack: '总量',
                    label: {
                        show: false,
                        position: 'inside'
                    },
                    encode:{x:0,y:2}
                }
            ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
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