<template>
	<div class="setting-container">
		<ul>
			<li class="content">
				<p>邀请好友注册 </p>
				<span class="icon">></span>
				</li>
			<li class="split"></li>
			<li class="content">
				<p>转发微信朋友圈</p>
			<span class="icon">></span>
			</li>
			<li class="split"></li>
			<li class="content">
				<p>转发微信好友</p>
			<span class="icon">></span>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	ul{
		height: 1600px;
		padding: 0px;
		list-style: none;
		background-color: #eee;
	}
	ul .content{
		display: flex;
		justify-content: space-between;
		height: 40px;
		background-color: #fff;
		padding: 0 10px;
		font-size: 12px;
	}
	ul .content p{
		line-height: 40px;
	}
	ul .content .icon{
		font-size: 24px;
		line-height: 40px;
		color: #ccc;
		margin-right: 10px;
	}
	ul .split{
		width: 100%;
		background-color: #ddd;
		height: 8px;
	}
	
</style>
