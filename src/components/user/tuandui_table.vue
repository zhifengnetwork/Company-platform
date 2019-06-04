<template>
    <div class="max_div">
            <!-- 头部 -->
            <headtop></headtop>
            <van-tabs v-model="active" class="qiehuang">
            <van-tab title="一级会员">
                 <ul class="ul">
                     <li class="li">
                         <span class="user_id">用户ID</span><span class="user_name">名称</span><span class="user_phone">电话</span><span class="user_order">订单</span>
                     </li>
                     <li class="li">
                          <span class="user_id">789895</span><span class="user_name">冷漠之秋二小姐89</span><span class="user_phone">18488885975</span><router-link class="user_order" :to="{ path:'/user/mylist/lookorder'}">查看</router-link>
                     </li>
                     <li class="li">
                          <span class="user_id">789895</span><span class="user_name">冷漠之秋二小姐89</span><span class="user_phone">18488885975</span><span class="user_order" :to="{ path:'/user/mylist/lookorder'}">查看</span>
                     </li>
                 </ul>
            </van-tab>
            <van-tab title="全部会员">
                        <ul class="ul">
                     <li class="li">
                         <span class="user_id">用户ID</span><span class="user_name">名称</span><span class="user_phone">电话</span><span class="user_order">订单</span>
                     </li>
                     <li class="li">
                          <span class="user_id">7895</span><span class="user_name">冷漠之秋姐89</span><span class="user_phone">13617489565</span><span class="user_order">查看</span>
                     </li>
                     <li class="li">
                          <span class="user_id">7895</span><span class="user_name">冷漠之秋姐8</span><span class="user_phone">14852035987</span><span class="user_order">查看</span>
                     </li>
                 </ul>
            </van-tab>
            </van-tabs> 

  
 

           

    </div>
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
    export default {
		name: 'tuandui_table',
		data(){
            return{
                 active: 0
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
					name: '查看订单',
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
    .van-tabs 
       margin-top 88px
       padding-top 70px
    .van-tabs >>> .van-tabs__wrap   
        height 70px
    .van-tabs >>> .van-tabs__line
        background-color transparent
    .van-tabs >>> .van-tab
        color black
        line-height 70px    
    .van-tabs >>> .van-tab--active 
        color red
    .van-tabs >>> .van-tab
        font-size 25px
    .ul
        width 90%
        margin-left 5%
        .li
            width 100%
            height 50px
            line-height 50px
            .user_id
                display inline-block
                vertical-align top
                width 20%
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
            .user_order
                display inline-block
                vertical-align top
                width 10%
                text-align center 
                font-size 20px
                color black
        .li:nth-child(odd)
            background #f3f9ff
        .li:nth-child(even)
            background #ecf4fc   
        .li:first-child  
            background #c6e1ff  
                       
        
    


        
       
           
    

        

</style>
