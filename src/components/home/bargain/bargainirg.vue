<template>
    <div class="bargainirg-box">
        <header >  
              <Pheader></Pheader>
        </header>
      <div class="bargain-page">
               <div class="header-banner" id="header-banner">
                    <div class="banner-rule">
                        <img src="static/img/bargain/lo.png" alt="" class="banner-right">
                    </div>
                      <div class="popup-info">
                        <van-swipe :autoplay="3000" showIindicators="false" vertical>
                            <van-swipe-item>
                            <ul class="popup-info">
                                <li class="popup-list">
                                    <p class="popup-p">
                                        <img src="static/img/user/0001.jpg" alt="" class="popup-head">
                                        <span class="popup-message publicEllipsis">王思聪的表砍了0.5元</span>
                                    </p>
                                </li>
                            </ul>
                            </van-swipe-item>
                            <van-swipe-item>
                                <ul class="popup-info">
                                <li class="popup-list">
                                    <p class="popup-p">
                                        <img src="static/img/user/0001.jpg" alt="" class="popup-head">
                                        <span class="popup-message publicEllipsis">王思聪的表砍了0.5元</span>
                                    </p>
                                </li>
                            </ul>
                            </van-swipe-item>
                            <van-swipe-item>3</van-swipe-item>
                            <van-swipe-item>4</van-swipe-item>
                        </van-swipe>
                        <!-- <li class="popup-list">
                            <p class="popup-p">
                                <img src="static/img/user/0001.jpg" alt="" class="popup-head">
                                <span class="popup-message publicEllipsis">王思聪的表砍了0.5元</span>
                            </p>
                        </li>
                        <li class="popup-list">
                            <p class="popup-p">
                                <img src="static/img/user/0001.jpg" alt="" class="popup-head">
                                <span class="popup-message publicEllipsis">王思聪的表砍了0.5元</span>
                            </p>
                        </li> -->
                    <!-- </ul> -->
                </div>
               </div>
               <div class="page-main">
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div class="bargain-list">
                       <div class="item-proImg">
                           <img src="static/img/group_area/order/1.png" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">你不想吃几口不将就看吧金把把把把把把把把把把把卡金卡金卡金卡金卡金卡金卡</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">￥
                                              <span class="red-rbn">360.00</span>
                                              <span class="red-original">￥700.00</span>
                                          </div>
                                          <div class="schedule">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="50"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              距离结束:
                                              <span class="tiem-text publicEllipsis">23:23:55</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan ">砍一刀</p>
                                        <p class="kan-pir publicEllipsis">已砍66元</p>
                                        <span class="kan-take publicEllipsis">已有4453参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
               </div>
      </div>
    </div>
</template>
<script>
//头部
import Pheader from '@/components/public/page_top_head'
export default {
      data(){
          return{

          }
      },
      components:{
          Pheader
      },
          created(){
                this.defaultHeader() //默认头部
    },
    methods:{
          //移动到一定位置 头部导航更换样式
            scrolljia(){
                var banner = document.getElementById('header-banner').offsetHeight
                var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
                if(scr >= banner){
                   var obj =  {
                        /**整个head的style */
                        head_wrap_style: {
                        background: '#fff',
                        },
                        return_data: {
                        icon: '/static/img/left_icon_555.png',
                        /*跳转的路由(可以传参)，为空=>返回上一页*/
                        url_data: '',
                        },
                        title: {
                        /**是否-显示该模块 */
                        need_model: true,
                        name: '砍一刀',
                        style: {color:'#333'}
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
                        }
                    }
                this.$store.commit('change_head',obj);
                }else{
                    this.defaultHeader()
                }
        },
        //默认头部
        defaultHeader(){
            var obj =  {
                    /**整个head的style */
                    head_wrap_style: {
                    background: '',
                    },
                    return_data: {
                    icon: '/static/img/left_icon_fff.png',
                    /*跳转的路由(可以传参)，为空=>返回上一页*/
                    url_data: '',
                    },
                    title: {
                    /**是否-显示该模块 */
                    need_model: true,
                    name: '',
                    style: {color:'#333'}
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
                    }
                }
                this.$store.commit('change_head',obj);
        }
    },
    mounted(){     
                var _this = this;
                window.addEventListener('scroll',this.scrolljia,true)
        },
}
</script>
<style lang="stylus" scoped>
img 
   margin 0 auto
   display block
   width 100%
   height 100%
    
  .bargain-page
    background #ffffff
    min-height 100vh
  .bargain-page .header-banner
    height 588px
    background url('../../../../static\img\bargain\banner.png');
    background-size 100%
    position relative

 .header-banner .banner-rule 
    position absolute
    top 18px
    right 24px
    height 90px
    width 90px
 .popup-info
    margin-left 24px
    margin-bottom 16px
    position absolute
    left 0
    bottom 0 

 .header-banner ul .popup-list
    width 330px
    height 60px
    background-color #fda074
    // opacity 0.59
    border-radius 10px
    line-height 60px
    margin-bottom 10px

ul .popup-list .popup-p
    height 100%
    display flex
    align-items center

ul .popup-list .popup-p .popup-head
    height 50px
    width 50px
    border-radius 50%
    padding 0 14px

ul .popup-list .popup-p .popup-message
    flex 1
    color #ffffff
    font-size 24px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    padding-right 14px

.bargain-page .page-main
    padding 13px 24px
    box-sizing border-box

.bargain-page .page-main .bargain-list
    display flex
    border 1.11px solid #efece9
    border-radius 6px 
    background #ffffff
    padding 18px 27px 22px 16px
    margin-bottom 10px

.page-main .bargain-list .item-proImg
    width 181px
    height 200px

.page-main .bargain-list .item-detail-text
    flex 1
    padding-left 54px

.bargain-list .item-detail-text .name
    font-size 25px
    color #000

.item-detail-text .name .name-text
    color #000
    font-size 25px

.item-detail-text   .detail-pric
    display flex

.detail-pric .price
    width 55%

.detail-pric .price .price-red
    color #ff112f
    font-size 20px
    padding-bottom 10px
    padding-top 23px

.detail-pric .price .price-red .red-rbn
    font-size 36px

.detail-pric .price .price-red   .red-original
    text-decoration: line-through
    color #989898 

.detail-pric .price .over-time
    font-size 24px
    font-weight: normal

.detail-pric .price  .schedule
    padding-bottom 14px
    .van-progress
     background  #ff6742
     height 10px

.detail-pric  .bargain-btn
    text-align right
    flex 1
    width 45%

.detail-pric  .bargain-btn .btn-kan
    width 120px
    height 48px
    background-image: linear-gradient(0deg, 
		#ff0b13 0%, 
		#ff6969 100%), 
	linear-gradient(
		#f9272f, 
		#f9272f)
    color #ffffff
    text-align center
    line-height 48px
    border-radius: 10px
    display inline-block
    font-size 30px

.detail-pric .bargain-btn>p
    max-width 100%
    margin-top 10px
   
.detail-pric  .bargain-btn .kan-pir
    color #000
    font-size 24px

.detail-pric  .bargain-btn .kan-take
    font-size 18px
    color #626262
    display inline-block
    margin-top 10px
    max-width 100%
</style>
