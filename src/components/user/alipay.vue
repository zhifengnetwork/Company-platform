<template>
	<div class="alipay_wrap">
		<div class="public_head head">
            <HeadTop></HeadTop>
        </div>
        <div class="content">
			<div class="row_wrap">
				<!-- 支付宝账号 -->
				<div class="name_wrap bor">
					<div class="name">支付宝账号</div>
					<div class="inp_wrap">
						<input type="text" placeholder="请输入支付宝账号"/>
					</div>
				</div>
				<!-- 真实姓名 -->
				<div class="name_wrap">
					<div class="name">真实姓名</div>
					<div class="inp_wrap">
						<input type="text" placeholder="请输入真实姓名"/>
					</div>
				</div>
			</div>
			<!-- 确认按钮 -->
			<div class="submit_btn">确认</div>
			<!-- 底图 -->
			<div class="map_wrap">
				<img src="/static/img/public/getinto_share_icon.png"/>
			</div>
		</div>

	</div>
</template>

<script>
	/**头部 */
	import HeadTop from '@/components/public/page_top_head'
	export default {
		data() {
			return{
                
			}
		},
		components: {
			HeadTop,
		},
		/*组件实例创建完成，属性已绑定，但DOM还未生成*/
		created: function(){
			/**head=>style */
			var style_obj = {
				head_wrap_style: {
					background: '#fff',
				},
				return_data: {
					need_model: true,
					icon: '/static/img/public/left_icon_555.png',
					/*跳转的路由(可以传参),为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '支付宝提现',
					style: {color:'#151515'}
				},
				right_button: {
					need_model: true,
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
		methods: {
             
		}
	}
</script>

<style lang="stylus" scoped>
	.alipay_wrap
		width 100%
		height 100%
		background #fff
		.head
			border-bottom 1.1px solid #e6e6e6
		.content
			.row_wrap
				padding 20px 29px
				margin 15px 24px
				background #fff
				box-shadow 0px 0px 5px 0px #cccccc
				-webkit-box-shadow 0px 0px 5px 0px #cccccc
				border-radius 6px
				.bor
					border-bottom 1.1px solid #e6e6e6
				.name_wrap
					padding 25px 0	
				.name_wrap .name,.inp_wrap
					display inline-block
					vertical-align top
				.name
					width 150px
					font-size 30px
					color #151515
					text-align right
					line-height 65px
				.inp_wrap
					margin-left 45px	
				.inp_wrap input
					width 400px
					border none
					outline none
					font-size 26px
					color #151515
					line-height 65px
				.inp_wrap input::-webkit-input-placeholder
					font-size 24px
					color #a0a0a0
			.submit_btn
				margin 52px auto 70px
				width 702px
				height 88px
				background #ff4902
				border-radius 44px
				color #fff
				font-size 36px
				text-align center
				line-height 88px
				letter-spacing 4px
			.map_wrap
				margin 10px 24px 50px
				img
					display block
					margin 0 auto 
					max-width 100%
					border-radius 10px		

</style>