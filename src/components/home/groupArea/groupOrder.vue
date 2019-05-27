<template>
    <div class="grop-order-main-wrap">
          <header>  
              <Pheader  ></Pheader>
          </header>
           <div class="gropOrder-page">
                <div class="site-default page-order">
                    <div class="site-icon">
                        <img src="static/img/group_area/order/site.png" alt="">
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
                        <img src="static/img/group_area/order/logo.png" alt="" class="logo">
                        </span>
                        <p class="site-shop publicEllipsis">优衣库自营店</p>
                    </div>
                    <div class="pro-ord-info">
                         <div class="pro-list">
                             <div class="item-img">
                                 <img src="static/img/group_area/order/1.png" alt="">
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
                                    <a href="javascript:;" class="btn btn-opt-minus">-</a>
                                    <input type="text" data-min="1" disabled value="1">
                                    <a href="javascript:;" class="btn btn-opt-plus">+</a>
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
                                rows="1"
                                autosize
                                />
                                </div>
                            </div>
                         </div>
                    </div>
                     <div class="pro-totnum">
                          <span class="totol-num">共2件:</span>
                          <span class="totol-text">共计:</span>
                          <span class="total">￥720.00</span>
                     </div>
                </div>
                <div class="payment-mode">
                    <div class="mode-list">
                        <div class="item-icon">
                            <img src="static/img/group_area/order/weixi.png" alt="">
                            <P>微信支付</P>
                        </div>
                        <div class="item-cheack">
                            <img src="static/img/group_area/order/cheack.png" alt="">
                        </div>
                    </div>
                    <div class="mode-list">
                        <div class="item-icon">
                            <img src="static/img/group_area/order/zfb.png" alt="">
                            <P>支付宝支付</P>
                        </div>
                        <div class="item-cheack">
                            <img src="static/img/group_area/order/cheack.png" alt="">
                        </div>
                    </div>
                    <div class="mode-list">
                        <div class="item-icon">
                            <img src="static/img/group_area/order/yn.png" alt="">
                            <P>银联支付</P>
                        </div>
                        <div class="item-cheack">
                            <img src="static/img/group_area/order/cheack.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="payment-mode">
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
                </div>
           </div>
           <div class="footer-bottom">
                   <a href="" class="text">实付款:</a>
                   <a href="" class="pirce">￥720.00</a>
                   <a href="" class="freight">免运费</a>
                   <a href="" class="buyBtn">立即付款</a>
           </div>
    </div>
</template>
<script>
import Pheader from '../../public/page_top_head'
export default {
    data(){
        return{
            //备注
            message:''
        }
    },
    components:{
        Pheader,
    }
}
</script>

<style lang="stylus" scoped>

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
  height 40px
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
  height 35px
  color #444
  text-align: center
  border  none
  background #ffffff
  line-height 35px

.pro-sku .delivery .express
  max-width 40%

.pro-sku .delivery .express .express-name
  font-size 15px

.pro-sku .sku-num .delivery-tt
  max-width 60%
  display flex

.van-cell
  padding 0
  height 100%
  line-height 40px
  font-size 10px

.pro-sku .order-remark   .buy-num
  margin-left 20px
  flex 1
  border none
  border-radius 0
  border-bottom 2px solid #a4a4a4

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

.payment-mode
  padding 19px
  border 1.11px solid #efece9
  border-radius 10px
  margin-bottom 10px

.payment-mode  .mode-list
  height 50px
  display flex
  justify-content space-between
  margin-bottom 29px

.payment-mode  .mode-list .item-icon
    width 30%
    display flex 
    line-height 50px

.payment-mode  .mode-list .item-icon>img
    width 50px
    height 50px
    margin-right 10px

.payment-mode  .mode-list .item-cheack
    width 44px
    height 44px

.payment-mode .info-page
    display flex
    justify-content space-between

.payment-mode .info-page .info-item
     position relative
     width 50%

.payment-mode .info-page .info-item:last-child
     text-align right
     
.payment-mode .info-page .info-item>span 
    font-size 20px
    margin-right 10px

.payment-mode .info-page .info-item .right-invite
    padding-right 20px

.info-page .info-item .surplus
    color #f70a0a

.footer-bottom
    display flex
    height 123px
    line-height 123px
    margin-bottom 24px
    border 1.1px solid #efece9
    position relative

.footer-bottom>a
    display inline-block
    color #000

.footer-bottom .text,.footer-bottom .pirce
    font-size 30px
    padding-left 123px

.footer-bottom .pirce
    color #f70a0a
    padding-left 50px

.footer-bottom .freight
    padding-left 80px
    padding-right 10px
    
.footer-bottom .buyBtn
    background #f70a0a
    color #ffffff
    width 177px
    height 90px
    margin-top 15px
    line-height 90px
    text-align center
    font-size 32px
    position absolute
    right 10px
</style>
