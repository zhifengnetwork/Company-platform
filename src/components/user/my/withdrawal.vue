<template>
	<div class="wit_wrap">
		<div class="public_head head">
            <HeadTop></HeadTop>
        </div>
        <div class="content">
			<div class="hd_wrap">
				<div class="back">
                    <div class="k_box">
                        <div class="sum">
                            <span>￥</span><span>10014.52</span>
                        </div>
                        <p class="can">可提现金额</p>
                    </div>
                </div>
				<!-- 提现方式 -->
				<div class="way_wrap">
					<h4>提现方式</h4>
					<!-- 选择方式 -->
					<div class="mode">
						<div class="wechat" v-for="(item,index) in pay" :key="index" @click="cur=index" :class="{on:cur==index}">
							<img :src="item.img"/>
						</div>
					</div>
					<div class="play_wrap">
						<!-- 微信/支付宝-提现金额 -->
						<div class="sum_wrap" v-for="(list,index) in as" :key="index" v-show="cur===index">
							<h4>提现金额</h4>
							<!-- 输入支付宝账号 -->
							<router-link to="/index/user/alipay" v-if="cur===1">
								<div class="fee_wrap">
									<div class="fee">输入支付宝账号</div>
									<div class="unit icon"></div>
								</div>
							</router-link>

							<div class="put">
								<div class="inp">
									<input type="text" placeholder="请输入提现金额"/>
								</div>
								<div class="all_btn">全部提现</div>
							</div>
							<!-- 手续费 -->
							<div class="fee_wrap">
								<div class="fee">
									<span>手续费 ：</span>
									<span>{{list.num}}</span>
								</div>
								<div class="unit">元</div>
							</div>
							<!-- 实际到账 -->
							<div class="fee_wrap">
								<div class="fee">
									<span>实际到账 ：</span>
									<span>{{list.mas}}</span>
								</div>
								<div class="unit">元</div>
							</div>
						</div>

					</div>
				</div>
				<!-- 申请提现按钮 -->
				<div class="apply_btn">申请提现</div>
				<!-- 底图 -->
				<div class="map_wrap">
					<img src="/static/img/public/getinto_share_icon.png"/>
				</div>
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
				pay:[
					{id:1,img:'/static/img/group_area/order/weixi.png'},
					{id:2,img:'/static/img/group_area/order/zfb.png'},
				],
				as:[
					{id:1,num:0,mas:92.20},
					{id:2,num:0,mas:92.20},
				],
                //默认选中第一个
                cur: 0
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
					name: '账户提现',
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
	.wit_wrap
		width 100%
		height 100%
		background #fff
		.head
			border-bottom 1.1px solid #e6e6e6
		.content
			.hd_wrap
				margin 21px 24px 30px
			.back
				padding 90px 0
				width 100%
				background url('/static/img/user/my/bjtu.png') no-repeat
				background-size 100% 100%
			.k_box
				text-align center
				line-height 55px
				.sum
					font-size 40px
					color #fff
				.can
					font-size 26px
					color #ffe1e2
			.way_wrap
				h4
					margin 26px 0 26px
					color #151515
					font-size 26px
					line-height 65px
				.mode
					font-size 0
				.mode img
					margin 0 auto
					display block
					max-width 100%
				.mode .wechat
					margin 0 37px 0 0	
				.mode .wechat,.alipay
					display inline-block
					vertical-align middle
					width 58px
					height 58px
				.mode .on
					width 70px
					height 70px
				.sum_wrap
					.sum_wrap
					.put
						padding 22px 0
						border-bottom 1.1px solid #e6e6e6
					.put .inp,.all_btn
						display inline-block
						vertical-align top
						font-size 24px
						color #151515
					.inp input
						width 560px
						height 45px
						border none
						outline none
						font-size 24px
						color #151515
						.inp input::-webkit-input-placeholder
							font-size 24px
							color #717171
					.all_btn
						float right
						line-height 45px
					.fee_wrap
						padding 22px 0
						line-height 45px
						border-bottom 1.1px solid #e6e6e6
					.fee_wrap .fee,.unit
						display inline-block
						vertical-align top
						font-size 24px
						color #151515
					.unit
						float right
					.icon
						margin 16px 0 0 
						width 8px
						height 14px
						background url('/static/img/user/my/left.png') no-repeat
						background-size 100% 100%
			.apply_btn
				margin 50px auto 45px
				width 702px
				height 80px
				background #ff4902
				border-radius 40px
				font-size 26px
				color #fff
				text-align center
				line-height 80px
				letter-spacing 4px
			.map_wrap
				margin 10px 0 50px
				img
					display block
					margin 0 auto 
					max-width 100%
					border-radius 10px			

</style>