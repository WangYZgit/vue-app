<template>
	<div class="app_iec_list">
		<img class="img1" src="@/img/xm(1).jpg">
		<h4 class="text">好物推荐</h4>
		<div class="listd" v-for="item in list" :key="item.id">
			<img class="img2" :src="item.img_url" alt="">
			<p class="textp1">
				<span class="textspan1">{{item.title}}</span>
				<span class="textspan2">￥{{item.p_now}}</span>
			</p>
			<p class="textp2">{{item.content}}</p>
		</div>
		
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
			getIecList(){
				var url="goodslist/iec/list";
				this.$http.get(url).then(result=>{
					this.list=result.body.msg;
				})
			}
		},
		created(){
			this.getIecList();
		},
		components:{
			
		}
	}
</script>
<style>
	.img1{
		width: 100%;
		height: 190px;
	}
	.img2{ 
		width: 100%;
		height: 220px;
	}
	.listd{
		padding: 10px;
		margin: 10px;
		background-color: white;
	}
	.text{
		padding-left: 10px;
	}
	.textp1{
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		padding: 0 10px;
		font-weight: bold;
	}
	.textspan1{
		color: black;
	}
	.textspan2{
		color: red;
	}
	.textp2{
		padding: 0 10px;
	}
</style>