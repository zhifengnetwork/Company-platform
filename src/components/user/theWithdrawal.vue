<template>
	<div class="tx_wrap">
		<div class="public_head head">
            <HeadTop></HeadTop>
        </div>
		<div class="content">
			<div class="bd_wrap">
				<div class="title_wrap">
					<ul>
						<li>申请日期</li>
						<li>金额</li>
						<li>手续费</li>
						<li>审核状态</li>
					</ul>
				</div>
				<div class="list_wrap">
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="state">审核成功</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="status">审核失败</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="state">审核成功</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="status">审核失败</li>
					</ul>
				</div>
			</div>
			<!--  -->
			<p class="none">没有数据哦~~</p>
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
					name: '提现明细',
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
	.tx_wrap
		width 100%
		height 100%
		background #fff
		.head
			border-bottom 1.1px solid #e6e6e6
		.content
			margin 20px 24px
			.bd_wrap
				color #151515
				.title_wrap
					background #ffd7c7
					font-size 0
				.title_wrap ul li
					display inline-block
					width 25%
					font-size 26px
					font-weight 550
					text-align center
					line-height 75px
				.list_wrap
					background #fff4f0
					font-size 0
				.list_wrap ul li
					display inline-block
					width 25%
					font-size 18px
					text-align center
					line-height 65px
				.list_wrap ul:nth-child(even)
					background #ffede7	
				.state
					color #f70a0a
				.status
					color #12eb22
		.none
			margin 20px 0 0	
			font-size 20px
			color #909090
			text-align center
			line-height 75px					

</style>