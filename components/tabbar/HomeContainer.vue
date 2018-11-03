<template>
	<div class="app">
		<video src="https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4" autoplay muted controls loop preload="auto"></video>
		<!-- 六宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9 ">
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2"><router-link to="/home/newslist">
								<img src="../../img/menu1.png">
								<div class="mui-media-body">新闻资讯</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2"><router-link to="/home/goodslist">
								<img src="../../img/menu2.png">
								<div class="mui-media-body">商品</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2"><router-link to="/shop">
								<img src="../../img/menu3.png">
								<div class="mui-media-body">购物车</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2"><router-link to="/home/smartlist">
								<img src="../../img/menu4.png">
								<div class="mui-media-body">智能</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2"><router-link to="/home/ieclist">
								<img src="../../img/menu5.png">
								<div class="mui-media-body">生态链</div></router-link></li>
				
		</ul>
		<!-- 轮播图 -->
		<swiper :list="this.list"></swiper>
		
		<div class="home-1">
			<div class="home-1-1"><router-link to="/home/goodslist"><img src="@/img/xm (1).jpg" alt=""></router-link></div>
			<div class="home-1-2">
				<router-link to="/home/goodslist"><img src="@/img/xm (2).jpg" alt=""></router-link>
				<router-link to="/home/goodslist"><img src="@/img/xm (3).jpg" alt=""></router-link>
			</div>
			
		</div>
		<div class="home-2">
			<router-link to="/home/goodsinfo/1"><img src="@/img/xm (5).jpg" alt=""></router-link>
			<router-link to="/home/goodsinfo/5"><img src="@/img/xm (6).jpg" alt=""></router-link>
			<router-link to="/home/goodsinfo/12"><img src="@/img/xm (7).jpg" alt=""></router-link>
		</div>
		
	</div>
</template>
<script>
	import swiper from "../subcomponents/Swiper.vue";
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getImageList(){
				var url="http://127.0.0.1:3000/imagelist/list";
				this.$http.get(url).then(result=>{
					if(result.body.code ==1){
						this.list=result.body.msg;
					}else{
						Toast("加载轮播图片失败...")
					}
				})
			}
		},
		created(){
			this.getImageList();
		},
		components:{
			swiper
		}
	}
</script>
<style>
	video{
		width: 100%;
	}
	/* 六宫格 */
	.app .mui-grid-view.mui-grid-9{
		display: flex;
		justify-content: space-between;
		padding-left: 10px;
		background-color: white;
		font-size: 10px;
	}
	.app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: 0;
		padding: 0;
		
	}
	.app .mui-grid-view.mui-grid-9 .mui-table-view-cell img{
		height: 25px;
		width: 25px;
	}
	
	.home-1{
		padding-top: 10px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.home-1-1 img{
		width: 100%;
		height: 100%;
		padding: 3px;
	}
	.home-1-2{
		display: flex;
		flex-direction: column;
	}
	.home-1-2 img{
		width: 100%;
		padding: 3px;
	}
	.home-2 img{
		width: 100%;
	}
</style>