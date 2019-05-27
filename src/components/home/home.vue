<template>
  <div class="home">
	    <!-- 头部组件 -->
        <TopHeader custom-title="首页" custom-fixed></TopHeader>

	  	<div class="topBar">
			  <!-- <div class="top">
				  	<div class="logo">
						<img src="static/img/home/logo-zf.png" />
					</div>
					<div class="search">
						<span class="logo-sm">
							<img src="static/img/home/zf.png" />
						</span>
						<span class="search-icon">
							<img src="static/img/home/search-icon-home.png" />
						</span>
						<span class="search-text">搜索</span>
					</div>
					<div class="categoryBtn">
						<img src="static/img/home/categoryBtn-icon.png" >
					</div>
			  </div> -->
		</div>
	  	<!-- <ly-tab
			v-model="selectedId"
			:items="items"
			:options="options"
			@change="handleChange">
		</ly-tab> -->
		<router-view></router-view>
  </div>
</template>

<script>

// import Vue from 'vue'
// import LyTab from 'ly-tab'
// Vue.use(LyTab)

import TopHeader from "@/components/common/header/TopHeader"
export default {
	name: 'home',
  	data() {
		return {
			selectedId: 0,
			items: [
				{label: '精选'},
				{label: '9.9包邮'},
				{label: '男装'},
				{label: '女装'},
				{label: '家纺家居'},
				{label: '电器'}
			],
			options: {
				activeColor: '#ffffff'
			},
			path: [
				'/index/home/choice', 
				'/index/home/guarantees', 
				'/index/home/male', 
				'/index/home/female', 
				'/index/home/homeTextile', 
				'/index/home/appliances'
			]
		}
	},
	methods: {
		handleChange (item, index) {
			console.log(item, index)
			this.$router.replace(this.path[index])
		}
  	},
	components:{
		TopHeader
	},
};
</script>

<style lang="stylus" scoped>
.home
	.topBar
		width 100%
		height 357px
		background url("~/static/img/home/topBar-bg.png") no-repeat 
		background-size cover
		.top
			width 100%
			height 110px
			padding 0 25px
			box-sizing border-box
			display flex
			align-items center
			justify-content space-between
			.logo
				width 157px
				height 33px
				margin-right 25px
				img
					width 100%
			.search
				flex 1
				height 50px
				border-radius 20px
				background-color #fff
				display flex
				align-items center
				color #828282
				font-size 24px
				padding 0 18px
				box-sizing border-box
				.logo-sm
					width 38px
					height 22px
					display inline-block
					border-right 1px solid #828282
					padding-right 10px
					img 
						width 100%
						display block
				.search-icon
					width 25px
					height 25px
					display inline-block
					padding 0 10px
					img 
						width 100%
						display block
				.search-text
					color #828282
			.categoryBtn
				width 43px
				height 43px
				margin-left 28px
				img 
					width 100%
	.ly-tab
		position absolute
		left 0
		top 100px
		color #ffffff
	.ly-tab >>>	.ly-tabbar
		background none
		border-bottom none
		// box-shadow none
			


</style>