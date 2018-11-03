<template>
	<div class="app_swiper">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in list" :key="item.id">
				<img :src="item.img_url" >
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {}
		},
		methods:{},
		created(){},
		props:["list"]
	}
</script>
<style>
	/* 轮播图组件高度为0 */
	.app_swiper .mint-swipe{
		height: 170px;
	}
	.app_swiper .mint-swipe .mint-swipe-item{
		text-align: center;
	}
	.app_swiper .mint-swipe img{
		width: 100%;
	}
</style>