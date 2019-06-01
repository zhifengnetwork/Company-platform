<template>
    <div class="invitaMun">
         <Pheader></Pheader>
         <div class="invtia-page-zf">
                 <div class="zf-page-banner">
                     <img src="static/img/friend/song.png" alt="">
                 </div>
                 <div class="zf-fen-share">
                     <div class="share-box">
                         <p class="share-title">给好友送免费礼物</p>
                         <ul>
                             <li class="share-item" v-for="item in shareList" :key="item.id">
                                 <p class="item-icon">
                                     <img :src="item.img" alt="">
                                 </p>
                                 <p class="item-text-name">
                                     {{item.name}}
                                 </p>
                             </li>
                           
                         </ul>
                     </div>
                 </div>
                 <div class="zf-fen-share-list zf-fen-share">
                     <div class="share-list">
                          <div class="list-box">
                              <div class="item-title">
                                  <div class="item-left"></div>
                                  <div class="item-center-text">已推荐好友</div>
                                  <div class="item-right"></div>
                              </div>
                              <div class="item-record">
                                  <ul class="record-list-box">
                                      <li class="record-list" v-for="(item,index) in friendList" :key="index">
                                          <div class="record-div">
                                              <span class="record-img">
                                               <img src="static/img/user/0001.jpg" alt="">
                                               </span>
                                              <span class="record-name publicEllipsis">{{item.name}}</span>
                                          </div>
                                          <span class="record-time publicEllipsis">{{item.time}}</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                     </div>
                 </div>
                 <div class="zf-fen-share zf-info-mos">
                     <div class="share-list">
                     <div class="item-title">
                                  <div class="item-left"></div>
                                  <div class="item-center-text">活动细则</div>
                                  <div class="item-right"></div>
                     </div>
                      </div>
                     <div class="item-text-msg">
                           <div class="text-msg">
                               <div>1.</div>
                               <p class="msg">被推荐的新小伙伴输入手机号，即可获赠1张新人免费卷+X张X折扣卷。（X先
                                 写X即可到时再填）可用于XXX区域。（仅限1件产品，不含运费），新人劵有
                                 效期3天。（同一手机号，同一手机仅可领取一次）。</p>
                           </div>
                           <div class="text-msg">
                               <div>2.</div>
                               <p class="msg">您推荐的新小伙伴只要产生消费（含新人劵）您即可获得XXX体验卷，可用于
                                 XXX区域，有效期60天。</p>
                           </div>
                           <div class="text-msg">
                                <div>3.</div>
                                <p class="msg">您推荐的新小伙伴同一手机设备，同一手机号码仅可领取一次。</p>
                           </div>
                           <div class="text-msg">
                               <div >4.</div>
                                <p class="msg">您邀请的新小伙伴所赠劵，仅限本人使用，用于商业犀利将有封号风险。</p>
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
                  shareList:[
                    {id:1,name:'微信好友',img:'static/img/friend/WeChat.png'},
                    {id:2,name:'朋友圈',img:'static/img/friend/friend.png'},
                    {id:3,name:'生成美图',img:'static/img/friend/view.png'},
                  ],
                  friendList:[
                    {id:1,name:'王思聪',img:'static/img/user/0001.jpg',time:'2019-10-5'},
                    {id:2,name:'吴彦祖',img:'static/img/user/0001.jpg',time:'2019-10-5'},
                    {id:3,name:'余文乐',img:'static/img/user/0001.jpg',time:'2019-10-5'}, 
                    {id:3,name:'陈冠希',img:'static/img/user/0001.jpg',time:'2019-10-5'}, 
                    {id:4,name:'王思聪',img:'static/img/user/0001.jpg',time:'2019-10-5'},
                    {id:5,name:'吴彦祖',img:'static/img/user/0001.jpg',time:'2019-10-5'},
                    {id:6,name:'余文乐',img:'static/img/user/0001.jpg',time:'2019-10-5'}, 
                    {id:7,name:'陈冠希',img:'static/img/user/0001.jpg',time:'2019-10-5'},
                  ]
            }
    },
    created() {
        this.defaultHeader()
    },
    methods:{
               //默认头部
        defaultHeader(){
            var obj =  {
                    /**整个head的style */
                    head_wrap_style: {
                    background: '',
                    },
                    return_data: {
                    icon: '/static/img/public/left_icon_fff.png',
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
        },
    },
    mounted(){

    },
    components:{
        Pheader
    }
            
}
</script>
<style lang="stylus" scoped>
img 
   margin 0 auto
   display block
   width 100%
   height 100%
 .invitaMun
          background #f16e52;

 .invitaMun  .zf-page-banner
          height 630px
  .invtia-page-zf .zf-fen-share
          padding 0 23px 23px 23px
          box-sizing border-box

.invtia-page-zf .zf-fen-share   .share-box
          background #fff9f2;
          border-radius: 10px;
          height 100%

.zf-fen-share   .share-box>ul
          display flex

 .zf-fen-share   .share-box  .share-title
          height 72px
          line-height 72px
          font-size 36px
          background #ffc11b
          border-radius 10px 10px 0 0
          text-align center
          color #ffffff

.zf-fen-share   .share-box>ul .share-item
          width 33.3%
          margin-top 45px
          margin-bottom 27px
          border-right 1.1px solid #e6e6e6

ul .share-item .item-icon
          height 60px

ul .share-item .item-icon>img
          width 60px

ul .share-item  .item-text-name
          color #4b4b4b
          font-size 26px
          line-height 67px
          text-align center

.zf-fen-share-list .share-list
          padding 29px 43px
          background-color #f37e66
          border-radius: 10px;

.zf-fen-share  .item-title 
          display flex
          justify-content space-between

.zf-fen-share  .item-title .item-left
           background url('/static/img/friend/left.png')
           background-size 100% 100%
           height 10px
           width 30%
           margin-top 10px


.zf-fen-share  .item-title  .item-center-text
           color #ffffff
           font-size 28px
           line-height 36px

.zf-fen-share  .item-title  .item-right 
           background url('/static/img/friend/right.png')
           background-size 100% 100%
           height 10px
           width 30%
           margin-top 10px

.record-list-box
           height 320px
           overflow hidden
           overflow-x: hidden;
           overflow-y: scroll;

.record-list-box  .record-list
           display flex
           justify-content space-between
           line-height 70px
           padding 9px 97px
           border-bottom: solid 1px #ff9b86;

.record-list-box  .record-list .record-div
           height 70px
           display flex
           justify-content space-between
           max-width 50%
           padding-left 10px

.record-list-box  .record-list .record-img
           width 70px
           height 70px
           border: solid 1px #ffffff
           border-radius 50%
           display inline-block
           margin-right 24px

.record-list-box  .record-list .record-img>img
           border-radius 50%
           
.record-list-box  .record-list .record-name,.record-list-box  .record-list .record-time
           font-size 24px  
           line-height 70px
           color: #ffffff
           max-width 50%

.item-text-msg
           margin-top 30px

.item-text-msg .text-msg
           font-size: 20px;
           color: #ffffff;
           line-height: 36px;
           display flex

.item-text-msg .text-msg .msg
           color: #ffffff;
           line-height: 36px;  
.zf-info-mos .share-list
           padding 29px 43px 0 43px
</style>

