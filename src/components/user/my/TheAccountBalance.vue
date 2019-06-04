<template>
	<div class="acc_wrap">
		<div class="public_head head">
            <Headtop></Headtop>
        </div>
        <div class="content">
            <div class="the_wrap">
                <div class="back">
                    <div class="left_box">
                        <div class="sum">
                            <span>￥</span><span>10014.52</span>
                        </div>
                        <p class="can">可提现金额</p>
                    </div>
                    <div class="right_box">
                        <div class="sum">
                            <span>￥</span><span>10014.52</span>
                        </div>
                        <p class="can">可消费金额</p>
                    </div>
                </div>
                <!-- 充值、提现按钮 -->
                <div class="btn_wrap">
                    <!-- 充值 -->
                    <router-link to="/index/user/topUpAmount">
                        <div class="top-up">充值金额</div>
                    </router-link>
                    <!-- 提现 -->
                    <router-link to="/index/user/withdrawal">
                        <div class="draw">提现</div>
                    </router-link>    
                </div>
                <p class="pour">注：可消费金额仅限购物，不可提现</p>
                <!-- 明细 -->
                <div class="detail_wrap">
                    <!-- 提现 -->
                    <router-link to="/index/user/theWithdrawal">
                        <div class="dep">
                            <div class="the">提现明细</div>
                            <div class="icon"></div>
                        </div>
                    </router-link>
                    <!-- 充值 -->
                    <router-link to="/index/user/topUpDetail">
                        <div class="dep">
                            <div class="the">充值明细</div>
                            <div class="icon"></div>
                        </div>
                    </router-link>    
                    <!-- 账单 -->
                    <router-link to="/index/user/billingDetails">
                        <div class="dep">
                            <div class="the">账单明细</div>
                            <div class="icon"></div>
                        </div>
                    </router-link>    
                </div>
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
	import Headtop from '@/components/public/page_top_head'
	export default {
		data() {
			return{
                
			}
		},
		components: {
			Headtop,
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
					name: '账户余额',
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
		}
	}
</script>

<style lang="stylus" scoped>
    .acc_wrap
        width 100%
        height 100%
        background #fff
        .head
            border-bottom 1.1px solid #e6e6e6
        .content
            .the_wrap
                margin 22px 24px
                .back
                    padding 90px 0
                    width 100%
                    background url('/static/img/user/my/bjtu.png') no-repeat
                    background-size 100% 100%
                    font-size 0
                .back .left_box,.right_box
                    display inline-block
                    vertical-align top
                    width 50%
                    text-align center
                .sum
                    font-size 40px
                    color #fff
                    line-height 85px
                .can
                    font-size 26px
                    color #ffe1e2
                    line-height 45px
                .btn_wrap
                    margin 25px 0 30px
                .btn_wrap .top-up,.draw
                    display inline-block
                    vertical-align top
                    width 340px
                    height 80px
                    border-radius 40px
                    font-size 26px
                    text-align center
                    line-height 80px
                    letter-spacing 4px
                .top-up
                    background #ff4902
                    color #fff
                .draw
                    margin 0 0 0 10px
                    border 1.1px solid #ff4902
                    color #ff4902
                .pour
                    color #ff5559
                    font-size 24px
                    line-height 55px
            .detail_wrap
                margin 55px 0
                .dep div
                    display inline-block
                    vertical-align middle
                .dep
                    margin 0 0 15px 0
                    padding 0 33px
                    font-size 26px
                    color #151515
                    line-height 80px
                    -webkit-box-shadow: 0px 0px 5px 0px #cccccc;
                    box-shadow: 0px 0px 5px 0px #cccccc;
                    border-radius: 6px;    
                .icon
                    float right
                    margin 36px 0 0 
                    width 8px
                    height 14px
                    background url('/static/img/user/my/left.png') no-repeat
                    background-size 100% 100%
            .map_wrap
                margin 10px 0 50px
                img
                    display block
                    margin 0 auto 
                    max-width 100%
                    border-radius 10px 

</style>