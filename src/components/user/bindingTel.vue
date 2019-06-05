<template>
    <div class="bindingTel">
        <!-- 头部 -->
        <headtop></headtop>
        <div class="content">
            <div class="form-group">            
                <div class="input-group">
                    <input type="number" v-model="tel" placeholder="请输入11位手机号">
                </div>
                <div class="input-group">
                    <input type="text" placeholder="输入验证码">
                    <button class="getVerifyCode" :disabled="disabled" @click="getVerifyCode()">{{verifyCode}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import headtop from '@/components/public/page_top_head'

import { Toast } from 'vant'
Vue.use(Toast)

export default {
    name:'bindingTel',
    components: {
        headtop
    },
    data(){
        return{
            tel:'',
            disabled:false,//获取验证码按钮可点击，true不可点击
            verifyCode:"获取验证码"
        }
    },
     /*组件实例创建完成，属性已绑定，但DOM还未生成*/
    created: function(){
        /**head=>style */
        var style_obj = {
            head_wrap_style: {
                background: '#ffffff',
                borderBottom :'1px solid #e6e6e6'
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
                name: '手机号码绑定',
                style: {color:'#151515'}
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
            },
        }
        /**改变vuex对应头部数据 */
        this.$store.commit('change_head',style_obj);
    },
    methods:{
        // 倒计时
        countDown(){
            var count = 60
            var timer = setInterval( () => {
                if(count == 0){
                    clearInterval(timer)
                    this.verifyCode = '重新获取'
                    this.disabled = false;
                }
                // 补零操作
                else if(count < 10){
                    count = '0' + count
                    this.verifyCode = count + "秒后重试";
                    this.disabled = true;
                    count -- ;
                }else{
                    this.verifyCode = count + "秒后重试";
                    this.disabled = true;
                    count -- ;
                }
            },1000);
        },
        // 验证手机号码
        validatePhone(){
            if(!this.tel){
                Toast('手机号不能为空')
                return false;
            }else if(!/^1[345678]\d{9}$/.test(this.tel)){
                Toast('请填写正确的手机号码')
                return false;
            }else{
                return true;
            }
        },
        // 获取验证码
        getVerifyCode(){
            if(this.validatePhone()){
                // 发送网络请求
                this.countDown();
            }
        },

    }
}
</script>

<style lang="stylus" scoped>
.bindingTel
    background-color #ffffff
    min-height 100vh
    .content
        padding 108px 24px
        box-sizing border-box
        .form-group
            box-shadow 1px 1px 8px #ccc
            padding 30px 
            box-sizing border-box
            .input-group
                height 56px
                display flex
                align-items center
                border-bottom 1px solid #e6e6e6
                padding-bottom 10px
                margin-bottom 25px
                input
                    font-size 24px
                    flex 1
                    height 60px
                    border none
                .getVerifyCode
                    font-size 28px
                    color #ff4902
                    padding 0 10px
                    height 60px
                    line-height 60px
                    border 1px solid #ff4902
                    font-size 28px
                    background none
                    border-radius 25px
            .input-group:last-child
                border none
                margin 0

</style>
