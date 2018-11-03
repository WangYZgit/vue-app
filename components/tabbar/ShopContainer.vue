<template>
	<div class="app_shop">
		<div class="mui-card">
			<div class="mui-card-header">购物车</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner glist" v-for="item in list" :key="item.id">
					{{item.name}} {{item.price}} &nbsp;&nbsp;&nbsp;
					<div class="mui-numbox">
						<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(item.id)">-</button>
						<input class="mui-input-numbox" type="number" :value="item.count" />
						<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd(item.id)">+</button>
					</div>
					<div class="clear" @click="clear()"><img src="../../img/clear.png"></div>
				</div>
			</div>
			<div class="mui-card-footer">
				小计：<span>￥{{getsubtotal}}</span>
			</div>
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
			clear(){
				
			},
			getCartlist(){
				this.$http.get("cartlist/list").then(result=>{
					this.list=result.body.msg;
					// console.log(this.list);
				})
			},
			goSub(id){
				for(var item of this.list){
					if(item.id == id){
						if(item.count<=1)break;
						item.count--;
					}
				}
			},
			goAdd(id){
				for(var item of this.list){
					if(item.id == id){
						item.count++;
					}
				}
			}
		},
		created(){
			this.getCartlist();
		},
		computed:{
			getsubtotal:function(){
				var sum = 0;
				for(var item of this.list){
					sum += item.price * item.count;
				}
				return sum;
			}
		}
		
	}
</script>
<style>
	.glist{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.clear img{
		width: 15px;
		height: 15px;
	}
</style>