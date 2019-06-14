<template>
	<div class="shopcar-container">
		<div class="mui-card goods" v-for="item in $store.state.shopcar" :key='item.id'>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-switch :value='$store.getters.sendSelected[item.id]' @change='changeSelected(item.id,$store.getters.sendSelected[item.id])'></mt-switch>
					<img :src="item.image">
					<div class="info">
						<h3>{{item.title}}</h3>
						<div class='detail'>
							<div class='price'>￥{{item.price}}</div>
							<div class='num'>
								<numbox :count='$store.getters.sendCount[item.id]' :id='item.id'></numbox>
							</div>
							<a @click.prevent='remove(item.id)'>删除</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 结算区域 -->
		<div class="mui-card account">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class='info'>
						<div>
							<div>总计(不含运费)</div>
							<div>已勾选商品&nbsp;&nbsp;<span class='red'>{{$store.getters.totalCountAndMoney['count']}}</span>&nbsp;&nbsp;件&nbsp;,&nbsp;总价&nbsp;&nbsp;<span
								 class='red'>￥{{$store.getters.totalCountAndMoney['money']}}</span>&nbsp;&nbsp;元</div>
						</div>
						<mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import numbox from '../subcomponents/shopcar-numbox.vue';
	export default {
		components: {
			numbox
		},
		methods: {
			changeSelected(id, val) {
				var obj = {
					id,
					selected: !val
				};
				this.$store.commit('updateSelected', obj);
			},
			remove(id){
				this.$store.commit('update',id)
			}
		}
	}
</script>

<style scoped="scoped">
	.shopcar-container {}

	.shopcar-container .account .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.shopcar-container .account .info>div>div {
		font-size: 12px;
		line-height: 20px;
	}

	.shopcar-container .account .info>div>div .red {
		color: red;
		font-size: 14px;
		font-weight: bold;
	}

	.shopcar-container .goods .mui-card-content-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 0; */
		/* margin: 0; */

	}

	.shopcar-container .goods .mui-card-content-inner h3 {
		font-size: 14px;
		/* line-height: 20px; */
		margin-bottom: 10px;
	}

	.shopcar-container .goods .mui-card-content-inner .detail {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

	}

	.shopcar-container .goods .mui-card-content-inner .detail .price {
		font-size: 12px;
		font-weight: bold;
		color: red;
	}

	.shopcar-container .goods .mui-card-content-inner .detail .num {
		margin: 0 5px;
		height: 20px;
	}

	.shopcar-container .goods img {
		width: 60px;
		height: 60px;
	}
</style>
