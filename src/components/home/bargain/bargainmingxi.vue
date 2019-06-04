<template>
<div class="max_divdiv">
   <headtop></headtop> 
   <div class="jilei">
      <span class="orange"></span>
      <div class="leiji_ear">
        <div class="leiji_ear_flex">
          <span class="lei1">
              <p class="qian">
                  1888元
              </p>
              <p class="touzi">
                  累计投资
              </p>
          </span>
          <span class="lei2">
              <p class="qian">
                  18元
              </p>
              <p class="touzi">
                  累计参与
              </p>
          </span>
          <span class="lei3">
              <p class="qian">
                  1888元
              </p>
              <p class="touzi">
                  积累瓜分
              </p>
          </span>
         </div>
          <p class="everyday">天天游静期待你的参与！！！</p> 
      </div>       
   </div>
    <div class="record_box">
          <p class="record">参与记录</p>
          <div class="list">
               <p class="list_item">
                  <span class="item_time">2019-12-25</span><span class="item_juti">02:02:40</span><span class="item_gua">瓜分中</span>
               </p>
                <p class="list_item">
                  <span class="item_time">2019-12-25</span><span class="item_juti">02:02:40</span><span class="item_gua">瓜分中</span>
               </p>
                <p class="list_item">
                  <span class="item_time">2019-12-25</span><span class="item_juti">02:02:40</span><span class="item_gua">瓜分中</span>
               </p>
          </div>
          <div class="xiangqing">
              点击查看更多详情>>>
          </div>
         
    </div>    

  
</div>   
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
    export default {
        name: 'bargainmingxi',
        components: {
			headtop,
		},
		data(){
			return {
               
			}
		},
       created: function(){
			/**head=>style */
			var style_obj = {
				head_wrap_style: {
					background: 'transparent',
				},
				return_data: {
					need_model: true,
					icon: '/static/img/public/left_icon_fff.png',
					/*跳转的路由(可以传参),为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '打卡明细',
					style: {color:'white'}
				},
				right_button: {
					need_model: false,
					/**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
					text: '',
					/**切换-模块（显隐），更换text */
			        change_text: '',
					/**图标=>内联失效(只能在头部组件style设置样式，传class名) */
					icon: {
						class: '',
						icon_url: '',
					},
					/**点击按钮-模块显示 */
					show: false,
					url_data: '',
				},
			}
			/**改变vuex对应头部数据 */
			this.$store.commit('change_head',style_obj);
		},
        mounted(){
        //   setTimeout(() => {
        //          this.dian()
        //    }, 1500); 
           this.dian()
        },
        methods:{
           
           dian(){  
            // 进度条长度动态变化                
            let that=this;
            // 进度条
            var clearInt=setInterval(function(){
                if(that.jdWidhah<60){
                    that.jdWidhah++;
                } 
                else{
                    clearInterval(clearInt)
                }             
            },50)
            //  图片
             var clearInt2=setInterval(function(){
                if(that.jdWid<60-7){
                    that.jdWid++;
                } 
                else{
                    clearInterval(clearInt2)
                }             
            },50)
            // 尖角区域
            var clearInt3=setInterval(function(){
                // 如果百分比大于90的话，就设置为90，这个我们需要一个判断
                if(that.imgWid<60-15){
                    that.imgWid++;
                } 
                else{
                    clearInterval(clearInt3)
                }             
            },50)



           }

        }
    }
   
  
</script>

<style lang="stylus" scoped>
.max_divdiv
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    .jilei
        width 100%
        .orange
            position absolute
            top -70px
            display inline-block
            width 100%
            height 250px
            background rgb(255,122,11)
            z-index 1
            background: -webkit-linear-gradient(left top, rgb(255,134,8) , rgb(253,86,19)); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(bottom right, rgb(255,134,8) , rgb(253,86,19)); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(bottom right, rgb(255,134,8) , rgb(253,86,19)); /* Firefox 3.6 - 15 */
            background: linear-gradient(to bottom right, rgb(255,134,8) , rgb(253,86,19)); /* 标准的语法 */
        .leiji_ear
            position absolute
            top 88px
            left 0
            right 0
            margin 0 auto
            width 90%
            height 220px
            padding-top 50px
            z-index 99
            background white
            border-radius 20px
            border 1px solid rgb(230,230,230)
            .leiji_ear_flex
                display flex
                justify-content space-around
                .lei1
                    display inline-block
                    width 180px
                    height 120px
                    background url('/static/img/bargain/qian1.png')
                    background-size 100% 100%
                    position relative
                    .qian
                        width 100%
                        position absolute
                        top 10px
                        left 50%
                        transform translate(-50%,0)
                        color white
                        text-align center
                    .touzi
                        position absolute
                        display inline-block
                        bottom 5px
                        left 0
                        right 0
                        margin 0 auto
                        color white
                        text-align center
                .lei2
                    display inline-block
                    width 180px
                    height 120px
                    background url('/static/img/bargain/qian2.png')
                    background-size 100% 100%
                    position relative
                    .qian
                        width 100%
                        position absolute
                        top 10px
                        left 50%
                        transform translate(-50%,0)
                        color white
                        text-align center
                    .touzi
                        position absolute
                        display inline-block
                        bottom 5px
                        left 0
                        right 0
                        margin 0 auto
                        color white
                        text-align center  
                .lei3
                    display inline-block
                    width 180px
                    height 120px
                    background url('/static/img/bargain/qian3.png')
                    background-size 100% 100% 
                    position relative
                    .qian
                        width 100%
                        position absolute
                        top 10px
                        left 50%
                        transform translate(-50%,0)
                        color white
                        text-align center
                    .touzi
                        position absolute
                        display inline-block
                        bottom 5px
                        left 0
                        right 0
                        margin 0 auto
                        color white
                        text-align center     
            .everyday
                width 100%
                text-align center
                color rgb(81,81,81) 
                padding-top 24px
    .record_box
        width 90%
        height 900px
        margin 380px auto 0 auto
        background white
        border-radius 20px
        .record
            width 92%
            margin 0 auto
            text-align center
            border-bottom 1px solid rgb(230,230,230)
            padding 20px 0
            font-size 30px
        .list
            width 85%
            margin 0 auto
            .list_item
                width 100% 
                padding 15px 0
                .item_juti
                    padding-left 30px
                .item_gua
                    float right 
    .xiangqing
        width 100%
        padding-top 30px
        text-align center
        color rgb(81,81,81)        


            
</style>
