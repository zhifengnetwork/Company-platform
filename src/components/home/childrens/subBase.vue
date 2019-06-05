<template>
    <div class="subBase">
        <div class="advert">
            <img src="/static/img/public/getinto_share_icon.png" />
        </div>

        <!-- 商品列表 -->
        <div class="goods-list">
            <div class="goods-item">
                <div class="img-wrap">
                    <img src="/static/img/home/00hot-img01.png" />
                </div>
                <div class="text">
                    <div class="line1"><h3>【新人专享】连衣裙</h3></div>
                    <div class="line2">
                        <span class="price"><i class="yen">￥</i>7000.00</span>
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
                        <span class="price"><i class="yen">￥</i>8888.00</span>
                    </div>
                </div>
            </div>
            <div class="goods-item">
                <div class="img-wrap">
                    <img src="/static/img/home/00hot-img03.png" />
                </div>
                <div class="text">
                    <div class="line1"><h3>【新人专享】自然堂化妆品</h3></div>
                    <div class="line2">
                        <span class="price"><i class="yen">￥</i>5000.00</span>
                    </div>
                </div>
            </div>
            <div class="goods-item">
                <div class="img-wrap">
                    <img src="/static/img/home/00hot-img04.png" />
                </div>
                <div class="text">
                    <div class="line1"><h3>【新人专享】proyv化妆品</h3></div>
                    <div class="line2">
                        <span class="price"><i class="yen">￥</i>6000.00</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'subBase',

}
</script>

<style lang="stylus" scoped>
.subBase
    background #f7f7f7
    padding 0 25px
    box-sizing border-box
    .advert
        padding 10px 30px
        box-sizing border-box
        img 
            width 100%
            border-radius 10px
    .goods-list
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
                padding 0 20px
                box-sizing border-box
                .price
                    font-size 30px
                    .yen
                        font-style normal
                        font-size 30px
               

</style>
