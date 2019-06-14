<template>
		<div class="mui-numbox" data-numbox-min='1'>
			<button class="mui-btn mui-btn-numbox-minus" ref = 'btn' type="button">-</button>
			<input id="test" class="mui-input-numbox" ref='number' @change='show(id)' type="number" :value="count"/>
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
</template>

<script>
	import mui from  '../../lib/mui/js/mui.min.js';
	export default {
		mounted(){
			mui('.mui-numbox').numbox(); 
		},
		methods:{
			show(id){
				var obj = {
					id, 
					count : parseInt(this.$refs.number.value)
				};
				this.$store.commit('updateCount',obj)
			}
		},
		props:['count','id']
	}
</script>

<style>
</style>
