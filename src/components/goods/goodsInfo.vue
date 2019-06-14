<template>
	<div class='goodsinfo-container'>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-swipe :auto="3000">
						<mt-swipe-item v-for='(item,index) in goodsList' :key="index">
							<img :src="item.image">
						</mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
		</div>
		<div class="mui-card title">
			<div class="mui-card-header">{{goodsList[id].title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>{{goodsList[id].marketPrice}}</del> &nbsp;&nbsp;&nbsp;&nbsp;销售价：<span>￥{{goodsList[id].sellPrice}}</span>
					</p>
					<div class='purchase-number'>购买数量：<numbox @getCount='getCount' :max='goodsList[id].left'></numbox>

					</div>

					<transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
						<div class='ball' v-show="ballFlag" ref='ball'></div>
					</transition>

					<mt-button type="primary">立即购买</mt-button>
					<mt-button type="danger" @click='addToCar'>加入购物车</mt-button>
				</div>
			</div>
		</div>
		<div class="mui-card detail">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class='goods-number'>SD327813461489</div>
					<div class="left">剩余件数&nbsp;&nbsp;:&nbsp;&nbsp;{{goodsList[id].left}}件</div>
					<div class="ctime">上架时间&nbsp;&nbsp;:&nbsp;&nbsp;2018-12-12 12:12:12</div>
				</div>
			</div>
			<div class="mui-card-footer">

				<mt-button size='large' type="primary" plain>图文介绍</mt-button>
				<mt-button size='large' type="danger" plain>商品评论</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import numbox from '../subcomponents/goodsinfo-numbox.vue';
	export default {
		data() {
			return {
				count: 1 ,
				ballFlag: false,
				id: this.$route.params.id,
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
			beforeEnter(el) {
				el.style.transform = 'translate(0,0)';
			},
			enter(el, done) {
				el.offsetWidth;
				ballPosition = this.$refs.ball.getBoundingClientRect();
				badgePosition = document.getElementById('mui-badge').getBoundingClientRect();

				difX = badgePosition.left - ballPosition.left;
				difY = badgePosition.top - ballPosition.top;


				el.style.transform = `translate(${difX}px,${difY}px)`;

				el.style.transition = 'all .6s cubic-bezier(1,-0.62,1,.67)'
				done()
				/* cubic-bezier(.4,-0.3,1,.68) */
			},
			afterEnter(el) {
				this.ballFlag = !this.ballFlag;
			},
			addToCar() {
				this.ballFlag = !this.ballFlag;
				var goodsInfo = {
					id: this.id,
					image: this.goodsList[this.id].image,
					price: this.goodsList[this.id].sellPrice,
					title: this.goodsList[this.id].title,
					selected: true,
					count: this.count
				};
				this.$store.commit('saveGoods',goodsInfo);
			},
			getCount(count) {
				this.count = count;
			}
		},
		components: {
			numbox
		}
	}
</script>

<style scoped="scoped">
	.goodsinfo-container .title span {
		color: red;
	}

	.goodsinfo-container .title .purchase-number {
		line-height: 40px;
	}

	.goodsinfo-container .mint-swipe {
		height: 180px;
		text-align: center;
	}

	.goodsinfo-container .title .purchase-number {
		margin: 10px 0;
	}

	.goodsinfo-container .detail div {
		line-height: 30px;
	}

	.goodsinfo-container .detail .mui-card-footer {
		display: block;
	}

	.goodsinfo-container .detail .mui-card-footer button {
		margin: 10px 0;
	}

	.mint-swipe .mint-swipe-indicators {
		width: 100%;
		bottom: -5px !important;
	}

	.mui-card {
		overflow: visible;
	}

	.mint-swipe .is-active {}

	.mint-swipe-item img {
		height: 100%;
	}

	.ball {
		width: 15px;
		height: 15px;
		background-color: red;
		border-radius: 50%;
		position: absolute;
		z-index: 9999;
		left: 161px;
		top: 96px;
	}
</style>
