<template>
    <div class="choice">
        <!-- 轮播图 -->
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in banners" :key="index">
                    <img :src="item.bannerUrl" />
                </van-swipe-item>
                <!-- <van-swipe-item>
                    <img src="static/img/home/00banner-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="static/img/home/00banner-img01.png" />
                </van-swipe-item> -->
            </van-swipe>
        </div>

        <!-- 导航菜单左右切换 -->
        <div class="nav-wrap">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>马上拼团</span>
                    </div>
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>砍价专区</span>
                    </div>
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>明星推荐</span>
                    </div>
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>马上领券</span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>热门推荐</span>
                    </div>
                    <div class="nav-item">
                        <img src="/static/img/home/assemble-icon.png" />
                        <span>发现好货</span>
                    </div>
                </div>
                </div>
                <!-- 滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>
        </div>

        <!-- 分类 -->
        <div class="category-wrap">
            <div class="cate-item" v-for="item in cateData">
                <h3>{{item.cateTit}}</h3>
                <p>{{item.cateDec}}</p>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img :src="item.cateImg" />
                    </div>
                    <div class="price">
                        <span class="discount-price"><i class="yen">￥</i>{{item.discountPrice | toFix}}</span>
                        <span class="original-price">￥{{item.originalPrice | toFix}}</span>
                    </div>
                </div>
            </div>
            <!-- <div class="cate-item">
                <h3>新人专区</h3>
                <p>15元特惠</p>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00newborn-zone-img01.png" />
                    </div>
                    <div class="price">
                        <span class="discount-price"><i class="yen">￥</i>365.00</span>
                        <span class="original-price">￥852.00</span>
                    </div>
                </div>
            </div>
            <div class="cate-item">
                <h3>拼团</h3>
                <p>八人拼团 团长免单</p>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00Assemble-img01.png" />
                    </div>
                    <div class="price">
                        <span class="discount-price"><i class="yen">￥</i>3665.00</span>
                        <span class="original-price">￥8852.00</span>
                    </div>
                </div>
            </div>
            <div class="cate-item">
                <h3>砍一刀</h3>
                <p>邀请我好友砍一砍</p>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00newborn-zone-img01.png" />
                    </div>
                    <div class="price">
                        <span class="discount-price"><i class="yen">￥</i>365.00</span>
                        <span class="original-price">￥852.00</span>
                    </div>
                </div>
            </div>
            <div class="cate-item">
                <h3>邀请我好友砍一砍</h3>
                <p>朋友时间不等人</p>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00Assemble-img01.png" />
                    </div>
                    <div class="price">
                        <span class="discount-price"><i class="yen">￥</i>3665.00</span>
                        <span class="original-price">￥8852.00</span>
                    </div>
                </div>
            </div> -->
        </div>

        <!-- 通知 -->
        <div class="notice-wrap">
            <van-notice-bar
            color="#e81919"
            background="#efefef"
            text="公司成立于2018年公司成立于2018年公司成立于2018年公司成立于2018年公司成立于2018年公司成立于2018年"
            left-icon="volume-o"
            />
        </div>

        <!-- 热销专区 -->
        <div class="hot-sale-area">
            <div class="title">
                <h3>热卖专区</h3>
            </div>
            <div class="hot-list">
                <div class="goods-item" v-for="item in hotData">
                    <div class="img-wrap">
                        <img :src="item.goodsImg" />
                    </div>
                    <div class="text">
                        <div class="line1"><h3>{{item.goodsTit}}</h3></div>
                        <div class="line2">
                            <span class="price"><i class="yen">￥</i>{{item.price | toFix}}</span>
                            <span class="share-gold">
                                <i class="share-sign">分享金</i>
                                {{item.shareGold}}元
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00hot-img01.png" />
                    </div>
                    <div class="text">
                        <div class="line1"><h3>【新人专享】连衣裙连衣裙连衣裙</h3></div>
                        <div class="line2">
                            <span class="price"><i class="yen">￥</i>7000.00</span>
                            <span class="share-gold">
                                <i class="share-sign">分享金</i>
                                200元
                            </span>
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00hot-img02.png" />
                    </div>
                    <div class="text">
                        <div class="line1"><h3>【新人专享】连衣裙中款</h3></div>
                        <div class="line2">
                            <span class="price"><i class="yen">￥</i>7000.00</span>
                            <span class="share-gold">
                                <i class="share-sign">分享金</i>
                                200元
                            </span>
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00hot-img03.png" />
                    </div>
                    <div class="text">
                        <div class="line1"><h3>新人专享】自然堂化妆品</h3></div>
                        <div class="line2">
                            <span class="price"><i class="yen">￥</i>7000.00</span>
                            <span class="share-gold">
                                <i class="share-sign">分享金</i>
                                200元
                            </span>
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/home/00hot-img04.png" />
                    </div>
                    <div class="text">
                        <div class="line1"><h3>新人专享】proyv化妆</h3></div>
                        <div class="line2">
                            <span class="price"><i class="yen">￥</i>7000.00</span>
                            <span class="share-gold">
                                <i class="share-sign">分享金</i>
                                200元
                            </span>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

  

    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    name:'choice',
    data(){
        return {
            // 轮播图数据
            banners:[
                {bannerUrl:'static/img/home/00banner-img01.png'},
                {bannerUrl:'static/img/home/00banner-img01.png'},
                {bannerUrl:'static/img/home/00banner-img01.png'}
            ],
            // 分类菜单
            cateData:[
                {
                    cateTit:"新人专区",
                    cateDec:"15元特惠",
                    cateImg:"/static/img/home/00newborn-zone-img01.png",
                    discountPrice:"365",
                    originalPrice:"852"
                },
                {
                    cateTit:"拼团",
                    cateDec:"八人拼团 团长免单",
                    cateImg:"/static/img/home/00Assemble-img01.png",
                    discountPrice:"3665",
                    originalPrice:"8852"
                },
                {
                    cateTit:"砍一刀",
                    cateDec:"邀请我好友砍一砍",
                    cateImg:"/static/img/home/00newborn-zone-img01.png",
                    discountPrice:"365",
                    originalPrice:"852"
                },
                {
                    cateTit:"限时购",
                    cateDec:"朋友时间不等人",
                    cateImg:"/static/img/home/00Assemble-img01.png",
                    discountPrice:"3665",
                    originalPrice:"8852"
                }
            ],
            // 热卖专区
            hotData:[
                {
                    goodsImg:"/static/img/home/00hot-img01.png",
                    goodsTit:"【新人专享】连衣裙连衣裙连衣裙",
                    price:"7000",
                    shareGold:"200"
                },
                {
                    goodsImg:"/static/img/home/00hot-img02.png",
                    goodsTit:"【新人专享】连衣裙中款",
                    price:"7000",
                    shareGold:"200"
                },
                   {
                    goodsImg:"/static/img/home/00hot-img03.png",
                    goodsTit:"新人专享】自然堂化妆品",
                    price:"7000",
                    shareGold:"200"
                },
                {
                    goodsImg:"/static/img/home/00hot-img04.png",
                    goodsTit:"新人专享】proyv化妆",
                    price:"7000",
                    shareGold:"200"
                },
            ]
        }
    },
    // 初始化页面完成后调用
    mounted(){
        // 菜单栏目横向滚动
        let swiper = new Swiper('.swiper-container', {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            }
        })
    },
    filters:{
        // 价格过滤器
        toFix(val){
            return parseInt(val).toFixed(2)
        }
    }
}
</script>

<style lang="stylus" scoped>
// 轮播图
.banner
    .van-swipe
        border-radius 15px
        margin-bottom 15px
        img 
            width 100%

// 菜单栏目
.nav-wrap
    width 100%
    height 160px
    background url("~/static/img/home/nav-bg.png") no-repeat 
    background-size cover
    margin-bottom 15px
.nav-wrap >>> .swiper-slide
    height 160px
    display flex
    align-items center
.nav-wrap >>> .nav-item
    text-align center
    margin 0 38px
    img
        width 70px
        height 70px
        display inline-block
    span 
        display block
        font-size 24px
        color #fff3ca
.nav-wrap >>> .swiper-container-horizontal > .swiper-scrollbar
    width 120px
    height 6px
    left 50%
    margin-left -60px
    opacity 1
    background #ffffff
    border-radius 2px
.nav-wrap >>> .swiper-scrollbar-drag
    background-color #ffe679
    border-radius 2px

// 分类栏目
.category-wrap
    background #ffffff
    border-radius 10px
    display flex
    flex-wrap wrap
    box-shadow 0 0 8px #e6e6e6
    .cate-item
        width 50%
        border-right 1px solid #dadada
        border-bottom  1px solid #dadada
        padding 20px
        box-sizing border-box
        &:nth-of-type(even)
            border-right none
        &:nth-child(3),&:nth-child(4)
            border-bottom none
        &:nth-child(2) h3
            color #fe079e
        &:nth-child(3) h3
            color #fe5e07
        &:nth-child(4) h3
            color #07a4fe
        h3
            font-size 30px
            color #fe0707
            font-weight normal
            
        p
            font-size 24px
            color #353535
            margin 6px 0
        .goods-item
            .img-wrap
                width 100%
                height 146px
                text-align center
                img 
                    max-width 100%
                    max-height 100%
            .price
                text-align center
                height 50px
                line-height 50px
                .discount-price
                    font-size 30px
                    color #fe0707
                    .yen
                        font-size 18px
                        font-style normal
                .original-price
                    text-decoration line-through
                    color #929292
// 热卖专区                    
.hot-sale-area
    .title
        height 80px
        display flex
        align-items center
        justify-content center
        &:before
            content ''
            display block
            width 101px
            height 10px
            background url("/static/img/home/title-before.png") no-repeat
            background-size cover
        &:after
            content ''
            display block
            width 101px
            height 10px
            background url("/static/img/home/title-after.png") no-repeat
            background-size cover
        h3
            margin 0 10px
            font-size 30px
            font-weight normal
            color #292929
    .hot-list
        display flex
        flex-wrap wrap
        .goods-item
            width 49%
            margin-right 10px
            padding 8px
            box-sizing border-box
            background-color #ffffff
            margin-bottom 10px
            box-shadow 0 0 8px #e6e6e6
            &:nth-of-type(even)
                margin-right 0
            .img-wrap
                width 100%
                height 333px
                text-align center
                img 
                    max-width 100%
                    max-height 100%
                    display inline-block
            h3
                width 100%
                height 40px
                line-height 40px
                font-size 24px
                font-weight normal
                background-color #fcf3f4
                border-radius 15px
                margin-bottom 10px
                padding 0 20px
                box-sizing border-box
                overflow hidden 
                white-space nowrap 
                text-overflow ellipsis
            .line2
                color #ff112f
                display flex
                justify-content space-between
                align-items center
                .price
                    font-size 30px
                    .yen
                        font-style normal
                        font-size 18px
                .share-gold
                    .share-sign
                        height 36px
                        line-height 40px
                        padding 0px 5px
                        background-color #fd5014
                        color #ffffff
                        font-size 24px
                        font-style normal
                        border-radius 5px
                        

                    



        
</style>
