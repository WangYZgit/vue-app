<template>
	<div class="app_newsdetail">
		<h1 class="title">{{newsinfo.title}}</h1>
		<p class="subtitle">
			<span>发表时间：{{newsinfo.ctime | dateFormat}}</span>
			<span>点击：{{newsinfo.click}}次</span>
		</p>
		<div class="container" v-html="newsinfo.content">
		</div>
		<comment :id="this.id"></comment>
	</div>
</template>
<script>
	import comment from "../subcomponents/Comment.vue"; 
	export default{
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{}
			}
		}, 
		// props:["id"],
		methods:{
			getNewsDetail(){
				var url="newslist/find?id="+this.id;
				this.$http.get(url).then(result=>{
					this.newsinfo = result.body.msg[0];
					console.log(this.newsinfo);
				});
			}
		},
		created(){
			this.getNewsDetail();
		},
		components:{
			comment
		}
		
	}
</script>
<style>
	.app_newsdetail{
		padding: 0 4px;
	}
	.app_newsdetail .title{
		font-size: 16px;
		text-align: center;
		color: red;
		margin: 15px 0;
	}
	.app_newsdetail .subtitle{
		font-size: 13px;
		color: #226AFF;
		display: flex;
		justify-content: space-between;
	}
</style>