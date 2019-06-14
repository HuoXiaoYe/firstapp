<template>
	<div class='goods-container'>
		<div class='goods-item' v-for="(item,index) in goodsList" :key='index' @click="goDesc(index)">
			<img :src="item.image">
			<div class='detail'>
				<h3 class='title'>{{ item.title }}</h3>
				<p class='price'>
					<span class='now'>￥{{item.sellPrice}}&nbsp;&nbsp;&nbsp;&nbsp;</span>

					<span class='prev'><del>￥{{item.marketPrice}}</del></span>
				</p>
				<p>
					<span>热卖中</span>
					<span>剩{{item.left}}件</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [{
					title: '小米蓝牙音响',
					sellPrice: 199,
					marketPrice: 299,
					'left': 18,
					image: '/src/images/goodsImg/1.jpg'
				}, {
					title: '小米蓝牙闹钟',
					'sellPrice': 99,
					'marketPrice': 199,
					'left': 16,
					image: '/src/images/goodsImg/2.jpg'
				}, {
					title: '小米VR眼睛',
					'sellPrice': 699,
					'marketPrice': 899,
					'left': 238,
					image: '/src/images/goodsImg/3.jpg'
				}, {
					title: '小米笔记本air12.5',
					'sellPrice': 3599,
					'marketPrice': 3999,
					'left': 18,
					image: '/src/images/goodsImg/4.jpg'
				}, {
					title: '小米笔记本air13.3',
					'sellPrice': 4999,
					'marketPrice': 5499,
					'left': 18,
					image: '/src/images/goodsImg/5.jpg'
				}, {
					title: '小米笔记本pro',
					'sellPrice': 6799,
					'marketPrice': 6999,
					'left': 176,
					image: '/src/images/goodsImg/6.jpg'
				}, {
					title: '小米工具箱',
					'sellPrice': 199,
					'marketPrice': 299,
					'left': 348,
					image: '/src/images/goodsImg/7.jpg'
				}, {
					title: '小米手机6s',
					'sellPrice': 1999,
					'marketPrice': 2399,
					'left': 218,
					image: '/src/images/goodsImg/8.jpg'
				}, {
					title: '小米手机note3',
					'sellPrice': 2399,
					'marketPrice': 2599,
					'left': 118,
					image: '/src/images/goodsImg/9.jpg'
				}, {
					title: '小米高清电视',
					'sellPrice': 2999,
					'marketPrice': 3299,
					'left': 158,
					image: '/src/images/goodsImg/10.jpg'
				}, {
					title: '小米手机mix2s',
					'sellPrice': 2199,
					'marketPrice': 2299,
					'left': 182,
					image: '/src/images/goodsImg/11.jpg'
				}, {
					title: '小米手机6',
					'sellPrice': 3199,
					'marketPrice': 3299,
					'left': 518,
					image: '/src/images/goodsImg/12.jpg'
				}, {
					title: '小米手机8',
					'sellPrice': 2599,
					'marketPrice': 2999,
					'left': 638,
					image: '/src/images/goodsImg/13.jpg'
				}]
			}
		},
		methods: {
			goDesc(id) {
				this.$router.push({
					name: 'goodsinfo',
					params: {
						id: id
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.goods-container {
		padding: 5px 10px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.goods-container .goods-item {
		border: 1px solid #ccc;
		box-shadow: 0 0 10px #ccc;
		width: 48%;
		margin-bottom: 10px;
	}

	.goods-container .goods-item img {
		width: 100%;
	}

	.goods-container .goods-item .detail {
		min-height: 80px;
		padding: 0px 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* position: absolute;
		bottom: 0; */
	}

	.goods-container .goods-item .detail p {
		padding: 0;
		margin: 0;
		line-height: 30px;
	}

	.goods-container .goods-item .detail>p:nth-child(3) {
		display: flex;
		justify-content: space-between;
	}

	.goods-container .goods-item .title {
		font-size: 14px;
	}

	.goods-container .goods-item p.price .now {
		color: red;
	}
</style>
