<!-- 这是首页 -->
<template>
	<div class="index">
		<div class="topBg por">
			<loginBox></loginBox>
		</div>
		<div class="w conduct">

			<p class="tac mtb80">
				<img src="../assets/img/index/title-a.png" alt="tita">
			</p>
			<div class="tac mb100">
				<img src="../assets/img/index/viedio.png" alt="video">
			</div>
		</div>
		<div class="w conduct">

			<p class="tac mtb80">
				<img src="../assets/img/index/title-b.png" alt="titb">
			</p>
			<div class="tac mb100">
				<img src="../assets/img/index/pica.png" alt="pica">
			</div>
		</div>
		<div class="feature">
			<div class="w conduct">

				<p class="tac ">
					<img src="../assets/img/index/title-c.png" alt="titc">
				</p>
				<el-row class="featureBox" >
					<ul>
						<li v-for="(item,index) of specialCourse" :key="index" class="featureItem">
							<router-link :to="{path:'/specialCourse',query:{id:item.id}}">
							<img :src="item.url" alt="s">
						</router-link>
						</li>
					</ul>
					
				</el-row>
			</div>
		</div>
		<div class="w conduct">

			<p class="tac mtb80">
				<img src="../assets/img/index/title-d.png" alt="titd" width="100%">
			</p>
			<div class="tac mb100">
				<img src="../assets/img/index/xpic.png" alt="xpic">
				<!-- <img src="../assets/img/index/xpid.png" alt="xpid" v-else> -->
			</div>

		</div>
		<div class="indexList mb100">
			<div class="listBox w">
				<div class="listPart">
					<list-star :list='monthList'></list-star>
				</div>
				<div class="listPart">
					<list-star :list='weekList'></list-star>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import listStar from '@/components/list/listStar.vue';
import loginBox from '@/components/box/loginBox.vue';

export default {
	name: 'index',
	data() {
		return {
			specialCourse: [
				{
					id: 10,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=343803269,923751139&fm=27&gp=0.jpg',
				},
				{
					id: 10,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=343803269,923751139&fm=27&gp=0.jpg',
				},
				{
					id: 102,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=343803269,923751139&fm=27&gp=0.jpg',
				},
				{
					id: 110,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=343803269,923751139&fm=27&gp=0.jpg',
				},
			],
			monthList: [
				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},
			],
			weekList: [
				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},

				{
					tit: '888',
					name: '88885',
					avatarImg: '5555',
					zan: 555,
				},
			],
			// active: 1,
		};
	},

	components: {
		// hello,
		listStar,
		loginBox,
	},


	methods: {
		// changeActive(active) {
		// 	this.active = active;
		// 	console.log(this.active);
		// },
	},
};
</script>
<style lang='less' scoped>
.topBg {
	height: 660px;
	background: url(../assets/img/index/topBg.png) no-repeat center;
	background-size: 100% 100%;
}
.feature {
	height: 825px;
	background: url(../assets/img/index/feature.png) no-repeat center;
	background-size: 100% 100%;
	& > .conduct {
		padding-top: 100px;
	}
	.featureBox {
		padding: 110px 0;
		overflow: hidden;
		ul{
			width: 200%;
			li{
				margin-right: 112px;
			}
		}
		.featureItem {
			width: 325px;
			height: 445px;
			background: #e8e8e8;
			float: left;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
}
.indexList {
	height: 700px;
	background: url(../assets/img/index/list.png) no-repeat center;
	background-size: 100% 100%;
	.listBox {
		display: flex;

		width: 60%;
		padding-top: 200px;
		.listPart {
			flex: 1;
		}
	}
}
</style>