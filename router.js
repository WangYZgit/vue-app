import Vue from 'vue'
import Router from 'vue-router'
//配置组件访问路径
//1.引入自定义组件
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsContainer from "./components/news/NewsContainer.vue"
import MembersContainer from "./components/tabbar/MembersContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import NewsDetailContainer from "./components/news/NewsDetailContainer.vue"
import GoodList from "./components/goods/GoodList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import SmartList from "./components/smart/SmartList.vue"
import IecList from "./components/iec/IecList.vue"
Vue.use(Router)
//2.指定该组件的访问路径
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
		{path:'/home',component:HomeContainer},
		{path:'/home/newslist',component:NewsContainer},
		{path:'/home/goodslist',component:GoodList},
		{path:'/home/goodsinfo/:id',component:GoodsInfo,name:"goodsinfo"},
		{path:'/members',component:MembersContainer},
		{path:'/shop',component:ShopContainer},
		{path:'/search',component:SearchContainer},
		{path:'/newsdetail/:id',component:NewsDetailContainer},
		{path:'/home/smartlist',component:SmartList},
		{path:'/home/ieclist',component:IecList}
  ],linkActiveClass:"mui-active"
})
