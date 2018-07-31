<!-- 代理商侧边导航 -->
<template>
	<div class='agentAsideNav'>
		<div class="navItem hover border-bottom-grey" v-for="(item, index) in navList" :key="index" @click="changetag(index)">
			<router-link :to="{path:item.path}">
				<div class="sign " :class="active==index?'active':''">
					<div class=" icon iconfont r10" :class="item.icon"></div>
				</div>
				<p>{{item.title}}</p>
			</router-link>
		</div>

	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'agentAsideNav',
	data() {
		return {
			active: 0,
			navList: [
				{
					icon: 'icon-home-copy',
					title: '首页',
					path: '/agent',
				},
				{
					icon: 'icon-user',
					title: '教师管理',
					path: '/agent/teaManagement',
				},
				{
					icon: 'icon-course-copy',
					title: '在线购课',
					path: '/agent/onlineShopping',
				},
				{
					icon: 'icon-order',
					title: '订单管理',
					path: '/agent/orderManagement',
				},
				{
					icon: 'icon-distribution',
					title: '课程分配',
					path: '/agent/courseAllot',
				},
			],
		};
	},

	components: {},

	computed: {},

	methods: {
		changetag(i) {
			console.log(i);

			this.active = i;
		},
	},
};
</script>
<style lang='less' scoped>
.navItem {
	padding: 20px 0;

	p {
		text-align: center;
		font-size: 14px;
		padding: 10px 0;
	}
	&:hover{
		background: #eee;
	}
}
.sign {
	// height: 55px;
	.icon {
		height: 55px;
		line-height: 55px;
		width: 55px;
		text-align: center;
		font-size: 36px;

		background: #fff;
		color: #5499fe;
		margin: 0 auto;
	}
}
.active {
	border-right: 4px solid #5499fe;
	.icon {
		background: #5499fe;
		color: #fff;
		border-radius: 10px;
		box-shadow: 7px 0px 10px rgba(84, 153, 254, 0.3);
	}
}
</style>