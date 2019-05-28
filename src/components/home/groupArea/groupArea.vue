<template>
	<div class="group">
		<Area-Header customTitle="拼团专区"></Area-Header>
		<div class="content">
			<div class="top_img">
				<img src="static/img/group_area/nav.png" />
			</div>
			<div class="box_wrap">
				<div class="box">
					<div class="img_wrap">
						<div class="img">
							<img src="static/img/group_area/shop.png" />
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
							<img src="static/img/group_area/shop.png" />
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
							<img src="static/img/group_area/shop.png" />
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
							<img src="static/img/group_area/shop.png" />
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

		</div>

	</div>
	
</template>

<script>
	/**头部 */
	import headtop from '@/components/public/page_top_head'
	export default {
		components: {
			headtop,
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

<style>
	
</style>