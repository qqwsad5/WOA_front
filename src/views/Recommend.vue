<template>
  <div class="recommend">
    <div id="myWordCloud" v-bind:style="{width: '100%', height: '600px'}" style="margin-top: 0px"></div>
  </div>
  
    
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      displayData:[],
      recommendData:Object,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.axios
      .get('api/recommend/')
      .then(response => {
        console.log("获取结果");
        console.log(response);
        this.recommendData = response.data;

        // 加载数据
        this.displayData = [];
        for(var key in this.recommendData) {
            var thedata = {};
            // console.log(key);
            thedata['name'] = key;
            thedata['value'] = parseInt(this.recommendData[key]);
            this.displayData.push(thedata);
        }
        // 重新渲染数据
        var dateChart = this.echarts.init(document.getElementById('myWordCloud'));
        dateChart.setOption({series:{data:this.displayData}});

        // console.log(this.string_from_api);
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
        console.log(error.config);
      });
    
  },

  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myWordCloud = this.echarts.init(document.getElementById('myWordCloud'))
        // 绘制图表
        var option = {
            title:{
                text: '热词推荐',
                textStyle:{
                    // color: '#fff',
                    fontSize: 30,
                    fontFamily: '幼圆'
                }
            },
            backgroundColor: "#fff",
            series: [{
                type: 'wordCloud',
        
                // The shape of the "cloud" to draw. Can be any polar equation represented as a
                // callback function, or a keyword present. Available presents are circle (default),
                // cardioid (apple or heart shape curve, the most known polar equation), diamond (
                // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
        
                shape: 'circle',
        
                // A silhouette image which the white area will be excluded from drawing texts.
                // The shape option will continue to apply as the shape of the cloud to grow.
        
                // maskImage: "../assets/11.png",
        
                // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
                // Default to be put in the center and has 75% x 80% size.
        
                left: 'center',
                top: 'center',
                width: '80%',
                height: '80%',
                right: null,
                bottom: null,
        
                // Text size range which the value in data will be mapped to.
                // Default to have minimum 12px and maximum 60px size.
        
                sizeRange: [50, 100],
        
                // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45
        
                rotationRange: [-90, 90],
                rotationStep: 45,
        
                // size of the grid in pixels for marking the availability of the canvas
                // the larger the grid size, the bigger the gap between words.
        
                gridSize: 50,
        
                // set to true to allow word being draw partly outside of the canvas.
                // Allow word bigger than the size of the canvas to be drawn
                drawOutOfBound: false,
        
                // Global text style
                textStyle: {
                    normal: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        shadowBlur: 1,
                        shadowColor: '#333',
                        // Color can be a callback function or a color string
                        color: function () {
                            // // Random color
                            // return 'rgb(' + [
                            //     Math.round(Math.random() * 160),
                            //     Math.round(Math.random() * 160),
                            //     Math.round(Math.random() * 160)
                            // ].join(',') + ')';
                            
                            // 漂亮的随机颜色
                            var golden_ratio = 0.618033988749895;
                            var s = 0.8;
                            var v = 0.999;
                            var h = golden_ratio + Math.random()*0.8 - 0.5;

                            var h_i = parseInt(h * 6);
                            var f = h * 6 - h_i;
                            var p = v * (1 - s);
                            var q = v * (1 - f * s);
                            var t = v * (1 - (1 - f) * s);
                            var r, g, b;
                            switch (h_i) {
                                case 0:
                                    r = v;
                                    g = t;
                                    b = p;
                                    break;
                                case 1:
                                    r = q;
                                    g = v;
                                    b = p;
                                    break;
                                case 2:
                                    r = p;
                                    g = v;
                                    b = t;
                                    break;
                                case 3 :
                                    r = p;
                                    g = q;
                                    b = v;
                                    break;
                                case 4:
                                    r = t;
                                    g = p;
                                    b = v;
                                    break;
                                case 5:
                                    r = v;
                                    g = p;
                                    b = q;
                                    break;
                                default:
                                    r = 1;
                                    g = 1;
                                    b = 1;
                            }
                            return 'rgb('+parseInt(r*255)+','+parseInt(g*255)+','+parseInt(b*255)+')'
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
        
                // Data is an array. Each array item must have name and value property.
                data: []

            }]
        };
 
        //添加点击事件
        // 设置表格的点击事件进行路由的切换
        myWordCloud.on(
            "click",
            (param) => {
                // 可以使用下面的方式进行路由的切换
                // alert(param.name);
                this.$router.push({
                    path:"/search",
                    query:{
                        search: param.name
                    }
                });
            },
        );

        // 使用刚指定的配置项和数据显示图表。
        myWordCloud.setOption(option);
    },

  }
  
}
</script>

<style>

/* .recommend{
  margin-top: 15%;
  margin-left: 15%;
  margin-right: 15%;
} */

</style>
