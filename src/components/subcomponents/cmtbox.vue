<template>
	<div class="cmt-container">
		<hr>
		<h3>发表评论</h3>
		<textarea v-model='msg' placeholder="请您BB一下,最多BB200个字"></textarea>
		<mt-button type="primary" size='large' @click='addComment'>提交评论</mt-button>
		<div class='cmt-item' v-for="(item, index) in commentsList" :key='index'>
			<h3 class='author'>匿名用户</h3>
			<div class='content'>{{item}}</div>
		</div>
		<mt-button type="danger" size='large' plain>加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default {
		props: ['id'],
		data() {
			return {
				commentsList: ['这个人很懒，什么都没说', '这个人很懒，什么都没说', '这个人很懒，什么都没说', '这个人很懒，什么都没说', '这个人很懒，什么都没说', '这个人很懒，什么都没说',
					'这个人很懒，什么都没说', '这个人很懒，什么都没说'
				],
				msg: ''
			}
		},
		methods: {
			addComment() {
				if(!this.msg.trim()){
					Toast('评论内容不能为空');
					return;
				}
				console.log(this.msg)
				this.commentsList.unshift(this.msg);
				this.msg = '';
			}
		},
		watch:{
			max : function(newValue){
				goodsList[id].left
			}
		}
	}
</script>

<style scoped="scoped">
	.cmt-container {
		padding: 10px 10px 50px 10px;
	}

	.cmt-container textarea {
		height: 100px;
		font-size: 14px;
	}

	.cmt-container>h3 {
		font-size: 18px;
		color: #226aff;
	}

	.cmt-container .cmt-item {
		padding-left: 5px;
		min-height: 80px;
		width: 90%;
		margin: 5px auto;
		border: 1px solid darkorange;
		box-shadow: 2px 3px 5px goldenrod;
	}

	.cmt-container .cmt-item h3 {
		font-size: 12px;
		color: #226aff;
		line-height: 15px;
	}

	.cmt-container .cmt-item .content {
		font-size: 14px;
		color: #aaa;
	}
</style>
