<template>
	<div class="photoinfo-container">
		<img :src="'/src/images/photolist/'+id+'.jpg'" alt="">
		<h1 :class='this.$route.params.id'>haah</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id : parseInt(this.$route.params.id)+1
			}
		},
		
	}
</script>

<style>
	.photoinfo-container{
		
	}
	.photoinfo-container img{
		width: 100%;
	}
</style>
