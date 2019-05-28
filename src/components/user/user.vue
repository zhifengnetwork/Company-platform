<template>
	<div class="zf-main-wrap">
		   <!-- 用户信息 -->
		   <div class="zf-user-info">
			   <header>
					<div class="user-info">
						<div class="user-box">
							<div class="user-img">
								<img src="static/img/user/0001.jpg" alt="">
							</div>
							<div class="user-name">
								<p class="name">王思聪</p>
								<p class="u-id">ID:1899720</p>
							</div>
						</div>
					</div>
					<div class="user-article">
						<div class="user-item">
							<router-link to="" class="user-reflect item-ta">
								<p class="user-pir publicEllipsis">100000</p>
								<p class="user-ti publicEllipsis">
									<span class="user-na publicEllipsis">提现余额
										<i class="right-arrow"></i>
									</span>
									<!-- <i class="right-arrow"></i> -->
								</p>
							</router-link>
							<router-link to="" class="user-coupon item-ta">
								<p class="user-pir publicEllipsis">500</p>
								<p class="user-ti publicEllipsis" >
									<span class="user-na publicEllipsis">优惠券
										<i class="right-arrow"></i>
									</span>
								</p>
							</router-link>
							<router-link to="" class="user-attention item-ta">
								<p class="user-pir publicEllipsis">100</p>
								<p class="user-ti publicEllipsis">
									<span class="user-na publicEllipsis">关注
										<i class="right-arrow"></i>
									</span>
								</p>
							</router-link>
						</div>
					</div>
			   </header>
		    <div class="zf-user-page">
				 <div class="user-info my-order">
                    <div class="user-title">
						<span class="my-tit">我的订单</span>
						<span class="my-look">查看全部订单
							<i class="right-arrow"></i>
						</span>
					</div>
					<div class="user-tabr">
						 <ul class="clearfloat">
							 <li v-for="item in tar" :key="item.id" class="item-tab">
								 <div class="item-img">
									 <img :src="item.src" alt="">
									 <p class="info-icon publicEllipsis van-info" v-if="item.info">10</p>
								 </div>
								 <p class="item-name">
									 {{item.name}}
								 </p>
							 </li>
						 </ul>
					</div>
				 </div>
				 <div class="user-info my-team">
                    <div class="user-title">
						<span class="my-tit">我的团队</span>
						<span class="my-look">查看明细
							<i class="right-arrow"></i>
						</span>
					</div>
					<div class="user-tabr">
						 <ul class="clearfloat">
							 <li  class="item-tab team">
								 <p class="item-img ">
									4000
								 </p>
								 <p class="item-name">
									 总业绩
								 </p> 
							 </li>
							 <li  class="item-tab team">
								 <p class="item-img">
									4000
								 </p>
								 <p class="item-name ">
									 总人数
								 </p> 
							 </li>
							 <li  class="item-tab team">
								 <p class="item-img">
									4000
								 </p>
								 <p class="item-name">
									 一级会员
								 </p> 
							 </li>
						 </ul>
					</div>
				 </div>
				 <div class="user-info my-list">
                    <div class="user-title" v-for="item in myList" :key='item.id'>
						<span class="my-tit">{{item.name}}</span>
						<span class="my-look">
							<i class="right-arrow"></i>
						</span>
					</div>
				 </div>
			</div>
		   </div>
	</div> 
</template>

<script>
import { Dialog } from 'vant';
	export default {
		data(){
			return {
				   tar:[
					   {
						   id:1,name:'待付款',gopush:'',src:'static/img/user/payment.png',info:true
					   },
					    {
						   id:2,name:'待发货',gopush:'',src:'static/img/user/shipments.png',
					   },
					    {
						   id:3,name:'待收货',gopush:'',src:'static/img/user/take.png',
					   },
					    {
						   id:4,name:'待评价',gopush:'',src:'static/img/user/evaluate.png',
					   },
					    {
						   id:5,name:'待退货',gopush:'',src:'static/img/user/sales.png',
					   },
				   ],
				   myList:[
					    {
						   id:1,name:'我的拼团',gopush:'',src:'static/img/user/payment.png',info:true
					   },
					    {
						   id:2,name:'供应商',gopush:'',src:'static/img/user/shipments.png',
					   },
					    {
						   id:3,name:'手机号码绑定',gopush:'',src:'static/img/user/take.png',
					   },
					    {
						   id:4,name:'地址管理',gopush:'',src:'static/img/user/evaluate.png',
					   },
					   
				   ],
			}
		},
			methods: {
		 
		
	},
	created(){
		Dialog.confirm({
		message: '升级为puls会员即可申请供应商',
		confirmButtonText:'去升级',
		confirmButtonColor:'#000',
		cancelButtonColor:'#666'
		}).then(() => {
		// on confirm
		}).catch(() => {
		// on cancel
		});	
	}
	}
</script>
  
<style lang="stylus" scoped>
img 
   margin 0 auto
   display block
   width 100%
   height 100%

.right-arrow 
    border-bottom: 2px solid #cccccc;
    border-right: 2px solid #cccccc;
    width: 15px;
    height: 15px;
    -webkit-transform: rotate(-45deg);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 14px;

  .zf-main-wrap 
   position: relative
   width: 100%
   background-color: #ffffff

.zf-user-info header 
   position relative
   height 380px
   width 100%

 header>.user-info
   height 322px
   background-image url('../../../static\img\user\back.png');
   background-size: 100%;
   
.user-info  .user-box
   padding-top 55px 
   display flex
   height 113px

.user-info  .user-box .user-img,.user-info  .user-box .user-name
   height 113px
   width 113px
   padding-left 23px
   line-height 40px

.user-info  .user-box .user-name
   max-width  80%

.user-box .user-img>img
   border-radius 50%

.user-box .user-name>p
   max-width 100%

.user-box .user-name .name
   color #fff
   font-size 30px
   padding-top 31px

.user-box .user-name .u-id
   color #fecfd5
   font-size 20px

.zf-user-info .user-article
   position absolute
   bottom  0
   height 140px
   padding 0 24px
   width 100%
   box-sizing border-box

.zf-user-info .user-article .user-item
   display flex
   border-radius 20px
   background-image url('../../../static\img\user\backgg.png');
   background-size: 100%

.user-article .user-item .item-ta
   width 33.1%
   text-align center
   color #e06f14
   font-size 30px
   margin 26px 0
   border-right 1px solid  #efece9

.user-article .user-item .item-ta:last-child
   border none

.user-article .user-item .item-ta .user-pir,.user-article .user-item .item-ta .user-ti
   width 100%
   font-weight: 600;

.user-article .user-item .item-ta .user-ti
   font-size 25px
   color #7d3613;
   position relative
   padding  0 10px
   box-sizing border-box
   margin-top 20px

.user-article .user-item .item-ta .user-ti .user-na
   position relative
   max-width 80%

.user-ti  .right-arrow
    border-bottom: 1px solid #7d3613;
    border-right: 1px solid #7d3613;
    right:-12px
    width 12px
    height 12px

.zf-user-page
    padding 0 24px
	box-sizing border-box

.zf-user-page .user-info
    padding 17px
    box-sizing border-box
    border-radius 14px
    background #ffffff
    margin-top 18px
    border 1.01px solid #efece9

.zf-user-page .user-info .user-title
    border-bottom 1px solid #efece9
    display flex
    justify-content space-between
    padding-bottom 10px

.user-title .my-tit
    color #000
    font-size 30px
    font-weight 700

.user-title	.my-look
    color #979797
    position relative
    margin-right 30px
    font-size 25px

.user-title	.my-look .right-arrow
   height 10px
   width 10px
   right -15px
   top -6px

.user-tabr ul .item-tab
   float left
   width 19.8%
   margin-top 17px
   text-align center
   border-right 1px solid #efece9

.user-tabr ul .item-tab:last-child
   border none

ul .item-tab .item-img
   position relative
   font-size 25px
   .info-icon
    display block
    position absolute
    border 2px solid #fc822e
    right 35%
    top -35%
    font-size 20px
    color #fea15a
    background #ffffff
    text-align center

ul .item-tab .item-img>img
   width 49px
   height 39px

ul .item-tab .item-name
   font-size 25px
   line-height 62px
   color #595959

.user-tabr ul .team
   width 33.2%

.zf-user-page .my-list
  padding-bottom 29px

.my-list .user-title .my-tit 
   color #525252
   font-weight 500
   font-size 25px

.my-list .user-title
   padding-top 40px

.my-list .user-title:first-child
   padding-top 18px

</style>