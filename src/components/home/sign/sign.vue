<template>
	<div class="max_div">
		
		 <headtop></headtop>
         <img  src="/static/img/home/punchcard/daka_guize.png" class="daka_guize"/>
         <img  src="/static/img/home/punchcard/ren1.png" class="ren1"/>
         <div class="guafeng">
              <span class="guafeng_daka">明天14:00-18:00打卡瓜分奖金池</span>
              <img src="/static/img/home/punchcard/loucen.png" class="loucen"/>
		     </div>
				<div class="bonus_pool">
						<!-- <span class="bonus_pools_left">当前奖池</span> -->
						<div class="bonus_pools_num">
							<span class="number">0</span><span class="number">1</span><span class="number">8</span><span class="number">1</span><span class="number">0</span>
						</div>
						<!-- <span class="bonus_pools_right">元</span> -->
				</div>
		<p class="join_num">当前已有52222222人参加</p>
		 
		 <div class="button_ear">
			  <div class="button_join">
				<img src="/static/img/home/punchcard/blind.png" class="button"/>
				<span class="join_one">一块钱参与</span>
			  </div>
			  <div class="button_join1">
				<img src="/static/img/home/punchcard/blind.png" class="button"/>
				<span class="join_one1" @click="dika">每日打卡</span>
			  </div>
		 </div>
		 <div class="poup" v-show="poup">
			 <img src="/static/img/home/punchcard/yanhua.png" class="yanhua"/>
			 <img src="/static/img/home/punchcard/x.png" class="x" @click="x"/>
             <p class="p1">请在14:00-18:00打卡瓜分</p>
			 <p class="p2">01:03:20</p>
			 <p class="p3">打卡倒计时</p>
			 <p class="p4">已1000人打卡成功</p>
			 <p class="p5" @click="sure">确定打卡</p>
		 </div>
		 <div class="poup" v-show="poup1">
			 <img src="/static/img/home/punchcard/yanhua.png" class="yanhua"/>
			 <img src="/static/img/home/punchcard/x.png" class="x" @click="xx"/>
             <p class="p1">请在14:00-18:00打卡瓜分</p>
			 <p class="p2">010810</p>
			 <p class="p3">继续参与打卡</p>
			 <p class="p4">已1000人打卡成功</p>
			 <p class="p55">未打卡</p>
		 </div>
		 
		 <div class="qiandao_div">
			 <img src="/static/img/home/punchcard/qiandao.png" class="qiandao_pic"/>
			 <span class="qiandao_shitian">你已经连续十天签到</span>
		 </div>
		 
		 
		

	</div>
	
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
	
	export default {
		name:"sign",
		components: {
			headtop,
		},
		data(){
			return {

				poup:false,
				poup1:false


				
				
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
					need_model: true,
					icon: '/static/img/public/left_icon_fff.png',
					/*跳转的路由(可以传参)，为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '每日打卡',
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
		methods:{

			dika:function(){
				this.poup=true
			},
			x:function(){
				this.poup=false
			},
			xx:function(){
				this.poup1=false
			},
			sure:function(){	
				this.$axios({
					method: 'post',
					url: '/api/clock/old_join_clock',
					data: {
						
					}
					}).then((res) => {
						console.log(res)
					}).catch((err) => {
                     console.log(err) //错误信息
                      })

			}




		}
	}
</script>

<style lang="stylus" scope>
.max_div
	position absolute
	left 0
	top  0
	bottom 0
	right 0
	background:url("/static/img/home/punchcard/background.png")
	width 100%
	background-size 100% 100%

	.daka_guize
		position absolute!important
		right 28px!important
		top 90px!important
		width 100px!important
		height 100px!important

	.ren1
		position absolute!important
		right 0!important
		left 0!important
		margin 0 auto!important
		top 0!important
		width 680px!important
		height 550px!important

	.guafeng
		position absolute
		top 430px
		left 0
		right 0
		margin 0 auto
		width 670px
		height 62px
		color white
		font-size 29px
		display flex
		justify-content center
		align-items center

		.guafeng_daka 
			padding 0 10px

		.loucen
			width 62px

	.bonus_pool
		position relative
		left 0
		right 0
		top 500px
		margin 0 auto	
		width:580px
		height 118px
		line-height 120px
		text-align center
		color white
		font-size 25px
		.bonus_pools_num
			width 100%
			margin 0 auto
			position relative
      
    .bonus_pools_num:before
			content "每日奖池"
			display inline-block
			position absolute
			left .3rem

		.bonus_pools_num:after
			content "天"
			display inline-block
			position absolute
			right 1.5rem
		.number 
			background white
			margin-right 4px
			padding .25rem .2rem
			color rgb(255,73,2)
			font-size 38px
			border-radius .06rem	
	.join_num
		position absolute
		left 50%
		transform translate(-50%,0)
		top 620px
		color white
		font-size 22px
		
	.poup
		position relative
		left 0
		right 0
		top 407px
		margin 0 auto
		width 680px	
		height 400px
		border-radius .1rem
		background-color  white
		z-index 9
		
		.yanhua
			position absolute
			top -70px
			width 100%
		.x
			position absolute
			top 12px
			right 14px
			width 42px	
		.p1
			text-align center
			padding-top 40px
			font-size 30px
			font-weight bolder
		.p2	
			text-align center
			color rgb(255,21,21)
			font-size 40px
			padding-top 16px
		.p3
			text-align center
			font-size 25px
			padding-top 8px

		.p4	
			text-align center
			padding-top 20px
			color rgb(80,80,80)
        .p5
			
			width 250px
			height 80px
			line-height 80px
			margin 0 auto
			color white
			border-radius 17px
			background rgb(255,73,2)
			text-align center
			font-size 30px
			margin-top 34px

	.poup1
		position relative
		left 0
		right 0
		top 407px
		margin 0 auto
		width 680px	
		height 400px
		border-radius .1rem
		background-color  white
		z-index 9
		
		.yanhua
			position absolute
			top -70px
			width 100%
		.x
			position absolute
			top 12px
			right 14px
			width 42px	
		.p1
			text-align center
			padding-top 40px
			font-size 30px
			font-weight bolder
		.p2	
			text-align center
			color rgb(255,21,21)
			font-size 40px
			padding-top 16px
		.p3
			text-align center
			font-size 25px
			padding-top 8px

		.p4	
			text-align center
			padding-top 20px
			color rgb(80,80,80)
        .p55
			
			width 250px
			height 80px
			line-height 80px
			margin 0 auto
			color rgb(198,195,194)
			border-radius 17px
			background rgb(148,132,126)
			text-align center
			font-size 30px
			margin-top 34px


	.button_ear
		position relative
		top 570px

		.button_join 
			position relative
			width 35%
			display inline-block

			.button 
				width 100%
				margin-left 35%

			.join_one
				display inline-block
				width 100%
				position absolute
				left 35%
				top 22px
				text-align center
				font-size 28px
				color rgb(255,21,21)
				font-weight bolder
		.button_join1 
			position relative
			width 35%
			display inline-block

			.button 
				width 100%
				margin-left 50%

			.join_one1
				display inline-block
				width 100%
				position absolute
				left 50%
				top 22px
				text-align center
				font-size 28px
				color rgb(255,21,21)
				font-weight bolder
.qiandao_div
	position absolute
	top 820px
	left 0
	right 0
	margin 0 auto
	height 25px
	display flex
	align-item center
	justify-content center
	z-index 1
	.qiandao_pic
		width 25px
		
	.qiandao_shitian
		padding 4px 0 0 24px	
		height 100%
		line-height 23px
		font-size 23px
		color white
		
	

    


   


</style>