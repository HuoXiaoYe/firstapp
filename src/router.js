import VueRouter from 'vue-router';
import home from './components/bottomBar/home.vue';
import member from './components/bottomBar/member.vue';
import shopcar from './components/bottomBar/shopcar.vue';
import setting from './components/bottomBar/setting.vue';

import newsList from './components/news/newsList.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodsList.vue';
import goodsinfo from './components/goods/goodsinfo.vue';



var router = new VueRouter({
	routes : [
		{path : '/', redirect : '/home'},
		{path : '/home',component : home},
		{path : '/member',component : member},
		{path : '/shopcar',component : shopcar},
		{path : '/setting',component : setting},
		{path : '/home/news',component : newsList},
		{path : '/home/newsinfo/:id',component : newsinfo},
		{path : '/home/photos',component : photolist},
		{path : '/home/photoinfo/:id',component : photoinfo},
		{path : '/home/goods',component : goodslist},
		{path : '/home/goodsinfo/:id', component : goodsinfo, name : "goodsinfo"}
		
	],
	linkActiveClass : 'mui-active'
});
export default router;