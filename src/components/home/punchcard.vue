<template>
	<div class="max_div">
		
		
         <img  src="../../../static/img/home/punchcard/daka_guize.png" class="daka_guize"/>
         <img  src="../../../static/img/home/punchcard/ren1.png" class="ren1"/>
         <div class="guafeng">
              <span class="guafeng_daka">明天14:00-18:00打卡瓜分奖金池</span>
              <img src="/static/img/home/punchcard/loucen.png" class="loucen"/>
		     </div>
				<div class="bonus_pool">
						<!-- <span class="bonus_pools_left">当前奖池</span> -->
						<div class="bonus_pools_num">
							<span class="number">0</span><span class="number">1</span><span class="number">8</span><span class="number">1</span><span class="number">0</span>
							<p class="join_num">当前已有52222222人参加</p>
						</div>
						<!-- <span class="bonus_pools_right">元</span> -->
				</div>
		 
		 <div class="button_ear">
			  <div class="button_join">
				<img src="../../../static/img/home/punchcard/blind.png" class="button"/>
				<span class="join_one">一块钱参与</span>
			  </div>
			  <div class="button_join1">
				<img src="../../../static/img/home/punchcard/blind.png" class="button"/>
				<span class="join_one1">每日打卡</span>
			  </div>
		 </div>
		 <div class="qiandao_div">
			 <img src="../../../static/img/home/punchcard/qiandao.png" class="qiandao_pic"/>
			 <span class="qiandao_shitian">你已经连续十天签到</span>
		 </div>
		 
		

	</div>
	
</template>

<script>
	
	export default {
		data(){
			return {
				
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
		border 1px solid red
		.bonus_pools_num
			width 400px
			border 1px solid green	
  
			
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
	position relative
	top 600px
	text-align center
	height 25px
	display flex
	align-item center
	justify-content center
	.qiandao_pic
		width 25px
	.qiandao_shitian
		padding-left 24px	
		height 100%
		line-height 23px
		font-size 23px
		color white
		
	

    


   


</style>