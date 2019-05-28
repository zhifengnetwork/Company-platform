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
//9.9包邮
import guarantees from '@/components/home/childrens/guarantees'
//男装
import male from '@/components/home/childrens/male'
//女装
import female from '@/components/home/childrens/female'
//家纺家居
import homeTextile from '@/components/home/childrens/homeTextile'
// 电器
import appliances from '@/components/home/childrens/appliances'
// 拼团专区
import groupArea from '@/components/home/groupArea/groupArea'
//拼团订单
import groupOrder from '@/components/home/groupArea/groupOrder'





/*会员-模块*/
import member from '@/components/member/member'

/*购物车-模块*/
import cart from '@/components/cart/cart'

/*我的-模块*/
import user from '@/components/user/user'



Vue.use(Router)

export default new Router({
	/*路由模式*/
	mode: 'hash',
  routes: [
   	{
	   	path: '/',
		  redirect: '/login', /**重定向**/
			component: (resolve) => require(['@/components/login/login'],resolve) // 懒加载
		},
		{
	    path: '/login',
	    name: '/login',
			component: (resolve) => require(['@/components/login/login'],resolve)
		},

		{
	    path: '/index',
			component: (resolve) => require(['@/components/index'],resolve),
			children: [
				{
		      path: '/index/',  /**首页 */
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
		      component: (resolve) => require(['@/components/user/user'],resolve) 
				},
				
			]
		},
    {
			path: '/index/punchcard',
			name: 'punchcard',
			component: (resolve) => require(['@/components/home/punchcard'],resolve),
		},
		{
		path: '/home/groupArea', /**拼团 */
		name: 'groupArea',
		component: (resolve) => require(['@/components/home/groupArea/groupArea'],resolve),
		},
		//拼团订单
		{
			path: '/home/groupArea/order', /**拼团 */
			name: 'groupOrder',
			component: (resolve) => require(['@/components/home/groupArea/groupOrder'],resolve),
		},
    
  ]
})
