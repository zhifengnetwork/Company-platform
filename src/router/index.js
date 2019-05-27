import Vue from 'vue'
import Router from 'vue-router'

/*底部导航-盒子模块*/
import index from '@/components/index'

/*登录-模块*/
import login from '@/components/login/login'

/*首页-模块*/
import home from '@/components/home/home'

/*我的-模块*/
import user from '@/components/user/user'

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
		      path: '/',
		      name: 'home',
					component: (resolve) => require(['@/components/home/home'],resolve),
					redirect:'/home/choice',
					children:[
							{ path: '/home/choice', component: choice },
							{ path: '/home/guarantees', component: guarantees },
							{ path: '/home/male', component: male },
							{ path: '/home/female', component: female },
							{ path: '/home/homeTextile', component: homeTextile },
							{ path: '/home/appliances', component: appliances }
					]
		    },
		    {
		      path: '/index/user',
		      name: 'user',
		      component: (resolve) => require(['@/components/user/user'],resolve) 
		    },
			]
		},
    
  ]
})
