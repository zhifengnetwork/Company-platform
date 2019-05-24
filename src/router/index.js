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
		      component: (resolve) => require(['@/components/home/home'],resolve) 
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
