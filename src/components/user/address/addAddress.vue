<template>
    <div class="addAddress">
        <!-- 头部 -->
        <headtop></headtop>

        <div class="content">
            <div class="address-info">
                <div class="form-group">
                    <div class="label">收货人</div>
                    <div class="input-group">
                        <input type="text" placeholder="收货人姓名">
                    </div>
                </div>
                <div class="form-group">
                    <div class="label">手机号码</div>
                    <div class="input-group">
                        <input type="number" placeholder="输入电话号码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="label">收货地址 </div>
                    <div class="input-group">
                        <h3>嘉禾汇大厦</h3>
                        <p>点击选择地址</p>
                    </div>
                    <div class="right-arrow"></div>
                </div>
                <div class="form-group">
                    <div class="label">详细地址</div>
                    <div class="input-group">
                        <textarea placeholder="请输入详细地址" rows="1"></textarea>
                    </div>
                </div>
            </div>

            <div class="set-default">
                <div class="label">设置默认地址</div>
                <van-switch
                    v-model="checked"
                    size="24px"
                    @change="onCheack"
                />
            </div>
            
        </div>

    </div>
</template>

<script>
import headtop from '@/components/public/page_top_head'
export default {
    name:'addAddress',
    components: {
        headtop
    },
    data(){
        return {
            checked: false 
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
                icon: '/static/img/left_icon_555.png',
                /*跳转的路由(可以传参),为空=>返回上一页*/
                url_data: '',
            },
            title: {
                /**是否-显示该模块 */
                need_model: true,
                name: '收货地址',
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
        //选择默认地址时触发
        onCheack(val){
            console.log(val)
        }
    }

}
</script>

<style lang="stylus" scoped>
.addAddress
    min-height 100vh
    background-color #ffffff
    .content
        padding 108px 24px 0
        box-sizing border-box 
        .address-info
            padding 0 28px
            box-sizing border-box  
            box-shadow 1px 1px 8px #ccc
            margin-bottom 14px   
            .form-group
                height 56px
                display flex
                align-items center
                border-bottom 1px solid #e6e6e6
                padding-top 22px
                padding-bottom 10px
                .label
                    width 145px
                    font-size 24px
                    color #151515
                    margin-right 10px
                .input-group
                    flex 1
                    input
                        width 100%
                        height 30px
                        border none
                    textarea   
                        width 100%
                        border none
                    h3
                        color #151515
                        font-weight normal
                    p
                        color #838383  
                .right-arrow
                    width 8px
                    height 14px
                    background url("/static/img/user/address/right-arrow.png") no-repeat
                    background-size cover
                    margin-left 20px   
        .set-default
            height 88px
            display flex
            justify-content space-between
            align-items center 
            padding 0 28px
            box-sizing border-box  
            box-shadow 1px 1px 8px #ccc
            .label
                width 145px
                font-size 24px
                color #151515
                margin-right 25px    

</style>
