<template>
	<div class="app_subcomment">
		<h1>发表评论</h1>
		<hr>
		<textarea placeholder="请输入评论内容(120字以内)" maxlength="120" v-model="msg"></textarea>
		<mt-button size="large" type="primary" @click="postComment()">发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-list-item" v-for="(item,i) in list" :key="item.id">
				<div class="cmt-title">
					第{{i+1}}楼 &nbsp;&nbsp; 用户：{{item.username}} 发表时间：{{item.ctime | dateFormat}}
				</div>
				<div class="cmt-body">
					{{item.content}}
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" @click="getMoreComment()">加载更多</mt-button>
	</div>
</template>
<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {
				list:[],
				msg:"",      //双向绑定留言
				pageIndex:1  //当前显示的页码
			}
		},
		methods:{
			postComment(){
				var username = "匿名用户";
				var nid = this.id;
				var content = this.msg;
				var url = "newslist/saveComment";
				var obj = {nid:nid,content:content,username:username};
				this.$http.post(url,obj).then(result=>{
					//对留言内容验证>2
					if(content.length<2){
						Toast(result.body.msg);
					}
					if(result.body.code == 1){
						this.msg="";
						Toast(result.body.msg);
						this.pageIndex=1;
						this.list=[];
						this.getCommentList();
					}else{
						Toast(result.body.msg);
					}
				})
			},
			getCommentList(){  //加载第一次
				var url="newslist/commentlist?nid="+this.id;
				this.$http.get(url).then(result=>{
					// console.log(result.body.msg.data);
					this.list=result.body.msg.data;
					console.log(this.list);
					Toast("获取成功")
				})
			},
			getMoreComment(){  //点击加载更多
				this.pageIndex++;
				var url="newslist/commentlist?nid="+this.id;
						url+="&pno="+this.pageIndex;
				this.$http.get(url).then(result=>{
					// console.log(result.body.msg.data);
					this.list=this.list.concat(result.body.msg.data);
					console.log(this.list);
					Toast("获取成功")
				})
			}
		},
		created(){
			this.getCommentList();
		},
		props:["id"]
		
	}
</script>
<style>
	.app_subcomment h1{
		font-size: 18px;
	}
	.app_subcomment textarea{
		height: 85px;
		font-size: 14px;
		margin: 0;
	}
	.app_subcomment .cmt-list{
		margin: 5px 0 ;
	}
	.app_subcomment .cmt-list .cmt-list-item{
		font-size: 13px;
	}
	.app_subcomment .cmt-list .cmt-list-item .cmt-title{
		line-height: 30px;
		background-color: #CCCCCC;
	}
	.app_subcomment .cmt-list .cmt-list-item .cmt-body{
		line-height: 30px;
		text-indent: 2em;
	}
</style>