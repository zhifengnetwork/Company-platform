<template>
  <div class="home">
	  	<!-- 顶部 -->
	   	<div class="topBar">
			<div class="top">
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
			</div>
		</div>

		<!-- 横向滚动标签栏 -->
		<div class="navTab">
			<van-tabs v-model="active" @click="handleChange"> 
				<van-tab v-for="(item,index) in items" :title="item.label" :key="index">
					<router-view></router-view>
				</van-tab>
			</van-tabs>
		</div>
		
  </div>
</template>

<script>

export default {
	name: 'home',
  	data() {
		return {
			active: 0,
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
		handleChange (index){
			this.$router.replace(this.path[index])
		}
  	}

};
</script>

<style lang="stylus" scoped>
.home
	// 顶部
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
	// 菜单tab
	.navTab
		.van-tabs
			left 0
			top -250px
			color #ffffff
		.van-tabs >>> .van-tabs__nav
			background none
		.van-tabs >>> .van-hairline--top-bottom::after
			border-width 0
		.van-tabs >>> .van-tab
			color #ffffff
			padding 0
		.van-tabs >>> .van-tabs__line
			background-color #ffffff
		.van-tabs >>> .van-tabs__wrap
			height 80px
		.van-tabs >>> .van-tab, .van-tag--large
			font-size 28px
		.van-tabs >>> .van-tab--active
			font-size 30px
		.van-tabs >>> .van-tabs__wrap--scrollable .van-tab
			flex-basis: 17% !important
		.van-tabs >>> .van-tab__pane
			padding 0 25px
			box-sizing border-box	


			


</style>