<template>
<div class="maxmax_div">
    <!-- 头部 -->
    <headtop></headtop>
    <div>
        <!-- 黄色区块 -->
        <div class="huangse">          
          <p class="puls_title">PULS会员</p>
          <p class="tequan">开通PULS会员享有以下特权</p> 
          <div class="pic_ear">
               <span class="pic_fir">
                     <img src="/static/img/home/memberarea/zhu.png" class="zhu" /> 
                     <p class="shengqian">购物省钱</p>     
               </span>
               <span class="pic_sec">
                     <img src="/static/img/home/memberarea/jia.png" class="jia" />     
               </span> 
               <span class="pic_fir">
                     <img src="/static/img/home/memberarea/qian.png" class="zhu" /> 
                     <p class="shengqian">分享赚钱</p>     
               </span>
               <span class="pic_sec">
                     <img src="/static/img/home/memberarea/jia.png" class="jia" />     
               </span>
                <span class="pic_fir">
                     <img src="/static/img/home/memberarea/jiangli.png" class="zhu" /> 
                     <p class="shengqian">邀请奖励</p>     
               </span>
               <span class="pic_sec">
                     <img src="/static/img/home/memberarea/jia.png" class="jia" />     
               </span>
               <span class="pic_fir">
                     <img src="/static/img/home/memberarea/shengji.png" class="zhu" /> 
                     <p class="shengqian">升级享更多权益</p>     
               </span> 
          </div>
        </div>
         <!-- 按钮 -->
        <div class="button">升级PLUS会员</div>
         <div class="hot_ear">
            <img src="/static/img/home/memberarea/zuo_pic.png" class="zuo_pic"/>
            <span class="hot_span">购买以下商品可升级会员</span>
            <img src="/static/img/home/memberarea/youbian_pic.png" class="youbian_pic"/>
        </div>
        <!-- 商品区域 -->
        <div class="shop_ear">
             <!-- style="margin-left:30px;background: #ffecca;"   -->
            <div class="shop">
                 <img src="/static/img/home/memberarea/1.jpg" class="tou"/>
                 <p class="shop_title">自然堂化妆品补水防晒虎虎生风副书记粉红色好看的撒几何</p>
                 <p class="shop_dec">颜色：红色 黄色</p>
                 <div class="shop_puls"><p class="shop_puls_son">下单即送199PLUS会员</p></div>
                 <div class="shop_kucun">
                     <p class="left">
                         <span class="shop_jiage">￥360.00</span>
                         <br/>
                         <span>已下单10万+件</span>
                     </p>
                     <p class="qixiadang_button">去下单 ></p>    
                 </div>
            </div>
             <div class="shop">
                 <img src="/static/img/home/memberarea/1.jpg" class="tou"/>
                 <p class="shop_title">自然堂化妆品补水防晒虎虎生风副书记粉红色好看的撒几何</p>
                 <p class="shop_dec">颜色：红色 黄色</p>
                  <div class="shop_puls"><p class="shop_puls_son">下单即送199PLUS会员</p></div>
                 <div class="shop_kucun">
                     <p class="left">
                         <span class="shop_jiage">￥360.00</span>
                         <br/>
                         <span>已下单10万+件</span>
                     </p>
                     <p class="qixiadang_button">去下单 ></p>    
                 </div>
            </div>
             <div class="shop">
                 <img src="/static/img/home/memberarea/1.jpg" class="tou"/>
                 <p class="shop_title">自然堂化妆品补水防晒虎虎生风副书记粉红色好看的撒几何</p>
                 <p class="shop_dec">颜色：红色 黄色</p>
                  <div class="shop_puls"><p class="shop_puls_son">下单即送199PLUS会员</p></div>
                 <div class="shop_kucun">
                     <p class="left">
                         <span class="shop_jiage">￥360.00</span>
                         <br/>
                         <span>已下单10万+件</span>
                     </p>
                     <p class="qixiadang_button">去下单 ></p>    
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
        name: 'memberarea',
        components: {
			headtop
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
					background: 'rgb(231,175,23)',
				},
				return_data: {
					icon: '/static/img/left_icon_fff.png',
					/*跳转的路由(可以传参)，为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '会员专区',
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
        mounted(){
       
        },
        methods:{
            

        }
    }
   
  
</script>

<style lang="stylus" scoped>
.maxmax_div
    position absolute!import
    top 0
    bottom 0
    left 0
    right 0
    background rgb(248,248,248)
    .huangse
        width 94%
        margin 130px 0 0 3%
        background rgb(255,242,219)
        border-radius 20px
        .puls_title
            width 100%
            text-align center
            font-size 38px
            padding 15px 0
        .tequan
            width 70%
            height 80px
            line-height 80px
            margin-left 15%
            background rgb(255,236,202)
            text-align center
            border-radius 35px
            color rgb(211,102,22)
        .pic_ear
            text-align center    
            .pic_fir
                display inline-block
                vertical-align top
                width 15%
                height 160px
                text-align center    
                .zhu
                    width 40px
                    height 40px
                    padding-top 35px
                .shengqian
                    font-size 23px  
                    padding-top 4px
                    color #d36616  
            .pic_sec
                display inline-block
                vertical-align top
                width 8%
                height 160px
                line-height 160px
                text-align center
                .jia
                    width 23px
    .button
        width 94%
        height 100px
        line-height 100px
        background rgb(241,201,29)
        border-radius 60px
        margin 60px 3% 0 3%
        text-align center
        color white
        font-size 28px
    .hot_ear
        width 100%
        text-align center
        margin 40px auto
        .zuo_pic 
            height 14px
        .youbian_pic
            height 14px    
        .hot_span
            font-size 29px
            color black
            padding 0 20px
    .shop_ear
        width 90%
        margin-left 3%
        .shop 
            width 100%
            position relative
            padding 15px 15px
            background white
            border-radius 10px
            margin-top 15px
            border 1px solid rgb(230,230,230)
            height 274px

            .tou
                width 270px
                display inline-block
                border-radius 10px
                float left
            .shop_title
                float right
                width 5.2rem
                display inline-block
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical
            .shop_dec
                float right
                width 5.2rem
                display inline-block
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical
                padding-top 8px
                // margin-top -200px
                color rgb(140,140,140)
            .shop_puls
                float left
                padding-top 10px
                height 60px
                padding-left 10px
                .shop_puls_son 
                    color: #d36616;
                    height 50px
                    line-height 50px
                    text-align center
                    border-radius 20px    
                    background #ffecca
                    padding 0 12px
            .shop_kucun
                float left
                width 240px
                height 50px
                border-radius 20px
                .left
                    display inline-block
                    padding-left 7px
                    .shop_jiage
                        color red
                        font-size 32px
                        font-weight bolder
                .qixiadang_button
                    display inline-block
                    color white
                    width 130px
                    height 50px
                    line-height 50px
                    background red
                    position absolute
                    right 15px
                    top 230px
                    text-align center
                    border-radius 15px
        .shop:last-child
            margin-bottom 60px
                        

                    
                    
               


</style>
