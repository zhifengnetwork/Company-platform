<template>
	<div class="wrap_app">
		<!--二级页面-->
		<router-view/>
		<!--底部导航 w: 100%-->
		<div class="bottom_nav_wrap">
			<!-- w: 90% -->
			<div class="bottom_nav_box">
				<!-- 左 -->
				<div class="bottom_nav_box_left">
					<!-- 空出左右间距 -->
					<div class="container bottom_nav_box_left_box">
						<!-- 项 -->
						<router-link tag="div" class="container_trem bottom_nav_box_left_trem_box" v-for="(v,i) in data_nav" :to="v.url_data" :key="i" @click.native="style_fun(i)">
							<p class="bottom_nav_box_left_trem_icon">
								<i class="trem_icon" :class="this_state == i ? 'trem_add_icon':'trem_del_icon' "></i>
							</p>
							<p class="bottom_nav_box_left_trem_text" :class="this_state == i ? 'bottom_nav_box_left_trem_text_yes':'' " >{{v.name}}</p>
							<!-- <p class="bottom_nav_box_left_trem_text" :class="this_state == i ? 'bottom_nav_box_left_trem_text_yes':'' "  v-if="v.text == true">{{v.name}}</p> -->
							<!-- icon -->
							<!-- <i class="member_icon centered" v-if="v.text == false"></i> -->
						</router-link>
					</div>
				</div>
				<!-- 右 (logo) -->
				<div class="bottom_nav_box_right">
					<router-link to="/index/member">
						<i class="member_icon centered"></i>
						<!-- <p class="bottom_nav_box_right_trem_icon">
							<i class="logo_icon"></i>
						</p>
						<p class="bottom_nav_box_right_trem_text"></p> -->
					</router-link>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	
	export default {
		/*存放-底部导航切换-的页面-容器*/
		name: "index",
		data(){
			return {
				/*当前-点击状态*/
				this_state: null,
				/*底部导航-数据（没有分享-模块）*/
				data_nav: [
					{	
						name: '首页',
						url_data: '/index/',
						/**状态切换-通过index */
						/* 是否-show-文字 */
						// text: true,
					},
					{	
						name: '分类',
						url_data: '/index/branchClass',
						// text: false,
					},
					{	
						name: '购物车',
						url_data: '/index/cart',
						// text: true,
					},
					{	
						name: '我的',
						url_data: '/index/user',
						// text: true,
					},
				],
				/**当前四大模块的--路由标识=> 底部的对应style */
				this_sign: ['home','branchClass','cart','user']
			}
		},
		
		/*钩子函数*/
		mounted(){
			/**分享的状态(不在其他模块里) */
			var share_start = true;
			/**根据当前路由--渲染底部导航 */
			var this_toute = this.$route.path;
			for(var i=0;i<this.this_sign.length;i++){
				// console.log(this.this_sign[i], this_toute);
				if(this_toute.indexOf(this.this_sign[i]) != -1 ){
					console.log('当前对应的模板:',this.this_sign[i],'当前路由:',this_toute);
					this.this_state = i;
					share_start = false;
					break;
				}
			}
			/**分享路径 */
			if(share_start){
				this.this_state = null;
			}
		},

		/*方法*/
		methods: {
			/*底部样式切换*/
			style_fun(_index){
				console.log(_index);
				this.this_state = _index;
			},
		},
		
	}
</script>

<style lang="stylus" scoped>
	.wrap_app 
		padding-bottom: 116px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;

		/*弹性布局 */
		.container 
			display: -webkit-box;
			/* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
			display: -moz-box;
			/* Firefox 17- */
			display: -webkit-flex;
			/* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
			display: -moz-flex;
			/* Firefox 18+ */
			display: -ms-flexbox;
			/* IE 10 */
			display: flex;
			/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */

			.container_trem
				-prefix-box-flex: 1;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				-moz-box-flex: 1;
				-ms-flex: 1;
				flex: 1;

		/**底部导航 -s */
		.bottom_nav_wrap 
			position: fixed;
			bottom: 14px;
			left: 0;
			z-index: 9;
			width: 100%;
			height: 98px;

			.bottom_nav_box 
				margin: 0 auto;
				width: 93%;
				height: 100%;

				.bottom_nav_box_left
					float: left; 
					width: 72%;
					height: 100%;
					border-radius: 42px
					border: 2px solid #e6e6e6;
					background-color: #fff;

					.bottom_nav_box_left_box
						margin: 0 auto;
						width: 90%;
						height: 100%
						
						.bottom_nav_box_left_trem_box 
							position: relative;
							width: 100%;
							height: 100%;

							.bottom_nav_box_left_trem_icon
								padding-top: 13px;
								box-sizing: border-box;
								-webkit-box-sizing: border-box;
								-moz-box-sizing: border-box;
								height: 57%;
								// background: red;
							// 未-点击字体-style
							.bottom_nav_box_left_trem_text
								width: 100%;
								height: 43%;
								font-size: 16px;
								line-height 42px;
								text-align: center;
								letter-spacing: 2px;
								color: #7b7b7b;
								// background: red;
							// 点击字体-style
							.bottom_nav_box_left_trem_text_yes
								color: #ff1132;

						// 首页 icon（style）
						.bottom_nav_box_left_trem_box:nth-child(1) .trem_icon 
							display: block;
							margin: 0 auto;
							width: 43px;
							height: 43px;
							background-repeat: no-repeat;
							background-position: 0 0;
							background-size: 100%;

						// 首页 icon (未-点击)
						.bottom_nav_box_left_trem_box:nth-child(1) .trem_del_icon
							background-image: url('/static/img/bottomNav/home_iocn-1.png');

						// 首页 icon(点击)
						.bottom_nav_box_left_trem_box:nth-child(1) .trem_add_icon
							background-image: url('/static/img/bottomNav/home_iocn-2.png');

						// 分类 icon（style）
						.bottom_nav_box_left_trem_box:nth-child(2) .trem_icon
							display: block;
							margin: 0 auto;
							width: 45px;
							height: 45px;
							background-repeat: no-repeat;
							background-position: 0 0;
							background-size: 100%;

						// 分类 icon (未-点击)
						.bottom_nav_box_left_trem_box:nth-child(2) .trem_del_icon
							background-image: url('/static/img/bottomNav/class_icon-1.png');

						// 分类 icon(点击)
						.bottom_nav_box_left_trem_box:nth-child(2) .trem_add_icon
							background-image: url('/static/img/bottomNav/class_icon-2.png');
						
						// 购物车 icon
						.bottom_nav_box_left_trem_box:nth-child(3) .trem_icon
							display: block;
							margin: 0 auto;
							width: 46px;
							height: 43px;
							background-repeat: no-repeat;
							background-position: 0 0;
							background-size: 100%;

						// 购物车 icon (未-点击)
						.bottom_nav_box_left_trem_box:nth-child(3) .trem_del_icon
							background-image: url('/static/img/bottomNav/cart_iocn-1.png');

						// 购物车 icon(点击)
						.bottom_nav_box_left_trem_box:nth-child(3) .trem_add_icon
							background-image: url('/static/img/bottomNav/cart_iocn-2.png');

						// 我的 icon
						.bottom_nav_box_left_trem_box:nth-child(4) .trem_icon
							display: block;
							margin: 0 auto;
							width: 38px;
							height: 43px;
							background-repeat: no-repeat;
							background-position: 0 0;
							background-size: 100%;

						// 购物车 icon (未-点击)
						.bottom_nav_box_left_trem_box:nth-child(4) .trem_del_icon
							background-image: url('/static/img/bottomNav/user_icon-1.png');

						// 购物车 icon(点击)
						.bottom_nav_box_left_trem_box:nth-child(4) .trem_add_icon
							background-image: url('/static/img/bottomNav/user_icon-2.png');

				.bottom_nav_box_right 
					position: relative;
					float: right;
					width: 22%;
					height: 100%;
					border-radius: 42px
					border: 2px solid #e6e6e6;
					background-color: #fff;
					/**会员*/
					.member_icon
						display: block;
						width: 76px;
						height: 76px;
						background-image: url('/static/img/bottomNav/member_icon-1.png');
						background-repeat: no-repeat;
						background-position: 0 0;
						background-size: 100%;

					// .bottom_nav_box_right_trem_icon .logo_icon 
					// 	display: block;
					// 	margin: 0 auto;
					// 	width: 49px;
					// 	height: 43px;
					// 	background-image: url('/static/img/login_icon.png');
					// 	background-repeat: no-repeat;
					// 	background-position: 0 0;
					// 	background-size: 100%;
					
					// .bottom_nav_box_right_trem_text
					// 	width: 100%;
					// 	height: 43%;
					// 	font-size: 16px;
					// 	text-align: center;
					// 	letter-spacing: 3px;
					// 	line-height 42px;
					// 	color: #7b7b7b;

</style>