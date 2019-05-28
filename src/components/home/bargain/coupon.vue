<template>
    <div class="coupon_wrap">
        <div class="public_head">
            <headtop></headtop>
        </div>
        <div class="content">
            <div class="paper_wrap">

                <div class="unit">

                </div>

            </div>
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
					background: '#fff',
				},
				return_data: {
					icon: '/static/img/left_icon_555.png',
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
	}
</script>

<style lang="stylus" scoped>
    .coupon_wrap
        width: 100%;
        height: 100%;
        .content
            .paper_wrap
            
                .unit
                    margin: 25px auto 0;
                    width: 95%;
                    height: 210px;
                    background: url("~/static/img/bargain/lose05.png") no-repeat;
					// background-size: 100% 100%;
        
</style>