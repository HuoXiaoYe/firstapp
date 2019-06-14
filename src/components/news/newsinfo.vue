<template>
	<div class='newsinfo-container'>
		<h3>{{newsLIst[id].title}}</h3>
		<p><span>发表时间：{{newsLIst[id].ctime}}</span><span>点击次数：{{newsLIst[id].click}}次</span></p>
		<img :src="newsLIst[id].image" width="180" alt="">
		<hr>
		<div><a :href="newsLIst[id].src">链接地址</a></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				id : (this.$route.params.id - 1),
				newsLIst: [{
						id: '1',
						title: '党的十八大以来全国民政事业发展成就综述',
						ctime: '2019/04/02 06:49',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/cmsid/20190402A01ONA00'
					},
					{
						id: '2',
						title: '祭奠英烈，我们从未忘记',
						ctime: '2019/04/02 16:09',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/cmsid/20190402B0E12L00'
				
					},
					{
						id: '3',
						title: '【爱国情 奋斗者】朱继洲：赤子心 西迁情',
						ctime: '2019/04/02 21:25',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/news/20190402008973/NEW2019040200897300'
					},
					{
						id: '4',
						title: '赵立新就日军侵华不毁故宫等不当言论致歉：希望大家原谅我包容我',
						ctime: '2019/04/03 00:07',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401432583/1000',
						src: 'https://xw.qq.com/cmsid/ENT2019040300000300'
				
					},
					{
						id: '5',
						title: '暴利坟地产：一块墓地能卖百万 毛利率近90%超房企2倍多',
						ctime: '2019/04/03 00:06',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_ls/0/8404125837_294195/0',
						src: 'https://xw.qq.com/cmsid/20190403A00CLJ00',
						
				
					},
					{
						id: '6',
						title: '河南“文明城市”被低俗医疗广告充斥 当地政府回应：管不了！',
						ctime: '2019/04/03 09:36',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8404211289/1000',
						src: 'https://xw.qq.com/cmsid/TWF2019040300094700'
				
					},
					{
						id: '7',
						title: '大量想移民美国的中国人被她坑惨 FBI已发出通缉令',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401477175/1000',
						src: 'https://xw.qq.com/cmsid/20190403A031XZ00'
				
					},
					{
						id: '8',
						title: '中国海军3艘军舰穿越宫古海峡 日本海自派出战舰跟踪',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: "https://inews.gtimg.com/newsapp_bt/0/8404496657/1000",
						src: 'https://xw.qq.com/cmsid/20190403A02QU200'
				
					},
					{
						id: '9',
						title: '党的十八大以来全国民政事业发展成就综述',
						ctime: '2019/04/02 06:49',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/cmsid/20190402A01ONA00'
					},
					{
						id: '10',
						title: '祭奠英烈，我们从未忘记',
						ctime: '2019/04/02 16:09',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/cmsid/20190402B0E12L00'
				
					},
					{
						id: '11',
						title: '【爱国情 奋斗者】朱继洲：赤子心 西迁情',
						ctime: '2019/04/02 21:25',
						click: '0',
						image :'https://inews.gtimg.com/newsapp_bt/0/8402719870/1000',
						src: 'https://xw.qq.com/news/20190402008973/NEW2019040200897300'
					},
					{
						id: '12',
						title: '赵立新就日军侵华不毁故宫等不当言论致歉：希望大家原谅我包容我',
						ctime: '2019/04/03 00:07',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401432583/1000',
						src: 'https://xw.qq.com/cmsid/ENT2019040300000300'
				
					},
					{
						id: '13',
						title: '暴利坟地产：一块墓地能卖百万 毛利率近90%超房企2倍多',
						ctime: '2019/04/03 00:06',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_ls/0/8404125837_294195/0',
						src: 'https://xw.qq.com/cmsid/20190403A00CLJ00'
				
					},
					{
						id: '14',
						title: '河南“文明城市”被低俗医疗广告充斥 当地政府回应：管不了！',
						ctime: '2019/04/03 09:36',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8404211289/1000',
						src: 'https://xw.qq.com/cmsid/TWF2019040300094700'
				
					},
					{
						id: '15',
						title: '大量想移民美国的中国人被她坑惨 FBI已发出通缉令',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: 'https://inews.gtimg.com/newsapp_bt/0/8401477175/1000',
						src: 'https://xw.qq.com/cmsid/20190403A031XZ00'
				
					},
					{
						id: '16',
						title: '中国海军3艘军舰穿越宫古海峡 日本海自派出战舰跟踪',
						ctime: '2019/04/02 06:49',
						click: '0',
						image: "https://inews.gtimg.com/newsapp_bt/0/8404496657/1000",
						src: 'https://xw.qq.com/cmsid/20190403A02QU200'
				
					}
				]
			}
		}
	}
</script>
	
<style>
	.newsinfo-container{
		margin: 5px 10px;
		/* background-color: #ccc; */
	}
	.newsinfo-container h3{
		font-size: 16px;
		text-align: center;
	}
	.newsinfo-container p{
		font-size: 12px;
		color: #226EFF;
		display: flex;
		justify-content: space-between;
	}
</style>
