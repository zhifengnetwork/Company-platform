<template>
    <!-- <div class="chose-panel" v-show="popShow" @click="popShow=false" @touchmove.prevent> -->
        <div class="chose-panel" v-show="popShow" @touchmove.prevent>
        <div class="backgImg" v-show="phone_box">
            <div class="banner-pop-up" @click.stop="userClick=true">
               <div class="btn-pop-up">
                    <div class="btn-input">
                        <input type="tel" v-model="phone" placeholder="请输入手机号码" @keyup="telText">
                    </div>
                    <div class="btn-free btnRed" >
                         <button class="haveNot " :class="{btnRed:showBtn}" :disabled="showBtn===false" @click.stop="not_phone_rq()">免费领取</button>
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
            popShow: true,
            /**绑定手机-蒙版，默认:false */
            phone_box: false,
            //手机号
            phone: '',
            //免费领取button高亮
            showBtn: false,
            /**授权的相关data */
            power_data: {
                 /**微信端--授权地址（后台传入） */
                author_url: null,
                /**未-绑定手机id */
                not_phone_id: null,
                /**授权后的token */
                _token: null,
            },

        }
    },
    mounted: function(){

        /**写死 token 上线删掉 -s*/
        var token_data = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEQyIsImlhdCI6MTU1OTYzOTg3MCwiZXhwIjoxNTU5Njc1ODcwLCJ1c2VyX2lkIjo3Nn0.YUQ3hG3TiXzz_5U594tLOyGYUzAwfzgDD8jZFY9n1WA"
        /**授权-也是写在 会话存储 里 */
        window.sessionStorage.setItem("token", token_data);
        console.log("token: ",window.sessionStorage.getItem("token"));
        /**改 this_router存在时，代表是从其它页面跳转过来--授权的 => 授权完调回到该页面 */
        if(window.sessionStorage.getItem("this_router")){
            window.location.href = window.sessionStorage.getItem("this_router");
        }else {
            /**弹框-蒙版 隐藏 */
            this.popShow = false;
            return false;
        }
        
        /**写死 token 上线删掉 -e*/


        /**当前的url */
        var this_url = window.location.href;
        /**
         * 1、判断是否-授权回来,传回的code参数 。
         * 2、绑定成功后。
         * **/
        /**判断在 sessionStorage 是否存在 token,同时请求后台-返回的token不是undefined */
        if(window.sessionStorage.getItem("token") && window.sessionStorage.getItem("token") != undefined){
            this.power_data['_token'] = window.sessionStorage.getItem("token");
            /**弹框-蒙版 隐藏 */
            this.popShow = false;
            return false;
        }
        
        /**返回的url有code，但token为空 => 退出软件，重新进入(会话存储) */
        // if(this_url.indexOf('code=') != -1 && this.power_data['_token'] == null){
        if(this_url.indexOf('code=') != -1){
            /**url的string =>截取 code的值（还用start值） */
            var ginseng_str = this_url.split('code=')[1];
             /**code值 */
            var code_val = ginseng_str.split('&state=')[0];
            /** 截取 token*/
            var token_val = '';
            if(this_url.split('token=')[1]){
                token_val = this_url.split('token=')[1];
            }
            // alert('code:'+code_val);
            /*授权成功后 axios=>请求 -s*/
            this.$axios.post("/user/get_code",{
                code: code_val
                })
                .then((_res)=>{
                    // alert('授权成功后-请求--状态:'+_res['data']['data']['is_checked']);
                    /**请求数据的状态 */
                    if(_res['data']['status'] == 1){
                        /**已-绑定手机 */
                        if(_res['data']['data']['is_checked'] == 1){
                            // alert('已-绑定手机，token:'+ _res['data']['data']['token'])
                            /**
                             * 因为 每次进入都要授权，所以用会话存储
                             * 存储token;
                             * **/
                            window.sessionStorage.setItem("token", _res['data']['data']['token']);  
                            window.sessionStorage.setItem("this_router",window.location.href)
                            /**改 this_router存在时，代表是从其它页面跳转过来--授权的 => 授权完调回到该页面 */
                            if(window.sessionStorage.getItem("this_router")){
                                window.location.href = window.sessionStorage.getItem("this_router");
                            } else {
                                /**弹框-蒙版 隐藏 */
                                this.popShow = false;
                                return false;   
                            } 
                           
                        }
                        /**未-绑定手机 */
                        if(_res['data']['data']['is_checked'] == 0){
                            // alert('未-绑定手机'+_res['data']['data']['id'])
                            /**绑定手机-蒙版 显示 */
                            this.phone_box = true;
                            /** 
                             * 存储-未绑定手机的id => 用来绑定时的参数之一。
                             * **/
                            this.power_data['not_phone_id'] =  _res['data']['data']['id'];
                            return false;
                        }
                    } else {
                        /**没数据 */
                        alert(_res['data']['msg']);
                        return false;
                        
                    } 
                    
                })
                .catch((_error) => {
                    alert('授权成功后-请求失败：'+_error);
                    console.log(_error);
                })
            /*授权成功后 axios=>请求 -e*/

        } else { 
        // } else if(this.power_data['_token'] == null) {   /**如果会话存储--存在 token  */
            /*axios=>请求 -s*/
            this.$axios.post("user/login")
                .then((res)=>{
                    console.log('进入页面请求-成功:',res['data']['data']);
                    // alert('进入页面请求-成功:'+ res['data']['data']);
                    /**未-授权过 */
                    if(res['data']['status']){
                        /**微信端--授权地址 */
                        this.power_data['author_url'] = res['data']['data'];
                        this.isWeiXin(); 
                    }
                })
                .catch((error) => {
                    alert('进入页面请求-失败：'+error);
                    console.log(error);
                })
            /*axios=>请求 -e*/

        } 
        
    },
    methods:{
        /**判断当前是否-微信端 */
        isWeiXin() {
            /**判断是否为：1 => 微信端（后台默认1）， 2 => 网页端 */
            // var type_start = null;
            var ua = window.navigator.userAgent.toLowerCase();
            /**判断=> 微信环境 && 手机端环境 */
            if (ua.match(/MicroMessenger/i) == 'micromessenger' && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                // alert('微信端');
                window.location.href = this.power_data['author_url'];
                // type_start = 1;
            }else {
                // alert('不是-微信端22');
                // type_start = 2;
                /**绑定手机-蒙版 显示 */
                this.phone_box = true;
            }
        },
        //控制 免费领取 button
        telText(){
             var mobile=/^[1]([3-9])[0-9]{9}$/;
             if(this.phone!='' && mobile.test(this.phone)){  //如果不等于空并且满足正则
                 this.showBtn=true
             }else{
                 this.showBtn=false
             }
        },
        /**绑定手机的请求 */
        not_phone_rq() {
            /*未绑定=> axios=>请求 -s*/
            this.$axios.post("user/binding_mob",{
                id: this.power_data['not_phone_id'],
                mobile: this.phone,
            })
                .then((_data) => {
                    // alert('手机绑定请求-成功token::'+_data['data']['data']['token']);
                    /**
                     * 因为 每次进入都要授权，所以用会话存储
                     * 存储token;
                     * **/
                    window.sessionStorage.setItem("token", _data['data']['data']['token']);
                    /**改 this_router存在时，代表是从其它页面跳转过来--授权的 => 授权完调回到该页面 */
                    if(window.sessionStorage.getItem("this_router")){
                        window.location.href = window.sessionStorage.getItem("this_router");
                    } else {
                        /**弹框-蒙版 隐藏 */
                        this.popShow = false;
                    } 
                   
                })
                .catch((_err) => {
                    alert('手机绑定请求-失败：'+_err);
                    console.log(_err);
                })
            /*未绑定=> axios=>请求 -e*/
        },

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
        background url('/static/img/home/new_red_package.png') no-repeat
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

