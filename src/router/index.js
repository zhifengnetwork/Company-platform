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
							{ path: '/index/home/choice', component: choice },
							{ path: '/index/home/guarantees', component: guarantees },
							{ path: '/index/home/male', component: male },
							{ path: '/index/home/female', component: female },
							{ path: '/index/home/homeTextile', component: homeTextile },
							{ path: '/index/home/appliances', component: appliances }
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
		    {
		      path: '/index/user',
		      name: 'user',
		      component: (resolve) => require(['@/components/user/user'],resolve) 
		    },
			]
		},
		{
			path: '/home/groupArea', /**拼团 */
			name: 'groupArea',
			component: (resolve) => require(['@/components/home/groupArea/groupArea'],resolve) 
		}
    
  ]
})
