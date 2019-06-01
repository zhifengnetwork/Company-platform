<template>
    <div class="returnGoods">
        <!-- 头部 -->
        <headtop></headtop>

        <!-- 内容 -->
        <div class="content">
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
            </div>

            <!-- 数据加载完提示 -->
            <div class="end-wrap">
                <p>我是有底线哦~~</p>
            </div>

        </div>

    </div>
</template>

<script>
import headtop from '@/components/public/page_top_head'
export default {
    name:'returnGoods',
    components: {
        headtop
    },
     /*组件实例创建完成，属性已绑定，但DOM还未生成*/
    created: function(){
        /**head=>style */
        var style_obj = {
            head_wrap_style: {
                background: '#ffffff',
                borderBottom :'1px solid #e6e6e6'
            },
            return_data: {
                icon: '/static/img/left_icon_555.png',
                /*跳转的路由(可以传参),为空=>返回上一页*/
                url_data: '',
            },
            title: {
                /**是否-显示该模块 */
                need_model: true,
                name: '退货',
                style: {color:'#151515'}
            },
            right_button: {
                need_model: false,
                /**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
                text: '按钮',
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


}
</script>

<style lang="stylus" scoped>
.content
    padding-top 108px
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
            padding 17px 38px 30px
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
    .end-wrap
        font-size 18px
        color #888888
        text-align center
        margin 30px auto

</style>
