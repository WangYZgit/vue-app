<template>
	<div class="app_newslist">
		<h1 class="newlist">新闻列表</h1>
		<ul class="mui-table-view" v-for="item in list" :key="item.id">
			<li class="mui-table-view-cell mui-media">
				<router-link :to="'/newsdetail/'+item.id">
					<img class="mui-media-object mui-pull-left"  :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>{{item.ctime | dateFormat}}</span>
							<span>点击：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
		<mt-button type="primary" size="large" @click="getMore()">加载更多...</mt-button>
	</div>
</template>
<script>
	import {Toast} from "mint-ui";
	export default {
		data(){
			return {
				list:[],
				pageIndex:0
			}
		},
		methods:{
			getMore(){
				this.pageIndex++;
				var url="newslist/list?pno="+this.pageIndex;
				this.$http.get(url).then(result=>{
					//赋值有问题，覆盖前一页数据
					//this.list=result.body.msg.data;
					//解决 保存前一页数据 concat
					this.list=this.list.concat(result.body.msg.data);
					Toast("获取成功")
				})
			}
		}, 
		created(){
			this.getMore();
		}
	}
</script>
<style>
	.newlist{
		font-size: 18px;
		text-align: center;
	}
	.app_newslist .mui-table-view h1{
		font-size: 14px;
	}
	.app_newslist li .mui-ellipsis{
		font-size: 12px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
</style>