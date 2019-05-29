<template>
    <div class="flashDetails">
        <!-- 产品图轮播 -->
        <div class="detailsSwiper">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="/static/img/flashSale/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/img/flashSale/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/img/flashSale/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/img/flashSale/00detailsSwiper-img01.png" />
                </van-swipe-item>
            </van-swipe>
        </div>

       
        <!-- 销售信息 -->
        <div class="sale-info">
            <div class="price">
                <span class="discount-price"><i class="yen">￥</i>3665.00</span>
                <span class="tag-price">￥8852.00</span>
            </div>
            <div class="sold-count">
                已售582件
            </div>
            <div class="count-down">
                <div class="down-text">限时抢购</div>
                <div class="clock-run">距结束还有7天</div>
            </div>
        </div>

         <!-- 主内容 -->
        <div class="content">
            <div class="goodsInfo">
                <!-- 商品名称 -->
                <div class="goodsName">
                    <h1>青年说是你发手机话费连衣裙连衣裙青年说是你发手机话费连衣裙连衣裙</h1>
                </div>

                <!-- 配送地区 -->
                <div class="sendArea">
                    <van-cell-group class="goods-cell-group">
                        <van-cell is-link>
                            <template slot="title">
                                <span class="label">配送</span>
                                <span class="text">广州白云区</span>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </div>

                <!-- 运费 -->
                <div class="postArea">
                    <van-cell-group class="goods-cell-group">
                        <van-cell is-link >
                            <template slot="title">
                                <span class="label">运费</span>
                                <span class="text">免运费</span>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </div>

                <!-- 优惠券 -->
                <div class="detailCoupons">
                    <van-cell-group class="goods-cell-group">
                        <van-cell is-link >
                            <template slot="title">
                                <span class="label">优惠券</span>
                                <span class="text" style="float:right">领券</span>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </div>

                <!-- 规格 -->
                <div class="sku-wrap">
                    <van-cell-group class="goods-cell-group">
                        <van-cell is-link>
                            <template slot="title">
                                <span class="label">规格</span>
                                <span class="wayText" style="float:right">默认规格显示</span>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </div>

            </div>

            <!-- tab切换 -->
            <div class="tab-content">
                <van-tabs v-model="active">
                    <van-tab title="商品详情">商品详情</van-tab>
                    <van-tab title="参数">
                        <div class="params-wrap">
                            <ul class="param-list">
                                <li>
                                    <div class="param-name">商品编号 </div>
                                    <div class="param-value">55666666</div>
                                </li>
                                <li>
                                    <div class="param-name">面料</div>
                                    <div class="param-value">蕾丝</div>
                                </li>
                                <li>
                                    <div class="param-name">使用尺寸</div>
                                    <div class="param-value">S M L XL</div>
                                </li>
                                <li>
                                    <div class="param-name">款式</div>
                                    <div class="param-value">中长款</div>
                                </li>
                                <li>
                                    <div class="param-name">风格</div>
                                    <div class="param-value">其他</div>
                                </li>
                                <li>
                                    <div class="param-name">图案</div>
                                    <div class="param-value">碎花</div>
                                </li>
                            </ul>
                        </div>

                    </van-tab>
                    <van-tab title="商品评价(891)">
                        <div class="comment-wrap">
                            <ul class="comment-list">
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/img/flashSale/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="value"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/img/flashSale/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="value"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/img/flashSale/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="value"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/img/flashSale/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="value"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>

        <!-- 底部菜单 -->
        <div class="bottom-bar">
            <van-goods-action>
                <goods-action-mini-btn
                icon="like-o"
                text="关注"
                />
                <goods-action-mini-btn
                icon="service"
                text="客服"
                />
                <goods-action-big-btn
                type="warning"
                text="加入购物车"
                />
                <goods-action-big-btn
                type="danger"
                text="马上抢购"
                />
            </van-goods-action>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import {GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Toast} from 'vant';
Vue.use(
GoodsAction,
GoodsActionBigBtn,
GoodsActionMiniBtn,
Toast,);
export default {
    name:'flashDetails',
    components:{
        GoodsAction,
        GoodsActionBigBtn,
        GoodsActionMiniBtn,
    },
    data(){
        return {
            active: 2,
            value: 3
        }
    }
}
</script>

<style lang="stylus" scoped>
.flashDetails
    background-color #f8f8f8
    // 产品主图轮播
    .detailsSwiper
        img 
            width 100%
            display block
    .sale-info
        height 110px
        font-size 30px
        background-color #ffc8c8
        display flex
        align-items center
        justify-content space-between
        span 
            display block
        .price
            padding-left 25px
            box-sizing border-box
            .discount-price
                color #ff112f
                font-size 36px
                margin-bottom 10px
                .yen
                    font-style normal
                    font-size 18px
            .tag-price
                color #7c7c7c   
                font-size 24px
                text-decoration line-through
        .sold-count
            color #585858
        .count-down
            height 100%
            background-color #ff0000
            color #ffffff
            display flex
            flex-direction column
            justify-content center
            padding 0 40px
            box-sizing border-box
            position relative
            &:before
                content ''
                display inline-block
                width 0
                height 0 
                border-top 20px solid transparent
                border-bottom 20px solid transparent
                border-right 20px solid #ff0000
                position absolute
                left -20px
                top 50%
                margin-top -20px
            span 
                line-height 38px
    .content
        padding-bottom 128px
        box-sizing border-box
        .goodsInfo
            background-color #fff
            padding 25px
            box-sizing border-box
            .goodsName
                margin 20px auto 30px
                h1
                    font-size 30px
                    color #151515
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
            .van-cell-group
                background-color #f8f8f8
                font-size 24px
                .van-cell
                    background-color #f8f8f8
                    padding 4px 15px
                    .label
                        width 100px
                        margin-right 10px
                        display inline-block 
            .van-hairline--top-bottom::after
                border none
        .tab-content
            .van-tabs >>> .van-tabs__content
                padding 0 25px
                box-sizing border-box
            .van-tabs >>> .van-hairline--top-bottom::after
                border none
            .van-tabs >>> .van-tabs__content
                margin-top 30px
            .van-tabs >>> .van-ellipsis
                width 100%
                height 100%
                background url("/static/img/flashSale/line-right.png") right  center no-repeat
                background-size 2px 27px
            .van-tabs >>> .van-tab:last-child span
                background none 
            .params-wrap
                width 100%
                .param-list
                    li  
                        height 58px
                        font-size 26px
                        color #414040
                        display flex
                        align-items center
                        border 1px solid #c1c1c1
                        border-bottom none
                        &:last-child
                            border-bottom 1px solid #c1c1c1
                        .param-name
                            width 175px
                            height 100%
                            line-height 58px
                            border-right  1px solid #c1c1c1
                            padding-left 34px
                            box-sizing border-box
                        .param-value
                            flex 1
                            padding-left 28px
                            box-sizing border-box
            .comment-wrap
                .comment-list
                    li
                        color #4a4949
                        background-color #ffffff
                        border-radius 8px
                        margin-bottom 10px
                        padding 14px 45px
                        box-sizing border-box
                        .eval-user
                            height 60px
                            display flex
                            justify-content space-between
                            align-items center
                            margin-bottom 20px
                            .user
                                display flex
                                align-items center
                                .avatar
                                    width 60px
                                    height 60px
                                    margin-right 20px
                                    img 
                                        width 100%
                                        display block
                                .text
                                    font-size 20px
                                    span 
                                        display block
                                        line-height 30px
                                    .date
                                        font-size 18px
                                        color #999 
                        .eval-content
                            p
                                font-size 18px


    .bottom-bar
        .van-goods-action
            z-index 99
    
        
</style>
