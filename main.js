import Vue from 'vue'
import App from './App.vue'
import router from './router'
//1.引入Header,Swipe,SwipeItem组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'


import'mint-ui/lib/style.css'
//2.注册Header,Swipe,SwipeItem组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
//3.引入VueResource
import VueResource from "vue-resource"
//4.加载VueResource
Vue.use(VueResource);

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//5.定义全局（日期格式）过滤器
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
	return new Date(datestr).toLocaleString();
})
//6.设置全局基础路径
Vue.http.options.root = "http://127.0.0.1:3000/"
//设置全局ajax post 访问格式
Vue.http.options.emulateJSON = true


import Vuex from 'vuex'
Vue.use(Vuex);
//创建vuex对象：共享数据，操作方法，获取并监听数据方法
var store = new Vuex.Store({
	state:{                //共享数据
		cartCount:0					 //共享数据购物车数量
	},              
	mutations:{            //操作共享数据方法
		increment(state,num){state.cartCount+=num},
		substract(state){state.cartCount--},
		clearcount(state){state.cartCount=0}
	},         
	getters:{              //获取并监听数据方法
		optCount:function(state){
			return state.cartCount;
		}
	}             
})


new Vue({
  router,
  render: h => h(App),
	store  //注册vuex对象
}).$mount('#app')
