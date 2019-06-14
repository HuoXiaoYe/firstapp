<template>
	<div class="container">
		<!-- 头部固定区-->

		<mt-header fixed title="威海校区资源共享平台">
			<span v-show="flag" @click='goBack' slot="left">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>
		<!-- 主体内容区 -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- 底部导航区 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to='/home'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to='/member'>
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员特权</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to='/shopcar'>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id='mui-badge' class="mui-badge">{{$store.getters.totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to='/setting'>
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				flag: false
			}
		},
		created(){
			this.flag = this.$route.path == '/home' ? false : true;
		},
		watch: {
			'$route.path': function(newValue) {
				if (newValue == '/home') {
					this.flag = false;
				} else {
					this.flag = true;
				}
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>


<style lang="css" scoped="scoped">
	.container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden !important;
	}

	.mint-header {

		background-color: red !important;
		z-index: 999;
	}

	.mui-bar {
		box-shadow: 0 0 0px rgba(0, 0, 0, .85)
	}

	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}

	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all .4s ease;
	}


	// 该类名，解决 tabbar 点击无法切换的问题
	.mui-bar-tab .mui-tab-item-llb.mui-active {
		color: #007aff;
	}

	.mui-bar-tab .mui-tab-item-llb {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar-tab .mui-tab-item-llb .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mui-bar-tab .mui-tab-item-llb.mui-active {
		color: #007aff;
	}
</style>
