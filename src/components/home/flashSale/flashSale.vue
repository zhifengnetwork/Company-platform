<template>
    <div class="flash-sale">
        <!-- 头部 -->
        <headtop></headtop>
        <!-- 主内容 -->
        <div class="content">
            <!-- 广告图 -->
            <div class="advert">
                <!-- <img src="/static/img/flashSale/00advert-img01.png" /> -->
                <img :src="baseUrl + rushAdver" />
            </div>

            <!-- 限时购列表 -->
            <div class="flash-sale-list">
                <div class="goods-item" v-for="item in rushList">
                    <router-link :to="'/home/flashSale/flashDetails?goods_id='+ item.goods_id">
                        <div class="img-wrap">
                            <img :src="baseUrl + item.img" />
                        </div>
                    </router-link>
                    <div class="text">
                        <router-link :to="'/home/flashSale/flashDetails?goods_id='+ item.goods_id">
                            <h3>{{item.goods_name}}</h3>
                        </router-link>
                        <div class="price">
                            <span class="discount-price"><i class="yen">￥</i>{{item.price}}</span>
                            <span class="original-price">￥{{item.original_price}}</span>
                        </div>
                        <div class="progress-wrap">
                            <van-progress
                                pivot-text=""
                                color="#ff0b13"
                                :percentage = item.surplus
                            />
                            <div class="robbed-num">已抢{{item.purchased}}件</div>
                        </div>
                        <div class="endTime">
                            距结束: <span>{{item.down}}</span>
                        </div>
                        <div class="buyBtn">
                            去抢购 &gt;
                        </div>
                    </div>
                </div>
                <!-- <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/flashSale/00flash-sale-img01.png" />
                    </div>
                    <div class="text">
                        <h3>自然堂化妆品补水防晒虎虎生风副书记粉红色看自然堂化妆品补水防晒自然堂化妆品补水防晒自然堂化妆品补水防晒</h3>
                        <div class="price">
                            <span class="discount-price"><i class="yen">￥</i>360.00</span>
                            <span class="original-price">￥700.00</span>
                        </div>
                        <div class="progress-wrap">
                            <van-progress
                                pivot-text=""
                                color="#ff0b13"
                                :percentage="50"
                            />
                            <div class="robbed-num">已抢616件</div>
                        </div>
                        <div class="endTime">
                            距结束还有七天
                        </div>
                        <div class="buyBtn">
                            去抢购 &gt;
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <div class="img-wrap">
                        <img src="/static/img/flashSale/00flash-sale-img01.png" />
                    </div>
                    <div class="text">
                        <h3>自然堂化妆品补水防晒虎虎生风副书记粉红色看自然堂化妆品补水防晒自然堂化妆品补水防晒自然堂化妆品补水防晒</h3>
                        <div class="price">
                            <span class="discount-price"><i class="yen">￥</i>360.00</span>
                            <span class="original-price">￥700.00</span>
                        </div>
                        <div class="progress-wrap">
                            <van-progress
                                pivot-text=""
                                color="#ff0b13"
                                :percentage="50"
                            />
                            <div class="robbed-num">已抢616件</div>
                        </div>
                        <div class="endTime">
                            距结束: <span>23:23:55</span>
                        </div>
                        <div class="buyBtn">
                            去抢购 &gt;
                        </div>
                    </div>
                </div> -->

                <!-- 数据加载完提示 -->
                <div class="end-wrap">
                    <p>我是有底线哦~~</p>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import headtop from '@/components/public/page_top_head'
export default {
    name:'flashSale',
    components: {
        headtop
    },
    data(){
        return{
            page:1,//请求页数
            baseUrl:'',//图片路径
            rushAdver:'',//广告图
            rushList:[],//限时购列表
        }
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
                name: '限时购',
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
    mounted(){
        this.baseUrl = this.url;//拼接图片路径
        this.requestData();//请求数据
        this.countdowm();//倒计时
    },
    methods:{
        // 请求数据
        requestData(){
            var url = 'Goods/limited_list';
            var token = window.sessionStorage.getItem("token");
            this.$axios.get( url +'&page=' + this.page + '&token='+ token)
            .then( (res)=>{
                console.log(res)
                var status = res.data.status
                if(status === 1){
                    this.rushAdver = res.data.data.limited_img;
                    this.rushList = res.data.data.list;
                }
            })
            .catch((error) => {
                alert('请求错误:'+ error)
            })
        },
        //抢购倒计时
        countdowm () {
            setInterval( ()=> {
                for (var key in this.rushList) {
                    this.$set(
                        this.rushList[key],"down",''
                    );
                    var start = new Date().getTime();
                    var end = this.rushList[key].limited_end * 1000;  //  结束日期
                    var differ = end - start;//时间差
                    var differDate = (Math.floor(differ / 1000 / 60 / 60 / 24));

                    var data = new Date(this.rushList[key].limited_start * 1000);  //开始日期
                    var present = new Date(this.rushList[key].limited_end * 1000);  //结束日期
                    if(differDate > 7){
                        //如果结束日期大于当前日期7天
                        this.rushList[key]["down"] = (data.getMonth()+1) + "月" + data.getDate() + "日" + '-' + (present.getMonth()+1) + '月' + present.getDate() + "日";							
                    }else{							
                        if (differ > 0) {
                            var dd = Math.floor(differ / 1000 / 60 / 60 / 24);
                            var hh = Math.floor((differ / 1000 / 60 / 60) % 24);
                            var mm = Math.floor((differ / 1000 / 60) % 60);
                            var ss = Math.floor((differ / 1000) % 60);
                        }
                        this.rushList[key]["down"] = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
                    }
                }
            }, 1000);
        }

    }

}
</script>

<style lang="stylus" scoped>
.content
    padding 88px 24px 0
    box-sizing border-box
    .advert
        width 700px
        height 300px
        border-radius 8px
        overflow hidden
        img
            width 100%
    .flash-sale-list
        .goods-item
            display flex
            padding 20px
            box-sizing border-box
            position relative
            box-shadow 0 0 8px #e6e6e6
            background-color #fff
            margin-bottom 14px
            .img-wrap
                width 240px
                height 240px
                margin-right 28px
                display flex
                align-items center
                justify-content center
                img 
                    max-width 100%
                    max-height 100%
                    display inline-block
            .text
                flex 1
                h3
                    font-size 24px
                    color #151515
                    line-height 30px
                    font-weight normal
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
                .price
                    line-height 44px
                    .discount-price
                        color #ff112f
                        font-size 36px
                        .yen
                            font-size 20px
                            font-style normal
                    .original-price
                        color #929292
                        font-size 18px
                        text-decoration line-through
                .progress-wrap
                    height 46px
                    display flex
                    align-items center
                    .van-progress
                        width 195px
                        height 10px
                        background-color #ff6742
                    .robbed-num
                        margin-left 20px
                        font-size 24px
                        color #151515
                .endTime
                    font-size 24px
                    color #151515
                .buyBtn
                    width 150px
                    height 50px
                    line-height 50px
                    background-color #ff0000
                    color #ffffff
                    font-size 30px
                    text-align center
                    border-radius 5px
                    position absolute
                    right 20px
                    bottom 20px
        .end-wrap
            font-size 18px
            color #888888
            text-align center
            margin 30px auto

</style>
