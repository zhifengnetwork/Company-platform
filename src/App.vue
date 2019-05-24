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
	* {
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent;
	}
	html,body,div,p,span,i,input,button,textarea,em,h1,h2,h3,h4,h5,h6,a,form,dl,dt,dd,img {
		margin: 0;
		padding: 0;
	}
  a { text-decoration:none }
	#app {
	  width: 750px;
	  height: auto;
	  overflow-x: hidden;
	}
</style>
