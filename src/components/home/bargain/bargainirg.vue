<template>
    <div class="bargainirg-box">
        <header class="public_head">  
              <Pheader></Pheader>
        </header>
      <div class="bargain-page">
           
      </div>
    </div>
</template>
<script>
//头部
import Pheader from '@/components/public/page_top_head'
export default {
      data(){
          return{

          }
      },
      components:{
          Pheader
      },
          created(){
                var obj =  {
                    /**整个head的style */
                    head_wrap_style: {
                    background: '',
                    },
                    return_data: {
                    icon: '/static/img/left_icon_fff.png',
                    /*跳转的路由(可以传参)，为空=>返回上一页*/
                    url_data: '',
                    },
                    title: {
                    /**是否-显示该模块 */
                    need_model: true,
                    name: '',
                    style: {color:'#333'}
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
                    }
                }
                this.$store.commit('change_head',obj);
    }
}
</script>
<style lang="stylus" scoped>

</style>
