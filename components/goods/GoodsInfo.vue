<template>
	<div class="app_goods_info">
		<!-- 商品轮播 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :list="this.list"></swiper>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>￥{{info.p_old}}</del>
						销售价：<span class="now_price">￥{{info.p_now}}</span>
					</p>
					<p>
						购买数量：
						<div class="mui-numbox">
							<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
							<input class="mui-input-numbox" type="number" v-model="num" />
							<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
						</div>
					</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<p>
					<mt-button type="danger" size="small" @click="addCart()">加入购物车</mt-button>
					<mt-button type="primary" size="small">立即购买</mt-button>
				</p>
			</div>
		</div>
		<!-- 商品参数 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{info.p_sn}}</p>
					<p>商品类型：{{info.p_type}}</p>
					<p>商品类型：{{info.p_type}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="small">图文介绍</mt-button>
				<mt-button type="primary" size="small">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
	//导入轮播图组件
	import swiper from "../subcomponents/Swiper.vue";
	//导入mui js  由于mui与脚手架冲突
	//import mui from "../../lib/mui/js/mui.js"
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {
				list:[],
				id:this.$route.params.id,
				info:{},  //保存当前商品的详细信息
				num:1
			}
		},
		methods:{
			addCart(){
				//修改vuex中共享数据
				this.$store.commit("increment",this.num);
			},
			findDetail(){
				var url="goodslist/find?id="+this.id;
				this.$http.get(url).then(result=>{
					this.info = result.body.msg[0];
					// console.log(this.info);
				})
			},
			getImageList(){
				var url="imagelist/list";
				this.$http.get(url).then(result=>{
					if(result.body.code ==1){
						this.list=result.body.msg;
					}else{
						Toast("加载轮播图片失败...")
					}
				});
			},
			goSub(){
				if(this.num<=1) return;
				this.num=parseInt(this.num)-1;
			},
			goAdd(){
				if(this.num>=99) return;
				this.num=parseInt(this.num)+1;
			}
		},
		created(){
			this.findDetail();
			this.getImageList();
		},
		components:{
			"swiper":swiper
		}
	}
</script>
<style>
	.now_price{
		color: red;
		font-size: 16px;
		font-weight: bold;
	}
</style>