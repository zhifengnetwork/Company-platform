<template>
    <div class="branch">
        <div class="branch_title">
            <img class="branch_title_img" src="static/img/public/getinto_share_icon.png" alt="">
        </div>
        <div class="branck_nav">
            <ul class="branck_tab">
                <li class="branck_tab_list" @click="toggle(index)" v-for="(item,index) in data.list" :key="index" :class="active==index?'active':''">{{item.name}}</li>
            </ul>
            <ul class="branck_tabItem">
                <!-- tab内容 -->
                <li v-for="(item,index) in data.list" :key="index" v-show="active==index">
                    <div class="branck_tabItem_content">
                        <!-- 列表项 -->
                       <div class="branck_tabItem_content_list clearfloat" v-for="(item,index) in data.item" :key="index">
                           <div class="branck_tabItem_content_imgwrap">
                               <img class="branck_tabItem_content_img" :src="item.img" alt="">
                           </div>
                           <div class="branck_tabItem_content_text">
                               <p class="branck_tabItem_content_name apostrophe">{{item.name}}</p>
                               <p class="branck_tabItem_content_price">￥{{item.price}}</p>
                           </div>
                       </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'branch_class',
    data() {
        return {
            active:0,
            data:{
                list:[
                    {name:'商品1'},
                    {name:'商品2'},
                    {name:'商品3'},
                    {name:'商品4'},
                    {name:'商品5'},
                    {name:'商品6'},
                    {name:'商品7'},
                    {name:'商品8'},
                    {name:'商品9'},
                    {name:'商品9'},
                    {name:'商品9'},
                    {name:'商品9'},
                ],
                item:[
                    {name:'商品1',img:'static/img/000⑨.png',price:'100.00'},
                    {name:'商品2',img:'static/img/000⑨.png',price:'200.00'},
                    {name:'商品3',img:'static/img/000⑨.png',price:'300.00'},
                    {name:'商品4',img:'static/img/000⑨.png',price:'400.00'},
                    {name:'商品5',img:'static/img/000⑨.png',price:'500.00'},
                    {name:'商品6',img:'static/img/000⑨.png',price:'600.00'},

                ]
            }
        }
    },
    methods:{
        toggle(i){
            this.active=i;
        }
  },
}
</script>

<style lang="stylus" scoped>
.branch_title
    width 100%
    height 250px
.branch_title_img
    display block
    margin 0 auto
    width 80%
    height 100%
    border-radius 10px
.branck_tab
    position fixed
    margin-top 20px
    margin-right 10px
    width 185px
    height 79.8vh
    overflow-y scroll
    padding-bottom 115px
    box-sizing border-box
    -moz-box-sizing border-box
    -webkit-box-sizing border-box
    border-radius 10px
    border 2px solid #ccc
    background #fff
.branck_tab_list
    display block
    height 100px
    line-height 100px
    text-align center
    background #fff
.branck_tabItem
    float right 
    width 550px
    margin-bottom 120px
.branck_tabItem_content
    width 98%
    height auto
    margin-top 20px
.branck_tabItem_content_list
    width 100%
    background #fff
    border-radius 10px
    margin 20px 0
    padding 10px
    box-sizing border-box
    -moz-box-sizing border-box
    -webkit-box-sizing border-box
    border 2px solid #ccc
.branck_tabItem_content_imgwrap
    float left
    width 200px
    height 200px
    border-radius 10px
    margin-right 10px
    overflow hidden
.branck_tabItem_content_img
    width 100%
    height 100%
.branck_tabItem_content_price
    margin-top 80px
    color #ff1936
.active
    color #fc612c
    border-radius 10px 
    border 2px solid #ccc
    background #f8f8f8
</style>
