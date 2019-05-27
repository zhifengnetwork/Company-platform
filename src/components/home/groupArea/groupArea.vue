<template>
	<div class="public_head">
		<headtop></headtop>

		<div class="group">
		
			拼团
		</div>
	</div>
	
</template>

<script>
	/**头部 */
	import headtop from '@/components/public/page_top_head'
	export default {
		components: {
			headtop,
		},
		/*组件实例创建完成，属性已绑定，但DOM还未生成*/
		created: function(){
			/**head=>style */
			var style_obj = {
				head_wrap_style: {
					background: '#ff4d39',
				},
				return_data: {
					icon: '/static/img/left_icon_fff.png',
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
					text: '按钮',
					/**点击按钮-模块显示 */
					show: false,
					url_data: '',
				},
			}
			/**改变vuex对应头部数据 */
			this.$store.commit('change_head',style_obj)

		},
	}
</script>

<style>
	
</style>