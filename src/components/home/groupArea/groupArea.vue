<template>
	<div class="group">
		<div class="head">拼团专区</div>
		<Area-Header></Area-Header>
		<div class="content">
			<div class="top_img">
				<img src="static/img/group_area/nav.png" />
			</div>
		</div>

	</div>
</template>

<script>
//	import AreaHeader from '@';
//	exports default {
//		components:{
//	        AreaHeader
//	    }
//	}
</script>

<style lang="stylus" scoped>
	.group
		width: 100%;
		height: 100% 
		.head
			width 100%
			height: 88px;
			background: #ff4d39;
			font-size: 30px;
			color: #fff;
			text-align: center;
			line-height: 88px;
		.content
			margin: 0 auto;
			.top_img
				margin: 10px 24px 25px 24px; 
				width: 702px;
				height: 300px;
				img
					margin: 0 auto;
					display: block;
					max-width: 100%;
			
</style>