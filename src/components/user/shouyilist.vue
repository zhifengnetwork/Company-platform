<template>
    <div class="max_div">
            <!-- 头部 -->
            <headtop></headtop>
            <ul class="ul">
                     <li class="li">
                         <span class="user_id">名称/下单ID</span><span class="user_name">订单号</span><span class="user_phone">佣金</span>
                     </li>
                     <li class="li">
                          <span class="user_id">度偶哦都一</span><span class="user_name">￥290000.00</span><span class="user_phone">订单16999业绩</span>
                     </li>
                     <li class="li">
                          <span class="user_id">安啦私家的</span><span class="user_name">￥290000.00</span><span class="user_phone">订单78989业绩</span>
                     </li>
            </ul>
    

    </div>
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
    export default {
		name: 'shouyilist',
		data(){
            return{
                
            }
			
		},
        components:{
            headtop
        },
        created: function(){
			/**head=>style */
			var style_obj = {
				head_wrap_style: {
					background: '#fff',
				},
				return_data: {
					need_model: true,
					icon: '/static/img/public/left_icon_555.png',
					/*跳转的路由(可以传参),为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '预计收益',
					style: {color:'#151515'}
				},
				right_button: {
					need_model: false,
					/**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
					text: '',
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

        },
        methods:{
             


        }
    }
</script>

<style lang="stylus" scoped>
.max_div
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    background white
    .ul
        width 90%
        margin 100px 0 0 5%
        .li
            width 100%
            height 70px
            line-height 70px
            .user_id
                display inline-block
                vertical-align top
                width 30%
                text-align center
                font-size 20px
            .user_name
                display inline-block
                vertical-align top
                width 40%
                text-align center 
                font-size 20px
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap
            .user_phone
                display inline-block
                vertical-align top
                width 30%
                text-align center 
                font-size 20px   
        .li:nth-child(odd)
            background #f3f9ff
        .li:nth-child(even)
            background #ecf4fc   
        .li:first-child  
            background #c6e1ff
            .user_id
                line-height 70px
               
             

        

</style>
