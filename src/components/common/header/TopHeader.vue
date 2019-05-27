<template>
    <div class="TopHeader" :style="{'position':customFixed ? 'fixed' : 'relative','background-color':bgColor?'':'#ff4d39'}">
        <div class="backBtn" @click="backAction">
            <span></span>
        </div>
        <div class="title">{{customTitle}}</div>
        <div class="rightBtn">
            <slot name="rightBtn"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TopHeader',
    props:{
        "backUrl":{
            type:String
        },
        'customTitle':{
            type:String,
            default:'标题'
        },
        'customFixed':{
            type:Boolean,
            default:false
        },
        'bgColor':{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        // 后退按钮
        backAction(){
            if(this.backUrl){
                this.$router.push(this.backUrl)
            }else{
                this.$router.go(-1)
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.TopHeader
    width 100%
    height 88px
    line-height 88px
    color #fff
    font-size 30px
    display flex
    justify-content space-between
    align-items center
    .backBtn
        width 10%
        text-align center
        span 
            width 19px
            height 33px
            display inline-block
            background url("/static/img/public/backBtn-icon.png") no-repeat
            background-size cover;
        .iconfont 
            font-size 36px
    .title
        text-align center
        flex 1 1 auto
    .rightBtn
        padding-right 30px
        box-sizing border-box
        .iconfont
            font-size 46px


</style>
