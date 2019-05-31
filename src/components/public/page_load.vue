<template>
    <div class="load_wrap" :style="$store.state.page_loadding['style']" v-show="$store.state.page_loadding['show']">
        <!-- 加载时 -->
        <div class="load_box" v-if="$store.state.page_loadding['state'] == 'start' ">
            <p class="load_box_move_box">
                <van-loading type="spinner" :style="{color: $store.state.page_loadding['load_icon_color']}" class="load_box_move" /><span class="load_box_move_tips">{{$store.state.page_loadding['tips_text']}}</span>
            </p>
        </div>
        <!-- 加载完成 -->
        <p class="load_box" v-if="$store.state.page_loadding['state'] == 'end' ">
            {{$store.state.page_loadding['tips_text']}}
        </p>
        <!-- 加载失败 -->
        <p class="load_box" v-if="$store.state.page_loadding['state'] == 'error' ">
            {{$store.state.page_loadding['tips_text']}}
        </p>
       

    </div>
</template>

<script>
/**分页加载-组件 */
export default {
    name: 'page_load',
    /**data引用 vuex的数据状态 */
    data(){
        return {
            /**loading-动画-加载定时器 */
            state: 0,
        }
    },
    mounted(){
        
    },
}
</script>

<style lang="stylus" scoped>
    .load_wrap 
        position: relative;
        width: 100%;
        height: 60px;
        font-size: 22px;
        color: #4a4949;
        text-align: center;
        line-height: 60px;
        letter-spacing: 2px;
        background: transparent;

        .load_box
            width: 100%;
            height: 100%;

            .load_box_move_box 
                display: table;
                margin: 0 auto;
                height: 100%;

                .load_box_move 
                    display: inline-block;
                    width: 30px;
                    height: 30px;

                .load_box_move_tips 
                    display: inline-block;
                    text-indent: 6px;

        
        
                    

</style>
