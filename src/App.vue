<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

	.van-dialog{
			border-radius:25px
	}

	.van-dialog .van-button {
			border: 2px solid #ebedf0;
	}
  
	* {
		/*ios 按住出现阴影*/
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent;
	}
	html,body,div,p,span,i,input,button,textarea,em,h1,h2,h3,h4,h5,h6,a,form,dl,dt,dd,img {
		margin: 0;
		padding: 0;
	}
	
  a { text-decoration:none }
	body {
		background-color: #f7f7f7;
	}
	
	#app {
	  width: 100%;
	  height: auto;
	  overflow-x: hidden;
		
	}

	/* 引入公共头部 */
	.public_head {
		padding-top: 88px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		width: 100%;
		height: auto;
	}

	/*清除浮动代码 '父元素'*/
	.clearfloat:after{
		display: block;
		clear: both;
		content:" ";
		visibility: hidden;
		height: 0;
	}
	.clearfloat {
		zoom: 1;
	}
	/*去除ios默认样式*/
	input button {
		/*IOS*/
		-webkit-appearance: none; 
		background: none;
		border: none;
		outline: none;
	}
	/*public 省略号*/
	.publicEllipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	/*居中*/
	.centered {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		margin: auto;
	}

	/*省略号 2行  */
	.apostrophe{
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	 
</style>
