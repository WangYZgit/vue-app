<template>
	<div class="app_members">
		<div class="avatar">
			<img src="../../img/avatar.png">
		</div>
		<div class='divider'></div>
		<!-- 个人资料 -->
		<div class='cell'>
		  <a href="#" class='cell-item arrow'><span>个人资料</span></a>
		  <a href="#" class='cell-item arrow'><span>我的优惠劵</span></a>
		</div>
		<div class='divider'></div>
		<!-- 常见问题 -->
		<div class='cell'>
		  <a href="#" class='cell-item arrow'><span>常见问题</span></a>
		  <a href="#" class='cell-item arrow'><span>使用条款</span></a>
		  <a href="#" class='cell-item arrow'><span>新手入门</span></a>
		  <a href="#" class='cell-item arrow'><span>积分策略</span></a>
		</div>
		<div class='divider'></div>
		<!-- 设置 -->
		<div class='cell'>
		  <a href="#" class='cell-item arrow'><span>设置</span></a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {}
		},
		methods:{},
		created(){
			
		}
		
	}
</script>
<style>
	.cell-item span{
		color: #000000;
	}
	.avatar{
	  height: 200px;
	  background-color: #f60;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.avatar img{
	  width: 120px;
	  height: 120px;
	  border: 10px solid rgba(0,0,0,.3);
	  border-radius: 50%;
	}
	.divider{
	  height:10px;            /*高度*/
	  background:#f1f1f1;   /*灰色背景*/
	  box-shadow:0 5px 5px rgba(0,0,0,.1) inset;
	}
	
	.cell{
	  background-color: #fff;
	  font-size: 14px;
	}
	.cell-item{
	  border-bottom: 1px solid #ddd;
	  padding: 10px 15px;
	}
	
	.arrow{
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	.arrow::after{
	  content: "";
	  width: 5px;
	  height: 5px;
	  border-top: 3px solid#ccc;
	  border-right: 3px solid#ccc;
	  transform: rotate(45deg)
	}
</style>