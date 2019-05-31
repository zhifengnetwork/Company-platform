<template>
<div class="max_divdiv">
   <headtop></headtop> 
   <div class="div">
      <img src="/static/img/home/bargain/1.jpg" class="touxiang"/>
      <p class="nickname">冷冷的冰雨欣</p>
      <div class="shop_ear">
          <img src="/static/img/home/bargain/niang.png" class="niangf"/>
          <span class="shop_ear_title">自然堂化妆品补水防晒虎虎生风副书记粉红色看好的撒几何</span>
          <p class="shop_ear_price"><span>￥</span><span class="shop_ear_pricemoney">360.00</span><span class="fuhao">￥499</span></p>
          <p class="end_time">距离结束:23:23:15</p>
      </div>
      <!-- 我的砍价帮 -->
      <div class="kangjia_ear">
         <p class="kangjia_head">
             <img src="/static/img/home/bargain/icon_left.png" class="icon_left"/>
             <span class="wode_huobang">我的砍价帮</span>
             <img src="/static/img/home/bargain/icon_right.png" class="icon_right"/>
         </p>
         <div>
            <div class="lovely_son_list">
                <div class="lovely_ear">
                    <img src="/static/img/home/bargain/1.jpg" class="lovely_girl"/>
                    <span class="huoban_name" >倾城小美人</span>
                </div>
                <div class="lovely_ear_right">
                    <img src="/static/img/home/bargain/futou.png" class="futou"/>
                    <span class="love_ear_jiage" ><span></span>砍掉￥2.55元</span>
                </div>
            </div>
            <div class="lovely_son_list">
                <div class="lovely_ear">
                    <img src="/static/img/home/bargain/1.jpg" class="lovely_girl"/>
                    <span class="huoban_name" >倾城小美人</span>
                </div>
                <div class="lovely_ear_right">
                    <img src="/static/img/home/bargain/futou.png" class="futou"/>
                    <span class="love_ear_jiage" ><span></span>砍掉￥2.55元</span>
                </div>
            </div>
            <div class="lovely_son_list">
                <div class="lovely_ear">
                    <img src="/static/img/home/bargain/1.jpg" class="lovely_girl"/>
                    <span class="huoban_name" >倾城小美人</span>
                </div>
                <div class="lovely_ear_right">
                    <img src="/static/img/home/bargain/futou.png" class="futou"/>
                    <span class="love_ear_jiage" ><span></span>砍掉￥2.55元</span>
                </div>
            </div>
           </div> 
       <p class="see_more">查看更多>></p>
       <div class="hot_ear">
           <img src="/static/img/home/bargain/zuobian_icon.png"/>
           <span class="hot_span">热卖专区</span>
           <img src="/static/img/home/bargain/youbian_icon.png"/>
       </div>
       <div class="shop_zhuangqu">
           <div class="shop_e">
                <img src="/static/img/home/bargain/zhutu.png" class="zhutu"/>
                <p class="ipone">[新人专区]手机iPhone手机iPhone手机iPhone</p>
                <p class="zhutu_jiage">￥7000.00</p>
           </div><div class="shop_e">
                <img src="/static/img/home/bargain/zhutu.png" class="zhutu"/>
                <p class="ipone">[新人专区]手机iPhone手机iPhone手机iPhone</p>
                <p class="zhutu_jiage">￥7000.00</p>
           </div><div class="shop_e">
                <img src="/static/img/home/bargain/zhutu.png" class="zhutu"/>
                <p class="ipone">[新人专区]手机iPhone手机iPhone手机iPhone</p>
                <p class="zhutu_jiage">￥7000.00</p>
           </div><div class="shop_e">
                <img src="/static/img/home/bargain/zhutu.png" class="zhutu"/>
                <p class="ipone">[新人专区]手机iPhone手机iPhone手机iPhone</p>
                <p class="zhutu_jiage">￥7000.00</p>
           </div><div class="shop_e">
                <img src="/static/img/home/bargain/zhutu.png" class="zhutu"/>
                <p class="ipone">[新人专区]手机iPhone手机iPhone手机iPhone</p>
                <p class="zhutu_jiage">￥7000.00</p>
           </div>
       </div>
      </div>
   </div>
</div>   
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
    export default {
        name: 'bargain',
        components: {
			headtop,
		},
		data(){
			return {
				
			}
		},
        created(){
			/**头部数据 */
			var head_obj = {
				/**整个head的style */
				head_wrap_style: {
					background: '',
				},
				return_data: {
					icon: '/static/img/left_icon_fff.png',
					/*跳转的路由(可以传参)，为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '砍价详情',
					style: {color:'#fff'}
				},
				right_button: {
					need_model: false,
					/**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
					text: '按钮',
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

			this.$store.commit('change_head',head_obj)

		},
    }
</script>

<style lang="stylus" scoped>
.max_divdiv
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    .div
        width 100%
        height 540px
        background url("/static/img/home/bargain/background_ping.png")
        background-size cover
        background-size 100% 100%
        .touxiang
            width 120px
            height 120px
            border-radius 50%
            margin 0 auto
            position absolute
            left 0
            right 0
            margin 0 auto
            top 100px
        .nickname
            text-align center
            color white
            font-size 27px
            padding-top 228px

        .shop_ear
            position relative
            top 50px
            width 90%
            margin 0 auto

            .niangf
                width 180px
                heigth 180px
            .shop_ear_title
                position absolute
                top 0
                left 230px
                font-size 24px
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical
            .shop_ear_price
                position absolute
                top 90px
                left 230px 
                color rgb(242,16,16)  
                .shop_ear_pricemoney
                    font-size 33px
                .fuhao
                    position absolute
                    left 150px
                    top 10px
                    color gray  
                    text-decoration:line-through;
                    color gray
                    font-size 20px  
            .end_time
                position absolute
                left 230px 
                bottom 0
                font-size 24px
        
        .kangjia_ear
            margin 125px 24px 0 24px
            height 580px
            padding-top 30px
            text-align center
            color #f21010
            font-size 28px
            font-weight bolder
            background rgb(255,239,232)

            .icon_left
                width 220px
                margin 0px 20px 0 30px
            .icon_right
                margin 0px 30px 0 20px
                width 220px        
            .wode_huobang
                padding-top 30px

        .lovely_son_list
            height 150px

            .lovely_ear
                position relative
                left 5px
                top 50px
                width 50%
                display flex
                align-items center
                
                .lovely_girl
                    position absolute
                    left 24px
                    top 3px
                    width 100px
                    height 100px   
                    border-radius 50%
                    vertical-align center     
                .huoban_name
                    position absolute
                    left 149px
                    top 32px
                    color black

            .lovely_ear_right
                position relative
                right 5px
                top 50px
                width 50%
                display flex
                align-items center                  
                .futou    
                    position absolute
                    right -130px
                    top 38px
                    width 45px
                    height 35px   
                    border-radius 50%
                    vertical-align center   
                .love_ear_jiage
                    position absolute
                    right -320px
                    top 36px
                   color #f21010
    .see_more
        color gray
        margin-top 30px
    .hot_ear
        margin-top 60px
        margin-bottom 50px
        .hot_span
            font-size 35px
            color black
    .shop_zhuangqu
        display inline-block
        width 95%

        .shop_e:nth-child(even)  
            width 49% 
            display inline-block
            float right     

            .zhutu
                width 100%
            .ipone
                width 100%
                font-size 30px
                color black 
                background rgb(242,211,191) 
                white-space: nowrap
                height 50px
                line-height 50px
                overflow: hidden
                text-overflow: ellipsis
                border-radius 20px
            .zhutu_jiage
                text-align left
                font-size 40px
                padding 10px 0

        .shop_e:nth-child(odd)  
            width 49% 
            display inline-block
            float left     
            .zhutu
                width 100%
            .ipone
                width 100%
                font-size 30px
                color black 
                background rgb(242,211,191) 
                white-space: nowrap
                height 50px
                line-height 50px
                overflow: hidden
                text-overflow: ellipsis
                border-radius 20px
            .zhutu_jiage
                text-align left
                font-size 40px
                padding 10px 0










</style>
