<template>
    <div class="max_div">
            <!-- 头部 -->
            <headtop></headtop>
            <div class="huiyuan">
                <p class="id"><span>上级ID:</span><span>123456</span></p>
                <p class="name"><span>上级名称:</span><span>蛋蛋</span></p>
            </div>
			<div :class="sstt_back[index]" v-for="(item,index) in myclube"  :key="index"  @click="tiaozhuan(index)">
				<span :class="sstt[index]">{{item.title}} ></span>
				<div class="back1_num_ear">
					<p class="back1_num">{{item.num}}</p>
					<p class="back1_now">{{item.now}}</p>
				</div>
			</div>
    </div>
</template>

<script>
/**头部 */
	import headtop from '@/components/public/page_top_head'
    export default {
		name: 'mylist',
		data(){
			return {
				sstt:[
					"back1_title",
					"back2_title",
					"back3_title",
					"back4_title"
				    ],
				sstt_back:[
					"back1",
					"back2",
					"back3",
					"back4"
				          ],
				path:[
					'/user/mylist/tuandui_table',
					'/user/mylist/commissionlist',
					'/user/mylist/yejilist',
					'/user/mylist/shouyilist'
					],
				myclube:[
					{	
						title:"团队列表",
						num:8,
						now:"今日新增",
				    },
					{
						title:"佣金列表",
						num:2.88,
						now:"今日收益"
					},
					{
						title:"业绩明细",
						num:99.88,
						now:"今日业绩"
					},
					{
						title:"预计收益",
						num:574.22,
						now:""
					}					
					]
               
			}
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
					name: '我的团队',
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
		 components:{
            headtop
        },
		methods:{

		   tiaozhuan(_index){
			  this.$router.push(this.path[_index])
		   }

		}
    }
</script>

<style lang="stylus" scoped>
.max_div
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background white
    .huiyuan
        padding 120px 0 15px 0
        display table
        margin 0 auto
        .id 
            display inline-block
        .name
            display inline-block
            padding-left 60px
	.back1
		background url("/static/img/user/back1.png")
		background-size 100% 100%
		width 94%
		height 250px
		margin 0 0 15px 3%
		position relative 
		.back1_title
			display inline-block	
			padding 32px 0 0 40px
			color rgb(40,103,142)
			font-size 32px
			font-weight bolder
		.back1_num_ear
			position absolute
			left 50%
			top 50%
			transform translate(-50%,-50%)
			text-align center
			font-size 30px
			font-weight bolder
			.back1_now
				padding-top 20px
	.back2
		background url("/static/img/user/back2.png")
		background-size 100% 100%
		width 94%
		height 250px
		margin 0 0 15px 3%
		position relative 
		.back2_title
			display inline-block	
			padding 32px 0 0 40px
			color rgb(142,74,40)
			font-size 32px
			font-weight bolder
		.back1_num_ear
			position absolute
			left 50%
			top 50%
			transform translate(-50%,-50%)
			text-align center
			font-size 30px
			font-weight bolder
			.back1_now
				padding-top 20px
	.back3
		background url("/static/img/user/back3.png")
		background-size 100% 100%
		width 94%
		height 250px
		margin 0 0 15px 3%
		position relative 
		.back3_title
			display inline-block	
			padding 32px 0 0 40px
			color rgb(142,40,59)
			font-size 32px
			font-weight bolder
		.back1_num_ear
			position absolute
			left 50%
			top 50%
			transform translate(-50%,-50%)
			text-align center
			font-size 30px
			font-weight bolder
			.back1_now
				padding-top 20px
	.back4
		background url("/static/img/user/back4.png")
		background-size 100% 100%
		width 94%
		height 250px
		margin 0 0 15px 3%
		position relative 
		.back4_title
			display inline-block	
			padding 32px 0 0 40px
			color rgb(142,40,98)
			font-size 32px
			font-weight bolder
		.back1_num_ear
			position absolute
			left 50%
			top 50%
			transform translate(-50%,-50%)
			text-align center
			font-size 30px
			font-weight bolder
			.back1_now
				padding-top 20px					
			
				











</style>
