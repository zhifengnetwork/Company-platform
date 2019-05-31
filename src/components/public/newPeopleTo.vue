<template>
    <div class="chose-panel" v-show="popShow" @click="popShow=false" @touchmove.prevent>
     <div class="backgImg">
        <div class="banner-pop-up" @click.stop="userClick=false">
               <div class="btn-pop-up">
                    <div class="btn-input">
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                    <div class="btn-free">
                         <button class="haveNot">免费领取</button>
                    </div>
               </div>
        </div>
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            popShow:true 
        }
    },
}
</script>
<style lang="stylus" scoped>
    .chose-panel 
        background: rgba(0,0,0,.3);
        bottom: 0;
        height: 100%;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
    .backgImg
        width 100%
        height 60%
        // max-height 100%
        margin-top  237px
        margin-bottom 25px
        position relative
    .banner-pop-up
        background url('/static/img/public/qiang.png') no-repeat
        background-size 100%
        height 100%
        width 100%
    
    .btn-pop-up
        // position absolute
        // top 491px
        // left 0
        width 100%
        padding-top 491px
    
    .btn-input
         width 480px
         height 120px
         background #ffffff
         border-radius 60px
         margin 0 auto 23px
    
    .btn-input>input
         border 0
         width 480px
         height 120px
         background #ffffff
         border-radius 60px
         text-align center
         font-size 36px

    .btn-free
         width 480px
         height 120px
         background-color: #b9b9b9
         border-radius 60px
         margin 0 auto
    
    .btn-free .haveNot
         border none
         text-align center
         line-height 120px
         width 480px
         border-radius 60px
         color #eaeaea
         font-size 36px

input::-webkit-input-placeholder 
        color: #bdbdbd;

   
</style>

