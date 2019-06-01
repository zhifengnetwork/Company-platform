<template>
    <div>
      
             <!-- 头部 -->
             <headtop></headtop>
            
            <div class="cart_ear"> 
                 <!-- 第一块产品区域 -->
                <!-- <div class="shop" v-for="(item,index) in imgUrl" :key="index">
                    <div :class="item.status ? 'xuanzhong':'weixuan'" @click="change(item.id,index)" >  
                    </div>
                    <div class="shop_img">
                        <img :src="item.url"  class="shop_pic"/>
                    </div> 
                </div> -->
                <div class="shop" v-for="(item,index) in shopList" :key="index">
                    <div :class="item.selected ? 'xuanzhong':'weixuan'" @click="change(item.id,index)">  
                    </div>
                    <div class="shop_img">
                        <img :src="item.img"  class="shop_pic"/>
                    </div>
                     <div class="shop_dec">
                        <p class="shop_title">{{item.goods_name}}</p>
                        <p class="xinghao">{{item['spec_key_name']}}</p>
                        <p class="shop_money">
                            <span class="shop_qian">￥{{item.goods_price}}</span>
                            <span  class="jian" @click="jian(index)"></span><span class="input_kuangg"><input type="text" class="input_kuang" v-model="item.goods_num"/></span><span  class="jia" @click="dec(index)"></span>
                        </p>  
                     </div> 
                </div>
            </div> 
            <!-- 全选状态栏 -->
            <div class="bottom_bar" v-show="$store.state['top_head_data']['right_button']['show']">               
                    <div :class="all===true ? 'quanxuan':'weixuan'" @click="quanxuan()"></div>
                    <span class="checkall">全选</span>
                    <p class="zonggong"><span class="fuhao">￥</span>{{totalprice}}</p>
                    <span class="free_tran">免运费</span>
                    <span class="go">去运算(20)</span>
            </div>
            <!-- 删除状态栏 -->
            <div class="delete_bar"  v-show="!$store.state['top_head_data']['right_button']['show']">
                  <div :class="all===true ? 'quanxuan':'weixuan'" @click="quanxuan()"></div>
                    <span class="checkall">全选</span>
                    <span class="delete" @click="deleteshop()">删除(20)</span>
            </div>

    </div>
</template>
<script>
/**头部 */
import headtop from '@/components/public/page_top_head'
    export default {
        name: 'cart',
        components:{
            headtop
        },
        data(){
			return {

                     all: 0,
                    // 商品列表
                    shopList:[
                        {
                            id: 12,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "美的（Midea） 11",
                            market_price: "2500.00",
                            goods_price: "1999.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "3998.00",
                            sku_id: 20,
                            goods_num: 0,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/1.jpg"
                            },
                            {
                            id: 13,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "蓝色裙子",
                            market_price: "2500.00",
                            goods_price: "1988.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "398.00",
                            sku_id: 20,
                            goods_num: 0,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/niang.png"
                            },
                            {
                            id: 14,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "蓝色裙子",
                            market_price: "2500.00",
                            goods_price: "19.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "398.00",
                            sku_id: 20,
                            goods_num: 0,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/niang.png"
                            },
                            {
                            id: 15,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "美的（Midea） 11",
                            market_price: "2500.00",
                            goods_price: "1999.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "3998.00",
                            sku_id: 20,
                            goods_num: 2,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/1.jpg"
                            },
                            {
                            id: 17,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "蓝色裙子",
                            market_price: "2500.00",
                            goods_price: "19.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "398.00",
                            sku_id: 20,
                            goods_num: 2,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/niang.png"
                            },
                            {
                            id: 18,
                            selected: 0,
                            user_id: 50,
                            groupon_id: 0,
                            goods_id: 37,
                            goods_sn: "",
                            goods_name: "美的（Midea） 11",
                            market_price: "2500.00",
                            goods_price: "1999.00",
                            member_goods_price: "1999.00",
                            subtotal_price: "3998.00",
                            sku_id: 20,
                            goods_num: 0,
                            spec_key_name: "规格:默认,颜色:阳光米",
                            img: "/static/img/cart/1.jpg"
                            }        
                    ]            
			}
		},
       
         created(){
			/**头部数据 */
			var head_obj = {
				/**整个head的style */
				head_wrap_style: {
					background: 'rgb(255,255,255)',
				},
				return_data: {
					icon: '/static/img/left_icon_555.png',
					/*跳转的路由(可以传参)，为空=>返回上一页*/
					url_data: '',
				},
				title: {
					/**是否-显示该模块 */
					need_model: true,
					name: '购物车',
					style: {color:'#000'}
				},
				right_button: {
					need_model: true,
					/**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
                    text: '编辑',
                    /**切换-模块（显隐），更换text */
			        change_text: '完成',
					/**图标=>内联失效(只能在头部组件style设置样式，传class名) */
					icon: {
                        // class: 'sha',
                        // icon_url: '/static/img/cart/delete.png',
						class: '',
                        icon_url: '',
                       
					},
					/**点击按钮-模块显示 */
					show: true,
					url_data: '',
				},
			}
            this.$store.commit('change_head',head_obj)          
        },
        methods:{

            // 勾选
            change(_id,_index){
               //根据 下标 和 每个商品的是否被选择的状态写
               this.shopList[_index].selected=!this.shopList[_index].selected
               var num=0;
               for(var i=0;i<this.shopList.length;i++){
                   if(this.shopList[i].selected==1){
                         num++;
                   }                      
                }
                if(num==this.shopList.length){
                    this.all=true
                }else{
                    this.all=false
                }

            },
            // 点击加号
            dec(k) {
                    this.shopList[k].goods_num++;
                },
            //点击减号    
            jian(k) {
                    if (this.shopList[k].goods_num < 1){    
                          this.shopList[k].number = 0
                    }else{
                         this.shopList[k].goods_num--;
                    }                                     
                },
            //全选按钮
            quanxuan(){
               this.all=!this.all
               var that=this
               if(that.all==true){
                   for(var i=0;i<that.shopList.length;i++){
                       that.shopList[i].selected=1
                   }
               }
               else{
                    for(var i=0;i<that.shopList.length;i++){
                       that.shopList[i].selected=0
                      }
                   }               
               },
            //删除商品
            deleteshop(){
                var arr=[];
                var k=''
               // this.shopList.splice(i, 1)
               for(var i=0;i<this.shopList.length;i++){
                   if(this.shopList[i].selected==1){
                        arr.push(i)
                        arr.sort()
                        arr.reverse()
                        console.log('arr'+arr)
                   }                              
                }
                for(var j=0;j<arr.length;j++){
                    var k=arr[j]
                    console.log('k'+k)
                    this.shopList.splice(k, 1)
                }
            }              
        },
        computed: {
                // 计算总钱数
                totalprice() {
                    var that=this;
                    var total = 0;
                    that.shopList.forEach((item,index) => {  
                            if(that.shopList[index].selected==1){
                                total += that.shopList[index].goods_price*that.shopList[index].goods_num
                            }
                    });                      
                    return total;
                }
            },
         watch:{
            // 获取当前路由
            $route(to, from) {
                console.log(this.$route.path);
            }
           }    

    }
</script>

<style lang="stylus" scoped>
.cart_ear
    width 92%
    margin 0 auto 
    margin-top 120px
    .shop
        width 100%
        height 224px
        border 1px solid #CCC
        border-radius 10px
        padding 20px 20px
        -moz-box-sizing: border-box;  
        -webkit-box-sizing: border-box; 
        -o-box-sizing: border-box; 
        -ms-box-sizing: border-box; 
        box-sizing: border-box;
        margin-bottom 15px     
        .weixuan
            display inline-block
            width 10%
            height 180px
            line-height 180px
            text-align center
            // border 1px solid green
            background url("/static/img/cart/weixuan.png") no-repeat
            background-size 40px 40px
            background-position:11px 75px;
        .xuanzhong
            display inline-block
            width 10%
            height 180px
            line-height 180px
            text-align center
            // border 1px solid green
            background url("/static/img/cart/xuanzhong.png") no-repeat
            background-size 40px 40px
            background-position:11px 75px;
        .shop_img
            display inline-block
            width 180px
            .shop_pic
                width 180px
                margin-top -100px
        .shop_dec
            vertical-align top
            display inline-block
            width 330px
            margin-left 12px
            .shop_title
                display inline-block
                width 334px
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical
                font-size 20px
            .xinghao
                font-size 20px
                color rgb(140,140,140)
                padding-top 15px
            .shop_money
                padding-top 60px
                font-size 30px
                color red
                font-weight bolder
                position relative
                .jian
                    border 1px solid #ccc
                    display inline-block
                    height 33px
                    line-height 33px
                    vertical-align top
                    width 47px
                    text-align center
                    border-top-left-radius 19px
                    border-bottom-left-radius 19px
                    color black
                    background url("/static/img/cart/jian.png") no-repeat
                    background-size 50% 100%
                    background-position: 13px 0px;
                    position absolute
                    left 205px
                    top 65px
                    
                .jia
                   border 1px solid #ccc
                   display inline-block
                   height 33px
                   vertical-align:top
                   width 47px
                   text-align:center
                   border-top-right-radius 19px
                   border-bottom-right-radius 19px
                   color black
                   line-height 33px
                   background url("/static/img/cart/jia.png") no-repeat
                   background-size 50% 90%
                   background-position: 7px 2px;
                   position absolute
                   left 320px
                   top 65px
                .input_kuangg
                    display inline-block
                    width 66px
                    height 33px
                    border 1px solid #CCC
                    display inline-block
                    position absolute
                    left 252px
                    top 66px
                    z-index 1    
                    .input_kuang
                        width 60px
                        height 32px
                        color black
                        text-align center
                        vertical-align top
                        font-weight bold 
                        position absolute
                        left 0px 
                        top 0px
                        border none
                        background #f5f5f5
                        z-index 1
                        outline none
                .shop_qian
                    padding-right 0px  
                    font-size 25px
    .shop:last-child
        margin-bottom 200px                 
.bottom_bar
    width 100%
    height 120px
    position fixed
    bottom 124px
    box-sizing border-box
    background white
    border-bottom 1px solid #CCC
    z-index 45
    .weixuan
            display inline-block
            width 10%
            height 100%
            text-align center
            // border 1px solid green
            background url("/static/img/cart/weixuan.png") no-repeat
            background-size 40px 40px
            background-position:15px 44px;
    .quanxuan
            display inline-block
            width 10%
            height 100%
            line-height 100%
            text-align center
            // border 1px solid green
            background url("/static/img/cart/xuanzhong.png") no-repeat
            background-size 40px 40px
            background-position:15px 44px;
    .checkall
        display inline-block
        height 120px
        line-height 120px
        vertical-align top
    .zonggong
        display inline-block
        vertical-align top
        width 250px
        height 120px
        line-height 120px
        text-align right
        color red
        font-size 45px
        .fuhao
            font-size 25px
    .free_tran
        display inline-block
        height 120px
        line-height 120px
        vertical-align top
    .go
        display inline-block
        vertical-align top
        background red
        height 100px
        text-align center
        line-height 100px
        margin 10px 0 0 40px
        border-radius 10px 
        color white
        padding 0 10px
.delete_bar
    width 100%
    height 120px
    position fixed
    bottom 124px
    box-sizing border-box
    background white
    border-bottom 1px solid #CCC
    z-index 45
    .weixuan
            display inline-block
            width 10%
            height 100%
            text-align center
            // border 1px solid green
            background url("/static/img/cart/weixuan.png") no-repeat
            background-size 40px 40px
            background-position:15px 44px;
    .quanxuan
            display inline-block
            width 10%
            height 100%
            line-height 100%
            text-align center
            // border 1px solid green
            background url("/static/img/cart/xuanzhong.png") no-repeat
            background-size 40px 40px
            background-position:15px 44px;
    .checkall
        display inline-block
        height 120px
        line-height 120px
        vertical-align top
    .delete
        display inline-block
        vertical-align top
        background red
        height 100px
        text-align center
        line-height 100px
        margin 10px 0 0 410px
        border-radius 10px 
        color white
        padding 0 10px                

</style>


