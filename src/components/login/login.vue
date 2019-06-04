<template>
	<div>登陆模块</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			console.log(789);
			/*axios=>请求 -s*/
			this.$axios.post("/Puls/puls_goods",{})
				.then((res)=>{
                	console.log('成功');
				})
				.catch((error) => {
					alert('页面请求失败：'+error);
					console.log(error);
				})
			
			/*axios=>请求 -e*/
		},
	}
</script>

<style>
</style>