<template>
    <div class="top_wrap">
        <div class="public_head head">
            <HeadTop></HeadTop>
        </div>
        <div class="content">
            <div class="col_wrap">

                <div class="inp">
                    <input type="text" placeholder="请输入充值金额"/>
                </div>

                <div class="list_wrap">
                    <ul class="list">
                        <li v-for="(item,index) in payment" :key="index" @click="selectPay(item,index)">
                            <div class="red">￥{{item.jin}}</div>
                            <div class="into">到账{{item.e}}元</div>

                            <div class="hook_wrap" v-if="item.cheack && indexs === index"></div>
                        </li>
                    </ul>
                </div>
                <!-- 充值按钮 -->
                <div class="up_btn">充值金额</div>
                <!-- 底图 -->
                <div class="map_wrap">
                    <img src="/static/img/public/getinto_share_icon.png"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    /**头部 */
	import HeadTop from '@/components/public/page_top_head'
	export default {
        name: 'topUpAmount',
		data() {
			return{
                payment:[
                    {id:1,jin:'50',e:'100',cheack:false},
                    {id:2,jin:'100',e:'150',cheack:false},
                    {id:3,jin:'200',e:'350',cheack:false},
                    {id:4,jin:'500',e:'950',cheack:false},
                    {id:5,jin:'1000',e:'1850',cheack:false},
                    {id:6,jin:'2000',e:'3500',cheack:false},
                ],
			}
		},
		components: {
			HeadTop,
		},
		/*组件实例创建完成，属性已绑定，但DOM还未生成*/
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
					name: '充值金额',
					style: {color:'#151515'}
				},
				right_button: {
					need_model: true,
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
		methods: {
            //选择支付金额
            selectPay(item,index){
                this.indexs = index  
                if(index === this.indexs ){
                    if (item.cheack) {                            
                        item.cheack = false;  
                    } else {
                        for (let i = 0; i < this.payment.length; i++) {
                            this.payment[i].cheack = false;
                        }
                            item.cheack = true;   
                    }
                }
            },
		}
	}
</script>

<style lang="stylus" scoped>
    .top_wrap
        width 100%
        height 100%
        background #fff
        .head
            border-bottom 1.1px solid #e6e6e6
        .content
            .col_wrap
                margin 24px 24px
                .inp
                    margin 0 0 30px
                    padding 26px 0
                    width 100%
                    border-bottom 1.1px solid #e6e6e6
                .inp input
                    padding 0 0 0 15px
                    width 85%
                    border none
                    outline none
                    line-height 55px
                    font-size 26px
                    color #151515
                .inp_wrap input::-webkit-input-placeholder
                    font-size 26px
                    color #717171
                .list_wrap
                    width 100%
                    font-size 0
                .list_wrap .list li
                    position relative
                    margin 0 17px 20px 0
                    display inline-block
                    vertical-align top
                    width 220px
                    height 100px
                    border-radius 6px
                    text-align center
                    border 1.1px solid #ff4902
                    .red
                        margin 15px 0 0
                        font-size 30px
                        font-weight 550
                        color #ff112f
                        line-height 35px
                    .into
                        font-size 26px
                        color #151515
                        line-height 35px
                .hook_wrap
                    position absolute
                    bottom 0
                    right 0
                    width 41px
                    height 31px
                    background url('/static/img/user/my/duigou.png') no-repeat
                    background-size 100% 100%

                .list_wrap .list li:nth-child(3)
                    margin 0 0 20px 0
                .list_wrap .list li:nth-child(6)
                    margin 0 0 20px 0
                .up_btn
                    margin 37px auto 43px
                    width 702px
                    height 80px
                    background #ff4902
                    border-radius 40px
                    color #fff
                    font-size 26px
                    text-align center
                    line-height 80px   
                .map_wrap
                    margin 10px 0 50px
                    img
                        display block
                        margin 0 auto 
                        max-width 100%
                        border-radius 10px    


</style>