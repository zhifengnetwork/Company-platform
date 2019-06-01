<template>
    <div class="create-zf-wrap">
          <div class="create-code-box">
             <div class="code-banner">
                 <van-swipe  :show-indicators="false"  @change="onChange">
                    <van-swipe-item v-for="(image, index) in bannerList" :key="index" >
                        <div ref="box" id="boxImg">
                        <img v-lazy="image.img" />
                        <div class="code-icon">
                            <div class="code-box">
                                <img src="static/img/user/0001.jpg" alt="">
                            </div>
                            <div class="code-text">
                                <img src="static/img/friend/code/text.png" alt="">
                            </div>
                       </div>
                       </div>
                    </van-swipe-item>
                </van-swipe>
             </div>
          </div>
          <div class="friend-share-zf">
              <div class="friend-list">
                 <div class="share-box">
                         <ul>
                             <li class="share-item" v-for="item in shareList" :key="item.id" @click="share(item.id)">
                                 <p class="item-icon">
                                     <img :src="item.img" alt="">
                                 </p>
                                 <p class="item-text-name">
                                     {{item.name}}
                                 </p>
                             </li>
                         </ul>
                         <p class="share-title">取消</p>
                     </div>
              </div>
          </div>
    </div>
</template>
<script>
import { Lazyload } from 'vant';
//二维码和图片合成的海报
import html2canvas from 'html2canvas';
export default {
    data(){
        return{
              bannerList:[
                  { id:1,img:"/static/img/friend/code/banner.png"},
                  { id:2,img:"/static/img/friend/code/banner1.png"},
                  { id:3,img:"/static/img/friend/code/banner2.png"},
                  { id:4,img:"/static/img/friend/code/banner3.png"},
                  { id:5,img:"/static/img/friend/code/banner4.png"},
              ],
              shareList:[
                    {id:1,name:'微信好友',img:'/static/img/friend/WeChat.png'},
                    {id:2,name:'分享朋友圈',img:'/static/img/friend/friend.png'},
                    {id:3,name:'保存图片',img:'/static/img/friend/download.png'},
                  ],
            //生成的二维码海报
              imgUrl:'',
              indexImg:0,
        }
    },methods:{
         onChange(index){
            
                  this.indexImg = index
            
              this.draw(this.indexImg)
         },
        draw(index){
                var that = this;
                    html2canvas(that.$refs.box[index]).then(function(canvas) {
                    that.imgUrl = canvas.toDataURL("image/jpg")
                    that.bannerList[index].img = canvas.toDataURL("image/jpg")
                });
         },
          //下载图片
         fileDownload() {
                var that = this;
                    html2canvas(that.$refs.box[this.indexImg]).then(function(canvas) {
                    that.imgUrl = canvas.toDataURL("image/jpg")
                    });
                    var alink = document.createElement("a");
                    alink.href = this.imgUrl;
                    alink.download = "pic"; //图片名
                    alink.click();
          },

         //点击分享 //保存图片 //微信好友、
         share(id){
                    if(id === 3){
                        this.fileDownload();
                    }
         } 
    },
    mounted(){

    },
    created(){
        this.onChange()
    }
}
</script>
<style lang="stylus" scoped>
 img 
   margin 0 auto
   display block
   width 100%
   height 100%  

 .create-zf-wrap
   height 100vh
   max-height 100vh
   background #ffffff
   position relative

 .create-zf-wrap .create-code-box .code-banner .van-swipe,.create-code-box,.code-banner
  height 100%
  
 .create-code-box .code-icon
   position absolute
   bottom 210px
   display flex
   left 66px

 .create-code-box .code-icon .code-box
   width 200px
   height 200px
   background #ffffff
   border-radius 10px
   padding 10px
   box-sizing border-box
 
 .create-code-box .code-icon .code-text
   width 287px
   padding 27px 0 45px 40px
   box-sizing border-box

.friend-share-zf
   position fixed
   bottom 0px
   left 0
   right 0px

.share-box
          background #fff9f2;
          border-radius: 10px;
          height 100%
          padding 0 24px 24px 24px
  .share-box>ul
          display flex

  .share-box  .share-title
          height 72px
          line-height 72px
          font-size 36px
          background #ffc11b
          border-radius 10px
          text-align center
          color #ffffff

  .share-box>ul .share-item
          width 33.3%
          margin-top 45px
          margin-bottom 27px
          border-right 1.1px solid #e6e6e6

  .share-box>ul .share-item:last-child
          border none

ul .share-item .item-icon
          height 60px

ul .share-item .item-icon>img
          width 60px

ul .share-item  .item-text-name
          color #4b4b4b
          font-size 26px
          line-height 67px
          text-align center
</style>

