<template>
    <div class="choice">
        <!-- 轮播图 -->
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="static/img/home/00banner-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="static/img/home/00banner-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="static/img/home/00banner-img01.png" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 导航菜单左右切换 -->
        <div class="nav-wrap">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
                        <span>马上拼团</span>
                    </div>
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
                        <span>砍价专区</span>
                    </div>
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
                        <span>明星推荐</span>
                    </div>
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
                        <span>马上领券</span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
                        <span>热门推荐</span>
                    </div>
                    <div class="nav-item">
                        <img src="static/img/home/assemble-icon.png" />
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
            <div class="cate-item">
                <h3>新人专区</h3>
                <p>15元特惠</p>
                <div class="goods-item">
                    <div class="img-wrap"></div>
                    <div class="text">
                        <span class="price"></span>
                    </div>
                </div>
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
            bannerData:[
                {imgUrl:'/static/img/home/00banner-img01.png'}
            ]
        }
    },
    mounted(){
        let swiper = new Swiper('.swiper-container', {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            }
        })
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

// 导航
.nav-wrap
    width 100%
    height 160px
    background url("~/static/img/home/nav-bg.png") no-repeat 
    background-size cover
.nav-wrap >>> .swiper-slide
    height 160px
    display flex
    align-items center
.nav-wrap >>> .nav-item
    text-align center
    margin 0 38px
    img
        width 70px
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


        
</style>
