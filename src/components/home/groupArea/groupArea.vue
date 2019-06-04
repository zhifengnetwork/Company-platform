<template>
<div class="group_wrap">
	<div class="public_head">
		<headtop></headtop>
	</div>
	<div class="group">
		
		<div class="content">
			<div class="top_img">
				<img :src="baImg+areaListImg" />
			</div>
			<div class="box_wrap">
				
				<div class="box" v-for="(list,index) in areaList" :key="index">
					<div class="img_wrap">
						<div class="img">
							<img :src="baImg+list.img" />
						</div>
						<div class="time">{{list.down}}</div>
						<div class="piece">七天爆卖200件</div>
					</div>
					<p class="publicEllipsis">{{list.goods_name}}</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥<span>{{list.price}}</span></div>
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
					<p class="publicEllipsis">青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥<span>99999</span></div>
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
					<p class="publicEllipsis">青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥<span>99999</span></div>
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
					<p class="publicEllipsis">青年说是你发手机话费HHSJG</p>
					<div class="goods_wrap">
						<div class="good_1">
							<div class="num">成团价</div>
							<div class="meoy">￥<span>99999</span></div>
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
		data() {
			return {
				//请求页数
				page:1,
				//banner
				areaListImg:'',
				//渲染列表
				areaList:[],

				baImg:'http://zfwl.zhifengwangluo.c3w.cc/upload/images/'	 
			}
		},
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
					need_model: true,
					icon: '/static/img/public/left_icon_fff.png',
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
			//拼团列表
			this.ajaxArea();
			//拼团倒计时
		  	this.countdowm();
		},
		methods:{
			//拼图列表
			ajaxArea() {
				var url="/Groupon/goods_list";
				var params = new URLSearchParams();
					params.append('page', this.page);
				this.$axios({
					url:url,
					method:'get',
					data:params
				}).then((result)=>{
					this.areaListImg = result.data.data.group_img;   //banner
					this.areaList = result.data.data.list;           //渲染
				}).catch((err)=>{
					console.log(err);
				})
				   
			},
			//拼团倒计时
			countdowm () {
				setInterval( ()=> {
					for (var key in this.areaList) {
						this.$set(
							this.areaList[key],"down",''
						);
						var start = new Date().getTime();
						var end = this.areaList[key].end_time*1000;  //  结束日期
						var differ = end - start;
						var differDate = (Math.floor(differ / 1000 / 60 / 60 / 24));

						var data = new Date(this.areaList[key].start_time*1000);  //开始日期
						var present = new Date(this.areaList[key].end_time*1000);  //结束日期
						if(differDate>7){
							//如果结束日期大于当前日期7天
							this.areaList[key]["down"] = (data.getMonth()+1) + "月" + data.getDate() + "日" + '-' + (present.getMonth()+1) + '月' + present.getDate() + "日";							
						}else{							
							if (differ > 0) {
								var dd = Math.floor(differ / 1000 / 60 / 60 / 24);
								var hh = Math.floor((differ / 1000 / 60 / 60) % 24);
								var mm = Math.floor((differ / 1000 / 60) % 60);
								var ss = Math.floor((differ / 1000) % 60);
							}
							this.areaList[key]["down"] = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
						}
					}
				}, 1000);
			},

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
				width: 702px;
				img
					margin: 0 auto;
					display: block;
					max-width: 100%;
					height: auto;
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
								height: 100%;
						.time
							padding: 0 10px;
							position: absolute;
							top: 0;
							right 0;
							height: 34px;
							background: url("/static/img/group_area/tiem.png") no-repeat;
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
						line-height: 43px;
						border-radius: 50%;
						font-weight: 650;
</style>