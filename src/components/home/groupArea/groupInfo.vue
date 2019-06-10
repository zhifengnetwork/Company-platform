<template>
    <div class="group_info">
        <header class="public_head">  
            <Pheader></Pheader>
        </header>
        <!-- 轮播部分 -->
        <van-swipe class="group_swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item @click="preview(index)" v-for="(image, index) in data.images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <!-- 图片预览 -->
        <van-image-preview 
            v-model="show"
            :images="data.images"
            :startPosition="index"
            @change="onChange"
            @click="preview(index)"
            >
            <template v-slot:index>第{{index+1}}页</template>
        </van-image-preview>
        <div class="group_notice">200人拼团 还差90人可拼成</div>
        <!-- 商品信息 -->
        <van-row>
            <van-col class="group_item" span="19">
                <p class="price">￥<span class="price_text">{{data.group_item[0].minPrice}} - {{data.group_item[0].maxPrice}}</span> </p>
                <p class="pName">{{data.group_item[0].name}}</p>
            </van-col>
            <van-col class="mark_item" span="5">
                <img class="mark_img" :src="data.group_item[0].codeimg" alt="">
                <span class="mark_text">扫一扫</span>
            </van-col>
        </van-row>
        <!-- 查看全部 -->
        <van-row class="group_booking_all" type="flex" justify="space-between">
            <div>
                {{data.group_booking_title.sum}}人正在拼团
            </div>
            <div>
                查看全部<van-icon name="arrow" />
            </div>
        </van-row>        
        <!-- 拼团信息 -->
        <van-row class="group_booking" type="flex" justify="space-between">
            <van-col class="group_booking_left" span="12">
                <img class="group_booking_img" :src="data.group_booking[0].userimg" alt="">
                <span>{{data.group_booking[0].username}}</span>
            </van-col>
            <van-col class="group_booking_right" span="12">
                <p>还差{{data.group_booking[0].short}}人</p>
                <p>剩余时间{{data.group_booking[0].time_day}}天{{data.group_booking[0].time}}</p>
            </van-col>
        </van-row>
        <!-- 拼团信息 -->
        <van-row class="group_booking" type="flex" justify="space-between">
            <van-col class="group_booking_left" span="12">
                <img class="group_booking_img" src="static/img/000⑨.png" alt="">
                <span>我最能拼了</span>
            </van-col>
            <van-col class="group_booking_right" span="12">
                <p>还差99人</p>
                <p>剩余时间6天12:59:11</p>
            </van-col>
        </van-row>
        <!-- tab切换 -->
        <van-tabs style="padding-bottom:46px;" v-model="active">
            <van-tab title="商品详情">
                <img src="static/img/000⑨.png" alt="">
            </van-tab>
            <van-tab title="商品评价(894)">内容 2{{showBase}}</van-tab>
        </van-tabs>
        <!-- 底部菜单 -->
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
                text="单独购买"
                @click="all()"
            />
            <goods-action-big-btn
                type="danger"
                text="拼团价"
                @click="all()"
            />
        </van-goods-action>
        <!-- 商品规格 -->
        <van-sku
            v-model="showBase"
            :sku="data.sku"
            :goods="data.goods"
        />
    </div>
</template>

<script>
    import Pheader from '@/components/public/page_top_head';
    //图片懒加载
    import Vue from 'vue';
    import {Lazyload,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Sku,Toast} from 'vant';
    Vue.use(Lazyload,
            GoodsAction,
            GoodsActionBigBtn,
            GoodsActionMiniBtn,
            Sku,
            Toast,);
    export default {
        name:'groupInfo',
        data() {
            return {
                show:  false,
                index: 1,
                showBase: false,
                data:{
                    images:[
                        'static/img/home/00banner-img01.png',
                        'static/img/000⑨.png',
                        'static/img/user/0001.jpg',
                        'static/img/group_area/shop.png',
                    ],
                    // 拼团商品信息
                    group_item:[
                        {name:'手机摄像头',minPrice:'200.00',maxPrice:'360.00',codeimg:'static/img/group_area/mark.png',pid:'0001'}
                        ],
                    // 拼团列表信息
                    group_booking_title:{
                        //拼团总人数 
                        sum:'1418'
                    },
                    group_booking:[
                        // short   拼团还差的人数 time time_day 拼团剩余时间
                        {userimg:'static/img/000⑨.png',username:'我最能拼了',short:'49',time:'12:51:45',time_day:'6',bid:'0004'}
                    ],
                    goods: {
                            // 商品标题
                            title: '测试商品',
                            // 默认商品 sku 缩略图
                            picture: 'https://img.yzcdn.cn/1.jpg'
                        },
                    sku: {
                        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                        tree: [
                            {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '30349', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                                },
                                {
                                    id: '1215',
                                    name: '蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg'
                                }
                            ],
                            k_s:'s2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                            }
                        ],
                        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                        list: [
                            {
                            id: 2259, // skuId，下单时后端需要
                            price: 100, // 价格（单位分）
                            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '30349', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                            stock_num: 110 // 当前 sku 组合对应的库存
                            }
                        ],
                            price: '1.00', // 默认价格（单位元）
                            stock_num: 227, // 商品总库存
                            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                            none_sku: false, // 是否无规格商品
                            hide_stock: false // 是否隐藏剩余库存
                        }
                },
                active: 2
            }
        },
        components:{
            Pheader,
            GoodsAction,
            GoodsActionBigBtn,
            GoodsActionMiniBtn,
        },
        /*组件实例创建完成，属性已绑定，但DOM还未生成*/
        created: function(){
            /**head=>style */
            var style_obj = {
                head_wrap_style: {
                    background: '#f8f8f8',
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
                    name: '拼团详情',
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
        methods: {
            onChange(index) {
                this.index = index;
            },
            preview(index) {
                this.show = !this.show;
                this.index = index;
            },
            all() {
                this.showBase = true;
            }
        },
    }
</script>

<style lang="stylus" scoped>
img 
    width 100%
// 商品信息
.group_item
    padding-left 20px
    line-height 56px
.group_info 
    // padding-top 88px
.group_swipe
    width 100%
    height 500px
.group_notice
    height 40px
    line-height 40px
    text-align center
    color #fff
    background #fd5014
.mark_img
    float left
    width 100px
    height 100px
    margin-right 10px
    vertical-align top
.mark_text
    width 5px
.price
    color #ff2641
.price_text
    font-size 36px
.pName
    font-size 40px
.mark_item
    margin-top 10px
// 拼团信息
.group_booking_all
    margin 20px 20px
    border-bottom 2px solid #ccc
    line-height 60px
.group_booking
    padding 0 20px
    margin 20px 0
    box-size border-box 
    -moz-box-size border-box 
    -webkit-box-size border-box 
.group_booking_left
    line-height  80px
.group_booking_img
    width 80px
    height 80px
    margin-right 20px
    border-radius 50%
    vertical-align  middle
.group_booking_right
    text-align right 
    line-height 40px
</style>