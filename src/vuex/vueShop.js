/*存储状态(管理vue的状态)*/
import Vue from 'vue';
/*帮助 vue管理数据的 插件*/
import Vuex from 'vuex'
/*引入 路由*/
import router from 'vue-router';

/*vue 加载 vuex 插件*/
Vue.use(Vuex);
/**
 * 深克隆，把引用数据类型，分解成基础类型(克隆)。
 * 第一个参数:数据，第二个参数:数组或对象(想转换的类型)。
 * **/
function clones(_type, _memory) {
	var newMemory = null;
	/*判断传过来的数据类型*/
	if(_type instanceof Array) {
		newMemory = _memory || [];
	}else {
		newMemory = _memory || {}
	}
	for(var x in _type) {
		/*引入数据类型的typeof为object*/
		if(typeof _type[x] == "object") {
			newMemory[x] = (_type[x].constructor == Array) ? [] : {};
			clones(_type[x], newMemory[x]); //递归
		}else {
			/*数组赋值*/
			newMemory[x] = _type[x];
		}
	}
	return newMemory;
}



/*存储数据=>状态*/
const state = {
	/*input获取、失去焦点=>隐藏元素(默认:true)*/
	inpShowEle: true,
	/**页面-顶部-头部，默认*/
	top_head_data: {
		/**整个head的style */
		head_wrap_style: {
			background: '',
		},
		return_data: {
			/**是否-显示该模块 */
			need_model: true,
			icon: '/static/img/public/left_icon_555.png',
			/*跳转的路由(可以传参)，为空=>返回上一页*/
			url_data: '',
		},
		title: {
			need_model: true,
			name: '标题',
			style: {color:'#333'}
		},
		right_button: {
			need_model: false,
			/**通过判断是否值=>为空=> 来控制文字（权重高）和图片的显隐 */
			text: '按钮',
			/**切换-模块（显隐），更换text */
			change_text: '',
			/**图标=>内联失效(只能在头部组件style设置样式，传class名) */
			icon: {
				class: '',
				icon_url: '',
			},
			/**点击按钮-模块显示(如果=>模块显示和路由路径同时存在，路由路径[权重更高])*/
			show: false,
			url_data: '',
		},
	},
	/**分页加载 */
	page_loadding: {
		/**提示文字 */
		tips_text: '加载中',
		/**显示该模块（这里false，全部隐藏） */
		show: true,
		/**开始加载=> start,结束加载=> end,失败=>error*/
		state: 'start',
		/**loading_wrap样式修改 */
		load_wrap_style: {},
		/***开始加载=> start 的 loading icon */
		load_icon_color: '#4a4949',
	},

	

}

/*专门修改state 里面的数据（同步操作）*/
const mutations = {
	/* public -s */
	/*监听input => 获取焦点*/
	obtainInputX(state) {
		/*更改state里的状态*/
		state.inpShowEle = true;
	},
	/*监听input => 失去焦点*/
	loseInputX(state) {
		state.inpShowEle = false;
	},
	/**改变头部样式 */
	change_head(state,style_obj) {
		state.top_head_data = clones(style_obj);
	},
	/**头部-右边-按钮=> show || hide */
	head_right_but(state) {
		console.log('头部-右边-按钮=> show || hide');
		if (state.top_head_data['right_button']['show']) {
			state.top_head_data['right_button']['show'] = false;
		} else {
			state.top_head_data['right_button']['show'] = true;
		}	
	
	},
	/**分页 loading 显示 */
	page_load(state,_styleObj){
		state.top_head_data = clones(_styleObj);
	},
	/* public -e*/



	
}


/*暴露 实例化 vuex (数据管理商店||仓库)*/
export default new Vuex.Store({
	/*注册*/
	state,
	mutations,
})
