<template>
	<div class="wrap_app">

		<!--二级页面-->
		<router-view/>
		<!--底部导航-->
		<div class="bottomNavWrap container">
			<!--项，
				1、点击时 font-color：class="bNavYseFontColor";
				2、（未点击时）字体颜色:class="bNavNoFontColor";
			-->
			<div class="bottomNavTerm" v-for="(v,i) in data_nav" :key="i" @click.stop="style_fun(i)">
				<router-link :to="v['url_data']">
					<!--icon box-->
					<p class="bottomNavIconBox">
						<img class="bottomNavIcon" v-show='this_state != i' :src="v['icon'][0]" />
						<img class="bottomNavIcon" v-show='this_state == i' :src="v['icon'][1]" />
					</p>
					<!--title
						1、（点击时）字体颜色:class="bNavYseFontColor";
					-->
					<p class="bottomNavTitle" :class="this_state == i ? 'bNavYseFontColor':'bNavNoFontColor' ">{{v['name']}}</p>
				</router-link>
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
				this_state: 0,
				/*底部导航-数据*/
				data_nav: [
					{	
						name: '首页',
						url_data: '/index/',
						icon:[
							'/static/img/bottomNav/2018100811.png',
							'/static/img/bottomNav/2018100812.png',
						]
					},
					{	
						name: '待定',
						url_data: '/index/',
						icon:[
							'/static/img/bottomNav/2018100821.png',
							'/static/img/bottomNav/2018100822.png',
						]
					},
					{	
						name: '待定',
						url_data: '/index/',
						icon:[
							'/static/img/bottomNav/2018100831.png',
							'/static/img/bottomNav/2018100832.png',
						]
					},
					{	
						name: '我的',
						url_data: '/index/user',
						icon:[
							'/static/img/bottomNav/2018100841.png',
							'/static/img/bottomNav/2018100842.png',
						]
					},
				]
			}
		},
		/*方法*/
		methods: {
			/*底部样式切换*/
			style_fun(_index){
				// console.log(_index);
				this.this_state = _index;
			},
		},
		/*钩子函数*/
		mounted(){
			/**根据当前路由--渲染底部导航 */
			var this_toute = this.$route.path;
			console.log('当前路由:',this_toute);
			for(var i=0;i<this.data_nav.length;i++){
				// console.log(i);
				if(this.data_nav[i]['url_data'] == this_toute){
					this.this_state = i;
				}
			}
		}
		
	}
</script>

<style lang="stylus" scoped>
	.wrap_app 
		padding-bottom: 98px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	
	/*弹性布局*/
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
	
	/*底部导航wrap -s*/
	.bottomNavWrap 
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		padding-top: 3px;
		box-sizing: border-box;
		width: 100%;
		height: 98px;
		font-size: 18px;
		line-height: 18px;
		border-top: 1px solid #ededed;
		background-color: #fff;
	
		/*导航 项*/
		.bottomNavTerm 
			-prefix-box-flex: 1;
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			-moz-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			/*width: 2.5rem;*/
			height: 95px;
		
			/*icon box*/
			.bottomNavIconBox 
				position: relative;
				width: 100%;
				height: 62px;
			
				/*icon box=>icon */
				.bottomNavIcon 
					display: block;
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					margin: auto;
					width: 36px;
					height: 36px;
				
			.bottomNavTitle 
				width: 100%;
				font-size: 20px;
				line-height: 20px;
				letter-spacing: 2px;
				text-align: center;
			
			/*点击时 font-color*/
			.bNavYseFontColor 
				color: #1e82d2;
			
			/*不-点击时 font-color*/
			.bNavNoFontColor 
				color: #cdcdcd;
			
		/*底部导航wrap -e*/
</style>