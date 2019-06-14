<template>
	<div class='newsListContainer'>
		<ul class="mui-table-view">
			<!-- http://iph.href.lu/100x100 -->
			<li class="mui-table-view-cell mui-media" v-for="item in newsLIst" :key='item.id'>
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.image">
					<div class="mui-media-body">
						<h3 class='title'>{{item.title}}</h3>
						<p class='subTitle'>
							<span>发表时间:{{item.ctime}}</span>
							<span>点击次数：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newsLIst: [{
						id: '1',
						title: '党的十八大以来全国民政事业发展成就综述',
						ctime: '2019/04/02 06:49',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://new.qq.com/omn/20190402/20190402A01ONA.html'
					},
					{
						id: '2',
						title: '祭奠英烈，我们从未忘记',
						ctime: '2019/04/02 16:09',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://new.qq.com/omn/20190402/20190402B0E12L.html'

					},
					{
						id: '3',
						title: '【爱国情 奋斗者】朱继洲：赤子心 西迁情',
						ctime: '2019/04/02 21:25',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://news.qq.com/a/20190402/008973.htm'
					},
					{
						id: '4',
						title: '赵立新就日军侵华不毁故宫等不当言论致歉：希望大家原谅我包容我',
						ctime: '2019/04/03 00:07',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401432583/1000',
						src: 'https://new.qq.com/cmsn/20190403/20190403000003.html'

					},
					{
						id: '5',
						title: '暴利坟地产：一块墓地能卖百万 毛利率近90%超房企2倍多',
						ctime: '2019/04/03 00:06',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_ls/0/8404125837_294195/0',
						src: 'https://new.qq.com/omn/20190403/20190403A00CLJ.html'

					},
					{
						id: '6',
						title: '河南“文明城市”被低俗医疗广告充斥 当地政府回应：管不了！',
						ctime: '2019/04/03 09:36',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8404211289/1000',
						src: 'https://new.qq.com/cmsn/20190403/20190403000947.html'

					},
					{
						id: '7',
						title: '大量想移民美国的中国人被她坑惨 FBI已发出通缉令',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401477175/1000',
						src: 'https://new.qq.com/omn/20190403/20190403A031XZ.html'

					},
					{
						id: '8',
						title: '中国海军3艘军舰穿越宫古海峡 日本海自派出战舰跟踪',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: "https://inews.gtimg.com/newsapp_bt/0/8404496657/1000",
						src: 'https://new.qq.com/omn/20190403/20190403A02QU2.html'

					},
					{
						id: '9',
						title: '党的十八大以来全国民政事业发展成就综述',
						ctime: '2019/04/02 06:49',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://new.qq.com/omn/20190402/20190402A01ONA.html'
					},
					{
						id: '10',
						title: '祭奠英烈，我们从未忘记',
						ctime: '2019/04/02 16:09',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://new.qq.com/omn/20190402/20190402B0E12L.html'

					},
					{
						id: '11',
						title: '【爱国情 奋斗者】朱继洲：赤子心 西迁情',
						ctime: '2019/04/02 21:25',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://news.qq.com/a/20190402/008973.htm'
					},
					{
						id: '12',
						title: '赵立新就日军侵华不毁故宫等不当言论致歉：希望大家原谅我包容我',
						ctime: '2019/04/03 00:07',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401432583/1000',
						src: 'https://new.qq.com/cmsn/20190403/20190403000003.html'

					},
					{
						id: '13',
						title: '暴利坟地产：一块墓地能卖百万 毛利率近90%超房企2倍多',
						ctime: '2019/04/03 00:06',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_ls/0/8404125837_294195/0',
						src: 'https://new.qq.com/omn/20190403/20190403A00CLJ.html'

					},
					{
						id: '14',
						title: '河南“文明城市”被低俗医疗广告充斥 当地政府回应：管不了！',
						ctime: '2019/04/03 09:36',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8404211289/1000',
						src: 'https://new.qq.com/cmsn/20190403/20190403000947.html'

					},
					{
						id: '15',
						title: '大量想移民美国的中国人被她坑惨 FBI已发出通缉令',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401477175/1000',
						src: 'https://new.qq.com/omn/20190403/20190403A031XZ.html'

					},
					{
						id: '16',
						title: '中国海军3艘军舰穿越宫古海峡 日本海自派出战舰跟踪',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: "https://inews.gtimg.com/newsapp_bt/0/8404496657/1000",
						src: 'https://new.qq.com/omn/20190403/20190403A02QU2.html'

					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.newsListContainer .title {
		font-size: 12px;
	}

	.newsListContainer .subTitle {
		font-size: 10px;
		display: flex;
		justify-content: space-between;
		color: #226eff
	}
</style>
