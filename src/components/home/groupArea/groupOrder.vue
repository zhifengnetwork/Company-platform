<template>
    <div class="grop-order-main-wrap">
          <header class="public_head">  
              <Pheader></Pheader>
          </header>
           <div class="gropOrder-page">
                <div class="site-default page-order">
                    <div class="site-icon">
                        <img src="/static/img/group_area/order/site.png" alt="">
                    </div>
                    <div class="site-msg">
                        <span class="site-name publicEllipsis">王思聪</span>
                        <span class="site-tel publicEllipsis">16259855520</span>
                        <p class="minute-site publicEllipsis">上海阿萨德撒旦撒旦撒</p>
                    </div>
                </div>
                <div class="site-pro ">
                    <div class="site-list-title">
                        <span>
                        <img src="/static/img/group_area/order/logo.png" alt="" class="logo">
                        </span>
                        <p class="site-shop publicEllipsis">优衣库自营店</p>
                    </div>
                    <div class="pro-ord-info">
                         <div class="pro-list">
                             <div class="item-img">
                                 <img src="/static/img/group_area/order/1.png" alt="">
                             </div>
                             <div class="item-text">
                                 <p class="text-name apostrophe">连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙</p>
                                 <div class="text-sku">
                                     <span class="sku-color">颜色: 墨绿色</span>
                                     <span class="sku-size">尺寸: L</span>
                                 </div>
                                 <div class="text-price"> 
                                     <span class="price">￥360.00</span>
                                     <span class="num">X2</span>
                                 </div>
                             </div>
                         </div>
                         <div class="pro-sku">
                            <div class="sku-num">
                                <div class="buy-tt">购买数量</div>
                                <div class="buy-num">
                                    <a href="javascript:;" class="btn btn-opt-minus" @click="submitMinus">-</a>
                                    <input type="text" data-min="1" disabled v-model="proNumber" >
                                    <a href="javascript:;" class="btn btn-opt-plus" @click="submitAdd">+</a>
                                </div>
                            </div>
                            <div class="sku-num delivery">
                                <div class="buy-tt delivery-tt">
                                    <span class="publicEllipsis">配送方式</span>
                                    <span class="fff publicEllipsis">普通配送</span>
                                </div>
                                <div class="express publicEllipsis">
                                     <span class="express-name">快递 免费</span>    
                                </div>
                            </div>
                            <div class="sku-num order-remark">
                                <div class="buy-tt">订单备注</div>
                                <div class="buy-num">
                                   <van-field
                                v-model="message"
                                type="textarea"
                                placeholder="选填，请先和商家协商一致"
                                rows="2"
                                autosize
                                />
                                </div>
                            </div>
                         </div>
                    </div>
                     <div class="pro-totnum">
                          <span class="totol-num">共2件:</span>
                          <span class="totol-text">共计:</span>
                          <span class="total">￥<span class="total-pp">720.00</span>
                          </span>
                     </div>
                </div>
                <div class="payment-mode">
                    <!-- <div class="mode-list" v-for="(item,index) in payment" :key="index" @click="selectPay(item,index)">
                        <div class="item-icon">
                            <img :src="item.img" alt="">
                            <P>{{item.name}}</P>
                        </div>
                        <div class="item-cheack">
                            <img src="/static/img/group_area/order/gou.png" alt="" class="activeIcon" v-if="item.cheack && indexs === index">
                        </div>
                    </div> -->
                  <div class="mode-list">
                    <div class="item-icon">
                      <span class="not">使用钱包</span>
                      <span class="up">充值有优惠</span>
                    </div>
                    <div class="sum">
                      <span>余额：</span>
                      <span>0.00</span>
                    </div>
                  </div>
                  <div class="ked">
                    <van-switch
                      v-model="checked"
                      active-color="#fafafa"
                      inactive-color="#f44"
                    />
                  </div>  
                    
                </div>
                <!-- <div class="payment-mode">
                    <div class="info-page">
                        <div class="info-item publicEllipsis">
                            <span class="invite">邀请好友</span>
                            <span class="politeness">有礼</span>
                        </div>
                        <div class="info-item publicEllipsis">
                            <span class="right-invite">去邀请</span>
                            <i class="right-arrow"></i>
                        </div>
                    </div>
                </div>
                <div class="payment-mode">
                    <div class="info-page">
                        <div class="info-item publicEllipsis">
                            <span class="invite">已有199人参与</span>
                            <span class="politeness">还需1人</span>
                        </div>
                        <div class="info-item publicEllipsis">
                            <span class=" surplus">剩余</span>
                            <span class="right-invite surplus">23:13:56</span>
                        </div>
                    </div>
                </div> -->
           </div>
           <div class="footer-bottom">
                   <div class="total-b">
                      <a href="javascript:;" class="text">实付款:</a>
                      <a href="javascript:;" class="pirce">￥720.00</a>
                      <a href="javascript:;" class="freight">免运费</a>
                   </div>
                   <button  class="buyBtn">立即付款</button>
           </div>
           <!-- 弹框 -->
           <div class="popup_wrap" v-show="popShow" @click="popShow=false" @touchmove.prevent>
             <div class="up">
               <div class="gain">恭喜获得优惠券</div>
               <div class="cou">
                 <span class="cou_num">5</span>
                 <span class="cou_it">元</span>
               </div>
             </div>
           </div>
    </div>
</template>
<script>
import Pheader from '@/components/public/page_top_head'
export default {
    data(){
        return{
            //备注
            message:'',
            payment:[
              {id:1,name:'微信支付',cheack:false,img:'/static/img/group_area/order/weixi.png'},
              {id:2,name:'支付宝支付',cheack:false,img:'/static/img/group_area/order/zfb.png'},
              {id:3,name:'余额支付',cheack:false,img:'/static/img/group_area/order/yn.png'},
            ],
            //商品选择数量
            proNumber:1,
              //确认订单
               confirm:{
                   shop:"智丰专营店",
                   shop_logo:'/static/img/group_area/order/logo.png',
                   user_info:[
                            {user_name:'王思聪',tel:18660001245,site:"广东省广州市白云区嘉禾望岗地铁口"}
                   ],
                   goods:[
                            {
                             goods_id:18,
                             goods_name:'连衣裙连衣裙连衣裙连衣裙连衣裙连衣裙',
                             img:'/static/img/group_area/order/1.png',
                             price:'￥758',
                             salePrice:"￥566",
                             goods_count:2,
                             colorTitle:{},
                             spec:[
                               {id:1,name:'颜色'},
                               {id:2,name:'尺码'}
                             ],
                             color:'墨绿色',
                             size:'L',
                             sku_id:'454556',
                             minNumber:1,
                             maxBuy:100,
                      }
                   ],
                   sumPrice:1000,
                   count:2,
                   pay_type:[
                     {pay_type:1,pay_name:'微信支付',pay_img:'/static/img/group_area/order/weixi.png'},
                     {pay_type:2,pay_name:'支付宝支付',pay_img:'/static/img/group_area/order/zfb.png'},
                     {pay_type:3,pay_name:'余额支付',pay_img:'/static/img/group_area/order/yn.png'},
                   ],
                   inviter:{
                      man_number:199,
                      want_man:1,
                      surplus_time:1558577988,
                   }
               },
              checked: true,
              //控制弹框显示
              popShow:true,    

                   
            
            }
    },
    methods:{
           //加
           submitAdd(){
               this.proNumber++
           },

           //减
           submitMinus(){
               if(this.proNumber>1){
                 this.proNumber--
               }
           },
           
          //选择支付方式
          selectPay(item,index){
            this.indexs = index  
              if(index === this.indexs ){
                if (item.cheack) {
                  item.cheack = false; 
                }else{
                  for (let i = 0; i < this.payment.length; i++) {
                    this.payment[i].cheack = false;
                  }
                  item.cheack = true; 
                }
              }
           }
    },
    components:{
        Pheader,
    },
    created(){
      console.log(this.confirm)
      var obj =  {
        /**整个head的style */
        head_wrap_style: {
          background: '#fff',
        },
        return_data: {
          need_model: true,
          icon: '/static/img/public/left_icon_555.png',
          /*跳转的路由(可以传参)，为空=>返回上一页*/
          url_data: '',
        },
        title: {
          /**是否-显示该模块 */
          need_model: true,
          name: '确认订单',
          style: {color:'#333'}
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
        }
    }
    this.$store.commit('change_head',obj);

  }
}
</script>

<style lang="stylus" scoped>
img 
  display block
  width 100%
  height 100%
header
  height 88px
.right-arrow 
    border-bottom: 2px solid #cccccc;
    border-right: 2px solid #cccccc;
    width: 10px;
    height: 10px;
    -webkit-transform: rotate(-45deg);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 14px;

.grop-order-main-wrap
 background #ffffff

.gropOrder-page
 padding-top 88px
 padding 0 24px
 box-sizing border-box

.gropOrder-page  .page-order
  display flex
  border 1.01px solid #efece9
  border-radius 10px

.gropOrder-page  .site-default .site-icon
  padding 34px
  height 63px
  width 63px

.gropOrder-page  .site-default  .site-msg
  flex 1
  width 80%

.site-default  .site-msg  .site-name
  font-size 30px
  font-weight 600
  padding-top 18px
  display inline-block
  max-width 48%

.site-default  .site-msg  .site-tel
  font-size 20px
  color #a4a4a4
  margin-left 10px
  max-width 48%
  display inline-block

.site-default  .site-msg .minute-site
  font-size 25px
  color #a4a4a4
  max-width 100%
  line-height 55px

.gropOrder-page .site-pro
  margin-top 18px
  padding 20px 20px 58px 20px
  border 1.01px solid #efece9
  margin-bottom 10px
  border-radius 10px

.site-pro  .site-list-title
  display flex
  height 50px
  line-height 50px
  width 100%
  margin-bottom 18px

.site-pro  .site-list-title .logo
  width 50px
  margin-right 18px

.site-pro  .site-list-title .site-shop
  max-width 50%
  font-size 30px
  font-weight 600

.site-pro .pro-ord-info .pro-list
  display flex

.pro-ord-info .pro-list .item-img
  width 225px
  height 225px
.pro-ord-info .pro-list  .item-text
 flex 1
 padding-left 28px
 width 70%
 
.pro-list  .item-text .text-name
  font-size 27px
  font-weight 600
  max-width 100%
  margin-top 16px
   
.pro-list  .item-text   .text-sku
  margin-top 16px

.item-text   .text-sku>span,.pro-list  .item-text  .text-price>span
  margin-right 10px
  font-size 20px
  color #a4a4a4
.pro-list  .item-text  .text-price
  line-height 90px 

.pro-sku 
  padding 50px 100px

.pro-sku   .sku-num
  display flex
  justify-content space-between
  height 40px

.pro-sku .delivery,.pro-sku .order-remark
  margin-top 33px

.pro-sku .order-remark
 margin-top 50px

.pro-sku   .sku-num  .buy-tt
  font-size 27px
  font-weight 600
  line-height 40px

.pro-sku   .sku-num  .buy-tt  .fff
  color #666
  margin-left 20px

.pro-sku   .sku-num  .buy-num
 border-radius 15px
 border 2px solid #dfdfdf

.pro-sku   .sku-num  .buy-num .btn
  width 58px
  display inline-block
  text-align center
  color #444
  line-height 40px
  border-right 1px solid #dfdfdf

.pro-sku   .sku-num  .buy-num   .btn-opt-plus
  border-right none
  border-left 1px solid #dfdfdf

.pro-sku   .sku-num  .buy-num>input
  width 90px
  color #444
  text-align: center
  border  none
  background #ffffff
  line-height 35px

.pro-sku .delivery .express
  max-width 40%

.pro-sku .delivery .express .express-name
  font-size 25px

.pro-sku .sku-num .delivery-tt
  max-width 60%
  display flex

.van-cell
  padding 0
  height 100%
  line-height 40px
  font-size 20px

.pro-sku .order-remark   .buy-num
  margin-left 20px
  flex 1
  border none
  border-radius 0
  border-bottom 1.01px solid #efece9

.van-field__control
  font-size 15px

.pro-totnum
  text-align right 
  padding-left 28px
  padding-right 28px
  font-size 25px

.pro-totnum .totol-num
  color #a4a4a4

.pro-totnum .total
  color #ff112f
  font-size 18px

.pro-totnum  .total-pp
  font-size 30px

.payment-mode
  padding 20px 20px 20px 30px 
  border 1.11px solid #efece9
  border-radius 10px
  margin-bottom 10px
.payment-mode  .mode-list
 display inline-block
.payment-mode  .mode-list .num
  font-size 22px
  color #151515
  font-weight 600
  line-height 40px
.ked
  display inline-block
  float right  
.payment-mode  .mode-list .item-icon
   line-height 45px
.payment-mode  .mode-list .item-icon .not
   margin-right 24px
   font-size 24px
   color #151515   
   font-weight 600
.payment-mode  .mode-list .item-icon .up
   font-size 20px
   color #f70a0a   
   font-weight 600
 .item-cheack .activeIcon
    width 25px
    height 20px
    margin 0 auto
    align-items center

.payment-mode .info-page
    display flex
    justify-content space-between

.payment-mode .info-page .info-item
     position relative
     width 50%

.payment-mode .info-page .info-item:last-child
     text-align right
     
.payment-mode .info-page .info-item>span 
    font-size 25px
    margin-right 10px
    max-width 50%

.payment-mode .info-page .info-item .right-invite
    padding-right 20px

.info-page .info-item .surplus
    color #f70a0a

.footer-bottom
    // display flex
    position fixed
    bottom 0
    left 0
    display inline-block
    float right
    width 100%
    background #fff
    line-height 90px
    border 1.1px solid #efece9
    padding 20px 20px 20px 35px
    box-sizing border-box
    -webkit-box-sizing border-box
    box-shadow: 0px 0px 5px 0px #cccccc;
    -webkit-box-shadow: 0px 0px 5px 0px #cccccc;
.footer-bottom .total-b>a
    display inline-block
    color #000
    font-size 30px
    font-weight 600
.total-b
    // flex 1 
    display inline-block    
    text-align right

.footer-bottom .total-b  .freight
    margin 0 18px 0 45px
    font-size 24px 
    color #9d9d9d

.footer-bottom .total-b .pirce 
    margin-right 56px
    color #f70a0a
    margin-left 32px

.footer-bottom .buyBtn
    float right 
    background #f70a0a
    color #ffffff
    width 177px
    height 95px
    line-height 95px
    text-align center
    font-size 32px
    border 0
.popup_wrap
  position absolute
  top 0
  left 0
  z-index 55
  width 100%
  height 100%
  background rgba(0,0,0,0.5)
.popup_wrap .up
  padding 552px 0 0
  margin 169px 0 0
  width 100%
  height 955px
  background url('/static/img/group_area/order/bounced.png') no-repeat
  background-size 100% 100%
  text-align center
  box-sizing border-box
  -webkit-box-sizing border-box
.popup_wrap .up .gain
	font-size 44px
	color #ffeb61
	box-shadow 0px 0px 15px 0px rgba(209, 32, 32, 0.59)
  font-family PingFang-SC-Bold
.cou
	color #ffdb7b
	box-shadow 0px 0px 15px 0px rgba(209, 32, 32, 0.59)
  font-family DINPro-Bold
.cou_num
  font-size 130px    
.cou_it
  font-size 50px
</style>
