<template>
	<div class="home-container">
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for='item in banner' :key="item">
				<img :src="item">
			</mt-swipe-item>
		</mt-swipe>

		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/goods'>
					<img src="/src/images/sixBox/menu3.png" alt="">
					<div class="mui-media-body">交易区</div>
				</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="/src/images/sixBox/menu6.png" alt="">
					<div class="mui-media-body">任务区</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/news'>
					<img src="/src/images/sixBox/menu1.png">
					<div class="mui-media-body">通知区</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/photos'>
					<img src="/src/images/sixBox/menu2.png">
					<div class="mui-media-body">图片分享</div>
				</router-link></li>
			
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="/src/images/sixBox/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
						<img src="/src/images/sixBox/menu4.png" alt="">
						<div class="mui-media-body">留言反馈</div>
					</a></li>
		</ul>



	</div>
</template>

<script>
	export default {
		data() {
			return {
				banner: [
					'/src/images/banner/l1.jpg',
					'/src/images/banner/l2.jpg',
					'/src/images/banner/l3.jpg',
					'/src/images/banner/l4.jpg',
					'/src/images/banner/l5.jpg',
					'/src/images/banner/l6.jpg',
					'/src/images/banner/l7.jpg',
					'/src/images/banner/l8.jpg',
					'/src/images/banner/l9.jpg',
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.mint-swipe {
		height: 180px;
	}

	.mint-swipe .is-active {
		background: black !important;
	}

	.mint-swipe-item img {
		height: 100%;
		width: 100%;
	}

	.mui-table-view img {
		width: 40px;
	}
	ul li.mui-table-view-cell{
		margin: 3px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		padding: 2px 21px;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border-right: 0 solid #fff !important;
		border-bottom: 0 solid #fff !important;
	}

	ul.mui-table-view {
		margin: 5px auto;
		background-color: #fff;
	}
</style>
