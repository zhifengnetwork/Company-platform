<template>
    <div class="bargainirg-box">
        <header >  
              <Pheader></Pheader>
        </header>
      <div class="bargain-page">
               <div class="header-banner" id="header-banner">
                    <div class="banner-rule">
                        <img src="static/img/bargain/lo.png" alt="" class="banner-right">
                    </div>
                      <div class="popup-box">
                    <ul class="popup-info " :class="{marquee_top:animate}">
                        <li class="popup-list"  v-for="item in list" :key="item.id">
                            <p class="popup-p">
                                <img src="static/img/user/0001.jpg" alt="" class="popup-head">
                                <span class="popup-message publicEllipsis">{{item.name}}的表砍了{{item.pic}}元</span>
                            </p>
                        </li>
                    </ul>
                </div>
               </div>
               <div class="page-main">
                   <div class="bargain-list" v-for="(item,index) in bargainList" :key="index" :data-goId="item.goods_id">
                       <div class="item-proImg">
                           <img :src="baImg+item.img" alt="">
                       </div>
                       <div class="item-detail-text">
                            <div class="name">
                                <router-link to="" class="name-text apostrophe">{{item.goods_name}}</router-link>
                            </div>
                            <div class="detail-pric">
                                  <div class="price">
                                          <div class="price-red">
                                                  ￥
                                              <span class="red-rbn">{{item.surplus_amount}}</span>
                                              <span class="red-original">￥{{item.price}}</span>
                                          </div>
                                          <div class="schedule" v-if="item.is_chopper===1">
                                              <van-progress
                                                color="#ff0b13"
                                                :percentage="item.div"
                                                pivot-text=''
                                                />
                                          </div>
                                          <div class="over-time">
                                              <span>距离结束:</span>
                                              <span class="tiem-text publicEllipsis">{{item.down}}</span>
                                          </div>
                                  </div>
                                  <div class="bargain-btn">
                                        <p class="btn-kan" v-if="item.is_chopper===1">继续砍</p>
                                        <p class="btn-kan" v-if="item.is_chopper===0">砍一刀</p>
                                        <p class="kan-pir publicEllipsis" v-if="item.is_chopper===1">已砍{{item.already_amount}}元</p>
                                        <span class="kan-take publicEllipsis">已有{{item.participants}}参与人</span>
                                  </div>
                            </div>
                       </div>
                   </div>
                   
               </div>
      </div>
    </div>
    
</template>
<script>
//头部
import Pheader from '@/components/public/page_top_head'
import { Swipe, SwipeItem,} from 'vant';


export default {
      data(){
          return{
                 show:1,
                 list:[
                     {id:1,name:'王思聪',pic:'0.1'},
                     {id:2,name:'王思聪的表妹',pic:'0.2'},
                     {id:3,name:'王思聪的车',pic:'0.3'},
                     {id:4,name:'王思聪的狗',pic:'0.4'},
                     {id:5,name:'王思聪的手',pic:'0.5'},
                 ],
                 CountDown:'',
                 //显示页码
                 page:1,
                 //渲染列表
                 bargainList:[],
                 //图片路径
                 baImg:'http://zfwl.zhifengwangluo.c3w.cc/upload/images/',
                 

                 //T通告
                 animate:false
          }
      },
      components:{
          Pheader
      },
          created(){
                 this.defaultHeader() //默认头部
                 
                 setInterval (this.showMarquee, 2000) //通告
                 //请求列表
                 this.CutaKnife()
                 //倒计时
                 setInterval(()=>{
                 this.countdowm()
                 },1000)
                 
    },
    methods:{
          //移动到一定位置 头部导航更换样式
            scrolljia(){
                var banner = document.getElementById('header-banner').offsetHeight
                var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
                if(scr >= banner){
                   var obj =  {
                        /**整个head的style */
                        head_wrap_style: {
                            background: '#fff',
                        },
                        return_data: {
                            icon: '/static/img/public/left_icon_555.png',
                            /*跳转的路由(可以传参)，为空=>返回上一页*/
                            url_data: '',
                        },
                        title: {
                            /**是否-显示该模块 */
                            need_model: true,
                            name: '砍一刀',
                            style: {color:'#333'}
                        },
                        right_button: {
                            need_model: false,
                            /**通过判断是否值=>为空=> 来控制文字和图片的显隐 */
                            text: '按钮',
                            /**切换-模块（显隐），更换text */
			                change_text: '',
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
                }else{
                    this.defaultHeader()
                }
        },
        //默认头部
        defaultHeader(){
            var obj =  {
                    /**整个head的style */
                    head_wrap_style: {
                    background: '',
                    },
                    return_data: {
                    icon: '/static/img/public/left_icon_fff.png',
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
                    /**切换-模块（显隐），更换text */
			        change_text: '',
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
          },
          //CutaKnife 砍一刀列表渲染
        CutaKnife(){
              var url = "chopper/goods_list"
              var params = new URLSearchParams();
                  params.append('token', '');
                  params.append('page', this.page);
				this.$axios({
					url:url,
					method:'get',
					data:params
				}).then((result)=>{
                    this.bargainList = result.data.data.data
				}).catch((err)=>{
					console.log(err)
			}) 
        },

        //砍一刀 距离结束时间
        countdowm () {
                        let timer = setInterval( ()=> {
                            for (var key in this.bargainList) {
                                this.$set(
                                this.bargainList[key],"down",''
                                );
                            let nowTime = new Date().getTime()
                            let endTime = new Date(this.bargainList[key].end_time)*1000
                            let t = endTime - nowTime
                            if (t > 0) {
                                let day = Math.floor(t / 86400000)
                                let hour = Math.floor((t / 3600000) % 24)
                                let min = Math.floor((t / 60000) % 60)
                                let sec = Math.floor((t / 1000) % 60)
                                hour = hour < 10 ? '0' + hour : hour
                                min = min < 10 ? '0' + min : min
                                sec = sec < 10 ? '0' + sec : sec
                                let format = ''
                                if (day > 0) {
                                    format = `${day}:${hour}:${min}:${sec}`
                                }
                                if (day <= 0 && hour > 0) {
                                    format = `${hour}:${min}:${sec}`
                                }
                                if (day <= 0 && hour <= 0) {
                                    format = `${min}:${sec}`
                                }
                                this.bargainList[key]["down"] = format
                            } else {
                                clearInterval(timer)
                                this.bargainList[key]["down"] = 'over'
                            }
                            }
                        }, 1000)
          },

        //通告
        showMarquee: function () {
                this.animate = true;
                setTimeout (() => {
                    this.list.push (this.list[ 0 ]);
                    this.list.shift ();
                    this.animate = false;
                }, 500);
            },
    },
    mounted(){     
                var _this = this;
                window.addEventListener('scroll',this.scrolljia,true)
                
        },
}
</script>
<style lang="stylus" scoped>
img 
   margin 0 auto
   display block
   width 100%
   height 100%
    
  .bargain-page
    background #ffffff
    min-height 100vh
  .bargain-page .header-banner
    height 588px
    background url('../../../../static\img\bargain\banner.png');
    background-size 100%
    position relative

 .header-banner .banner-rule 
    position absolute
    top 18px
    right 24px
    height 90px
    width 90px
.popup-box
    height 140px
    width 500px
    position absolute
    bottom 0
    left 0
    overflow hidden
 .popup-info
    margin-left 24px
    margin-bottom 16px
    max-width 500px
    // height 60px
    // position absolute
    // left 0
    // bottom 0 

 .header-banner ul .popup-list
    max-width 500px
    height 60px
    background-color #fda074
    // opacity 0.59
    border-radius 10px
    line-height 60px
    margin-bottom 10px

.marquee_top 
    transition: all 0.5s;
    margin-top: -70px;

ul .popup-list .popup-p
    height 100%
    display flex
    align-items center

ul .popup-list .popup-p .popup-head
    height 50px
    width 50px
    border-radius 50%
    padding 0 14px

ul .popup-list .popup-p .popup-message
    flex 1
    color #ffffff
    font-size 24px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    padding-right 14px

.bargain-page .page-main
    padding 13px 24px
    box-sizing border-box

.bargain-page .page-main .bargain-list
    display flex
    border 1.11px solid #efece9
    border-radius 6px 
    background #ffffff
    padding 18px 27px 22px 16px
    margin-bottom 10px

.page-main .bargain-list .item-proImg
    width 181px
    height 200px

.page-main .bargain-list .item-detail-text
    flex 1
    padding-left 54px

.bargain-list .item-detail-text .name
    font-size 25px
    color #000
    height 54px

.item-detail-text .name .name-text
    color #000
    font-size 25px
    font-family: YouYuan;
    line-height 30px

.item-detail-text   .detail-pric
    display flex

.detail-pric .price
    width 55%

.detail-pric .price .price-red
    color #ff112f
    font-size 20px
    padding-bottom 27px
    padding-top 31px
    display flex
    line-height 25px

.detail-pric .price .price-red .red-rbn
    font-size 36px
    font-family: YouYuan;

.detail-pric .price .price-red   .red-original
    text-decoration: line-through
    color #989898
    margin-left 10px

.detail-pric .price .over-time
    font-size 24px
    font-weight: normal
    display flex

.detail-pric .price .over-time>span
    display inline-block
    width 47%

.detail-pric .price  .schedule
    padding-bottom 20px
    .van-progress
     background  #ff6742
     height 10px

.detail-pric  .bargain-btn
    text-align right
    flex 1
    width 45%

.detail-pric  .bargain-btn .btn-kan
    width 120px
    height 48px
    background-image: linear-gradient(0deg, 
		#ff0b13 0%, 
		#ff6969 100%), 
	linear-gradient(
		#f9272f, 
		#f9272f)
    color #ffffff
    text-align center
    line-height 48px
    border-radius: 10px
    display inline-block
    font-size 30px

.detail-pric .bargain-btn>p
    max-width 100%
    margin-top 15px
   
.detail-pric  .bargain-btn .kan-pir
    color #000
    font-size 24px

.detail-pric  .bargain-btn .kan-take
    font-size 18px
    color #626262
    display inline-block
    margin-top 10px
    max-width 100%

</style>
