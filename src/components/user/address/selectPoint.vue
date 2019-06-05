<template>
    <div class="selectPoint">
        <div class="map">
            <iframe id="mapPage" width="100%" height="700px" frameborder=0
                src="https://apis.map.qq.com/tools/locpicker?search=1&policy=1&type=1&key=VFUBZ-JIR3D-Z2M4H-PPAGG-G5KVQ-S3F2S&referer=myapp">
            </iframe>
            <!-- <iframe id="mapPage" width="100%" height="700px" frameborder=0
                src="https://apis.map.qq.com/tools/locpicker?search=1&policy=1&type=0&backurl=http://3gimg.qq.com/lightmap/components/locationPicker2/back.html&key=VFUBZ-JIR3D-Z2M4H-PPAGG-G5KVQ-S3F2S&referer=myapp">
            </iframe> -->
        </div>
    </div>
</template>

<script>
export default {
    name:'selectPoint',
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
        var that = this;
        window.addEventListener('message', function(event){
            // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
            var loc = event.data;
            if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                console.log('location', loc.poiaddress,loc.poiname);
                // 跳转路由
                that.$router.push({name:'addAddress',params:{'poiaddress':loc.poiaddress,'poiname':loc.poiname}})
            }
        }, false);
    },
}
</script>

<style lang="stylus" scoped>
body
    position absolute
    width 100%
    height 100%
    text-align center
    .selectPoint
        min-height 100vh
        background-color #ffffff

    

            

</style>
