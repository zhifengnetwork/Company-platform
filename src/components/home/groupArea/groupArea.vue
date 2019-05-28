<template>
<div class="group_wrap">
	<div class="public_head">
		<headtop></headtop>
	</div>
	<div class="group">
		
		<div class="content">
			<div class="top_img">
				<img src="/static/img/group_area/nav.png" />
			</div>
			<div class="box_wrap">
				<div class="box">
					<div class="img_wrap">
						<div class="img">
							<img src="/static/img/group_area/shop.png" />
						</div>
						<div class="time">5月06日-27日</div>
						<div class="piece">七天爆卖200件</div>
					</div>
					<p>青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥99999</div>
						</div>
						<div class="good_2">马上团购</div>
						<div class="good_3">GO</div>
					</div>
				</div>
				<div class="box">
					<div class="img_wrap">
						<div class="img">
							<img src="/static/img/group_area/shop.png" />
						</div>
						<div class="time">6月06日-27日</div>
						<div class="piece">七天爆卖200件</div>
					</div>
					<p>青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥99999</div>
						</div>
						<div class="good_2">马上团购</div>
						<div class="good_3">GO</div>
					</div>
				</div>
				<div class="box">
					<div class="img_wrap">
						<div class="img">
							<img src="/static/img/group_area/shop.png" />
						</div>
						<div class="time">1天 02:05:04</div>
						<div class="piece">七天爆卖200件</div>
					</div>
					<p>青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥99999</div>
						</div>
						<div class="good_2">马上团购</div>
						<div class="good_3">GO</div>
					</div>
				</div>
				<div class="box">
					<div class="img_wrap">
						<div class="img">
							<img src="/static/img/group_area/shop.png" />
						</div>
						<div class="time">10天 02:05:04</div>
						<div class="piece">七天爆卖200件</div>
					</div>
					<p>青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥99999</div>
						</div>
						<div class="good_2">马上团购</div>
						<div class="good_3">GO</div>
					</div>
				</div>

			</div>
			<pageload></pageload>	

		</div>

	</div>
</div>	
</template>

<script>
	/**头部 */
	import headtop from '@/components/public/page_top_head'
	/**分页加载--style*/
	import pageload from '@/components/public/page_load'
	export default {
		components: {
			headtop,
			pageload,
		},
		/*组件实例创建完成，属性已绑定，但DOM还未生成*/
		created: function(){
			/**head=>style */
			var style_obj = {
				head_wrap_style: {
					background: '#ff4d39',
				},
				return_data: {
					icon: '/static/img/left_icon_fff.png',
					/*跳转的路由(可以传参),为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '拼团专区',
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
			/**改变vuex对应头部数据 */
			this.$store.commit('change_head',style_obj);

		},
	}
</script>

<style lang="stylus" scoped>
	.group
		width: 100%;
		height: 100%
		.content
			margin: 0 auto;
			.top_img
				margin: 10px 24px 25px 24px;
				img
					margin: 0 auto;
					display: block;
					max-width: 100%;
					border-radius: 10px;
			.box_wrap
				padding: 0 0 0 24px;
				.box
					margin-bottom: 10px;
					display: inline-block;
					vertical-align: top;
					width: 346px;
					background: #fff;
					&:nth-child(even)
						margin-left: 10px;
					.img_wrap
						position: relative;
						.img
							width: 346px;
							height: 346px;
							img
								margin: 0 auto;
								display: block;
								max-width: 100%;
						.time
							position: absolute;
							top: 0;
							right 0;
							width: 168px;
							height: 34px;
							background: url("~/static/img/group_area/tiem.png") no-repeat;
							background-size: 100% 100%;
							font-size: 18px;
							color: #fff;
							text-align: center;
							line-height: 34px;
						.piece
							position: absolute;
							bottom: 0;
							left: 0;
							width: 346px;
							height: 26px;
							background: #fd5014;
							font-size: 18px;
							color: #fff;
							text-align: center;
							line-height: 26px;
					p
						margin: 12px 0 17px;
						padding: 0 11px;
						font-size: 24px;
						color: #151515;
						line-height: 35px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					.goods_wrap
						padding: 0 0 20px 11px;
						width: 346px;
						font-size: 0;
					.goods_wrap .good_1,.good_2,.good_3
						display: inline-block;
						vertical-align: middle;
					.good_1
						font-size: 18px;
						color: #fff;
						text-align: center;
						.num
							width: 92px;
							height: 29px;
							background-color: #fd142f;
							border-radius: 4px;
							line-height: 29px;
						.meoy
							font-size: 30px;
							color: #fd5014;
							line-height: 55px;
					.good_2
						margin: 0 25px 0 35px;
						font-size: 24px;
						color: #212121;
					.good_3
						width: 40px;
						height: 40px;
						background: #fd142f;
						font-size: 16px;
						color: #fff;
						text-align: center;
						line-height: 40px;
						border-radius: 50%;
</style>