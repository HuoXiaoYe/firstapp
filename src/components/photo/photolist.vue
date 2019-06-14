<template>
	<div class="photo-container">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
					<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
						科技
					</a>
				</div>
			</div>
			<ul class='photo-list'>
				<router-link tag='li' v-for="(item, index) in photolist" :to="'/home/photoinfo/'+index" class='img' :key='index'>
					<img :src="item" alt="">
					<p>风，吹过西窗，穿越弄堂，把水袖轻摇，醉一地泪伤。谁，起舞轻弄，让花儿凋谢得如此匆忙。谁，犹抱琵琶，半遮了音里的轻狂。心，失落，慢慢地数，逝去的过往。</p>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	export default{
		data(){
			return {
				photolist : [
					'/src/images/photolist/1.jpg',
					'/src/images/photolist/2.jpg',
					'/src/images/photolist/3.jpg',
					'/src/images/photolist/4.jpg',
					'/src/images/photolist/5.jpg'
				]
			}
		},
		mounted() {
		  mui(".mui-scroll-wrapper").scroll({
		    deceleration: 0.0005
		  });
		}
	}
</script>

<style>
	.photo-container .mui-scroll{
		touch-action: none;
	}
	.photo-container .photo-list{
		list-style: none;
		margin: 0;
		padding: 0;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.photo-container .photo-list li{
		position: relative;
		width: 90%;
		text-align: center;
	}
	.photo-container .photo-list img{
		width: 100%;
		box-sizing: border-box;
		margin: 5px auto;
	}
	.photo-container .photo-list p{
		background-color: rgba(0,0,0,.2);
		width: 100%;
		position: absolute;
		bottom: 0px;
		text-align: left;
		padding-left: 10px;
		color: #226aff;
		opacity: 0.5;
		
	}
</style>
