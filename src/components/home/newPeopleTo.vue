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
        {{data_val}}
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
                
            },
            /**删除改key */
            data_val: '',
           

        }
    },
    mounted: function(){
        /**当前的url */
        var this_url = window.location.href;
        /**
         * 1、判断是否-授权回来,传回的code参数 。
         * 2、绑定成功后。
         * **/
        // alert('token:::'+window.sessionStorage.getItem("token"));
        if(this_url.indexOf('code=') != -1 ){
            /**url的string */
            // alert(this_url);
            /**想要截取 code的值（还用start值） */
            var ginseng_str = this_url.split('code=')[1];
             /**code值 */
            var code_val = ginseng_str.split('&state=')[0];
            /** 截取 token*/
            var token_val = '';
            if(this_url.split('token=')[1]){
                token_val = this_url.split('token=')[1];
            }
           
            alert('code:'+code_val);
            /*授权成功后 axios=>请求 -s*/
            this.$axios.post("/user/get_code",{
                code: code_val
                })
                .then((_res)=>{
                    console.log('授权成功后-请求:',_res['data']['data']);
                    /**<<< 删除11 */
                    this.data_val = _res['data'];
                    /**删除11  >>>*/
                    // alert('授权成功后-请求1:'+_res['data']);
                    alert('授权成功后-请求2:'+_res['data']['data']);
                    if(+_res['data']['status'] == -2){
                        alert('授权失败！')
                    }
                    /**已-绑定手机 */
                    if(_res['data']['data']['is_checked'] == 1){
                        alert('已-绑定手机'+ _res['data']['data']['token'])
                        /**绑定手机-蒙版-默认：隐藏 */
                        // this.phone_box = false;
                        /**
                         * 因为 每次进入都要授权，所以用会话存储
                         * 存储token;
                         * **/
                        window.sessionStorage.setItem("token", _res['data']['data']['token']);    
                        /**弹框-蒙版 隐藏 */
                        this.popShow = false;
                        return false;
                    }
                     /**未-绑定手机 */
                    if(_res['data']['data']['is_checked'] == 0){
                        alert('未-绑定手机'+_res['data']['data']['id'])
                        /**绑定手机-蒙版 显示 */
                        this.phone_box = true;
                        /** 
                         * 存储-未绑定手机的id => 用来绑定时的参数之一。
                         * **/
                        this.power_data['not_phone_id'] =  _res['data']['data']['id'];
                        return false;
                    }
                    
                })
                .catch((_error) => {
                    alert('授权成功后-请求失败：'+_error);
                    console.log(_error);
                })
            /*授权成功后 axios=>请求 -e*/


        } else {
            /*axios=>请求 -s*/
            this.$axios.post("user/login")
                .then((res)=>{
                    console.log('进入页面请求-成功:',res['data']['data']);
                    alert('进入页面请求-成功:'+ res['data']['data']);
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
                .then((_data)=>{
                    alert('手机绑定请求-成功:',_data['data']['data']);
                     /**
                     * 因为 每次进入都要授权，所以用会话存储
                     * 存储token;
                     * **/
                    window.sessionStorage.setItem("token", _res['data']['data']['token']);    
                    
                })
                .catch((_err) => {
                    alert('手机绑定请求-失败：'+_err);
                    console.log(_err);
                })
            /*未绑定=> axios=>请求 -e*/
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

