<template>
    <div class="chose-panel" v-show="popShow" @click="popShow=false" @touchmove.prevent>
     <div class="backgImg">
        <div class="banner-pop-up" @click.stop="userClick=false">
               <div class="btn-pop-up">
                    <div class="btn-input">
                        <input type="tel" v-model="phone" placeholder="请输入手机号码" @keyup="telText">
                    </div>
                    <div class="btn-free btnRed" >
                         <button class="haveNot " :class="{btnRed:showBtn}" :disabled="showBtn===false">免费领取</button>
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
            //控制弹框显示
            popShow:true,
            //手机号
            phone:'',
            //免费领取btn高亮
            showBtn:false
        }
    },
    methods:{
        //控制免费领取btn
        telText(){
             var mobile=/^[1]([3-9])[0-9]{9}$/
             if(this.phone!='' && mobile.test(this.phone)){  //如果不等于空并且满足正则
                 this.showBtn=true
             }else{
                 this.showBtn=false
             }
        }
    }
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
        height 70%
        // max-height 100%
        margin-top  237px
        margin-bottom 25px
        position relative
    .banner-pop-up
        background url('/static/img/public/qiang.png') no-repeat
        background-size 100% 100%
        height 100%
        width 100%
    
    .btn-pop-up
        position absolute
        left 0
        bottom 120px
        width 100%
    
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
         color #ffffff
         font-size 36px
    
    .btn-free .btnRed
         background-color #ff1233
input::-webkit-input-placeholder 
        color: #bdbdbd;

   
</style>

