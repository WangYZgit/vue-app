<template>
	<div class="app_goods_list">
		<div class="app-goods-item" v-for="item in list" :key="item.id" @click="getDetail(item.id)">
			<img :src="item.img_url">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="old">
						￥{{item.p_old}}
					</span>
					<span class="now">
						￥{{item.p_now}}
					</span>
				</p>
				<p class="sell">
					<span>
						热卖中
					</span>
					<span>
						剩{{item.sell}}件
					</span>
				</p>
			</div>
		</div>
		<mt-button type="primary" size="large">加载更多</mt-button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getGoodsList(){
				var url="goodslist/list";
				this.$http.get(url).then(result=>{
					this.list=result.body.msg;
				})
			},
			getDetail(id){
				// console.log(id);
				this.$router.push({path:"/home/goodsinfo/"+id})
				// this.$router.push("/home/goodsinfo")
				// this.$router.push({path:"/home/goodsinfo"})
				// this.$router.push({name:"goodsinfo"})
			}
		},
		created(){
			this.getGoodsList();
		}
	}
</script>
<style>
	.app_goods_list{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
	}
	.app_goods_list .app-goods-item{
		width: 49%;
		height: 170px;
		border: 1px solid #CCCCCC;
		box-shadow: 0 0 8px #CCCCCC;
		margin: 4px 0;
		padding: 2px;
		display: flex;     /* 商品内容弹性布局 */
		flex-direction: column;   /* 布局方向 垂直 */
		justify-content: space-between;
		min-height: 235px;
	}
	.app_goods_list .app-goods-item img{
		width: 100%;
	}
	.app_goods_list .app-goods-item .title{
		font-size: 14px;
	}
	.app_goods_list .app-goods-item .info{
		background-color: #EEEEEE;
	}
	.app_goods_list .app-goods-item .info p{
		margin: 0;
		padding: 5px;
	}
	.app_goods_list .app-goods-item .info .price .now{
		color: red;
		font-weight: bold;
		font-size: 16px;
	}
	.app_goods_list .app-goods-item .info .price .old{
		text-decoration: line-through;   /* 中划线 */
		font-size: 12px;
	}
	.app_goods_list .app-goods-item .info .sell{
		display: flex;
		font-size: 12px;
		justify-content: space-between;
	}
</style>