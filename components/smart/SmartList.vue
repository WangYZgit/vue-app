<template>
	<div class="app_smart_list">
		<!-- 轮播 -->
		<swiper :list="this.list"></swiper>
		
		<div>
			<ul class="v1">
				<li>
					<h4 class="vh4">小米VR外观</h4>
					<video src="https://v.mifile.cn/b2c-mimall-media/bc0f3357f88672fbbf728543a822427c.mp4" controls loop preload="auto"></video>
				</li>
				<li>
					<h4 class="vh4">小寻儿童电话手表陪伴孩子的一天</h4>
					<video src="https://v.mifile.cn/b2c-mimall-media/0f4a667d8fc5ff025cfade287674f030.mp4" controls loop preload="auto"></video>
				</li>
				<li>
					<h4 class="vh4">4.9mm极超薄电视的诞生揭秘</h4>
					<video src="https://v.mifile.cn/b2c-mimall-media/834a34a1308c4214d501df703197847c.mp4" controls loop preload="auto"></video>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	import swiper from "../subcomponents/Swiper.vue";
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
	.app_smart_list{
		background-color: #fff;
	}
	.v1{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.v1 video{
		width: 100%;
	}
	.vh4{
		padding-left: 5px;
		border-top: 7px solid #ddd;
		padding-top: 5px;
	}
</style>


