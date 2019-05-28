<template>
    <!-- 默认: 透明底 -->
    <div class="head_wrap" :style="$store.state.top_head_data['head_wrap_style']">
        <div class="head_return_box">
          <img class="head_return_icon centered" :src="$store.state.top_head_data['return_data']['icon']" alt="">
          <!-- 遮盖，返回图标，防止部分手机，点击-图片放大 -->
          <p class="head_return_button" @click.stop="return_button($store.state.top_head_data['return_data']['url_data'])"></p>
        </div>
        <span class="head_title" v-if="$store.state.top_head_data['title']['need_model']" :style="$store.state.top_head_data['title']['style']">{{$store.state.top_head_data['title']['name']}}</span>
        <div class="head_right_button" v-if="$store.state.top_head_data['right_button']['need_model']" @click="right_button($store.state.top_head_data['right_button']['url_data'])">
          <span v-if="$store.state.top_head_data['right_button']['text']">{{$store.state.top_head_data['right_button']['text']}}</span> 
          <!-- 绝对定位,垂直水平居中 -->
          <img class="centered" v-else :class="$store.state.top_head_data['right_button']['icon']['class']" :src="$store.state.top_head_data['right_button']['icon']['icon_url']" alt="">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'page_top_head',
    /**data引用 vuex的数据 */
     
    methods: {
      /**返回 */
      return_button(_url){
        console.log('返回:',_url);
        if(_url){
          this.$router.push({ path: _url}) /**路由跳转 */
        }else {
          this.$router.go(-1); /** 返回上一层*/
        }
      },
      /**右边按钮 */
      right_button(_url){
        if(_url){
          this.$router.push({ path:_url}) /**路由跳转 */
          return false;
        }
        /**如果是模块显示=>切换 */
       this.$store.commit('head_right_but');

      },

    }

  }
</script>

<style lang="stylus" scoped>
  .head_wrap 
    // position: relative;
    position: fixed;
    top: 0;
    left: 0;
    z-index 1;
    width: 100%;
    height: 88px;
    background-color: transparent;
    text-align: center;
    font-size: 30px;
    line-height: 88px;
    letter-spacing: 5px;
    // font-weight: 580;

    
    .head_title 
      color: #333;

    .head_return_box
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 10%;
      height: 100%;

      .head_return_icon
        width: 19px;
        height: 33px;
    // return button
    .head_return_button
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: transparent;

    .head_right_button
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 15%;
      height: 100%;
      font-size: 26px;

      .head_right_button_icon
        display: block;
        

      


</style>
  
  
    