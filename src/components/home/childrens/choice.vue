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
export default {

}
</script>

<style lang="stylus" scoped>

</style>
