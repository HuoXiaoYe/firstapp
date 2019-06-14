import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
//导入 app 组件
import app from './App.vue';

//导入css样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';


//vue.use
Vue.use(VueRouter);

Vue.use(Vuex);


//导入 router 
import router from './router.js';

//按需导入 mint-ui中的  组件
import {
	Header,
	Swipe,
	SwipeItem,
	Button,
	Switch
} from 'mint-ui';


//将组件注册为全局对象
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);


var obj = JSON.stringify([{
	count: 2,
	id: 0,
	image: "/src/images/goodsImg/1.jpg",
	price: 199,
	selected: true,
	title: "小米蓝牙音响"
}])

var car = JSON.parse(localStorage.getItem('car') || '[]')
console.log(car);
/* localStorage.setItem('car', obj); */
/* var car = JSON.parse(localStorage.getItem('car')); */

/* console.log(car) */

var store = new Vuex.Store({
	state: {
		shopcar: car
	},
	mutations: {
		saveGoods(state, goodsInfo) {
			var flag = true;
			state.shopcar.some(item => {
				/* 如果购物车中有了该商品,则直接更新数量 */
				if (item.id == goodsInfo.id) {
					item.count += goodsInfo.count;
					flag = false;
					return true;
				}
			})
			/* 当购物车中没有此商品，则将信息push到shopcar中 */
			if (flag) {
				state.shopcar.push(goodsInfo);
			}
			localStorage.setItem('car', JSON.stringify(state.shopcar));
			console.log(state.shopcar);
		},
		/* 更新商品的选中信息 */
		updateSelected(state,goodsInfo){
			state.shopcar.some(item=>{
				if(item.id == goodsInfo.id){
					item.selected = goodsInfo.selected;
					return true;
				}
			})
			
			localStorage.setItem('car', JSON.stringify(state.shopcar));
		},
		updateCount(state,goodsInfo){
			state.shopcar.some(item=>{
				if(item.id == goodsInfo.id){
					item.count = goodsInfo.count;
					return true;
				}
			})
			localStorage.setItem('car', JSON.stringify(state.shopcar));
		},
		update(state,id){
			state.shopcar.some((item,index)=>{
				if(item.id == id){
					state.shopcar.splice(index, 1)
					return true;
				}
			})
			localStorage.setItem('car', JSON.stringify(state.shopcar));
		}
	},
	getters: {
		totalCountAndMoney(state) {
			var obj = {
				count: 0,
				money: 0
			}
			state.shopcar.forEach(item => {
				if (item.selected) {
					obj.count += item.count,
						obj.money += item.price * item.count;
				}
			})
			return obj
		},
		totalCount(state) {
			var count = 0;
			state.shopcar.forEach(item => {
				count += item.count;
			})
			return count;
		},
		sendCount(state) {
			var obj = {};
			state.shopcar.forEach(item => {
				obj[item.id] = item.count;
			})
			return obj;
		},
		sendSelected(state) {
			var obj = {};
			state.shopcar.forEach(item => {
				obj[item.id] = item.selected;
			})
			return obj;
		}

	}
})






var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router,
	store
})
