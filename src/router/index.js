import Vue from 'vue'
import Router from 'vue-router'

/*底部导航-盒子模块*/
import index from '@/components/index'


/*登录-模块*/
import login from '@/components/login/login'


/*首页-模块*/
import home from '@/components/home/home'
//精选
import choice from '@/components/home/childrens/choice'
// 首页子公共组件
import subBase from '@/components/home/childrens/subBase'
//9.9包邮
import guarantees from '@/components/home/childrens/guarantees'
//男装
import male from '@/components/home/childrens/male'
//女装
import female from '@/components/home/childrens/female'
//家纺家居
import homeTextile from '@/components/home/childrens/homeTextile'
//电器
import appliances from '@/components/home/childrens/appliances'

//拼团专区
import groupArea from '@/components/home/groupArea/groupArea'
//拼团订单
import groupOrder from '@/components/home/groupArea/groupOrder'
// 拼团详情
import groupInfo from '@/components/home/groupArea/groupInfo'

//限时购
import flashSale from '@/components/home/flashSale/flashSale'
//限时购详情
import flashDetails from '@/components/home/flashSale/flashDetails'

//砍一刀
import bargainirg from '@/components/home/bargain/bargainirg'

//打卡模块
import sign from '@/components/home/sign/sign'

//砍价模块
import bargaindetail from '@/components/home/bargain/bargaindetail'


//优惠券
import coupon from '@/components/home/bargain/coupon'

//我的订单
import order from '@/components/order/order'
// 去评价
import evaluate from '@/components/order/evaluate'
// 退款申请
import returnRequest from '@/components/order/returnRequest'
// 退货
import returnGoods from '@/components/order/returnGoods'


/*分类-模块*/
import branch_class from '@/components/branch_class/branch_class'


/*购物车-模块*/
import cart from '@/components/cart/cart'


/*我的-模块*/
import user from '@/components/user/user'
/*申请供应商*/
import applicationSupplier from '@/components/user/applicationSupplier'
/*账户余额*/
import theAccountBalance from '@/components/user/theAccountBalance'
/*充值金额*/
import topUpAmount from '@/components/user/topUpAmount'
/*账户提现*/
import withdrawal from '@/components/user/withdrawal'


// 收货地址
import addressView from '@/components/user/address/address'
// 添加收货地址
import addAddress from '@/components/user/address/addAddress'
// 编辑收货地址
import editAddress from '@/components/user/address/editAddress'
// 地址选点
import selectPoint from '@/components/user/address/selectPoint'
// 绑定手机号码
import bindingTel from '@/components/user/bindingTel'


/*会员-模块*/
import member from '@/components/member/member'

//邀请朋友
import invitation from '@/components/invitation'

//生成广告二维码
import createcode from '@/components/createcode'



Vue.use(Router)

export default new Router({
	/*路由模式*/
	mode: 'hash',
	routes: [
	// 	{
	// 		path: '/',
	// 		redirect: '/login', /**重定向**/
	// 		component: (resolve) => require(['@/components/login/login'],resolve) // 懒加载
	// 	},
	// 	// 登录
	// 	{
	// 		path: '/login',
	// 		name: '/login',
	// 		component: (resolve) => require(['@/components/login/login'],resolve)
	// 	},
		{
			path: '/',
			redirect: '/index', /**重定向**/
			component: (resolve) => require(['@/components/login/login'],resolve) // 懒加载
		},

		// 首页
		{
			path: '/index',
			component: (resolve) => require(['@/components/index'],resolve),
			children: [
				{
					path: '/index/', 
					name: 'home',
					component: (resolve) => require(['@/components/home/home'],resolve),
					redirect:'/index/home/choice',
					children:[
						// 精选
						{ 
							path: '/index/home/choice', 
							name:'choice',
							component: (resolve) => require(['@/components/home/childrens/choice'],resolve) 
						},
						// 子公共组件
						{ 
							path: '/index/home/subBase', 
							name:'subBase',
							component: (resolve) => require(['@/components/home/childrens/subBase'],resolve) 
						},
						// 9.9包邮
						{ 
							path: '/index/home/guarantees', 
							name:'guarantees',
							component: (resolve) => require(['@/components/home/childrens/guarantees'],resolve)
						},
						// 男装
						{ 
							path: '/index/home/male', 
							name:'male',
							component: (resolve) => require(['@/components/home/childrens/male'],resolve)
						},
						// 女装
						{ 
							path: '/index/home/female', 
							name:'female',
							component: (resolve) => require(['@/components/home/childrens/female'],resolve)
						},
						// 家居家纺
						{ 	
							path: '/index/home/homeTextile', 
							name:'homeTextile',
							component: (resolve) => require(['@/components/home/childrens/homeTextile'],resolve)
						},
						// 电器
						{ 
							path: '/index/home/appliances', 
							name:'appliances',
							component: (resolve) => require(['@/components/home/childrens/appliances'],resolve)
						}
					]
				},
				{
					path: '/index/branchClass',
					name: 'branch_class',
					component: (resolve) => require(['@/components/branch_class/branch_class'],resolve) 
				},
				{
					path: '/index/member',
					name: 'member',
					component: (resolve) => require(['@/components/member/member'],resolve) 
				},
				{
					path: '/index/cart',
					name: 'cart',
					component: (resolve) => require(['@/components/cart/cart'],resolve) 
				},
				//用户中心
				{
					path: '/index/user',  
					name: 'user',
					component: (resolve) => require(['@/components/user/user'],resolve),
				}
				
			]
		},

		
		// 申请供应商
		{
			path: '/user/ApplicationSupplier',  
			name: 'ApplicationSupplier',
			component: (resolve) => require(['@/components/user/applicationSupplier'],resolve) 
		},
		// 账户余额
		{
			path: '/user/TheAccountBalance',  
			name: 'TheAccountBalance',
			component: (resolve) => require(['@/components/user/theAccountBalance'],resolve) 
		},
		// 充值金额
		{
			path: '/user/TopUpAmount',  
			name: 'TopUpAmount',
			component: (resolve) => require(['@/components/user/topUpAmount'],resolve) 
		},
		// 账户提现
		{
			path: '/user/withdrawal',  
			name: 'withdrawal',
			component: (resolve) => require(['@/components/user/withdrawal'],resolve) 
		},
		/**砍一刀 */
		{
			path: '/home/bargainirg', 
			name: 'bargainirg',
			component: (resolve) => require(['@/components/home/bargain/bargainirg'],resolve),
		},	
		{
			path: '/home/sign',
			name: 'sign',
			component: (resolve) => require(['@/components/home/sign/sign'],resolve),
		},

		//砍价详情
		{
			path: '/home/bargain/bargaindetail',
			name: 'bargaindetail',
			component: (resolve) => require(['@/components/home/bargain/bargaindetail'],resolve),
		},
		{
			path: '/home/groupArea', /**拼团 */
			name: 'groupArea',
			component: (resolve) => require(['@/components/home/groupArea/groupArea'],resolve),
		},
		{
			path: '/home/groupArea/order', /**拼团订单 */
			name: 'groupOrder',
			component: (resolve) => require(['@/components/home/groupArea/groupOrder'],resolve),
		},
		{
			path: '/home/coupon', // 优惠券
			name: 'coupon',
			component: (resolve) => require(['@/components/home/bargain/coupon'],resolve)

		},
		{
			path: '/home/groupArea/Info',
			name: 'groupInfo',
			component: (resolve) => require(['@/components/home/groupArea/groupInfo'],resolve)

		},
		{
			path: '/home/flashSale',  // 限时购
			name: 'flashSale',
			component: (resolve) => require(['@/components/home/flashSale/flashSale'],resolve),
		},
		
		{
			path: '/home/flashSale/flashDetails',  /** 限时购详情 */
			name: 'flashDetails',
			component: (resolve) => require(['@/components/home/flashSale/flashDetails'],resolve),
		},
		//邀请朋友
		{
			path:'/invitation',
			name:'invitation',
			component: (resolve) => require(['@/components/invitation'],resolve),
		},
		//生成广告二维码
		{
			path:'/createcode',
			name:'createcode',
			component: (resolve) => require(['@/components/createcode'],resolve),
		},
		// 订单列表
		{
			path: '/order',
			name: 'order',
			component: (resolve) => require(['@/components/order/order'],resolve),
		},
		// 去评价
		{
			path: '/order/evaluate',
			name: 'evaluate',
			component: (resolve) => require(['@/components/order/evaluate'],resolve),
		},
		// 退货
		{
			path: '/order/returnGoods',
			name: 'returnGoods',
			component: (resolve) => require(['@/components/order/returnGoods'],resolve),
		},
		// 退款申请
		{
			path: '/order/returnRequest',
			name: 'returnRequest',
			component: (resolve) => require(['@/components/order/returnRequest'],resolve),
		},
		// 收货地址
		{
			path: '/user/address',
			name: 'addressView',
			component: (resolve) => require(['@/components/user/address/address'],resolve),
		},
		// 添加收货地址
		{
			path: '/user/addAddress',
			name: 'addAddress',
			component: (resolve) => require(['@/components/user/address/addAddress'],resolve),
		},
		// 修改收货地址
		{
			path: '/user/editAddress',
			name: 'editAddress',
			component: (resolve) => require(['@/components/user/address/editAddress'],resolve),
		},
		// 地址选点
		{
			path: '/user/selectPoint',
			name: 'selectPoint',
			component: (resolve) => require(['@/components/user/address/selectPoint'],resolve),
		},
		// 手机号码绑定
		{
			path: '/user/bindingTel',
			name: 'selectPoint',
			component: (resolve) => require(['@/components/user/bindingTel'],resolve),
		},
	


	]
})
