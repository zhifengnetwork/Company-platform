<template>
    <div class="coupon_wrap">
        <div class="public_head">
            <headtop></headtop>
        </div>
        <div class="content">
            <div class="paper_wrap">

                <div class="unit" v-for="(item,index) in coupon" :key="index">
					<!-- <input type="checkbox"/> -->
					<div class="inp" @click="selectPay(item,index)" v-show="$store.state['top_head_data']['right_button']['show']">
						<img class="cheack" src="/static/img/group_area/order/gou.png" alt="" v-if="item.cheack" />
					</div>
					
					<div class="left_cost">
						<div class="minus ">
							<span class="mi">{{item.pri}}</span>
							<span class="nit">元</span>
						</div>
						<p class="nus">满{{item.main}}减{{item.pri}}元</p>
					</div>

					<div class="right_shop">
						<div class="tit">商品优惠劵</div>
						<div class="life">
							<span>有效期：</span>
							<span>{{item.time}}</span>
						</div>
						<a class="btn">去使用</a>
					</div>

                </div>

				<!-- <div class="unit">
					<input class="inp" type="checkbox"/>
					<div class="left_cost">
						<div class="minus">
							<span class="mi">200</span>
							<span class="nit">元</span>
						</div>
						<p class="nus">满1000减200元</p>
					</div>
					<div class="right_shop">
						<div class="tit">商品优惠劵</div>
						<div class="life">
							<span>有效期：</span>
							<span>2019.05.10-2019.05.20</span>
						</div>
						<a class="btn">去使用</a>
					</div>
                </div>

				<div class="unit two">
					<input class="inp" type="checkbox"/>
					<div class="left_cost">
						<div class="minus">
							<span class="mi">300</span>
							<span class="nit">元</span>
						</div>
						<p class="nus">满1000减300元</p>
					</div>
					<div class="right_shop">
						<div class="tit">新人专享</div>
						<div class="life">
							<span>有效期：</span>
							<span>2019.05.10-2019.05.20</span>
						</div>
						<a class="btn">去使用</a>
					</div>
                </div>

				<div class="unit">
					<input class="inp" type="checkbox"/>
					<div class="left_cost">
						<div class="minus">
							<span class="mi">200</span>
							<span class="nit">元</span>
						</div>
						<p class="nus">满1000减200元</p>
					</div>
					<div class="right_shop padd">
						<div class="tit">商品优惠劵</div>
						<div class="life">
							<span>有效期：</span>
							<span>2019.05.10-2019.05.20</span>
						</div>

						<div class="status">
							<img src="/static/img/bargain/use.png" />
						</div>

					</div>
                </div>

				<div class="unit three">
					<input class="inp" type="checkbox"/>
					<div class="left_cost">
						<div class="minus">
							<span class="mi">300</span>
							<span class="nit">元</span>
						</div>
						<p class="nus">满1000减300元</p>
					</div>
					<div class="right_shop padd">
						<div class="tit">新人专享</div>
						<div class="life">
							<span>有效期：</span>
							<span>2019.05.10-2019.05.20</span>
						</div>

						<div class="status">
							<img src="/static/img/bargain/lose.png" />
						</div>

					</div>
                </div> -->
				<!-- 删除按钮 -->
				<div class="remove_btn" @click="delCoupon" v-show="$store.state['top_head_data']['right_button']['show']">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
	/**头部 */
	import headtop from '@/components/public/page_top_head'
	import { Dialog } from 'vant';
	export default {
		data() {
			return{
                coupon:[
					{id:1,name:'sadsadsa',cheack:false,time:'2019.05.20-2020-05.20',pri:5,main:100,},
					{id:2,name:'sadsads撒旦撒撒旦是a',cheack:false,time:'2019.05.20-2020-05.21',pri:200,main:1000,},
					{id:3,name:3,cheack:false,time:'2019.05.20-2020-05.21',pri:300,main:1000,}
				],
				indexx:[]
				 
			}
		},
		components: {
			headtop,
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
					name: '优惠券',
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
						class: 'sha',
						icon_url: '/static/img/bargain/del.png',
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
			delCoupon(){
				Dialog.confirm({
					message: '您确定要删除吗？',
					cancelButtonColor: '#777777',
					confirmButtonColor: '#ff112f'
				}).then(() => {
					for(var i = this.coupon.length-1; i>=0;i--){
						var item = this.coupon[i]
						console.log(item.cheack)
						if(item.cheack === true){
							var index = this.coupon.indexOf(item)			
							this.coupon.splice(index,1)
					 	}	 
					}
				//  this.coupon.splice(index)
				}).catch(() => {
				// on cancel
				})
			},
			selectPay(item,index){
				this.indexs = index  
				if(item.cheack) {
					item.cheack = false; 
				} else {
					item.cheack = true;
				}	
           	},
		}
	}
</script>

<style lang="stylus" scoped>
    .coupon_wrap
        width 100%
        height 100%
		.content
			padding 0 0 88px 0
			.paper_wrap
				margin 25px 0 0
				.unit
					position relative
					margin 0 auto 12px
					width 95%
					height 222px
					box-shadow: 0px 0px 7px 0px rgba(208, 208, 208, 0.69)
					-webkit-box-shadow: 0px 0px 7px 0px rgba(208, 208, 208, 0.69)
					background url("/static/img/bargain/lase02.png") no-repeat
					background-size 100% 100%
					font-size 0
					.unit .inp,.left_cost,.right_shop
						display inline-block
						vertical-align top
					.left_cost
						width 37%
						color #fff
						text-align center
						font-family PingFang-SC-Bold
						.minus
							.mi
								width 62px
								height 88px
								font-size 105px
							.nit
								font-size 30px
						.nus
							font-size 30px
			 
					.inp
						position absolute
						top 90px
						left -18px
						width 38px
						height 38px
						border 1.1px solid #545454
						border-radius 50%
						.cheack
							display block
							margin 10px 0 0 6px
							width 25px
							height 18px
					.right_shop
						margin 10px 0 0 20px
						width 60%
						.tit
							font-size 30px
							color #383838
							line-height 65px
						.life
							font-size 24px
							color #383838
							line-height 45px
						.btn
							margin 10px 0 0
							display block
							width 366px
							height 50px
							background #ff5f58
							border-radius 5px
							color #fff
							font-size 24px
							text-align: center;
							line-height: 50px;
					.padd
						padding 80px 0 0
					.status
						position absolute
						top 15px
						right 26px
						width 121px
						height 121px
						img
							display block
							max-width 100%			
				.two
					background url("/static/img/bargain/lase01.png") no-repeat
					background-size 100% 100%
				.three
					background url("/static/img/bargain/lase03.png") no-repeat
					background-size 100% 100%					
			.remove_btn
				position fixed
				bottom 0
				left 0
				width 100%
				height 88px
				background #fd231a
				color #fff
				font-size 30px
				text-align center
				line-height 88px
				letter-spacing 5px	
</style>