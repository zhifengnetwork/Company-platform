<template>
    <div class="order">
        <!-- 头部 -->
        <headtop></headtop>

        <div class="tab-wrap">
            <!-- tab切换标题 -->
            <div class="tab-tit">
                <ul>
                    <li v-for="(item,index) in tabList"
                        :class="{active:index === nowIndex}"
                        @click="handleClick(index)"
                        :key="index">
                        {{item.tabTitle}}
                    </li>
                </ul>
            </div>

            <div class="tab-con">
                <ul>
                    <li>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">交易成功</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/img/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">删除订单</span>
                                <span class="btn red">查看物流</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待付款</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/img/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">取消订单</span>
                                <span class="btn red">去付款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待发货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/img/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">退款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待发货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/img/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">确认收货</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
import headtop from '@/components/public/page_top_head'
export default {
    name:'order',
    components: {
        headtop
    },
    data(){
        return{
            nowIndex:0,
            type:this.$route.query.type,
            // tab切换标题
            tabList:[
                {
                    tabTitle:"全部"
                },
                {
                    tabTitle:"待付款"
                },
                {
                    tabTitle:"待发货"
                },
                {
                    tabTitle:"待收货"
                },
                {
                    tabTitle:"待评价"
                }
            ]
        }
    },
    /*组件实例创建完成，属性已绑定，但DOM还未生成*/
    created: function(){
        /**head=>style */
        var style_obj = {
            head_wrap_style: {
                background: '#ffffff',
            },
            return_data: {
                icon: '/static/img/public/left_icon_555.png',
                /*跳转的路由(可以传参),为空=>返回上一页*/
                url_data: '',
            },
            title: {
                /**是否-显示该模块 */
                need_model: true,
                name: '我的订单',
                style: {color:'#151515'}
            },
            right_button: {
                need_model: false,
                /**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
                text: '按钮',
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
        // tab切换标题
        handleClick(index){
            this.nowIndex = index
            this.$router.push('/order?type='+index)
            this.type = this.$route.query.type
            this.dataRendering()
        },
        // 页面数据渲染
        dataRendering(){
            console.log(1)
        }
    }

}
</script>

<style lang="stylus" scoped>
.order
    .tab-wrap
        padding-top 88px
        .tab-tit
            border-top 2px solid #e6e6e6
            ul
                height 70px
                line-height 70px
                font-size 30px
                background-color #ffffff
                display flex
                align-items center
                justify-content space-between
                padding 0 24px
                box-sizing border-box
                margin-bottom 20px
                li
                    color #151515
                    border-bottom 4px solid transparent
                    &.active
                        border-color #f11010
                        color #f11010
        .tab-con
            padding 0 24px
            box-sizing border-box
            .item-card
                background-color #ffffff
                border-radius 8px
                box-shadow 0 0 8px #e6e6e6
                margin-bottom 14px
                .card-head
                    height 55px
                    border-bottom 2px solid #e6e6e6
                    display flex
                    align-items center
                    justify-content space-between
                    padding 0 36px
                    box-sizing border-box
                    .order-date
                        font-size 22px
                        color #151515
                    .order-state
                        font-size 24px
                        color #f20c0c
                .goods-item
                    display flex
                    padding 17px 38px 10px
                    box-sizing border-box
                    .img-wrap
                        width 160px
                        height 160px
                        text-align center
                        margin-right 44px
                        img 
                            max-width 100%
                    .text
                        flex 1
                        h3
                            font-size 24px
                            line-height 34px
                            font-weight normal
                            overflow hidden
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-line-clamp 2
                            -webkit-box-orient vertical
                .total-bar
                    height 40px
                    color #6f6f6f
                    display flex
                    justify-content flex-end
                    align-items center
                    margin-bottom 10px  
                    padding 0 38px
                    box-sizing border-box
                    .total-count
                        line-height 40px
                    .payment
                        margin-left 20px
                        font-size 30px
                        line-height 40px
                        .label
                            font-size 22px
                            position relative
                            top -2px
                        .price
                            color #151515
                            font-size 30px
                .order-btn
                    display flex
                    justify-content flex-end
                    padding 0 38px 36px
                    box-sizing border-box
                    .btn
                        width 130px
                        height 40px
                        line-height 40px
                        color #888888
                        text-align center
                        display inline-block
                        font-size 26px
                        border-radius 15px
                        border 2px solid #888888
                        margin-left 26px
                        &.red
                            color #f20c0c
                            border-color #f20c0c                    


                

</style>
