<template>
		<div class="mui-numbox" data-numbox-min='1'>
			<button class="mui-btn mui-btn-numbox-minus" ref = 'btn' type="button">-</button>
			<input id="test" class="mui-input-numbox" @change='sendCount' type="number" value="1" />
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
</template>

<script>
	import mui from  '../../lib/mui/js/mui.min.js';
	export default {
		/* 最早操作dom中的元素 应在 mounted 生命周期函数中 */
		mounted(){
			mui('.mui-numbox').numbox(); 
			mui('.mui-numbox').numbox().setOption('max',this.max);
		},
		props:['max'],
		/* 霍小叶认为，没有触发wanch是因为，max的值没有改变 */
		/* watch:{
			max : function(newValue){
				mui('.mui-numbox').numbox().setOption('max',this.max);
				console.log(this.max);
			}
		} */
		methods:{
			correct(){
				/* console.log(this.max); */
			},
			sendCount(){
				/* var count = mui('.mui-numbox').numbox().getValue() */
				//console.log(count)
				/* var count = this.$refs.numbox.value; */
				
				
				var count = mui('.mui-numbox').numbox().getValue()
				this.$emit('getCount',count);
			}
			
		}
	}
</script>

<style>
</style>
