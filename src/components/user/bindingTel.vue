<template>
    <div class="bindingTel">
        <!-- 头部 -->
        <headtop></headtop>
        <div class="content">
            <div class="input-group">
                <input type="number" placeholder="请输入11位手机号">
            </div>
            <div class="input-group">
                <input type="text" placeholder="输入验证码">
                <button></button>
            </div>
        </div>
    </div>
</template>

<script>
import headtop from '@/components/public/page_top_head'
export default {
    name:'bindingTel',
    components: {
        headtop
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
}
</script>

<style lang="stylus" scoped>

</style>
