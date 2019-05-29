<template>
    <div class="load_wrap" :style="$store.state.page_loadding['style']" v-show="$store.state.page_loadding['show']">
        <!-- 加载时 -->
        <p class="load_box" v-if="$store.state.page_loadding['state'] == 'start' ">
            <span class="start_load">{{$store.state.page_loadding['tips_text']}}</span><i v-show="state == 1">.</i><i v-show="state == 2">.</i><i v-show="state == 3">.</i>
        </p>
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

        .start_load:after 
            content: " ";
            position: absolute;
            bottom: 0;
            z-index: 1;
            color: #000;
        //     animation: loading_an 1.5s linear infinite;
        //     -webkit-animation: loading_an 1.5s linear infinite;
        //     -moz-animation: loading_an 1.5s linear infinite;
        //     -ms-animation: loading_an 1.5s linear infinite;
        // @keyframes loading_an
        //     0%
        //         content: " ";
        //     25%
        //         content: ".";
        //     50%
        //         content: ". .";
        //     75%
        //         content: ". . .";
        //     100%
        //         content: ".";

        // @-webkit-keyframes loading_an
        //     0%
        //         content: " ";
        //     25%
        //         content: ".";
        //     50%
        //         content: ". .";
        //     75%
        //         content: ". . .";
        //     100%
        //         content: ".";

        // @-moz-keyframes loading_an 
        //     0%
        //         content: " ";
        //     25%
        //         content: ".";
        //     50%
        //         content: ". .";
        //     75%
        //         content: ". . .";
        //     100%
        //         content: ".";
            
        // @-ms-keyframes loading_an 
        //     0%
        //         content: " ";
        //     25%
        //         content: ".";
        //     50%
        //         content: ". .";
        //     75%
        //         content: ". . .";
        //     100%
        //         content: ".";
                    

</style>
